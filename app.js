// =========================
// 1) EDIT YOUR QUESTIONS HERE
// =========================
// Each question: text, options (A-D), and correctIndex (0=A, 1=B, 2=C, 3=D)
const QUESTIONS = [
  {
    text: "The endocrine system and the _____ system are both intimately involved in maintaining homeostasis.",
    options: ["cardiovascular", "digestive", "nervous", "respiratory"],
    correctIndex: 2
  },
  {
    text: "Chemical signals that affect the behavior of other glands and tissues are _____.",
    options: ["enzymes", "hormones", "carbohydrates", "metabolites"],
    correctIndex: 1
  },
  {
    text: "Which of the following is NOT a function of hormones?",
    options: ["maintain homeostasis", "influence metabolism", "influence growth and development", "breaking down nutrients"],
    correctIndex: 3
  }
  // Add the rest the same way...
];

// =========================
// 2) QUIZ SETTINGS
// =========================
const CHEAT_LIMIT_SECONDS = 7;

// =========================
// 3) UI ELEMENTS
// =========================
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const minutesInput = document.getElementById("minutesInput");

const qPill = document.getElementById("qPill");
const timePill = document.getElementById("timePill");

const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progressText");

const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const scoreBig = document.getElementById("scoreBig");
const scoreSmall = document.getElementById("scoreSmall");
const timeTaken = document.getElementById("timeTaken");
const reviewList = document.getElementById("reviewList");

// =========================
// 4) STATE
// =========================
let idx = 0;
let selectedIndex = null;
let answers = []; // user's selected index per question
let correctCount = 0;

let quizStartedAt = null;
let durationSec = 20 * 60;
let timerInterval = null;

let cheated = false;
let hiddenAt = null;
let cheatInterval = null;

