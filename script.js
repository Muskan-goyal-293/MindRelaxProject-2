// localStorage.clear()

/* ===================== DOM SELECTION ===================== */
let  musicmainpage = document.querySelector(".musicmainpage");
let positivemainpage = document.querySelector(".positivemainpage");
let positiveh2 = document.querySelector(".positiveh2");
let emojimainpage = document.querySelector(".emojimainpage");
let negativemainpage = document.querySelector(".negativemainpage");
let negativeh2 = document.querySelector(".negativeh2");

let allMusicbox = document.querySelector(".allmusicbox");
let musicsection = document.querySelector(".music");
let musicheadingh2 = document.querySelector(".musicheadingh2");

let positiviboxinput = document.querySelector(".positiviboxinput");
let commonbtn = document.querySelectorAll(".commonbtn");
let  add = document.querySelector("#add")
let lengthspan = document.querySelector(".lengthspan");
let popup = document.querySelector(".popup");
let positiveform = document.querySelector(".positiveform");
let allpositivemsg = document.querySelector(".allpositivemsg");

let emoji = document.querySelector(".emoji");
let emojiepopup = document.querySelector(".emojiepopup");
let range = document.querySelector(".range");
let save = document.querySelector(".save");
let emojieshowbox = document.querySelector(".emojieshowbox");
let emojih2 = document.querySelector(".emojih2");

let root = document.documentElement;
/* ===================== DATE ===================== */

let now = new Date();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let week = now.getDay();

/* ===================== STATIC DATA ===================== */

let musicQuotes = [
  "This is your time, keep calm and let the music heal you.",
  "Close your eyes, breathe slowly, and feel the rhythm.",
  "Music is the pause button of life.",
  "Let the sound carry your worries away.",
  "Every note is a reminder to slow down and stay present.",
  "When words fail, music speaks to the heart.",
  "Stay calm, stay focused, and let the melody guide you.",
  "Your soul deserves moments of peaceful music.",
];

const headingArr = [
  "0 Bahut gussa 😡",
  "1 Dimag ghoom raha 🥴",
  "2 Udaas lag raha 😞",
  "3 Mood off 🙁",
  "4 Rona aa raha 😭",
  "5 Dil bhaari 😢",
  "6 Thoda chill 😝",
  "7 Normal 😑",
  "8 Theek hoon 🙂",
  "9 Khush 😀",
  "10 Bahut khush 😁",
];

const emojiArr = [
  "😡",
  "🥴",
  "😞",
  "🙁",
  "😭",
  "😢",
  "😝",
  "😑",
  "🙂",
  "😀",
  "😁",
];

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const positiveLines = [
  "✨ You are doing better than you think.",
  "🌸 Small steps every day create big changes.",
  "☀️ Today is a new chance to grow and smile.",
  "💪 You are stronger than yesterday.",
  "🌈 Even slow progress is still progress.",
  "🕊️ Breathe in peace, breathe out stress.",
  "🌻 Your efforts will pay off soon.",
  "You are doing better than you think 🌱",
  "Small steps every day lead to big changes ✨",
  "It's okay to slow down, you are not late ⏳",
  "Your efforts matter, even when no one sees them 💪",
  "Today is a new chance to feel lighter ☀️",
  "Be kind to yourself, you're still growing 🌸",
  "Peace begins when you stop being too hard on yourself 🤍"
];

const tiredNegativeThoughts = [
  "I feel completely drained today, even small things feel heavy.",
  "My body is tired and my mind just wants to shut down.",
  "I'm doing my best, but right now I feel exhausted.",
  "Everything feels slow when energy is missing.",
  "I need rest, not pressure, not expectations.",
  "Today is one of those days where tiredness wins.",
  "I don't feel lazy, I feel worn out."
];

const color ={
 default:{
first:"#DECDDD",
sec:"#B59DBD",
third:"#8A6B95",
four:"#5C3D69",
five:"#261631",
 },
 light:{
first:"#F6EAF3",
sec:"#E4D6E9",
third:"#CDC7E3",
four:"#B4A9D2",
five:"#A88DC0",
 },dark:{
first:"#C7A2BF",
sec:"#795980",
third:"#211532",
four:"#402D4B",
five:"#0D0619",
 },brown:{
first:"#FCEAEA",
sec:"#FBB8C1",
third:"#C0707D",
four:"#886869",
five:"#28201D",
 },green:{
first:"#F1FBFA",
sec:"#CCE4EE",
third:"#87ACC6",
four:"#577F98",
five:"#34667e",
 },
 blue:{
  first:"#EEECFA",
     sec:"#DDEAFA",
third:"#F5CEE9",
four:"#B8B0D5",
five:"#7F9BC3",
 }
}
function colorchangefun(){
  let colorval = localStorage.getItem("colorval")
 if(colorval == null){
  root.style.setProperty("--first" ,"#DECDDD")
  root.style.setProperty("--sec","#B59DBD")
  root.style.setProperty("--third","#8A6B95")
  root.style.setProperty("--four","#5C3D69")
  root.style.setProperty("--five","#261631") 
}

else{
root.style.setProperty("--first" ,color[colorval].first)
  root.style.setProperty("--sec",color[colorval].sec)
  root.style.setProperty("--third",color[colorval].third)
  root.style.setProperty("--four",color[colorval].four)
  root.style.setProperty("--five",color[colorval].five)


}
}
colorchangefun()



