const fs = require('fs');
const path = require('path');

function searchFiles(dir, query) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      searchFiles(fullPath, query);
    } else if (stat.isFile() && file.toLowerCase().includes(query)) {
      console.log(`Found: ${fullPath}`);
    }
  }
}

searchFiles(__dirname, 'middleware');