// =========================
// 5) HELPERS
// =========================
function pad2(n){ return String(n).padStart(2,"0"); }
function fmtTime(totalSeconds){
  totalSeconds = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${pad2(m)}:${pad2(s)}`;
}
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }

function updateTop(){
  qPill.textContent = `Q ${Math.min(idx+1, QUESTIONS.length)} / ${QUESTIONS.length}`;
}

function setTimePillFromRemaining(rem){
  timePill.textContent = `⏱️ ${fmtTime(rem)}`;
}

// =========================
// 6) RENDER QUESTION
// =========================
function renderQuestion(){
  updateTop();
  nextBtn.disabled = true;
  selectedIndex = null;

  const q = QUESTIONS[idx];
  questionText.textContent = q.text;
  progressText.textContent = `Question ${idx+1} of ${QUESTIONS.length}`;

  optionsEl.innerHTML = "";
  q.options.forEach((optText, i) => {
    const opt = document.createElement("div");
    opt.className = "opt";
    opt.innerHTML = `
      <div class="bubble"></div>
      <div>
        <div><b>${String.fromCharCode(65+i)})</b> ${optText}</div>
      </div>
    `;
    opt.addEventListener("click", () => {
      document.querySelectorAll(".opt").forEach(x => x.classList.remove("selected"));
      opt.classList.add("selected");
      selectedIndex = i;
      nextBtn.disabled = false;
    });
    optionsEl.appendChild(opt);
  });
}

// =========================
// 7) TIMER
// =========================
function startTimer(){
  quizStartedAt = Date.now();
  const endAt = quizStartedAt + durationSec * 1000;

  setTimePillFromRemaining(durationSec);

  timerInterval = setInterval(() => {
    const rem = Math.ceil((endAt - Date.now()) / 1000);
    setTimePillFromRemaining(rem);

    if(rem <= 0){
      finishQuiz(false); // time up, not cheated
    }
  }, 250);
}

function stopTimer(){
  if(timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

// =========================
// 8) ANTI-CHEAT (7 seconds out of screen)
// =========================
function startCheatWatch(){
  // When tab becomes hidden (user switched tab/app), start counting
  document.addEventListener("visibilitychange", () => {
    if(!quizScreen || quizScreen.classList.contains("hidden")) return;
    if(cheated) return;

    if(document.hidden){
      hiddenAt = Date.now();
      // check repeatedly
      if(!cheatInterval){
        cheatInterval = setInterval(() => {
          if(hiddenAt && (Date.now() - hiddenAt) > CHEAT_LIMIT_SECONDS * 1000){
            finishQuiz(true);
          }
        }, 200);
      }
    } else {
      hiddenAt = null; // user returned
    }
  });

  // Extra: if window loses focus (desktop)
  window.addEventListener("blur", () => {
    if(quizScreen.classList.contains("hidden") || cheated) return;
    if(!hiddenAt) hiddenAt = Date.now();
  });
  window.addEventListener("focus", () => {
    hiddenAt = null;
  });
}

function stopCheatWatch(){
  hiddenAt = null;
  if(cheatInterval) clearInterval(cheatInterval);
  cheatInterval = null;
}

// =========================
// 9) FINISH
// =========================
function finishQuiz(isCheat){
  if(cheated) return;
  cheated = isCheat;

  stopTimer();
  stopCheatWatch();

  hide(quizScreen);
  show(resultScreen);

  const total = QUESTIONS.length;

  // Count correct if not cheated
  correctCount = 0;
  for(let i=0;i<total;i++){
    if(answers[i] === QUESTIONS[i].correctIndex) correctCount++;
  }

  const percent = Math.round((correctCount / total) * 100);

  const elapsedSec = quizStartedAt ? Math.floor((Date.now() - quizStartedAt)/1000) : 0;

  if(isCheat){
    resultTitle.textContent = "CHEATED ❌";
    resultSummary.textContent = `You left the screen for more than ${CHEAT_LIMIT_SECONDS} seconds. Result is invalid.`;
  } else {
    resultTitle.textContent = "Finished ✅";
    resultSummary.textContent = "Here is your score.";
  }

  scoreBig.textContent = `${percent}%`;
  scoreSmall.textContent = `${correctCount} / ${total} correct`;
  timeTaken.textContent = `Time: ${fmtTime(elapsedSec)}`;

  // Review list
  reviewList.innerHTML = "";
  for(let i=0;i<total;i++){
    const q = QUESTIONS[i];
    const user = answers[i];
    const ok = user === q.correctIndex;

    const item = document.createElement("div");
    item.className = "reviewItem";
    const userText = user == null ? "No answer" : `${String.fromCharCode(65+user)}) ${q.options[user]}`;
    const corText = `${String.fromCharCode(65+q.correctIndex)}) ${q.options[q.correctIndex]}`;

    item.innerHTML = `
      <div><b>Q${i+1}.</b> ${q.text}
        <span class="tag ${ok ? "ok":"bad"}">${ok ? "Correct":"Wrong"}</span>
      </div>
      <div class="muted" style="margin-top:6px">Your answer: ${userText}</div>
      <div class="muted">Correct: ${corText}</div>
    `;
    reviewList.appendChild(item);
  }
}

// =========================
// 10) FLOW
// =========================
function startQuiz(){
  // reset
  idx = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  cheated = false;
  correctCount = 0;
  hiddenAt = null;

  // duration
  const mins = Math.max(1, Math.min(180, Number(minutesInput.value || 20)));
  durationSec = mins * 60;

  hide(startScreen);
  hide(resultScreen);
  show(quizScreen);

  renderQuestion();
  startTimer();
}

function nextQuestion(){
  if(selectedIndex === null) return;

  answers[idx] = selectedIndex;

  idx++;
  if(idx >= QUESTIONS.length){
    finishQuiz(false);
    return;
  }
  renderQuestion();
}

function restart(){
  stopTimer();
  stopCheatWatch();
  hide(resultScreen);
  show(startScreen);
  setTimePillFromRemaining(0);
  qPill.textContent = `Q 1 / ${QUESTIONS.length}`;
}

// events
startBtn.addEventListener("click", () => {
  if(QUESTIONS.length === 0){
    alert("Please add questions inside app.js (QUESTIONS array).");
    return;
  }
  startCheatWatch();
  startQuiz();
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restart);

// initial top bar
qPill.textContent = `Q 1 / ${QUESTIONS.length}`;
timePill.textContent = `⏱️ 00:00`;
