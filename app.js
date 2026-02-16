// =========================
// QUESTIONS (ALL 65)
// - correctIndex: 0=A, 1=B, 2=C, 3=D, 4=E ...
// - options can be 3, 4, 5 ... (supported)
// =========================
const QUESTIONS = [
  { text:"The endocrine system and the _____ system are both intimately involved in maintaining homeostasis.", options:["cardiovascular","digestive","nervous","respiratory"], correctIndex:2 },
  { text:"Chemical signals that affect the behavior of other glands and tissues are _____.", options:["enzymes","hormones","carbohydrates","metabolites"], correctIndex:1 },
  { text:"Which of the following is NOT a function of hormones?", options:["maintain homeostasis","influence metabolism","influence growth and development","breaking down nutrients"], correctIndex:3 },
  { text:"Hormones can be put into two categories based on chemical make up. What are these categories?", options:["glands and cortex","proteins and carbohydrates","peptides (proteins) and steroids","endocrine and ectocrine"], correctIndex:2 },
  { text:"Peptide hormones function by binding to receptor proteins within the ________. Once the hormone binds to a receptor, it activates ______.", options:["cell: a second messenger","cell: particular genes","plasma membrane: a second messenger","plasma membrane: particular genes"], correctIndex:2 },
  { text:"The most common second messengers for peptide hormones are ______ and _____.", options:["peptide hormones and calcium","calcium and glucose","cAMP and calcium","cAMP and sodium"], correctIndex:2 },
  { text:"Steroid hormones function by binding to receptor proteins within the ________. Once the hormone binds to a receptor, it activates ______.", options:["nucleus: a second messenger","nucleus: particular genes","plasma membrane: a second messenger","plasma membrane: particular genes"], correctIndex:1 },
  { text:"From a medical perspective, ______ hormones can be taken orally because they are water-insoluble lipids and poorly digested.", options:["carbohydrate","peptide","protein","steroid"], correctIndex:3 },
  { text:"The production and release of hormones caused by a chemical such as calcium is a _____ mechanism.", options:["humoral","neural","sensory","hormonal"], correctIndex:0 },
  { text:"Identify the mechanisms that control the production and release of hormones.", options:["hormonal, neural and sensory","hormonal, humoral and neural","hormonal, humoral and sensory","humoral, neural and sensory"], correctIndex:1 },
  { text:"Most endocrine secretions are controlled by _____.", options:["positive feedback","negative feedback","neural feedback"], correctIndex:1 },
  { text:"Identify an endocrine gland within the brain.", options:["Adrenal gland","Pancreas","Pituitary gland","Parathyroid glands"], correctIndex:2 },
  { text:"Identify the endocrine gland that is located atop the kidneys.", options:["Adrenal gland","Hypothalamus","Pancreas","Thyroid gland"], correctIndex:0 },
  { text:"Identify the endocrine gland within the abdominal cavity, near the small intestine.", options:["Adrenal gland","Hypothalamus","Pancreas","Thyroid gland"], correctIndex:2 },
  { text:"Identify the hormone(s) produced by the hypothalamus.", options:["oxytocin","antidiuretic hormone","releasing and inhibiting hormones","All of the above are all produced in the hypothalamus."], correctIndex:3 },
  { text:"The hypothalamus secretes releasing and inhibiting hormones that regulate the production and secretion of hormones from the:", options:["adrenal cortex","anterior pituitary gland","posterior pituitary gland","thyroid gland"], correctIndex:1 },
  { text:"The target organs of ADH are the:", options:["adrenal cortex and liver","kidney and blood vessels","liver and kidey","pituitary and thyroid glands"], correctIndex:1 },
  { text:"Alcohol suppresses the secretion of ______ and thus _______ the reabsorption of water from the kidneys.", options:["ADH: decreases","ADH: increases","aldosterone: decreases","aldosterone: increases"], correctIndex:0 },
  { text:"ADH will stimulate _____ water reabsorption by the kidneys and ______ of the blood vessels; thus _____ blood pressure.", options:["decrease: constriction: increase","decrease: dilation: decrease","increase: constriction: increase","increase: dilation: decrease"], correctIndex:2 },
  { text:"Hormones produced by the hypothalamus and secreted by the posterior pituitary include:", options:["ADH and aldosterone","ADH and oxytocin","oxytocin and prolactin","cortisol and aldosterone"], correctIndex:1 },
  { text:"The release of oxytocin is controlled by _____ feedback.", options:["negative","neutral","positive"], correctIndex:2 },
  { text:"Identify the hormone that stimulates uterine contraction and the release of milk during nursing.", options:["ADH.","glucagon","oxytocin","prolactin"], correctIndex:2 },
  { text:"The inability to produce ADH causes ______.", options:["diabetes mellitus.","uterine contractions.","diabetes insipidus.","decreased urine volume."], correctIndex:2 },
  { text:"Exemplify hormones secreted by the anterior pituitary.", options:["anti-diuretic hormone and oxytocin","ACTH and insulin","growth hormone and LH","thyroxine and cortisol"], correctIndex:2 },
  { text:"Identify a gland that is controlled by an anterior pituitary hormone.", options:["pancreas","parathyroid","adrenal medulla","ovary"], correctIndex:3 },
  { text:"Adrenocorticotropic hormone (ACTH) stimulates the ___ to produce and release its hormones.", options:["anterior pituitary","adrenal medulla","kidneys","adrenal cortex"], correctIndex:3 },
  { text:"Identify the hormone that causes the development of the breast and milk production.", options:["oxytocin","prolactin","estrogen","antidiuretic hormone"], correctIndex:1 },
  { text:"Which of the following is NOT true of growth hormone?", options:["stimulates rate of amino acid entrance into the cell","stimulates protein synthesis in bones, cartilage, and muscles","promotes glucose metabolism","promotes fat metabolism"], correctIndex:2 },
  { text:"If growth hormone is overproduced in the adult, what is the resulting condition called?", options:["pituitary dwarfism","gigantism","acromegaly","myxedema"], correctIndex:2 },
  { text:"What gland requires iodine in order to produce its hormones?", options:["Adrenal cortex","Pancreas","Parathyroid glands","Thyroid gland"], correctIndex:3 },
  { text:"Underproduction of growth hormone during the growing years produces ______.", options:["myxedema.","gigantism.","pituitary dwarfism.","acromegaly."], correctIndex:2 },
  { text:"Simple goiter can be prevented by _________.", options:["antibiotics","adding iodine to the diet","surgery","hormone therapy"], correctIndex:1 },
  { text:"Identify a hormone that increases metabolic rate.", options:["thyroid hormone","calcitonin","aldosterone","parathyroid hormone"], correctIndex:0 },
  { text:"Hypothyroidism in adults due to an underactive thyroid is ____.", options:["Graves disease.","diabetes insipidus.","myxedema","acromegaly."], correctIndex:2 },
  { text:"An autoimmune form of hypothyroidism when the body destroys the thyroid cells is called", options:["Hashimoto's disease.","Graves disease.","myxedema.","acromegaly"], correctIndex:0 },
  { text:"An exophthalmic goiter is a symptom of ______.", options:["Graves disease.","Hashimoto's disease.","myxedema.","acromegaly."], correctIndex:0 },
  { text:"When blood calcium levels are high, ____ is released from the thyroid gland to deposit the excess calcium into the bones.", options:["parathyroid hormone","calcitonin","oxytocin","glucagon"], correctIndex:1 },
  { text:"The antagonistic hormone to calcitonin is _____.", options:["thyroxine.","growth hormone.","insulin.","parathyroid hormone."], correctIndex:3 },
  { text:"Which of the following is NOT true of parathyroid hormone action?", options:["Releases calcium from bone to raise blood calcium levels.","Decreases blood calcium levels.","Promotes reabsorption of calcium in the kidneys to raise blood calcium levels.","Activates Vitamin D to increase calcium absorption from nutrients in the intestines."], correctIndex:1 },
  { text:"Identify the gland that secretes cortisol and aldosterone.", options:["thyroid","parathyroid","pancreas","adrenal"], correctIndex:3 },
  { text:"Which of the following is NOT related to adrenal medulla structure and function?", options:["Inner portion of adrenal gland.","Controlled by the nervous system.","Regulates levels of glucose and minerals in the blood.","Produces epinephrine and norepinephrine."], correctIndex:2 },
  { text:"Epinephrine and norepinephrine from the adrenal medulla will produce the same results as the _____ nervous system.", options:["sympathetic","parasympathetic","somatic","central"], correctIndex:0 },
  { text:"Identify functions of calcium within the body.", options:["Clotting","Hardens bone","Nerve conduction and muscle contraction","All of the above."], correctIndex:3 },
  { text:"The main mineralocorticoid produced by the adrenal cortex is _____.", options:["cortisol.","glucagon.","epinephrine.","aldosterone."], correctIndex:3 },
  { text:"Which of the following is NOT true of cortisol?", options:["It counteracts the inflammatory response.","It promotes the breakdown of proteins to amino acids that the liver uses to convert to glucose.","It promotes metabolism of fatty acids instead of glucose.","It is a mineralocorticoid."], correctIndex:3 },
  { text:"Which of the following is NOT true of aldosterone?", options:["Targets kidney tubules to absorb sodium and water and to excrete potassium.","It is a mineralocorticoid.","Causes a decrease in urine volume.","It causes a decrease in blood pressure."], correctIndex:3 },
  { text:"The antagonistic hormone to aldosterone is ____.", options:["atrial natriuretic hormone (ANH).","antidiuretic hormone (ADH).","cortisol.","glucagon."], correctIndex:0 },
  { text:"Cortisol is produced by the:", options:["adrenal cortex","adrenal medulla","anterior pituitary","pancreas"], correctIndex:0 },
  { text:"Atrial natriuretic hormone (ANH) is produced by cells of the ___.", options:["kidney tubules.","right atrium of the heart.","adrenal cortex.","pancreas."], correctIndex:1 },
  { text:"Hyposecretion of adrenal cortex hormones can lead to ___.", options:["Addison disease.","diabetes mellitus.","Cushing syndrome.","cretinism."], correctIndex:0 },
  { text:"Which of the following is NOT true of Cushing syndrome?", options:["trunk (torso) becomes obese","basic blood pH","moon-shaped face","hyposecretion of adrenal cortex hormones."], correctIndex:3 },
  { text:"The antagonistic hormone to insulin is __________.", options:["cortisol","norepinephrine/epinephrine","glucagon","mineralocorticoids"], correctIndex:2 },
  { text:"Which of the following is NOT an action of insulin?", options:["Stimulates cellular absorption of glucose.","Stimulates cellular usage of glucose for energy.","Stimulates the breakdown of glycogen.","Lowers blood glucose levels."], correctIndex:2 },
  { text:"When blood glucose levels are low, the ______ will increase the secretion of ______.", options:["adrenal cortex: aldosterone","pancreas; glucagon","pancreas: insulin","posterior pituitary: ADH"], correctIndex:1 },
  { text:"Which of the following is NOT true of glucagon?", options:["produced by the pancreas","increases blood glucose levels","promotes the use of fat and protein instead of glucose","stimulates the liver to store glucose as glycogen"], correctIndex:3 },
  { text:"Identify a characteristic of type I diabetes (IDDM).", options:["Development has a correlation with obesity.","Most common form of diabetes.","Body cells do not respond to insulin.","Treatment usually involves insulin injections."], correctIndex:3 },
  { text:"Which of the following symptoms of diabetes mellitus is correctly matched to its description?", options:["polyuria - excessive thirst","polyphagia - excessive ketones in the blood","polydipsia - excessive urine","glycosuria - excessive sugar in the urine"], correctIndex:3 },
  { text:"Which of the following is true of female sex hormones?", options:["Progesterone is responsible for female secondary sex characteristics.","Estrogen is necessary for maturation of the ovum.","Estrogen does not aid in breast development.","Progesterone helps the uterus to grow."], correctIndex:1 },
  { text:"Which of the following is NOT true of testosterone?", options:["growth of the penis and testes.","brings about the male secondary sex characteristics.","can cause baldness.","controlled from the thyroid gland."], correctIndex:3 },
  { text:"Which of the following is NOT a possible effect of anabolic steroid use?", options:["Breast enlargement in males.","Balding.","Severe acne.","Stunted growth in youngsters.","A, B, C, and D are all possible effects of steroid use."], correctIndex:4 },
  { text:"Melatonin from the pineal gland regulates ____.", options:["sleep-wake cycles.","water balance.","sexual development.","Both A and C"], correctIndex:3 },
  { text:"What is the hormone produced by adipose tissue which signals satiety?", options:["melatonin","leptin","thymosins","glucagons"], correctIndex:1 },
  { text:"Identify the growth factor that is released by cancer cells to create a capillary network that aids the cancer growth.", options:["macrophage colony-stimulating factor","platelet derived growth factor","tumor angiogenesis factor","epidermal growth factor"], correctIndex:2 },
  { text:"Which of the following hormones does NOT aid in regulating fuel metabolism?", options:["insulin","aldosterone","glucagon","cortisol"], correctIndex:1 },
  { text:"Which of the following hormones does NOT help regulate blood pressure and volume?", options:["atrial natriuretic hormone (ANH)","aldosterone","oxytocin","antidiuretic hormone (ADH)"], correctIndex:2 }
];

