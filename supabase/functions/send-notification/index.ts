
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ResumeDownloadData {
  user_agent: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data } = await req.json();
    let emailSubject = "";
    let emailHtml = "";
    
    // Different templates based on the notification type
    if (type === "contact_form") {
      const contactData = data as ContactFormData;
      emailSubject = `New Contact Form Submission from ${contactData.name}`;
      emailHtml = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
      `;
    } else if (type === "resume_download") {
      const downloadData = data as ResumeDownloadData;
      emailSubject = "Someone Downloaded Your Resume";
      emailHtml = `
        <h1>Resume Download Notification</h1>
        <p>Someone just downloaded your resume.</p>
        <p><strong>User Agent:</strong> ${downloadData.user_agent}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `;
    } else {
      throw new Error("Invalid notification type");
    }

    console.log("Preparing to send email with subject:", emailSubject);
    console.log("Using RESEND_API_KEY:", Deno.env.get("RESEND_API_KEY") ? "API key exists" : "API key missing");
    
    const emailResponse = await resend.emails.send({
      from: "George Portfolio <onboarding@resend.dev>",
      to: ["georgeputhean@yahoo.com"], // Your email address
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", JSON.stringify(emailResponse));

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
