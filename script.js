/* --- Romanji Logic --- */
const KANA_MAP = {
  'あ': ['a'], 'い': ['i', 'yi'], 'う': ['u', 'wu'], 'え': ['e'], 'お': ['o'], 'ゔ': ['vu'],
  'か': ['ka', 'ca'], 'き': ['ki'], 'く': ['ku', 'cu', 'qu'], 'け': ['ke'], 'こ': ['ko', 'co'],
  'さ': ['sa'], 'し': ['shi', 'si', 'ci'], 'す': ['su'], 'せ': ['se', 'ce'], 'そ': ['so'],
  'た': ['ta'], 'ち': ['chi', 'ti'], 'つ': ['tsu', 'tu'], 'て': ['te'], 'と': ['to'],
  'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
  'は': ['ha'], 'ひ': ['hi'], 'ふ': ['fu', 'hu'], 'へ': ['he'], 'ほ': ['ho'],
  'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
  'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
  'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
  'わ': ['wa'], 'を': ['wo'], 'ん': ['n', 'nn', "n'"],
  'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
  'ざ': ['za'], 'じ': ['ji', 'zi'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
  'だ': ['da'], 'ぢ': ['ji', 'di'], 'づ': ['zu', 'du'], 'で': ['de'], 'ど': ['do'],
  'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
  'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
  'ー': ['-'],
  '「': [''], '」': [''], '、': [','], '。': ['.']
};

const DIGRAPH_MAP = {
  'きゃ': ['kya'], 'きゅ': ['kyu'], 'きょ': ['kyo'],
  'しゃ': ['sha', 'sya'], 'しゅ': ['shu', 'syu'], 'しょ': ['sho', 'syo'],
  'ちゃ': ['cha', 'tya'], 'ちゅ': ['chu', 'tyu'], 'ちょ': ['cho', 'tyo'],
  'にゃ': ['nya'], 'にゅ': ['nyu'], 'にょ': ['nyo'],
  'ひゃ': ['hya'], 'ひゅ': ['hyu'], 'ひょ': ['hyo'],
  'みゃ': ['mya'], 'みゅ': ['myu'], 'みょ': ['myo'],
  'りゃ': ['rya'], 'りゅ': ['ryu'], 'りょ': ['ryo'],
  'ぎゃ': ['gya'], 'ぎゅ': ['gyu'], 'ぎょ': ['gyo'],
  'じゃ': ['ja', 'zya', 'jya'], 'じゅ': ['ju', 'zyu', 'jyu'], 'じょ': ['jo', 'zyo', 'jyo'],
  'びゃ': ['bya'], 'びゅ': ['byu'], 'びょ': ['byo'],
  'ぴゃ': ['pya'], 'ぴゅ': ['pyu'], 'ぴょ': ['pyo']
};

class TypingEngine {
  constructor() {
    this.currentKana = ""; 
    this.inputBuffer = ""; 
    this.validPaths = []; 
    this.displayRomanji = ""; 
  }

  setWord(wordData) {
    this.currentKana = wordData.kana || wordData.word;
    this.inputBuffer = "";
    
    if (wordData.romanji) {
        this.validPaths = [wordData.romanji];
        this.displayRomanji = wordData.romanji;
    } else {
        this.validPaths = this.generatePermutations(this.currentKana);
        this.displayRomanji = this.validPaths[0]; 
    }
  }

  generatePermutations(kana) {
    let results = [""];
    
    let i = 0;
    while (i < kana.length) {
      const char = kana[i];
      const next = kana[i+1];
      let patterns = [];
      let consumed = 1;

      if (char === 'っ') {
         if (next && KANA_MAP[next]) {
             let nextPatterns = [];
             let nextConsumed = 1;
             
             if (i+2 < kana.length && DIGRAPH_MAP[next + kana[i+2]]) {
                 nextPatterns = DIGRAPH_MAP[next + kana[i+2]];
                 nextConsumed = 2;
             } else if (KANA_MAP[next]) {
                 nextPatterns = KANA_MAP[next];
             }
             
             if (nextPatterns.length > 0) {
                 patterns = [];
                 nextPatterns.forEach(p => {
                     if (p.startsWith('ch')) {
                         patterns.push('t' + p);
                         patterns.push('c' + p); 
                     } else {
                         patterns.push(p[0] + p);
                     }
                 });
                 consumed = 1 + nextConsumed;
             } else {
                 patterns = ['xtu', 'tsu']; 
             }
         } else {
             patterns = ['xtu', 'tsu']; 
         }
      } 
      else if (next && DIGRAPH_MAP[char + next]) {
         patterns = DIGRAPH_MAP[char + next];
         consumed = 2;
      }
      else if (KANA_MAP[char]) {
         patterns = KANA_MAP[char];
      } else {
         patterns = [char]; 
      }
      
      let newResults = [];
      results.forEach(prefix => {
          patterns.forEach(p => {
              newResults.push(prefix + p);
          });
      });
      results = newResults;
      
      i += consumed;
    }
    return results;
  }

  checkInput(key) {
    const nextInput = this.inputBuffer + key;
    const candidates = this.validPaths.filter(path => path.toLowerCase().startsWith(nextInput.toLowerCase()));
    
    if (candidates.length > 0) {
        this.inputBuffer += key;
        if (!candidates.includes(this.displayRomanji)) {
            this.displayRomanji = candidates[0];
        }
        return true;
    }
    return false;
  }
  
  isComplete() {
      return this.validPaths.some(p => p.toLowerCase() === this.inputBuffer.toLowerCase());
  }
}

class GameManager {
  constructor() {
    this.state = 'TITLE';
    this.score = 0;
    this.mistakes = 0;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.timerInterval = null;
    
    this.questionsQueue = [];
    this.currentQuestion = null;
    this.currentSubject = null;
    
    this.typingEngine = new TypingEngine();
    
    this.els = {
      screens: {
        title: document.getElementById('screen-title'),
        stage: document.getElementById('screen-stage'),
        level: document.getElementById('screen-level'),
        play: document.getElementById('screen-play'),
        result: document.getElementById('screen-result')
      },
      subjectGrid: document.getElementById('subject-grid'),
      levelTitle: document.getElementById('level-title'),
      word: document.getElementById('word-display'),
      kana: document.getElementById('kana-display'),
      romanji: document.getElementById('romanji-display'),
      score: document.getElementById('score-display'),
      progress: document.getElementById('progress-display'),
      modal: document.getElementById('modal-explain'),
      explanation: document.getElementById('explanation-text'),
      countdown: document.getElementById('countdown'),
      resScore: document.getElementById('res-score'),
      resTime: document.getElementById('res-time'),
      resMiss: document.getElementById('res-miss')
    };

    this.init();
  }

  init() {
    this.renderSubjects();
    document.addEventListener('keydown', (e) => this.handleKey(e));
  }

  switchScreen(screenName) {
    Object.values(this.els.screens).forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    
    const target = this.els.screens[screenName];
    target.classList.remove('hidden');
    void target.offsetWidth;
    target.classList.add('active');
    
    this.state = screenName.toUpperCase();
  }

  renderSubjects() {
    this.els.subjectGrid.innerHTML = '';
    Object.entries(GAME_DATA.subjects).forEach(([key, data]) => {
      const btn = document.createElement('button');
      btn.innerHTML = <span style="font-size:2rem; display:block; margin-bottom:5px;"></span>;
      btn.style.borderColor = data.color;
      btn.style.color = data.color;
      btn.onclick = () => this.selectSubject(key);
      this.els.subjectGrid.appendChild(btn);
    });
  }

  toTitle() { this.switchScreen('title'); }
  toStageSelect() { this.switchScreen('stage'); }
  
  selectSubject(subject) {
    this.currentSubject = subject;
    const info = GAME_DATA.subjects[subject];
    this.els.levelTitle.innerText = ${info.label} - レベル を えらぼう;
    this.switchScreen('level');
  }

  startStage(level) {
    const allQuestions = GAME_DATA.questions.filter(q => q.subject === this.currentSubject && q.level === level);
    
    let pool = allQuestions;
    if (pool.length === 0) {
        alert("このレベルの もんだい は まだありません。");
        return;
    }
    
    this.questionsQueue = pool.sort(() => 0.5 - Math.random()).slice(0, 10);
    
    this.score = 0;
    this.mistakes = 0;
    this.currentQuestionIndex = 0;
    this.startTime = Date.now();
    this.elapsedTime = 0;
    
    this.switchScreen('play');
    this.nextQuestion();
    
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
        this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
    }, 1000);
  }

  nextQuestion() {
    if (this.currentQuestionIndex >= this.questionsQueue.length) {
      this.finishGame();
      return;
    }

    this.currentQuestion = this.questionsQueue[this.currentQuestionIndex];
    this.typingEngine.setWord(this.currentQuestion);
    this.updateHUD();
  }

  updateHUD() {
    this.els.word.innerText = this.currentQuestion.word;
    this.els.kana.innerText = this.currentQuestion.kana;
    this.renderRomanji();
    this.els.score.innerText = スコア: ;
    this.els.progress.innerText = ${this.currentQuestionIndex + 1} / ;
  }

  renderRomanji() {
    const target = this.typingEngine.displayRomanji;
    const typed = this.typingEngine.inputBuffer;
    
    let html = '';
    
    for (let i = 0; i < target.length; i++) {
        if (i < typed.length) {
             html += <span class="char-correct"></span>;
        } else if (i === typed.length) {
             html += <span class="char-next"></span>;
        } else {
             html += <span class="char-future"></span>;
        }
    }
    this.els.romanji.innerHTML = html;
  }

  handleKey(e) {
    if (this.state !== 'PLAY') return;

    if (e.key.length !== 1 && e.key !== 'Enter') return;
    
    if (e.code === 'Space') e.preventDefault();

    const isCorrect = this.typingEngine.checkInput(e.key);
    
    if (isCorrect) {
        if (this.typingEngine.isComplete()) {
            this.showExplanation();
        } else {
            this.renderRomanji();
        }
    } else {
        this.mistakes++;
        this.flashError();
    }
  }

  flashError() {
    document.body.style.backgroundColor = '#ffecec';
    setTimeout(() => document.body.style.backgroundColor = '', 100);
  }

  showExplanation() {
     clearInterval(this.timerInterval);
     this.els.modal.classList.add('active');
     this.els.explanation.innerText = this.currentQuestion.explanations[0] || "よくできました！";
     
     let count = 5;
     this.els.countdown.innerText = count;
     
     const interval = setInterval(() => {
         count--;
         this.els.countdown.innerText = count;
         if (count <= 0) {
             clearInterval(interval);
             this.els.modal.classList.remove('active');
             this.currentQuestionIndex++;
             this.nextQuestion();
             this.startTime = Date.now() - (this.elapsedTime * 1000);
             this.timerInterval = setInterval(() => {
                this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
            }, 1000);
         }
     }, 1000);
  }

  finishGame() {
      clearInterval(this.timerInterval);
      this.switchScreen('result');
      
      const totalTime = this.elapsedTime;
      let calcScore = 1000 - (totalTime * 5) - (this.mistakes * 20); 
      if (calcScore < 0) calcScore = 0;
      
      this.els.resScore.innerText = calcScore;
      this.els.resTime.innerText = totalTime;
      this.els.resMiss.innerText = this.mistakes;
  }
  
  retry() {
      if (this.questionsQueue.length > 0) {
        this.startStage(this.questionsQueue[0].level);
      } else {
        this.toStageSelect();
      }
  }
}

// Ensure game instance is attached to window so HTML onclick handlers can find it
document.addEventListener('DOMContentLoaded', () => {
    window.game = new GameManager(); // Explicit window assignment
});