let theam = document.querySelector("#theam");
theam.addEventListener("click",()=>{
  console.log(theam.value)
  localStorage.setItem("colorval" , theam.value)
colorchangefun()


})



/* ===================== MOOD MESSAGES ===================== */

const moodMap = {
  0: [
    "😡 Take a deep breath, anger won’t solve it.",
    "😡 Pause for a moment, you’re stronger than this.",
    "😡 Silence is sometimes the best reply.",
  ],
  1: [
    "🥴 It’s okay to feel lost sometimes.",
    "🥴 Slow down, clarity will come.",
    "🥴 One step at a time is enough.",
  ],
  2: [
    "😞 This phase will pass, stay strong.",
    "😞 Your feelings are valid.",
    "😞 You’re not alone in this.",
  ],
  3: [
    "🙁 Not every day needs to be perfect.",
    "🙁 Bad moments don’t define you.",
    "🙁 Tomorrow can be better.",
  ],
  4: [
    "😭 Let it out, healing starts with tears.",
    "😭 Pain today, strength tomorrow.",
    "😭 You’ll smile again.",
  ],
  5: [
    "😢 It’s okay to feel deeply.",
    "😢 Your heart is still healing.",
    "😢 Be gentle with yourself.",
  ],
  6: [
    "😝 Smile more, worry less.",
    "😝 Life feels lighter when you laugh.",
    "😝 Enjoy the little moments.",
  ],
  7: [
    "😑 Just another calm moment.",
    "😑 Nothing special, nothing bad.",
    "😑 Peace is underrated.",
  ],
  8: [
    "🙂 Everything feels balanced.",
    "🙂 Peace looks good on you.",
    "🙂 Keep this calm energy.",
  ],
  9: [
    "😀 Happiness suits you well.",
    "😀 Today feels bright.",
    "😀 Smile, it’s contagious.",
  ],
  10: [
    "😁 This is your moment!",
    "😁 Energy level: unstoppable.",
    "😁 Pure joy everywhere.",
  ],
};

/* ===================== QUOTES ===================== */

function quotesShowFnc(arr, elem) {
  let count = 0;
  let id = setInterval(() => {
    let random = Math.floor(Math.random() * arr.length);
    elem.innerText = arr[random];
    count++;
    if (count === arr.length) clearInterval(id);
  }, 4000);
}

let commomsectionproperty = document.querySelectorAll(".commomsectionproperty")
let div = document.querySelectorAll(".div");
div.forEach((val)=>{
  val.addEventListener("click",()=>{
   
    let box = commomsectionproperty[val.id];
    box.style.display ="block"
  })
})


musicmainpage.addEventListener("click", () => {
  quotesShowFnc(musicQuotes, musicheadingh2);
});

positivemainpage.addEventListener("click",()=>{
  quotesShowFnc(positiveLines, positiveh2)
})

negativemainpage.addEventListener("click",()=>{
  quotesShowFnc(tiredNegativeThoughts , negativeh2)
})

let back = document.querySelectorAll(".back");
back.forEach((val)=>{
  val.addEventListener("click",()=>{
    
 let box = commomsectionproperty[val.id];
    box.style.display ="none"
   })
})

/* ===================== MUSIC ===================== */

let MusicArr = JSON.parse(localStorage.getItem("music")) || [
  { music: "./music/1.mp3", isfavrate: false },
  { music: "./music/2.mp3", isfavrate: false },
  { music: "./music/3.mp3", isfavrate: false },
  { music: "./music/4.mp3", isfavrate: false },
  { music: "./music/5.mp3", isfavrate: false },
  { music: "./music/6.mp3", isfavrate: false },
  { music: "./music/7.mp3", isfavrate: false },
  { music: "./music/8.mp3", isfavrate: false },
  { music: "./music/9.mp3", isfavrate: false },
  { music: "./music/10.mp3", isfavrate: false },
  { music: "./music/11.mp3", isfavrate: false },
  { music: "./music/12.mp3", isfavrate: false },
  { music: "./music/13.mp3", isfavrate: false },
  { music: "./music/14.mp3", isfavrate: true },
];

