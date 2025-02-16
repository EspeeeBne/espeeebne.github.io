import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
import projectsData from '../src/data/projectsData';

const generateMetadataImage = async (project: {
    name: string;
    description: string;
    slug: string;
    imageUrl: string;
}) => {
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');

    try {
        const backgroundImage = await loadImage(path.join(__dirname, '../public', project.imageUrl));
        const ratio = Math.max(canvas.width / backgroundImage.width, canvas.height / backgroundImage.height);
        const bgWidth = backgroundImage.width * ratio;
        const bgHeight = backgroundImage.height * ratio;
        const bgX = (canvas.width - bgWidth) / 2;
        const bgY = (canvas.height - bgHeight) / 2;
        ctx.drawImage(backgroundImage, bgX, bgY, bgWidth, bgHeight);
    } catch (error) {
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.error(`Arka plan resmi yüklenemedi: ${project.imageUrl}`, error);
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial';

    const titleMaxWidth = canvas.width - 400;
    const titleLines = [];
    const titleWords = project.name.split(' ');
    let titleLine = '';

    for (let i = 0; i < titleWords.length; i++) {
        const testLine = titleLine + titleWords[i] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > titleMaxWidth && i > 0) {
            titleLines.push(titleLine);
            titleLine = titleWords[i] + ' ';
        } else {
            titleLine = testLine;
        }
    }
    titleLines.push(titleLine);

    titleLines.forEach((l, i) => {
        ctx.fillText(l, 50, 100 + i * 55);
    });

    ctx.fillStyle = '#bbbbbb';
    ctx.font = '24px Arial';

    const maxWidth = canvas.width - 400;
    const lineHeight = 30;
    const lines = [];
    const words = project.description.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && i > 0) {
            lines.push(line);
            line = words[i] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    lines.forEach((l, i) => {
        ctx.fillText(l, 50, 180 + titleLines.length * 55 + i * lineHeight);
    });

    ctx.fillStyle = '#888888';
    ctx.font = '20px Arial';
    ctx.fillText('Created by EspeeeBne', canvas.width - 250, canvas.height - 10);

    try {
        const favicon = await loadImage(
            path.join(__dirname, '../public/static/important-images/favicon.ico')
        );
        ctx.drawImage(favicon, canvas.width - 300, (canvas.height - 256) / 2, 256, 256);
    } catch (error) {
        console.error('Favicon yüklenemedi', error);
    }

    const outputPath = path.join(
        __dirname,
        '../public/static/projects',
        project.slug,
        'metadata.png'
    );

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);

    console.log(`Metadata resmi oluşturuldu: ${outputPath}`);
};

const generateAllMetadataImages = async () => {
    for (const project of projectsData) {
        await generateMetadataImage(project);
    }
};

generateAllMetadataImages()
    .then(() => console.log('Tüm metadata resimleri başarıyla oluşturuldu.'))
    .catch((error) => console.error('Metadata resimleri oluşturulurken hata oluştu:', error));
