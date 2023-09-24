import { marked } from 'marked';
import { highlight as hljs } from './highlight.js';

// highlight.js
marked.setOptions({
  highlight(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  breaks: true,
  gfm: true
});

// spoiler

const spoiler = {
  name: 'spoiler',
  level: 'inline',
  start(src) {
    return src.match(/^::/)?.index;
  },
  tokenizer(src) {
    const spoilerRule = /^::\s+([\s\S]+?)\n([\s\S]+?)(\s*::)/gm;
    const match = spoilerRule.exec(src);
    if (match) {
      return {
        type: 'spoiler',
        raw: match[0],
        summary: match[1].trim(),
        details: match[2].trim()
      };
    }
    return false;
  },
  renderer({ summary, details }) {
    const parsedDetailsBody = marked.parse(details);
    return `<details><summary>${summary}</summary>${parsedDetailsBody}</details>`;
  },
  childTokens: ['details', 'summary']
};

// container
const container = (
  name = 'info',
  startRegExp = /^:: info/,
  spoilerRule = /^:: info ([\s\S]+?)\n([\s\S]+?)(\s*::)/gm,
  className = 'info'
) => ({
  name: name,
  level: 'inline',
  start(src) {
    return src.match(startRegExp)?.index;
  },
  tokenizer(src) {
    const match = spoilerRule.exec(src);
    if (match) {
      return {
        type: name,
        raw: match[0],
        summary: match[1].trim(),
        details: match[2].trim()
      };
    }
    return false;
  },
  renderer({ summary, details }) {
    return `<div class="container ${className}"><p class="${className}-summary">${summary}</p><p class="${className}-details">${details}</p></div>`;
  },
  childTokens: ['div', 'p']
});

// 目次生成
let index = 0;
let tocs = [];

const renderer = {
  heading(text, level) {
    const escapedText = text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
    if (level === 2) {
      index++;
      const anchor = 'anchor_' + index;
      tocs.push({ index, anchor, escapedText });
      return '<h' + level + ' id="' + anchor + '">' + text + '</h' + level + '>';
    } else {
      return '<h' + level + '>' + text + '</h' + level + '>';
    }
  }
};

const containers = [
  container(
    'point',
    /^:: point/,
    /^:: point ([\s\S]+?)\n([\s\S]+?)(\s*::)/gm,
    'point'
  ),
  container('info', /^:: info/, /^:: info ([\s\S]+?)\n([\s\S]+?)(\s*::)/gm, 'info'),
  container('warn', /^:: warn/, /^:: warn ([\s\S]+?)\n([\s\S]+?)(\s*::)/gm, 'warn'),
  container(
    'alert',
    /^:: alert/,
    /^:: alert ([\s\S]+?)\n([\s\S]+?)(\s*::)/gm,
    'alert'
  )
];

marked.use({
  renderer,
  extensions: [spoiler, ...containers]
});

const markedWrap = md => {
  // 初期化
  index = 0;
  tocs = [];
  const result = marked(md);
  index++;
  tocs.push({ index, anchor: 'anchor_relative', escapedText: '関連記事' });
  return result;
};

export { tocs, markedWrap };