localStorage.setItem("music", JSON.stringify(MusicArr));

function MusicDisplayFunction() {
  let cluster = "";
  MusicArr.forEach((val, idx) => {
    cluster += `
    <div class="musicdivs">
      <audio controls src="${val.music}"></audio>
      <div class="icons" data-id="${idx}">
        <i class="ri-heart-fill" style="color:${
          val.isfavrate ? "red" : "gray"
        }"></i>
      </div>
    </div>`;
  });
  allMusicbox.innerHTML = cluster;
}
MusicDisplayFunction();

allMusicbox.addEventListener("click", (e) => {
  let iconBox = e.target.closest(".icons");
  if (!iconBox) return;
  let idx = iconBox.dataset.id;
  MusicArr[idx].isfavrate = !MusicArr[idx].isfavrate;
  localStorage.setItem("music", JSON.stringify(MusicArr));
  MusicDisplayFunction();
});

/* ===================== POSITIVE NOTES ===================== */

positiveform.addEventListener("submit", (e) => e.preventDefault());

let MAX_LENGTH = 150;
let msg = JSON.parse(localStorage.getItem("msg")) || [];

function displayInputmsgfnc() {
  allpositivemsg.innerHTML = msg
    .map(
      (val) => `
    <div class="msgbox">
      <span class="date">${val.date}</span>
      <p class="positivepera">${val.inputmsg}</p>
    </div>`
    )
    .join("");
}
displayInputmsgfnc();

positiviboxinput.addEventListener("input", () => {
  if (positiviboxinput.value.length > MAX_LENGTH) {
    positiviboxinput.value = positiviboxinput.value.slice(0, MAX_LENGTH);
    popup.style.display = "block";
  } else popup.style.display = "none";
  lengthspan.innerText = `${positiviboxinput.value.length} / ${MAX_LENGTH}`;
});

add.addEventListener("click", () => {
  let val = positiviboxinput.value.trim();
  if (!val) return alert("Sometimes it's hard to write, but don't be sad 💛");
  msg.push({ date, inputmsg: val });
  localStorage.setItem("msg", JSON.stringify(msg));
  localStorage.setItem("currentmonth", JSON.stringify(month));
  localStorage.setItem("currentyear", JSON.stringify(year));
  displayInputmsgfnc();
  positiviboxinput.value = "";
});

/* ===================== EMOJI ===================== */

let flag = null;
 emojimainpage.addEventListener("click", ()=>{ 
   if(flag !== null){ 
    clearInterval(flag) 
   } 
    let count =0; 
     flag = setInterval (()=>{ 
       emojih2.innerText = headingArr[count]; 
        count++; 
         if(count == headingArr.length){ 
           clearInterval(flag); 
            flag ==null;
           } 
           } , 2000) 
           emojiepopup.style.display ="block" 
           
          setTimeout(()=>{ 
            
            emojiepopup.style.display ="none" 
           },3000) 
           
        })


let emojis = JSON.parse(localStorage.getItem("emojis")) || [];
function emojishowFnx() {
  emojieshowbox.innerHTML = emojis
    .map(
      (val) => `
    <div class="emojis">
      <span class="date">${val.todaydate}</span>
      <p class="emojipera">${val.mood}</p>
    </div>`
    )
    .join("");
}
emojishowFnx();

let obj = JSON.parse(localStorage.getItem("objEmoji")) || {};

function moodshowfnc(arr) {
  alert(arr[Math.floor(Math.random() * arr.length)]);
}

save.addEventListener("click", () => {
  let val = Number(range.value) - 1;
  if (val < 0) return;

  let todaydate = JSON.parse(localStorage.getItem("emojieDate"));
  if (todaydate === date) return alert("you have already saved mood");

  moodshowfnc(moodMap[val]);

  let em = emojiArr[val];
  emojis.push({ todaydate: date, mood: em });
  obj[em] = (obj[em] || 0) + 1;

  localStorage.setItem("emojis", JSON.stringify(emojis));
  localStorage.setItem("objEmoji", JSON.stringify(obj));
  localStorage.setItem("emojieDate", JSON.stringify(date));
  localStorage.setItem("emojimonth", JSON.stringify(month));
  localStorage.setItem("emojieyear", JSON.stringify(year));

  emojishowFnx();
  save.style.pointerEvents = "none";
  save.style.opacity = "0.5";
});

/* ===================== WEEKLY ===================== */

