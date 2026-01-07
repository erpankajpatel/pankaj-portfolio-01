#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images for the portfolio website using sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, width, height, quality = 85, format = 'webp') {
  try {
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${inputPath} - file not found`);
      return;
    }

    let sharpInstance = sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF orientation
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      });

    if (format === 'webp') {
      sharpInstance = sharpInstance.webp({ quality });
    } else if (format === 'jpg' || format === 'jpeg') {
      sharpInstance = sharpInstance.jpeg({ quality, mozjpeg: true });
    }

    await sharpInstance.toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);

    console.log(`✅ Optimized: ${path.basename(outputPath)}`);
    console.log(`   ${(inputStats.size / 1024).toFixed(1)} KB → ${(outputStats.size / 1024).toFixed(1)} KB (${savings}% reduction)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  // Optimize main photo - first create optimized JPG, then WebP
  const photoPath = path.join(__dirname, 'public', 'pranay-photo.jpg');
  const photoWebp = path.join(__dirname, 'public', 'pranay-photo.webp');
  
  // Create a temporary optimized JPG, then replace original
  const tempPhotoPath = path.join(__dirname, 'public', 'pranay-photo-optimized.jpg');
  
  console.log('Optimizing profile photo (JPG)...');
  await optimizeImage(photoPath, tempPhotoPath, 1200, 1200, 90, 'jpg');
  
  // Replace original with optimized version if optimization was successful
  if (fs.existsSync(tempPhotoPath)) {
    const originalStats = fs.statSync(photoPath);
    const optimizedStats = fs.statSync(tempPhotoPath);
    if (optimizedStats.size < originalStats.size) {
      fs.renameSync(tempPhotoPath, photoPath);
      console.log('✅ Replaced original with optimized JPG\n');
    } else {
      fs.unlinkSync(tempPhotoPath);
      console.log('⚠️  Original is already optimized, keeping original\n');
    }
  }
  
  // Create WebP version for better performance
  console.log('Creating WebP version...');
  await optimizeImage(photoPath, photoWebp, 1200, 1200, 85, 'webp');
  console.log('');

  // Optimize project images (displayed at 378x378)
  const projectsDir = path.join(__dirname, 'public', 'images', 'projects');
  if (fs.existsSync(projectsDir)) {
    const projectImages = fs.readdirSync(projectsDir).filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    for (const image of projectImages) {
      const inputPath = path.join(projectsDir, image);
      const outputPath = path.join(projectsDir, image.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      await optimizeImage(inputPath, outputPath, 378, 378, 85);
    }
  }

  // Optimize experience images
  const experienceDir = path.join(__dirname, 'public', 'images', 'experience');
  if (fs.existsSync(experienceDir)) {
    const expImages = fs.readdirSync(experienceDir).filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    for (const image of expImages) {
      const inputPath = path.join(experienceDir, image);
      const outputPath = path.join(experienceDir, image.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      await optimizeImage(inputPath, outputPath, 400, 400, 85);
    }
  }

  console.log('\n✨ Image optimization complete!');
  console.log('\nNote: Update your code to use .webp versions with <picture> tags for best results.');
}

main().catch(console.error);
