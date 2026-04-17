import fs from 'fs/promises';
import path from 'path';

const STATES = [
  { slug: 'california', label: 'California' },
  { slug: 'florida', label: 'Florida' },
  { slug: 'texas', label: 'Texas' },
  { slug: 'new-york', label: 'New York' },
  { slug: 'pennsylvania', label: 'Pennsylvania' },
  { slug: 'illinois', label: 'Illinois' },
  { slug: 'ohio', label: 'Ohio' },
  { slug: 'georgia', label: 'Georgia' },
  { slug: 'north-carolina', label: 'North Carolina' },
  { slug: 'michigan', label: 'Michigan' },
  { slug: 'new-jersey', label: 'New Jersey' },
  { slug: 'virginia', label: 'Virginia' },
];

const generatePrompt = (stateLabel, domain) => {
  const context = domain === 'auto'
    ? 'Minimal, realistic insurance-related elements: auto insurance claim documents, subtle vehicle and road context.'
    : 'Minimal, realistic insurance-related elements: health insurance claim papers, subtle medical symbol and hospital context.';

  return `A stylish poster [16:9] aspect ratio featuring a miniature 3D model of ${stateLabel}, showcasing its most recognizable landmarks and geographic identity, bursting through a torn, horizontally laid-out physical world map (focused on the United States), seamlessly integrated into the design. ${context} A subtle 'denied' stamp effect (light, not dominant). These elements must feel natural and not overpower the main visual. Dynamic camera angle and dramatic perspective for depth. Natural yet vibrant colors. Studio lighting for sharp, high-detail contrast, set against a clean, minimal background. DSLR photograph style, crisp, high-resolution, merging realism with subtle artistic flair. NO 3D text. NO embedded text. NO letters or words inside the image.`;
};

const outputDir = path.join(process.cwd(), 'public', 'images', 'states');

async function downloadImage(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(dest, buffer);
    console.log(`Saved: ${dest}`);
  } catch (err) {
    console.error(`Error downloading ${dest}:`, err.message);
  }
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  for (const state of STATES) {
    for (const domain of ['auto', 'health']) {
      const filename = `${state.slug}-${domain}.jpg`;
      const dest = path.join(outputDir, filename);

      // Skip if exists
      try {
        await fs.access(dest);
        console.log(`Skipping existing: ${filename}`);
        continue;
      } catch (e) {
        // File doesn't exist, proceed
      }

      const prompt = generatePrompt(state.label, domain);
      const url = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_16_9`;

      console.log(`Generating ${filename}...`);
      await downloadImage(url, dest);

      // Add a small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log('Bulk generation complete.');
}

main();
