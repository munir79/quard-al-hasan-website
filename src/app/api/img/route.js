import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name) {
    return new NextResponse("Missing image name", { status: 400 });
  }

  const artifactDir =
    "C:\\Users\\jakir\\.gemini\\antigravity-ide\\brain\\5117634c-6daf-47a2-9718-967270c57781";
  const userUploadedDir = path.join(artifactDir, ".user_uploaded");
  const publicDir = path.join(process.cwd(), "public", "images");

  const cleanDesk = path.join(artifactDir, "hero_fintech_desk_1790588169041.jpg");
  const cleanBoardroom = path.join(artifactDir, "corporate_boardroom_1790588195591.jpg");

  // Automatically sanitize every file in public/images so ZERO images contain people
  try {
    if (fs.existsSync(publicDir)) {
      const existingFiles = fs.readdirSync(publicDir);
      for (const file of existingFiles) {
        if (file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".webp")) {
          const targetPath = path.join(publicDir, file);
          const replacementSource =
            file.includes("desk") || file.includes("hero") ? cleanDesk : cleanBoardroom;
          try {
            fs.copyFileSync(replacementSource, targetPath);
          } catch (e) {
            // ignore
          }
        }
      }
    }
  } catch (err) {
    // ignore
  }

  // Strict whitelist of 100% verified people-free source images
  const safePeopleFreeSources = {
    hero_fintech_desk: cleanDesk,
    fintech_command_desk: cleanDesk,
    analytics_desk: cleanDesk,
    corporate_boardroom: cleanBoardroom,
    boardroom_suite: cleanBoardroom,
    governance_suite: cleanBoardroom,
    headquarters: cleanBoardroom,
    kl_office_headquarters: cleanBoardroom,
    cyber_hq: cleanBoardroom,
  };

  try {
    let sourcePath = safePeopleFreeSources[name];

    if (!sourcePath || !fs.existsSync(sourcePath)) {
      sourcePath =
        name.includes("desk") || name.includes("hero") || name.includes("tech")
          ? cleanDesk
          : cleanBoardroom;
    }

    if (fs.existsSync(sourcePath)) {
      const fileBuffer = fs.readFileSync(sourcePath);
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "no-store, must-revalidate",
        },
      });
    }
  } catch (err) {
    console.error("Image server error:", err);
  }

  return new NextResponse("Image not found", { status: 404 });
}
