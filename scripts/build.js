/**
 * @Description   构建发布目录
 * @Author        Alex_McAvoy
 * @Date          2026-06-17
 *
 * 构建命令：npm run build
 *
 * 构建产物
 * 1. dist/resources/css/anniversary.min.css
 * 2. dist/resources/js/anniversary.min.js
 * 3. dist/resources/framework、dist/resources/images、dist/resources/audio、dist/resources/cursor、dist/resources/favicon
 */
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const hexoAnniversaryDir = "I:/Hexo/source/2nd_anniversary_of_pyc-zwx";

const cssFiles = [
  "resources/css/reset.css",
  "resources/css/index/index.css",
  "resources/css/index/title.css",
  "resources/css/index/arrow.css",
  "resources/css/mouse_cursor.css",
  "resources/css/sakura-falling.css",
  "resources/css/index/bgm.css",
  "resources/css/index/heart.css"
];

const jsFiles = [
  "resources/js/index.js",
  "resources/js/cursor-effects.js",
  "resources/js/sakura-falling.js",
  "resources/js/bgm.js"
];

function optionalRequire(packageName) {
  /**
   * @Description 可选加载构建依赖，未安装时使用内置基础压缩
   * @param {string} packageName 包名
   * @returns {*|null} 模块或 null
   */
  try {
    return require(packageName);
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      return null;
    }
    throw error;
  }
}

