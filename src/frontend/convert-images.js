import fs from "fs";
import path from "path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public", "assets");

async function convert() {
  const files = fs.readdirSync(DIR);

  for (const file of files) {
    if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const inputPath = path.join(DIR, file);
      const outputPath = path.join(DIR, `${base}.webp`);

      console.log(`Converting ${file} -> ${base}.webp`);
      
      try {
        await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
        fs.unlinkSync(inputPath);
        console.log(`✅ Converted and deleted original: ${file}`);
      } catch (err) {
        console.error(`❌ Failed to convert ${file}:`, err);
      }
    }
  }

  console.log("Image conversion complete.");
}

convert();
