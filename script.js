const reasons = [
  "You make me laugh even on my worst days",
  "You always listen to me patiently",
  "The way you look at me makes my heart melt",
  "You remember the little details about me",
  "You support my dreams and believe in me",
  "You make me laugh like no one else can.",
  "You turn ordinary moments into magical memories.",
  "You know exactly how to cheer me up.",
  "You make me feel safe and loved.",
  "You support me in everything I do.",
  // "You understand me without me having to say a word.",
  "You are patient with my moods.",
  "You notice the little things that make me happy.",
  // "You inspire me to be a better person.",
  "You make me feel appreciated every single day.",
  "You are honest and trustworthy.",
  "You love me for who I truly am.",
  "You hold me close when I need comfort.",
  "You surprise me in the sweetest ways.",
  "You make me feel special in small ways.",
  "You are kind to everyone around you.",
  "You respect my opinions and feelings.",
  "You make time for me even when busy.",
  "You make me feel like home.",
  "You have the most beautiful smile.",
  "You are my favorite person to talk to.",
  "You make me feel confident.",
  "You love my quirks.",
  "You support my dreams and ambitions.",
  "You are adventurous and fun to be with.",
  "You make me feel lucky to have you.",
  "You listen to me without judgment.",
  "You care about my happiness more than anything.",
  "You are sweet even in little gestures.",
  // "You make my heart skip a beat.",
  "You are romantic in your own way.",
  "You are my best friend and lover.",
  "You are my safe place to be myself.",
  "You make sacrifices for me without complaint.",
  "You encourage me when I doubt myself.",
  "You are thoughtful and considerate.",
  // "You make ordinary days exciting.",
  "You make me feel beautiful inside and out.",
  "You always have my back.",
  "You make me feel loved in ways I never knew possible.",
  "You are dependable and reliable.",
  "You make me laugh until my cheeks hurt.",
  "You have a kind and loving heart.",
  "You believe in us even when things get tough.",
  "You make me feel cherished.",
  "You are my favorite person to dream with.",
  "You accept me completely, flaws and all.",
  // "You are my partner in crime.",
  "You make me feel like the happiest version of myself.",
  "You are simply irreplaceable.",

  // 👉 Add the rest until you have 50 reasons
];
// Fisher–Yates Shuffle Algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle reasons at the start
const shuffledReasons = shuffle([...reasons]);


let current = -1;
const title = document.getElementById("title");
const reason = document.getElementById("reason");
const book = document.getElementById("book");

function updatePage() {
  const backBtn = document.querySelector(".nav button:first-child");
  const nextBtn = document.querySelector(".nav button:last-child");

  if (current === -1) {
  title.innerText = "50 Reasons Why I Love You ❤️";
  reason.innerText = "Click next to begin!";
  backBtn.classList.add("hidden");  // hide back but keep space
  nextBtn.classList.remove("hidden"); // show next
} else if (current < reasons.length) {
  title.innerText = `Reason #${current + 1}`;
 reason.innerText = shuffledReasons[current];

  backBtn.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
} else {
  title.innerText = "The End ❤️";
  reason.innerHTML = `
      <div style="flex-direction: column;">
          And I’ll keep finding more reasons every day… 
          <br><br>
          Happy Birthday, Boyfie.
          <br>
          I love you.
          <br>
          <button onclick="showSecretPage()" style="margin-top:15px;padding:10px 20px;border:none;background:#d63384;color:#fff;border-radius:8px;cursor:pointer;font-family: 'Pacifico', cursive;font-weight: 400;">
          One More Reason?
          </button>
      </div>
  `;
  backBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden"); // hide next
  launchConfetti();
}

}


function nextPage() {
  if (current < reasons.length) {
    current++;
    triggerPageTurn();
    setTimeout(updatePage, 300);
  }
}

function prevPage() {
  if (current > -1) {
    current--;
    triggerPageTurn();
    setTimeout(updatePage, 300);
  }
}

function triggerPageTurn() {
  book.classList.add("page-turn");
  setTimeout(() => book.classList.remove("page-turn"), 600);
}

// Initial load
updatePage();
// Swipe detection for mobile
let touchStartX = 0;
let touchEndX = 0;

book.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

book.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  let diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 50) { // swipe threshold
    if (diff < 0) { 
      // Swipe left → Next
      book.classList.add("swipe-left");
      setTimeout(() => {
        book.classList.remove("swipe-left");
        nextPage();
      }, 300);
    } else { 
      // Swipe right → Back
      book.classList.add("swipe-right");
      setTimeout(() => {
        book.classList.remove("swipe-right");
        prevPage();
      }, 300);
    }
  }
}
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 800); // one heart every 0.8s
function launchConfetti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      startVelocity: 30,
      spread: 360,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
function showSecretPage() {
  title.innerText = "Secret Reason #51 💌";
  reason.innerHTML = `
  <div style="flex-direction: column;">
    The biggest reason is… <br><br>
    <b>YOU.</b>
    <br>
    There isn't any greater reason than this,
    <br>
    <br>
    Thank you for being there forever.
   </div> 
  `;
  launchConfetti();
}
