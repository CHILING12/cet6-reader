// ── Dictation Engine (默写) ──
// Dependencies: vocabulary (global), showToast, escapeHtml, highlightMarkedWords

(function() {
  const DICT_STORAGE_KEY = 'cet6_dictation_settings';

  // DOM refs — queried at script load time (after DOM ready)
  function $(id) { return document.getElementById(id); }
  const overlay    = $('dictationOverlay');
  const setupScr   = $('dictSetupScreen');
  const testScr    = $('dictTestScreen');
  const resultScr  = $('dictResultScreen');
  const availCount = $('dictAvailableCount');
  const input      = $('dictInput');
  const feedback   = $('dictFeedback');
  const nextBtn    = $('dictNext');
  const submitBtn  = $('dictSubmit');
  const promptLbl  = $('dictPromptLabel');
  const promptTxt  = $('dictPromptText');
  const progTxt    = $('dictProgressText');
  const scoreTxt   = $('dictScoreText');
  const progFill   = $('dictProgressFill');
  const scoreCir   = $('dictScoreCircle');
  const scoreNum   = $('dictScoreNum');
  const scoreLbl   = $('dictScoreLabel');
  const mistakesEl = $('dictMistakes');
  const mistakesLst = $('dictMistakesList');
  const retryBtn   = $('dictRetryMistakes');

  var session = {
    mode: 'cn2en',
    wordList: [],
    currentIndex: 0,
    score: 0,
    mistakes: [],
    submitted: false
  };

  function loadSettings() {
    try {
      const raw = localStorage.getItem(DICT_STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s.mode === 'cn2en' || s.mode === 'en2cn') session.mode = s.mode;
      }
    } catch (e) {}
  }

  function saveSettings() {
    localStorage.setItem(DICT_STORAGE_KEY, JSON.stringify({ mode: session.mode }));
  }

  function getAvailableWords() {
    return Object.values(vocabulary).filter(function(e) { return e.note && e.note.trim(); });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function updateModeTabs() {
    var tabs = document.querySelectorAll('#modeTabs .mode-tab');
    tabs.forEach(function(tab) {
      if (tab.getAttribute('data-mode') === session.mode) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  function updateAvailCount() {
    var available = getAvailableWords();
    var total = Object.keys(vocabulary).length;
    if (available.length === 0) {
      if (total === 0) {
        availCount.innerHTML = '生词本为空，请先在文章中添加生词';
        availCount.className = 'dict-available-count warning';
      } else {
        availCount.innerHTML = '⚠️ 所有生词都还没有添加注释（中文释义）。<br>请先在生词本中为单词添加释义后再开始默写';
        availCount.className = 'dict-available-count warning';
      }
    } else {
      availCount.innerHTML = '可默写单词：<span class="count-num">' + available.length + '</span> 个' +
        (total !== available.length ? ' / 共 ' + total + ' 个生词' : '');
      availCount.className = 'dict-available-count';
    }
  }

  function showQuestion() {
    var entry = session.wordList[session.currentIndex];
    var total = session.wordList.length;
    var idx = session.currentIndex;
    progTxt.textContent = (idx + 1) + ' / ' + total;
    scoreTxt.textContent = '✅ ' + session.score;
    progFill.style.width = ((idx / total) * 100) + '%';

    if (session.mode === 'cn2en') {
      promptLbl.textContent = '请输入对应的英文单词';
      promptTxt.textContent = entry.note;
    } else {
      promptLbl.textContent = '请输入对应的中文释义';
      promptTxt.textContent = entry.word;
    }

    input.value = '';
    input.classList.remove('correct', 'incorrect');
    input.disabled = false;
    input.focus();
    feedback.classList.remove('show', 'correct', 'incorrect');
    feedback.innerHTML = '';
    nextBtn.style.display = 'none';
    submitBtn.style.display = '';
    submitBtn.disabled = false;
    session.submitted = false;
  }

  function compareChinese(user, expected) {
    var norm = function(s) { return s.replace(/[，,。\.；;：:！!？?、\s]+/g, '').trim(); };
    var u = norm(user), e = norm(expected);
    if (u === e) return true;
    if (e.length >= 2 && u.length >= 2 && (u.indexOf(e) >= 0 || e.indexOf(u) >= 0)) return true;
    return false;
  }

  function checkAnswer() {
    if (session.submitted) return;
    var userAnswer = input.value.trim();
    if (!userAnswer) { input.focus(); return; }

    var entry = session.wordList[session.currentIndex];
    var isCorrect = false, correctAnswer = '';

    if (session.mode === 'cn2en') {
      correctAnswer = entry.word;
      isCorrect = userAnswer.toLowerCase().replace(/\s+/g, ' ') === correctAnswer.toLowerCase().replace(/\s+/g, ' ');
    } else {
      correctAnswer = entry.note || '';
      isCorrect = compareChinese(userAnswer, correctAnswer);
    }

    session.submitted = true;
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    input.disabled = true;

    if (isCorrect) {
      session.score++;
      scoreTxt.textContent = '✅ ' + session.score;
      input.classList.add('correct');
      feedback.classList.add('show', 'correct');
      feedback.innerHTML = '✅ <strong>回答正确！</strong>';
    } else {
      session.mistakes.push(entry);
      input.classList.add('incorrect');
      feedback.classList.add('show', 'incorrect');
      feedback.innerHTML = '❌ <strong>回答错误</strong><div class="correct-answer">正确答案：' +
        (window.escapeHtml ? window.escapeHtml(correctAnswer) : correctAnswer) + '</div>';
    }
    nextBtn.focus();
  }

  function showResult() {
    testScr.classList.remove('active');
    resultScr.classList.add('active');
    var total = session.wordList.length;
    var pct = total > 0 ? Math.round((session.score / total) * 100) : 0;

    scoreCir.className = 'dict-score-circle';
    if (pct >= 90) scoreCir.classList.add('excellent');
    else if (pct >= 60) scoreCir.classList.add('good');
    else scoreCir.classList.add('poor');

    scoreNum.textContent = pct + '%';
    scoreLbl.textContent = session.score + ' / ' + total + ' 正确';

    if (session.mistakes.length > 0) {
      mistakesEl.style.display = 'block';
      retryBtn.style.display = '';
      mistakesLst.innerHTML = session.mistakes.map(function(m) {
        var promptText = session.mode === 'cn2en' ? (m.note || '(无注释)') : m.word;
        var answerText = session.mode === 'cn2en' ? m.word : (m.note || '(无注释)');
        var esc = window.escapeHtml || function(s) { return s; };
        return '<div class="mistake-item">' +
          '<span class="mistake-prompt">' + esc(promptText) + '</span>' +
          '<span class="mistake-arrow">→</span>' +
          '<span class="mistake-answer">' + esc(answerText) + '</span></div>';
      }).join('');
    } else {
      mistakesEl.style.display = 'none';
      retryBtn.style.display = 'none';
      mistakesLst.innerHTML = '';
    }
  }

  // ── Public API ──
  window.openDictation = function() {
    var available = getAvailableWords();
    updateModeTabs();
    updateAvailCount();
    setupScr.classList.add('active');
    testScr.classList.remove('active');
    resultScr.classList.remove('active');
    overlay.classList.add('active');
    $('dictStart').disabled = available.length === 0;
  };

  window.closeDictation = function() {
    overlay.classList.remove('active');
    input.value = '';
    feedback.classList.remove('show', 'correct', 'incorrect');
    feedback.innerHTML = '';
    nextBtn.style.display = 'none';
    submitBtn.style.display = '';
    input.classList.remove('correct', 'incorrect');
    session.submitted = false;
  };

  window.loadDictSettings = loadSettings;

  // ── Event bindings (run once at load time) ──
  function bindEvents() {
    $('modeTabs').addEventListener('click', function(e) {
      var tab = e.target.closest('.mode-tab');
      if (!tab) return;
      var newMode = tab.getAttribute('data-mode');
      if (newMode === session.mode) return;
      session.mode = newMode;
      saveSettings();
      updateModeTabs();
      updateAvailCount();
      $('dictStart').disabled = getAvailableWords().length === 0;
    });

    $('dictStart').addEventListener('click', function() {
      var available = getAvailableWords();
      if (available.length === 0) {
        if (window.showToast) window.showToast('没有可默写的单词');
        return;
      }
      session.wordList = shuffle(available);
      session.currentIndex = 0;
      session.score = 0;
      session.mistakes = [];
      session.submitted = false;
      setupScr.classList.remove('active');
      testScr.classList.add('active');
      resultScr.classList.remove('active');
      showQuestion();
    });

    nextBtn.addEventListener('click', function() {
      session.currentIndex++;
      if (session.currentIndex >= session.wordList.length) {
        showResult();
      } else {
        showQuestion();
      }
    });

    submitBtn.addEventListener('click', checkAnswer);

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !session.submitted) { e.preventDefault(); checkAnswer(); }
      else if (e.key === 'Enter' && session.submitted) { e.preventDefault(); nextBtn.click(); }
    });

    retryBtn.addEventListener('click', function() {
      if (session.mistakes.length === 0) return;
      session.wordList = shuffle(session.mistakes);
      session.currentIndex = 0;
      session.score = 0;
      session.mistakes = [];
      session.submitted = false;
      resultScr.classList.remove('active');
      testScr.classList.add('active');
      showQuestion();
    });

    $('dictRetryAll').addEventListener('click', function() {
      $('dictStart').click();
    });

    $('dictClose').addEventListener('click', window.closeDictation);
    $('dictCancel').addEventListener('click', window.closeDictation);

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) window.closeDictation();
    });

    $('btnDictation').addEventListener('click', function() {
      if (Object.keys(vocabulary).length === 0) {
        if (window.showToast) window.showToast('生词本为空，请先在文章中添加生词');
        return;
      }
      window.openDictation();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        if (setupScr.classList.contains('active') || resultScr.classList.contains('active')) {
          window.closeDictation();
        }
      }
    });
  }

  // Init on load
  loadSettings();
  bindEvents();
})();
