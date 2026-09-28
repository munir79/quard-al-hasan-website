import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const sourcePath =
    "C:\\Users\\jakir\\.gemini\\antigravity-ide\\brain\\5117634c-6daf-47a2-9718-967270c57781\\hero_fintech_desk_1790588169041.jpg";
  const publicDest = path.join(process.cwd(), "public", "images", "hero_fintech_desk.jpg");

  try {
    if (fs.existsSync(sourcePath)) {
      try {
        if (!fs.existsSync(publicDest)) {
          fs.copyFileSync(sourcePath, publicDest);
        }
      } catch (err) {
        // Continue if copy fails
      }
      const fileBuffer = fs.readFileSync(sourcePath);
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  } catch (e) {
    console.error("Error reading hero image:", e);
  }
  return new NextResponse("Image not found", { status: 404 });
}
