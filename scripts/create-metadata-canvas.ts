/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// çok eslint hatası veriyordu null olmaz bunu verdin ama empty olursa ne yapacaksın error her şey olabilir falan filan
// bu kodu kendiniz kullanmak isterseniz ve pango hata verirse büyük ihtimal windows diyedir ve windows'ta fontları yüklemeden direkt bu yerden çek işte ya dediğinizde canımın içi windows kendisinde yüklüğ değil diye hata veriyor haberiniz olsun


import { createCanvas, loadImage, registerFont, CanvasRenderingContext2D } from 'canvas';
import fs from 'fs/promises';
import path from 'path';
import projectsData from '../src/data/projectsData';

registerFont(path.join(__dirname, '../public/static/fonts/Poppins/Poppins-Bold.ttf'), {
family: 'Poppins',
weight: 'bold'
});

registerFont(path.join(__dirname, '../public/static/fonts/SourceSansPro/SourceSansPro-Regular.ttf'), {
family: 'Source Sans Pro',
weight: 'normal'
});

interface Project {
name: string;
description: string;
slug: string;
imageUrl: string;
date?: string;
}


function wrapText(
ctx: CanvasRenderingContext2D,
text: string,
x: number,
y: number,
maxWidth: number,
lineHeight: number,
maxLines = 3
): number {

text = text.replace(/-/g, ' - ');

const words = text.split(' ');
let line = '';
let lines = 0;
let currentY = y;

for (const word of words) {
    if (ctx.measureText(word).width > maxWidth) {
    let tempWord = word;

    while (ctx.measureText(tempWord).width > maxWidth) {
        let i = 0;
        let partial = '';

        while (
        i < tempWord.length &&
        ctx.measureText(partial + tempWord[i]).width <= maxWidth
        ) {
        partial += tempWord[i];
        i++;
        }

        ctx.fillText(partial, x, currentY);
        currentY += lineHeight;
        lines++;

        if (lines >= maxLines) {
        ctx.fillText('...', x, currentY);
        return currentY;
        }

        tempWord = tempWord.slice(i);
    }

    line = tempWord + ' ';
    continue;
    }

    const testLine = line + word + ' ';
    if (ctx.measureText(testLine).width > maxWidth && line !== '') {
    ctx.fillText(line, x, currentY);
    currentY += lineHeight;
    lines++;

    if (lines >= maxLines) {
        ctx.fillText('...', x, currentY);
        return currentY;
    }
    line = word + ' ';
    } else {
    line = testLine;
    }
}

ctx.fillText(line.trim(), x, currentY);
return currentY + lineHeight;
}

function drawImageProp(
ctx: CanvasRenderingContext2D,
img: any,
x: number,
y: number,
w: number,
h: number,
offsetX = 0.5,
offsetY = 0.5
) {
const iw = img.width;
const ih = img.height;
const r = Math.min(w / iw, h / ih);
const nw = iw * r;
const nh = ih * r;

const cx = (iw - nw) * offsetX;
const cy = (ih - nh) * offsetY;

ctx.drawImage(img, cx, cy, nw, nh, x, y, w, h);
}

async function generateMetadataImage(project: Project) {
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

try {
    const backgroundImage = await loadImage(
    path.join(__dirname, '../public', project.imageUrl)
    );
    drawImageProp(ctx, backgroundImage, 0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0,0,0,0.3)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.7)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

} catch (error) {
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const padding = 80;
  const maxTextWidth = canvas.width - (padding * 2);
let currentY = padding + 60;

ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 48px Poppins';
ctx.shadowColor = 'rgba(0,0,0,0.8)';
ctx.shadowBlur = 8;

const titleY = wrapText(ctx, project.name, padding, currentY, maxTextWidth, 60, 3);
currentY = titleY + 30;

ctx.fillStyle = 'rgba(255,255,255,0.9)';
ctx.font = '28px "Source Sans Pro"';
ctx.shadowBlur = 6;

const descY = wrapText(ctx, project.description, padding, currentY, maxTextWidth, 40, 3);
currentY = descY + 60;

const logoArea = {
    x: canvas.width - 180,
    y: canvas.height - 130,
    size: 100
};

if (project.date) {
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '20px "Source Sans Pro"';
    ctx.shadowBlur = 0;
    const dateText = new Date(project.date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    });
    const dateWidth = ctx.measureText(dateText).width;
    ctx.fillText(dateText, logoArea.x - dateWidth - 20, logoArea.y + 40);
}

ctx.fillStyle = 'rgba(255,255,255,0.7)';
ctx.font = '24px "Source Sans Pro"';
const createdByText = 'Created by EspeeeBne';
const textWidth = ctx.measureText(createdByText).width;
ctx.fillText(createdByText, logoArea.x - textWidth - 20, logoArea.y + 70);

try {
    const logo = await loadImage(
    path.join(__dirname, '../public/static/important-images/favicon.ico')
    );

    ctx.save();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.strokeRect(logoArea.x, logoArea.y, logoArea.size, logoArea.size);
    ctx.restore();

    ctx.drawImage(
    logo,
    logoArea.x,
    logoArea.y,
    logoArea.size,
    logoArea.size
    );
} catch (error) {
    console.error('Logo yüklenemedi:', error);
}

const outputDir = path.join(__dirname, '../public/static/projects', project.slug);
await fs.mkdir(outputDir, { recursive: true });

const buffer = canvas.toBuffer('image/png');
await fs.writeFile(path.join(outputDir, 'metadata.png'), buffer);
}

async function generateAllMetadataImages() {
await Promise.all(
    projectsData.map(project =>
    generateMetadataImage(project).catch(error => {
        console.error(`${project.slug} oluşturulamadı:`, error);
    })
    )
);
}

generateAllMetadataImages()
.then(() => console.log('Bütün metadata resimlerini oluşturdum.'))
.catch(error => console.error('GENE HATA VERDİM LAAAAAANNNN:', error));
