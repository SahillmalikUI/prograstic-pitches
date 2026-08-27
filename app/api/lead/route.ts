import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, clinicName, phone, email, vertical, verticalName, selectedFeatures, timeline } = data;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required fields." },
        { status: 400 }
      );
    }

    // In production, forward to your CRM Webhook (Slack, Discord, HubSpot, WhatsApp Cloud API, etc.)
    console.log("=== NEW CLINICAL LEAD RECEIVED ===");
    console.log("Name:", name);
    console.log("Clinic / Center:", clinicName);
    console.log("Contact:", phone, email);
    console.log("Vertical:", verticalName, `(${vertical})`);
    console.log("Requested Modules:", selectedFeatures);
    console.log("Timeline:", timeline);
    console.log("===================================");

    return NextResponse.json(
      {
        success: true,
        message: "Architecture scope request logged successfully.",
        leadId: `LEAD-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { error: "Internal server error processing lead." },
      { status: 500 }
    );
  }
}
