import fs from 'fs/promises';
import path from 'path';

const STATES = [
  { slug: 'california', label: 'California', pascal: 'California' },
  { slug: 'florida', label: 'Florida', pascal: 'Florida' },
  { slug: 'texas', label: 'Texas', pascal: 'Texas' },
  { slug: 'new-york', label: 'New York', pascal: 'NewYork' },
  { slug: 'pennsylvania', label: 'Pennsylvania', pascal: 'Pennsylvania' },
  { slug: 'illinois', label: 'Illinois', pascal: 'Illinois' },
  { slug: 'ohio', label: 'Ohio', pascal: 'Ohio' },
  { slug: 'georgia', label: 'Georgia', pascal: 'Georgia' },
  { slug: 'north-carolina', label: 'North Carolina', pascal: 'NorthCarolina' },
  { slug: 'michigan', label: 'Michigan', pascal: 'Michigan' },
  { slug: 'new-jersey', label: 'New Jersey', pascal: 'NewJersey' },
  { slug: 'virginia', label: 'Virginia', pascal: 'Virginia' },
];

const generatePrompt = (stateLabel, domain) => {
  const context = domain === 'Auto'
    ? 'Minimal, realistic insurance-related elements: auto insurance claim documents, subtle vehicle and road context.'
    : 'Minimal, realistic insurance-related elements: health insurance claim papers, subtle medical symbol and hospital context.';

  return `A stylish poster [16:9] aspect ratio featuring a miniature 3D model of ${stateLabel}, showcasing its most recognizable landmarks and geographic identity, bursting through a torn, horizontally laid-out physical world map (focused on the United States), seamlessly integrated into the design. ${context} A subtle 'denied' stamp effect (light, not dominant). These elements must feel natural and not overpower the main visual. Dynamic camera angle and dramatic perspective for depth. Natural yet vibrant colors. Studio lighting for sharp, high-detail contrast, set against a clean, minimal background. DSLR photograph style, crisp, high-resolution, merging realism with subtle artistic flair. NO 3D text. NO embedded text. NO letters or words inside the image.`;
};

async function updateFiles() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');

  for (const state of STATES) {
    for (const domain of ['Auto', 'Health']) {
      const fileName = `${domain}ClaimDenied${state.pascal}.jsx`;
      const filePath = path.join(pagesDir, fileName);

      try {
        let content = await fs.readFile(filePath, 'utf8');

        const domainSlug = domain.toLowerCase();
        const altText = `${domain} Insurance Claims Denied in ${state.label}`;
        
        const prompt = generatePrompt(state.label, domain);
        const imageUrl = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=\${encodeURIComponent(\`${prompt}\`)}&image_size=landscape_16_9`;

        const newImageHtml = `
        <div className="state-hero-image-wrapper">
          <img
            src={\`${imageUrl}\`}
            alt="${altText}"
            className="state-hero-image"
          />
        </div>`;

        // We already injected the old wrapper. We can just replace the old div block.
        const wrapperRegex = /<div className="state-hero-image-wrapper">[\s\S]*?<\/div>/i;
        
        if (wrapperRegex.test(content)) {
          content = content.replace(wrapperRegex, newImageHtml.trim());
          await fs.writeFile(filePath, content, 'utf8');
          console.log(`Updated: ${fileName}`);
        } else {
          console.log(`Warning: Could not find wrapper in ${fileName}`);
        }
      } catch (err) {
        console.error(`Error processing ${fileName}:`, err.message);
      }
    }
  }
}

updateFiles();
