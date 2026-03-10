#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const skillSource = path.join(__dirname, 'skill');
const skillDest = path.join(
  process.env.USERPROFILE || process.env.HOME,
  '.agents',
  'skills',
  'agile-design-doc',
);

// 创建目标目录
if (!fs.existsSync(skillDest)) {
  fs.mkdirSync(skillDest, { recursive: true });
}

// 复制SKILL.md和references
const skillFile = path.join(skillSource, 'SKILL.md');
const referencesDir = path.join(skillSource, 'references');
const destReferencesDir = path.join(skillDest, 'references');

if (fs.existsSync(skillFile)) {
  fs.copyFileSync(skillFile, path.join(skillDest, 'SKILL.md'));

  // 复制references目录
  if (fs.existsSync(referencesDir)) {
    if (!fs.existsSync(destReferencesDir)) {
      fs.mkdirSync(destReferencesDir, { recursive: true });
    }
    const files = fs.readdirSync(referencesDir);
    files.forEach((file) => {
      fs.copyFileSync(
        path.join(referencesDir, file),
        path.join(destReferencesDir, file),
      );
    });
  }

  console.log('✓ agile-design-doc skill installed successfully!');
  console.log(`  Location: ${skillDest}`);
} else {
  console.error('✗ SKILL.md not found in package');
  process.exit(1);
}
