import fs from "fs";
import path from "path";

const filesToUpdate = [
  "src/data/constants.ts",
  "src/components/sections/HeroSection.tsx",
  "src/components/sections/WhyUsSection.tsx",
  "src/components/sections/Navbar.tsx",
  "src/components/sections/Footer.tsx",
  "index.html"
];

for (const relPath of filesToUpdate) {
  const filePath = path.join(process.cwd(), relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf-8");
    // Replace .jpg and .png specifically inside standard quote structures for paths
    content = content.replace(/\.png/g, ".webp");
    content = content.replace(/\.jpg/g, ".webp");
    content = content.replace(/\.jpeg/g, ".webp");
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated paths in ${relPath}`);
  }
}
