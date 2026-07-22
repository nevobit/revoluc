import { NextResponse } from "next/server";

const requiredFields = [
  "fullName",
  "workEmail",
  "companyOrProject",
  "country",
  "reason",
  "message",
  "privacyConsent",
];

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const record = payload as Record<string, unknown>;

  if (typeof record.website === "string" && record.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const missingField = requiredFields.find((field) => {
    const value = record[field];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingField) {
    return NextResponse.json({ ok: false, error: `Missing ${missingField}` }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    tag: record.reason,
  });
}
