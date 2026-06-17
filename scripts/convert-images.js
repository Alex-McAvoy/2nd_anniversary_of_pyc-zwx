/**
 * @Description   将纪念页背景原图转换为 WebP 图片
 * @Author        Alex_McAvoy
 * @Date          2026-06-17
 *
 * 脚本调用：npm run convert:images
 *
 * 脚本约定
 * 1. 原始图片保留在 resources/images/original 目录中
 * 2. 转换后的 WebP 文件输出到 resources/images/webp 目录中
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const rootDir = path.resolve(__dirname, "..");
const originalDir = path.join(rootDir, "resources", "images", "original");
const webpDir = path.join(rootDir, "resources", "images", "webp");

// 背景图片接近 16:9 全屏展示，保留桌面端清晰度
const WEBP_WIDTH = 1920;
const WEBP_QUALITY = 82;
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function getOriginalImages() {
  /**
   * @Description 获取 original 目录下所有需要转换的原始图片
   * @returns {Array<string>} 原始图片文件名列表
   */
  return fs.readdirSync(originalDir)
    .filter(fileName => {
      const ext = path.extname(fileName).toLowerCase();
      return IMAGE_EXTENSIONS.has(ext);
    })
    .sort();
}

async function convertImage(inputPath, outputPath) {
  /**
   * @Description 将单张背景图转换为 WebP 文件
   * @param {string} inputPath 原始图片路径
   * @param {string} outputPath WebP 输出路径
   */
  await sharp(inputPath)
    .rotate()
    .resize({ width: WEBP_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);
}

async function main() {
  /**
   * @Description 批量转换 original 目录下的所有背景图片
   */
  fs.mkdirSync(webpDir, { recursive: true });

  const images = getOriginalImages();
  let convertedCount = 0;

  for (const imageFileName of images) {
    const inputPath = path.join(originalDir, imageFileName);
    const outputFileName = `${path.basename(imageFileName, path.extname(imageFileName))}.webp`;
    const outputPath = path.join(webpDir, outputFileName);

    await convertImage(inputPath, outputPath);
    convertedCount++;
  }

  console.log(`Converted images: ${convertedCount}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
