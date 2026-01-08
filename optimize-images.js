#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images for the portfolio website using sharp
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimizeImage(
  inputPath,
  outputPath,
  width,
  height,
  quality = 85
) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${inputPath} - file not found`);
      return;
    }

    await sharp(inputPath)
      .resize(width, height, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality })
      .toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = (
      ((inputStats.size - outputStats.size) / inputStats.size) *
      100
    ).toFixed(1);

    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    console.log(
      `   ${(inputStats.size / 1024).toFixed(1)} KB → ${(
        outputStats.size / 1024
      ).toFixed(1)} KB (${savings}% reduction)`
    );
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log("🖼️  Starting image optimization...\n");

  // Optimize main photo (displayed at 378x504, but we'll create 800x800 for better quality)
  const photoPath = path.join(__dirname, "public", "Pankaj-photo.jpg");
  const photoWebp = path.join(__dirname, "public", "Pankaj-photo.webp");
  await optimizeImage(photoPath, photoWebp, 800, 800, 85);

  // Optimize project images (displayed at 378x378)
  const projectsDir = path.join(__dirname, "public", "images", "projects");
  if (fs.existsSync(projectsDir)) {
    const projectImages = fs
      .readdirSync(projectsDir)
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const image of projectImages) {
      const inputPath = path.join(projectsDir, image);
      const outputPath = path.join(
        projectsDir,
        image.replace(/\.(jpg|jpeg|png)$/i, ".webp")
      );
      await optimizeImage(inputPath, outputPath, 378, 378, 85);
    }
  }

  // Optimize experience images
  const experienceDir = path.join(__dirname, "public", "images", "experience");
  if (fs.existsSync(experienceDir)) {
    const expImages = fs
      .readdirSync(experienceDir)
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const image of expImages) {
      const inputPath = path.join(experienceDir, image);
      const outputPath = path.join(
        experienceDir,
        image.replace(/\.(jpg|jpeg|png)$/i, ".webp")
      );
      await optimizeImage(inputPath, outputPath, 400, 400, 85);
    }
  }

  console.log("\n✨ Image optimization complete!");
  console.log(
    "\nNote: Update your code to use .webp versions with <picture> tags for best results."
  );
}

main().catch(console.error);
