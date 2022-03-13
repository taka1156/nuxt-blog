import highlight from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';

import markdown from 'highlight.js/lib/languages/markdown';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import javascript from 'highlight.js/lib/languages/javascript';
import nodeRepl from 'highlight.js/lib/languages/node-repl';
import typescript from 'highlight.js/lib/languages/typescript';
import php from 'highlight.js/lib/languages/php';
import phpTemplate from 'highlight.js/lib/languages/php-template';
import ruby from 'highlight.js/lib/languages/ruby';
import python from 'highlight.js/lib/languages/python';
import clang from 'highlight.js/lib/languages/c';
import cpp from 'highlight.js/lib/languages/cpp';
import java from 'highlight.js/lib/languages/java';
import csharp from 'highlight.js/lib/languages/csharp';
import go from 'highlight.js/lib/languages/go';
import dart from 'highlight.js/lib/languages/dart';
import swift from 'highlight.js/lib/languages/swift';
import kotlin from 'highlight.js/lib/languages/kotlin';
import sql from 'highlight.js/lib/languages/sql';
import shell from 'highlight.js/lib/languages/shell';
import makefile from 'highlight.js/lib/languages/makefile';
import nginx from 'highlight.js/lib/languages/nginx';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import yaml from 'highlight.js/lib/languages/yaml';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';

// マークアップ、 スタイルシート
highlight.registerLanguage('markdown', markdown);
highlight.registerLanguage('css', css);
highlight.registerLanguage('scss', scss);
// プログラミング言語
// javascript系(node, alt)
highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('node-repl', nodeRepl);
highlight.registerLanguage('typescript', typescript);
// 汎用言語?
highlight.registerLanguage('c', clang);
highlight.registerLanguage('cpp', cpp);
highlight.registerLanguage('csharp', csharp);
highlight.registerLanguage('java', java);
highlight.registerLanguage('go', go);
// LL
highlight.registerLanguage('php', php);
highlight.registerLanguage('php-template', phpTemplate);
highlight.registerLanguage('ruby', ruby);
highlight.registerLanguage('python', python);
// スマートフォンアプリ
highlight.registerLanguage('dart', dart);
highlight.registerLanguage('swift', swift);
highlight.registerLanguage('kotlin', kotlin);
// sql
highlight.registerLanguage('sql', sql);
// その他(setting file?)
highlight.registerLanguage('shell', shell);
highlight.registerLanguage('makefile', makefile);
highlight.registerLanguage('nginx', nginx);
highlight.registerLanguage('dockerfile', dockerfile);
highlight.registerLanguage('yaml', yaml);
highlight.registerLanguage('json', json);
highlight.registerLanguage('xml', xml);

export { highlight };
