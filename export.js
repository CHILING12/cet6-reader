// ── Export Utilities ──
// Dependencies: vocabulary (global), showToast (global)

window.doExport = function(format) {
  var entries = Object.values(vocabulary);
  if (entries.length === 0) {
    if (window.showToast) window.showToast('生词本为空，请先添加单词');
    return;
  }

  entries.sort(function(a, b) { return (b.addedAt || '').localeCompare(a.addedAt || ''); });

  var content, filename, mimeType;

  if (format === 'csv') {
    var header = '﻿Word,Note,Article,Date\n';
    var rows = entries.map(function(e) {
      return '"' + (e.word || '').replace(/"/g, '""') + '","' +
             (e.note || '').replace(/"/g, '""') + '","Article ' + (e.article || '') + '","' +
             new Date(e.addedAt).toLocaleString('zh-CN') + '"';
    }).join('\n');
    content = header + rows;
    filename = 'CET6-Vocabulary.csv';
    mimeType = 'text/csv;charset=utf-8';
  } else if (format === 'json') {
    content = JSON.stringify(entries.map(function(e) {
      return { word: e.word, note: e.note, article: 'Article ' + e.article, addedAt: e.addedAt };
    }), null, 2);
    filename = 'CET6-Vocabulary.json';
    mimeType = 'application/json';
  } else if (format === 'txt') {
    content = entries.map(function(e) {
      var line = '【' + e.word + '】';
      if (e.note) line += ' — ' + e.note;
      line += '  (文章' + e.article + ')';
      return line;
    }).join('\n\n');
    filename = 'CET6-Vocabulary.txt';
    mimeType = 'text/plain;charset=utf-8';
  }

  var blob = new Blob([content], { type: mimeType });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (window.showToast) window.showToast('已导出 ' + entries.length + ' 个生词 (' + format.toUpperCase() + ')');
};