function ensureDir(dirPath) {
  /**
   * @Description 确保目录存在
   * @param {string} dirPath 目录路径
   */
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDir(sourceDir, targetDir) {
  /**
   * @Description 递归复制目录
   * @param {string} sourceDir 源目录
   * @param {string} targetDir 目标目录
   */
  fs.cpSync(sourceDir, targetDir, { recursive: true });
}

function readUtf8(filePath) {
  /**
   * @Description 读取 UTF-8 文本文件
   * @param {string} filePath 文件路径
   * @returns {string} 文件内容
   */
  return fs.readFileSync(filePath, "utf8");
}

function writeUtf8(filePath, content) {
  /**
   * @Description 写入 UTF-8 文本文件
   * @param {string} filePath 文件路径
   * @param {string} content 文件内容
   */
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

function cleanDist() {
  /**
   * @Description 清空并重建 dist 目录
   */
  fs.rmSync(distDir, { recursive: true, force: true });
  ensureDir(distDir);
}

function copyStaticAssets() {
  /**
   * @Description 复制发布时需要保留的静态资源
   */
  copyDir(path.join(rootDir, "resources", "framework"), path.join(distDir, "resources", "framework"));
  copyDir(path.join(rootDir, "resources", "images", "common"), path.join(distDir, "resources", "images", "common"));
  copyDir(path.join(rootDir, "resources", "images", "webp"), path.join(distDir, "resources", "images", "webp"));
  copyDir(path.join(rootDir, "resources", "audio"), path.join(distDir, "resources", "audio"));
  copyDir(path.join(rootDir, "resources", "cursor"), path.join(distDir, "resources", "cursor"));
  copyDir(path.join(rootDir, "resources", "favicon"), path.join(distDir, "resources", "favicon"));
}

function basicCssMinify(source) {
  /**
   * @Description 无依赖 CSS 基础压缩
   * @param {string} source CSS 源码
   * @returns {string} 压缩后的 CSS
   */
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

function rewriteCssUrls(source) {
  /**
   * @Description 重写合并后 CSS 中的相对资源路径
   * @param {string} source CSS 源码
   * @returns {string} 重写后的 CSS
   */
  return source
    .replaceAll("../../images/common/", "../images/common/");
}

function basicJsMinify(source) {
  /**
   * @Description 无依赖 JS 基础压缩，保留字符串与正则安全边界
   * @param {string} source JS 源码
   * @returns {string} 压缩后的 JS
   */
  return source
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function basicHtmlMinify(source) {
  /**
   * @Description 无依赖 HTML 基础压缩
   * @param {string} source HTML 源码
   * @returns {string} 压缩后的 HTML
   */
  return source
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/>\s+</g, "><")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function buildCss() {
  /**
   * @Description 按页面原始顺序合并并压缩 CSS
   */
  const source = cssFiles
    .map(file => readUtf8(path.join(rootDir, file)))
    .join("\n");
  const rewrittenSource = rewriteCssUrls(source);

  const CleanCSS = optionalRequire("clean-css");
  const styles = CleanCSS
    ? new CleanCSS({ level: 2 }).minify(rewrittenSource).styles
    : basicCssMinify(rewrittenSource);

  writeUtf8(path.join(distDir, "resources", "css", "anniversary.min.css"), styles);
}

async function buildJs() {
  /**
   * @Description 按依赖顺序合并并压缩项目 JS
   */
  const source = jsFiles
    .map(file => readUtf8(path.join(rootDir, file)))
    .join("\n;\n");

  const terser = optionalRequire("terser");
  let code = basicJsMinify(source);

  if (terser) {
    const minified = await terser.minify(source, {
      compress: true,
      mangle: true,
      format: {
        comments: false
      }
    });

    if (minified.error) {
      throw minified.error;
    }
    code = minified.code;
  }

  const JavaScriptObfuscator = optionalRequire("javascript-obfuscator");
  if (JavaScriptObfuscator) {
    const obfuscated = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      renameGlobals: false,
      stringArray: true,
      stringArrayThreshold: 0.35
    });
    code = obfuscated.getObfuscatedCode();
  }

  writeUtf8(path.join(distDir, "resources", "js", "anniversary.min.js"), code);
}

async function buildHtml() {
  /**
   * @Description 改写资源引用并压缩 HTML
   */
  let html = readUtf8(path.join(rootDir, "index.html"));

  html = html.replace(
    /\s*<link\s+[^>]*href="\.\/resources\/css\/(?:reset|mouse_cursor|sakura-falling)\.css"[^>]*>/g,
    ""
  );
  html = html.replace(
    /\s*<link\s+[^>]*href="\.\/resources\/css\/index\/(?:index|title|arrow|bgm|heart)\.css"[^>]*>/g,
    ""
  );
  html = html.replace(
    /(<link rel="stylesheet" href="\.\/resources\/framework\/bootstrap-3\.4\.1-dist\.min\.css">)/,
    '$1\n\t\t<link rel="stylesheet" href="./resources/css/anniversary.min.css">'
  );

  html = html.replace(
    /\s*<script type="text\/JavaScript" src="\.\/resources\/js\/index\.js"><\/script>/g,
    ""
  );
  html = html.replace(
    /\s*<script type="text\/javascript" src="\.\/resources\/js\/(?:cursor-effects|sakura-falling|bgm)\.js"><\/script>/g,
    ""
  );
  html = html.replace(
    /(<script src="\.\/resources\/framework\/angular-1\.5\.5\.min\.js"><\/script>)/,
    '$1\n\t\t<script src="./resources/js/anniversary.min.js"></script>'
  );

  const htmlMinifier = optionalRequire("html-minifier-terser");
  const minified = htmlMinifier
    ? await htmlMinifier.minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    })
    : basicHtmlMinify(html);

  writeUtf8(path.join(distDir, "index.html"), minified);
}

function syncToHexo() {
  /**
   * @Description 将 dist 构建产物同步到 Hexo 的 source 目录
   */
  fs.rmSync(hexoAnniversaryDir, { recursive: true, force: true });
  copyDir(distDir, hexoAnniversaryDir);
}

async function main() {
  /**
   * @Description 执行完整构建流程
   */
  cleanDist();
  copyStaticAssets();
  buildCss();
  await buildJs();
  await buildHtml();

  console.log("Build complete: dist");

  if (process.argv.includes("--hexo")) {
    syncToHexo();
    console.log(`Synced to Hexo: ${hexoAnniversaryDir}`);
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
