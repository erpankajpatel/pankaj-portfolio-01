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
      .rotate() // Auto-rotate based on EXIF orientation
      .resize(width, height, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality, effort: 6 })
      .toFile(outputPath);

    const inputStats = fs.existsSync(inputPath) ? fs.statSync(inputPath) : null;
    const outputStats = fs.existsSync(outputPath)
      ? fs.statSync(outputPath)
      : null;

    if (inputStats && outputStats) {
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
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeProfileImage(inputPath) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Profile image not found at ${inputPath}`);
      return;
    }

    console.log("📸 Optimizing profile image...\n");

    // Optimize the original JPG for web (max 1200px, good quality)
    const originalInputStats = fs.statSync(inputPath);
    if (originalInputStats.size > 500000) {
      // If larger than 500KB, optimize it
      const optimizedJpg = path.join(
        __dirname,
        "public",
        "Pankaj-photo-optimized.jpg"
      );
      await sharp(inputPath)
        .rotate()
        .resize(1200, 1200, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .jpeg({ quality: 85, mozjpeg: true, progressive: true })
        .toFile(optimizedJpg);

      // Replace original with optimized version
      fs.copyFileSync(optimizedJpg, inputPath);
      fs.unlinkSync(optimizedJpg);

      const optimizedStats = fs.statSync(inputPath);
      const reduction = (
        ((originalInputStats.size - optimizedStats.size) /
          originalInputStats.size) *
        100
      ).toFixed(1);
      console.log(
        `✅ Optimized original JPG: ${(
          originalInputStats.size /
          1024 /
          1024
        ).toFixed(2)} MB → ${(optimizedStats.size / 1024 / 1024).toFixed(
          2
        )} MB (${reduction}% reduction)`
      );
    }

    // Create WebP version (800x800 for display)
    const photoWebp = path.join(__dirname, "public", "Pankaj-photo.webp");
    await optimizeImage(inputPath, photoWebp, 800, 800, 90);

    // Create social media optimized version (1200x630 for Open Graph/Twitter)
    const socialPath = path.join(__dirname, "public", "Pankaj-photo-og.jpg");
    await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF orientation
      .resize(1200, 630, {
        fit: "cover",
        position: "center",
      })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(socialPath);

    const inputStats = fs.statSync(inputPath);
    const socialStats = fs.statSync(socialPath);
    console.log(`✅ Created social media version: Pankaj-photo-og.jpg`);
    console.log(
      `   ${(inputStats.size / 1024).toFixed(1)} KB → ${(
        socialStats.size / 1024
      ).toFixed(1)} KB\n`
    );
  } catch (error) {
    console.error(`❌ Error optimizing profile image:`, error.message);
  }
}

async function main() {
  console.log("🖼️  Starting image optimization...\n");

  // Optimize main photo with multiple versions
  const photoPath = path.join(__dirname, "public", "Pankaj-photo.jpg");
  await optimizeProfileImage(photoPath);

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
