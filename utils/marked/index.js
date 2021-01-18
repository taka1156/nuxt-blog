import marked from 'marked';
import hljs from 'highlight.js';

// highlight.js
marked.setOptions({
  highlight(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  breaks: true,
  gfm: true
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

const markedWrap = md => {
  // 初期化
  index = 0;
  tocs = [];
  return marked(md);
};

marked.use({ renderer });

export { tocs, markedWrap };
