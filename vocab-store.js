// ── Vocabulary Store (shared via localStorage) ──
// Global: vocabulary object, accessed by dictation.js, export.js, and main page
var vocabulary = {};

(function() {
  const STORAGE_KEY = 'cet6_vocabulary';

  window.loadVocabulary = function() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      vocabulary = raw ? JSON.parse(raw) : {};
    } catch (e) {
      vocabulary = {};
    }
  };

  window.saveVocabulary = function() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vocabulary));
  };

  window.addWord = function(word, article, note) {
    const key = word.toLowerCase();
    if (vocabulary[key]) {
      if (note) vocabulary[key].note = note;
    } else {
      vocabulary[key] = {
        word: word,
        note: note || '',
        article: article,
        addedAt: new Date().toISOString()
      };
    }
    saveVocabulary();
    if (window.renderAll) window.renderAll();
    if (window.showToast) window.showToast('已添加 "' + word + '" 到生词本');
  };

  window.removeWord = function(word) {
    const key = word.toLowerCase();
    delete vocabulary[key];
    saveVocabulary();
    if (window.renderAll) window.renderAll();
    if (window.showToast) window.showToast('已移除 "' + word + '"');
  };

  window.updateNote = function(word, note) {
    const key = word.toLowerCase();
    if (vocabulary[key]) {
      vocabulary[key].note = note;
      saveVocabulary();
      if (window.highlightMarkedWords) window.highlightMarkedWords();
    }
  };

  window.clearAllVocab = function() {
    if (Object.keys(vocabulary).length === 0) return;
    if (confirm('确定要清空所有生词吗？此操作不可撤销。')) {
      vocabulary = {};
      saveVocabulary();
      if (window.renderAll) window.renderAll();
      if (window.showToast) window.showToast('已清空全部生词');
    }
  };

  window.isWordMarked = function(word) {
    return !!vocabulary[word.toLowerCase()];
  };
})();
