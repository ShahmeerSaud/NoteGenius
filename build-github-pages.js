#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Building portfolio for GitHub Pages...');

// Build the project
console.log('📦 Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Clean and create docs directory
console.log('📁 Setting up docs directory...');
if (fs.existsSync('docs')) {
  fs.rmSync('docs', { recursive: true });
}
fs.mkdirSync('docs');

// Copy built files
console.log('📄 Copying built files...');
const sourceDir = 'dist/public';
const targetDir = 'docs';

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

copyRecursive(sourceDir, targetDir);

// Fix paths in index.html for GitHub Pages
console.log('🔧 Fixing asset paths for GitHub Pages...');
const indexPath = path.join(targetDir, 'index.html');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Convert absolute paths to relative paths
htmlContent = htmlContent.replace(/src="\/assets\//g, 'src="./assets/');
htmlContent = htmlContent.replace(/href="\/assets\//g, 'href="./assets/');

// Remove Replit development banner
htmlContent = htmlContent.replace(/\s*<!-- This is a replit script.*?\n.*?<script.*?replit-dev-banner\.js"><\/script>/s, '');

fs.writeFileSync(indexPath, htmlContent);

console.log('✅ GitHub Pages build complete!');
console.log('📂 Static files are ready in the /docs directory');
console.log('🌐 Configure GitHub Pages to serve from /docs directory');