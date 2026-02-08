const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;
let textIndex = 0;

const noTexts = [
  "No 💔",
  "Are you sure? 😢",
  "Please say yes 🥺",
  "Don't break my heart 💔",
  "Think again 😭",
  "I'm begging you 😩",
  "Just tap yes already 💘",
];

function teaseUser() {
  // Change No button text
  textIndex = (textIndex + 1) % noTexts.length;
  noBtn.textContent = noTexts[textIndex];

  // Grow Yes button
  scale += 0.35;
  yesBtn.style.zIndex = 10;
  yesBtn.style.left = "50%";
  yesBtn.style.transform = `translateX(-30%) scale(${scale})`;

  noBtn.style.fontSize = `1rem`;

  // Auto accept 😈
  if (scale >= 3) {
    yesBtn.click();
  }
}

// Desktop
noBtn.addEventListener("mouseenter", teaseUser);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  teaseUser();
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
        <div style="
          display:flex;
          flex-direction: column;
          justify-content:center;
          align-items:center;
          height:100vh;
          overflow: hidden;
          text-align:center;">
          <img
          src="./src/yes-pic.png"
          alt="Say YES!"
          class="main-pic"
          />
          <h1>
            I knew you'd say YES!
          </h1>
          <h2>Happy Valentine’s Day 💖</h2>
        </div>
      `;
});