function weekfunc() {
  if (weekDays[week] !== "Sunday") return;
  let shown = localStorage.getItem("weekAlert");
  if (shown) return;

  let max = -Infinity,
    maxmood = "";
  for (let k in obj)
    if (obj[k] > max) {
      max = obj[k];
      maxmood = k;
    }

  if (maxmood) alert(`This week's most used mood is ${maxmood} (${max})`);
  else alert("there is no mood save in this week 😅");

  localStorage.setItem("weekAlert", "true");
  localStorage.removeItem("objEmoji");
  obj = {};
}
weekfunc();

if (weekDays[week] === "Monday") localStorage.removeItem("weekAlert");

/* ===================== MONTH RESET ===================== */

let emojimonth = JSON.parse(localStorage.getItem("emojimonth"));
let emojiyear = JSON.parse(localStorage.getItem("emojieyear"));

if (month !== emojimonth || year !== emojiyear) {
  localStorage.removeItem("emojis");
  localStorage.removeItem("emojieDate");
  localStorage.removeItem("emojimonth");
  localStorage.removeItem("emojieyear");
  localStorage.removeItem("objEmoji");
  emojis = [];
  obj = {};
  emojishowFnx();
}

const negativeform = document.querySelector(".negativeform");
const neagtivetextinput = document.querySelector("#neagtivetextinput");
const negativebtn = document.querySelector("#negativebtn");
const pribtn = document.querySelector("#pri");
const dispalynegativemsgbox = document.querySelector(".dispalynegativemsgbox");
const previews = document.querySelector(".previews");

/* ================= DATA ================= */

let negativemsg = JSON.parse(localStorage.getItem("negativemsg")) || [];
let prevmsg = JSON.parse(localStorage.getItem("privewmsg")) || [];

/* ================= SHOW NEGATIVE MSG ================= */

function negativemsgshowfnc() {
  let cluter = "";
  negativemsg.forEach((elem) => {
    cluter += `
      <div class="msgcontainer">
        <span class="date">${elem.date}</span>
        <p class="negativepera">${elem.negativeinputmsg}</p>
      </div>`;
  });
  dispalynegativemsgbox.innerHTML = cluter;
}
negativemsgshowfnc();

/* ================= FORM ================= */

negativeform.addEventListener("submit", (e) => {
  e.preventDefault();
});

/* ================= SAVE NEGATIVE MSG ================= */

negativebtn.addEventListener("click", () => {
  let value = neagtivetextinput.value.trim();
  if (value === "") {
    alert("Write something, don't keep it inside 🙂");
    return;
  }

  localStorage.setItem("negativeboxdate", JSON.stringify(date));

  negativemsg.push({
    date: date,
    negativeinputmsg: value,
  });

  prevmsg.push({
    negativeinputmsg: value,
  });

  localStorage.setItem("negativemsg", JSON.stringify(negativemsg));
  localStorage.setItem("privewmsg", JSON.stringify(prevmsg));
  localStorage.setItem("nmonth", JSON.stringify(month));
  localStorage.setItem("nyear", JSON.stringify(year));

  neagtivetextinput.value = "";
  negativemsgshowfnc();
});

/* ================= PREVIEW ================= */
let pricontainer = document.querySelector(".pricontainer");
function privewsmsgshow() {
  let negativeboxdate = JSON.parse(localStorage.getItem("negativeboxdate"));
  if (!pricontainer) return;
  if (date !== negativeboxdate) {
    let cluter = "";
    prevmsg.forEach((elem) => {
      cluter += `
        <div class="previewsmsgdiv">
          <p class="previewsmsgp">${elem.negativeinputmsg}</p>
        </div>`;
    });
    pricontainer.innerHTML = cluter;
  }
}
let pri = document.querySelector(".pri");
pribtn.addEventListener("click", (e) => {
  e.preventDefault();
  pri.style.display = "block";
  privewsmsgshow();
});

let prebackbtn = document.querySelector(".pribtn");
prebackbtn.addEventListener("click",()=>{
  pri.style.display = "none"
})



/* ================= MONTH / YEAR RESET ================= */

let nmonth = JSON.parse(localStorage.getItem("nmonth"));
let nyear = JSON.parse(localStorage.getItem("nyear"));

if (nmonth !== month || nyear !== year) {
  localStorage.removeItem("negativeboxdate");
  localStorage.removeItem("negativemsg");
  localStorage.removeItem("privewmsg");
  localStorage.removeItem("nmonth");
  localStorage.removeItem("nyear");

  negativemsg = [];
  prevmsg = [];
  negativemsgshowfnc();
  pricontainer.innerHTML = "";
}