// =========================
// SETTINGS
// =========================
const CHEAT_LIMIT_SECONDS = 7;
const QUIZ_DURATION_SECONDS = 30 * 60; // fixed 30 minutes

// =========================
// UI ELEMENTS
// =========================
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

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
// STATE
// =========================
let idx = 0;
let selectedIndex = null;
let answers = []; // user's selected index per question
let correctCount = 0;

let quizStartedAt = null;
let durationSec = QUIZ_DURATION_SECONDS;
let timerInterval = null;

let cheated = false;
let hiddenAt = null;
let cheatInterval = null;

// =========================
// HELPERS
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

function letter(i){ return String.fromCharCode(65 + i); }

function updateTop(){
  qPill.textContent = `Q ${Math.min(idx+1, QUESTIONS.length)} / ${QUESTIONS.length}`;
}

function setTimePillFromRemaining(rem){
  timePill.textContent = `⏱️ ${fmtTime(rem)}`;
}

// =========================
// RENDER QUESTION
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
        <div><b>${letter(i)})</b> ${optText}</div>
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
// TIMER
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
// ANTI-CHEAT (7 seconds out of screen)
// =========================
function startCheatWatch(){
  document.addEventListener("visibilitychange", () => {
    if(quizScreen.classList.contains("hidden")) return;
    if(cheated) return;

    if(document.hidden){
      hiddenAt = Date.now();
      if(!cheatInterval){
        cheatInterval = setInterval(() => {
          if(hiddenAt && (Date.now() - hiddenAt) > CHEAT_LIMIT_SECONDS * 1000){
            finishQuiz(true);
          }
        }, 200);
      }
    } else {
      hiddenAt = null;
    }
  });

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
// FINISH
// =========================
function finishQuiz(isCheat){
  if(cheated) return;
  cheated = isCheat;

  stopTimer();
  stopCheatWatch();

  hide(quizScreen);
  show(resultScreen);

  const total = QUESTIONS.length;

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

  reviewList.innerHTML = "";
  for(let i=0;i<total;i++){
    const q = QUESTIONS[i];
    const user = answers[i];
    const ok = user === q.correctIndex;

    const item = document.createElement("div");
    item.className = "reviewItem";

    const userText = (user == null)
      ? "No answer"
      : `${letter(user)}) ${q.options[user]}`;

    const corText = `${letter(q.correctIndex)}) ${q.options[q.correctIndex]}`;

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
// FLOW
// =========================
function startQuiz(){
  idx = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  cheated = false;
  correctCount = 0;
  hiddenAt = null;

  durationSec = QUIZ_DURATION_SECONDS;

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

  setTimePillFromRemaining(QUIZ_DURATION_SECONDS);
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
timePill.textContent = `⏱️ ${fmtTime(QUIZ_DURATION_SECONDS)}`;
