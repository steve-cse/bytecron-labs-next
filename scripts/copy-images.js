const fs = require('node:fs');
const path = require('node:path');

const sourceDir = path.join(process.cwd(), 'content', 'images');
const targetDir = path.join(process.cwd(), 'public', 'content', 'images');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log('✓ Created public/content/images directory');
}

// Copy all files from source to target
if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // Only copy files, not directories
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✓ Copied ${file}`);
    }
  });

  console.log(`\n✓ Successfully copied ${files.length} image(s) to public/content/images`);
} else {
  console.warn('Warning: content/images directory does not exist');
}
