const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('Setting up for GitHub Pages deployment...');

// Create directories if they don't exist
const dirs = ['public/fonts'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`Creating directory: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Download fonts if they don't exist
const fonts = [
  {
    url: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    path: 'public/fonts/inter.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/robotomono/v22/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4AJi8Rcp.woff2',
    path: 'public/fonts/roboto-mono.woff2'
  }
];

// Create the .nojekyll file
const nojekyllPath = '.nojekyll';
if (!fs.existsSync(nojekyllPath)) {
  console.log('Creating .nojekyll file');
  fs.writeFileSync(nojekyllPath, '');
}

// Download fonts
fonts.forEach(font => {
  if (!fs.existsSync(font.path)) {
    console.log(`Downloading font: ${font.path}`);
    const file = fs.createWriteStream(font.path);
    https.get(font.url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${font.path}`);
      });
    }).on('error', err => {
      fs.unlink(font.path);
      console.error(`Error downloading font: ${err.message}`);
    });
  } else {
    console.log(`Font already exists: ${font.path}`);
  }
});

console.log('Setup complete!'); 