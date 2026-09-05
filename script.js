/* SVG used only where no matching PNG was supplied (the little "Forever" stamp hearts) */
const HEART_SVG = `<svg viewBox="0 0 100 90"><path d="M50,84 C10,58 6,26 30,14 C42,8 50,22 50,22 C50,22 58,8 70,14 C94,26 90,58 50,84 Z" fill="currentColor"/></svg>`;
function injectSVGs() {
  document.body.innerHTML = document.body.innerHTML.replaceAll(
    "HEART_SVG",
    HEART_SVG,
  );
}

const PLACEHOLDER_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
     <rect width='100%' height='100%' fill='#ead9b8'/>
     <text x='50%' y='48%' font-family='Georgia' font-size='18' fill='#4a3218' text-anchor='middle'>add your photo</text>
     <text x='50%' y='58%' font-family='Georgia' font-size='12' fill='#4a3218' text-anchor='middle'>see README.md</text>
   </svg>`,
  );

/* ===========================================================
   CONFIG — personalize everything here
   =========================================================== */
const CONFIG = {
  girlfriendName: "Rhian",
  openingLine1: "Happy Birthday",
  openingLine2: "Babyanniee",

  photos: [
    "assets/images/yan1.png",
    "assets/images/yan2.png",
    "assets/images/yan3.png",
    "assets/images/yan4.png",
  ],
  drawing: "assets/images/drawing.webp",

  letterText: `My Dearest {{name}},

I was thinking about what to write to you and honestly, I don't even know how to put everything into words gosh rhian hehehe. But there's one thing that i really want you to know today lovie.
I know you've told me before that your birthday doesn't really feel that special, especially because there were times when even people from your family forgot about it. And gosh, baby, that honestly makes me a little sad because you deserve to feel remembered.
So I want to tell you something.
As long as I live, you won't be forgotten. Ever!

Your birthday is going to be special to me simply because it's your birthday. It's the day my Yannie my Rhian was born.
i don't want you to ever feel like you need to do something amazing for your birthday to make it worth celebrating.
You being born is already enough reason for me.

So even if sometimes you feel unnoticed, or you feel like nobody remembers, I hope you remember that there's someone who does Mahal😁.

really hope this next year is kinder to you, baby. I hope you become more confident in yourself. I hope you get to experience things that make you genuinely happy. I hope you achieve the things you're working so hard for. And I hope you realize more and more that you're worth so much more than the doubts you sometimes have about yourself.
And whenever you forget that...
I'll remind you again and again and again until you start believing it hehe.

So happy birthday, babyyy.

Please enjoy your day, eat something yummy, smile a lot, let people spoil you a little hehehe,

Hmm…gosh you might be wondering why I called you Rhian this time. 
I know I almost never call you by your real name.
But today, I wanted to call you by the name you were given when you first came into this world.

And honestly, I'm just really thankful that little Rhian was born.  Because if she wasn't, I wouldn't have my Yannie today

And goshhh, look at me getting all emotional now 😭 Someone is definitely cutting onions here, not me hahaha.

Happy Birthday Rhiannie, My Love, I Love You So Much ❤️

~Your Chitresh`,
  letterSignoff: "Forever Yours,",

  songs: [
    {
      title: "Someday",
      artist: "By Ridleys",
      file: "assets/audio/The Ridleys - Someday (Lyrics).mp3",
      message:
        "We keep saying 'someday' and yeah, it hurts sometimes. But I've started to realize that all this waiting is just proof that you're worth every single mile",
    },
    {
      title: "Buko",
      artist: "By Jireh Lim",
      file: "assets/audio/Buko - Jireh Lim (Lyrics).mp3",
      message:
        "You know that feeling when you're so used to having something sweet in your life that you can't imagine it any other way? That's you. You're my favorite kind of constant, Sweetannie",
    },
    {
      title: "Passenger Seat",
      artist: "By Stephen Speaks",
      file: "assets/audio/Passenger Seat - Stephen Speaks (Lyrics) 🎵.mp3",
      message:
        "Everyone else can sit in the back, the spot next to me? it got your name yamuni, my passenger seat is always reserved for you love!",
    },
    {
      title: "Yellow",
      artist: "By Coldplay",
      file: "assets/audio/Coldplay - Yellow (Official Video).mp3",
      message:
        "I look at the moon sometimes and wonder if you're looking at it too. That's the thing about distance, it makes the smallest shared things feel like everything",
    },
    {
      title: "When I Met You",
      artist: "By APO Hiking Society",
      file: "assets/audio/APO Hiking Society - When I Met You (Official Lyric Video).mp3",
      message:
        "I've met a lot of people, but you my love? you felt different, like meeting an old friend i never knew i had, except i wanted know everything about you!",
    },
    {
      title: "Perfect",
      artist: "By Ed Sheeran",
      file: "assets/audio/Ed Sheeran - Perfect (Official Music Video).mp3",
      message:
        "“You're not perfect, baby. Neither am I. But somehow, all your little imperfections are exactly what make you my perfect girl. 🤍",
    },
    {
      title: "Iris",
      artist: "By Goo Goo Dolls",
      file: "assets/audio/Goo Goo Dolls – Iris [Official Music Video] [4K Remaster].mp3",
      message:
        "don't want the world to see me, but I want you to. All of me—the messy, the anxious, the shy, the weird, the insecure. You're the only one I'd let in completely",
    },
    {
      title: "Be With You",
      artist: "By Ridleys",
      file: "assets/audio/The Ridleys - Be with you (Lyrics).mp3",
      message:
        "I'd trade every good night text for just one actual good night next to you. But until then, these messages will have to carry all the warmth I can't physically give you yet",
    },
    {
      title: "Until I Found You",
      artist: "By Stephen Sanchez",
      file: "assets/audio/Stephen Sanchez - Until I Found You (Official Video).mp3",
      message:
        "I've heard love songs my whole life, but none of them made sense until I found you. We're not perfect, but damn we're pretty close when we're together.",
    },
    {
      title: "Just The Way You Are",
      artist: "By Bruno Mars",
      file: "assets/audio/Bruno Mars - Just The Way You Are (Official Music Video).mp3",
      message:
        "You laugh at yourself when you mess up, you apologize for everything, you are always too hard on yourself, you think you have flaws—but My dear Yamuni, you have no idea how stunning you are exactly as you are",
    },

    {
      title: "Can't Help Falling in Love",
      artist: "By Elvis Presley",
      file: "assets/audio/Elvis Presley - Can't Help Falling in Love (Lyrics).mp3",
      message:
        "Wise men say only fools rush in, but I'd be a fool not to fall for you. And honestly? I'd do it all over again in a heartbeat",
    },
    {
      title: "Hey There Delilah",
      artist: "By Plain White T's",
      file: "assets/audio/Plain White T's - Hey There Delilah.mp3",
      message:
        "Even on the days we're miles apart or just in different rooms, you're always the first thought in my head and the last one before I sleep",
    },
  ],

  roseCount: 18,
  roseImagePrefix: "assets/images/rose",
  roseTitles: [
    "Real Chitti",
    "Panda Chitti",
    "Female Chitti",
    "Batman Chitti",
    "Lemon Chitti",
    "Aswang Chitti",
    "Nerdy Chitti",
    "Tampo Chitti",
    "Pout Chitti",
    "Oldie Chitti",
    "Chubby Chitti",
    "Skeleton Chitti",
    "Muscular Chitti",
    "Blonde Chitti",
    "Roblox Chitti",
    "Visayan Warrior Chitti",
    "Smol Spidey Chitti",
    "Baby Chitti",
  ],

  candleCount: 5,
  blowThreshold: 45,
  blowHoldFrames: 12,
};

const GIFTS = [
  {
    id: "music",
    label: "SONGS",
    icon: `<img src="assets/decor/vinyl-notes.png" alt="">`,
  },
  {
    id: "drawing",
    label: "DRAWING",
    icon: `<svg viewBox="0 0 100 100" fill="none" stroke="#7a1620" stroke-width="5"><rect x="14" y="18" width="60" height="64" rx="3"/><line x1="24" y1="70" x2="90" y2="20" stroke-width="6"/><path d="M84,14 l10,10 -10,4 z" fill="#7a1620"/></svg>`,
  },
  {
    id: "photos",
    label: "PHOTOS",
    icon: `<img src="assets/decor/photo-album.png" alt="">`,
  },
  {
    id: "roses",
    label: "ROSES",
    icon: `<img src="assets/decor/lily.png" alt="">`,
  },
  {
    id: "letter",
    label: "LETTER",
    icon: `<img src="assets/decor/torn-note-heart.png" alt="">`,
  },
  {
    id: "cake",
    label: "CAKE",
    icon: `<svg viewBox="0 0 100 100"><rect x="16" y="55" width="68" height="32" rx="4" fill="#f7e6c4" stroke="#b6893f" stroke-width="3"/><rect x="22" y="34" width="56" height="24" rx="4" fill="#9c2a37" stroke="#b6893f" stroke-width="3"/><rect x="46" y="14" width="8" height="20" fill="#f7e6c4"/><path d="M50,6 C44,10 44,16 50,20 C56,16 56,10 50,6Z" fill="#ffb63b"/></svg>`,
  },
];

/* ===========================================================
   NAVIGATION
   =========================================================== */
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-" + id).classList.add("active");
  window.scrollTo(0, 0);
}
function transitionToHub() {
  const opening = document.getElementById("screen-opening");
  const hub = document.getElementById("screen-hub");

  if (!opening || !hub) return;

  // Start the opening-page exit animation
  opening.classList.add("opening-exit");

  // Show page 2 underneath
  hub.classList.add("active");
  hub.classList.add("hub-enter");

  // Remove transition classes after animation
  setTimeout(() => {
    opening.classList.remove("active");
    opening.classList.remove("opening-exit");
    hub.classList.remove("hub-enter");

    window.scrollTo(0, 0);
  }, 1000);
}

/* ===========================================================
   OPENING — scramble-together letters
   =========================================================== */
function buildScrambleLine(el, text) {
  el.innerHTML = "";

  const isBirthdayLine = el.id === "opening-line1";
  const words = text.split(" ");

  words.forEach((word, wordIndex) => {
    const wordWrap = document.createElement("span");

    if (isBirthdayLine) {
      if (wordIndex === 0) {
        wordWrap.className = "opening-word happy-word";
      } else {
        wordWrap.className = "opening-word birthday-word";
      }
    } else {
      wordWrap.className = "opening-word name-word";
    }

    [...word].forEach((ch) => {
      const span = document.createElement("span");

      span.className = "scramble-letter";
      span.textContent = ch;

      const dx = (Math.random() * 2 - 1) * 220;
      const dy = (Math.random() * 2 - 1) * 160;
      const rot = (Math.random() * 2 - 1) * 200;

      span.style.opacity = 0;
      span.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
      span.style.transitionDelay = `${Math.random() * 350}ms`;

      wordWrap.appendChild(span);
    });

    el.appendChild(wordWrap);

    if (wordIndex < words.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.querySelectorAll(".scramble-letter").forEach((s) => {
        s.style.opacity = 1;
        s.style.transform = "translate(0,0) rotate(0deg)";
      });
    });
  });
}

/* ===========================================================
   HUB
   =========================================================== */
function buildHub() {
  document.getElementById("gift-grid").innerHTML = GIFTS.map(
    (g) => `
    <button class="gift-card" onclick="showScreen('${g.id}')">
      <div class="heart-badge">♡</div>
      <div class="icon">${g.icon}</div>
      <div class="label">${g.label}</div>
    </button>`,
  ).join("");
}

/* ===========================================================
   PHOTOS
   =========================================================== */
function buildAlbum() {
  document.getElementById("album-slots").innerHTML = CONFIG.photos
    .map(
      (src, i) =>
        `<div class="album-slot slot-${i + 1}"><img src="${src}" onerror="this.onerror=null;this.src=PLACEHOLDER_IMG;" alt="us"></div>`,
    )
    .join("");
}

/* ===========================================================
   MUSIC
   =========================================================== */
let currentAudio = null;
function buildSongs() {
  const list = document.getElementById("song-list");
  list.innerHTML = "";
  CONFIG.songs.forEach((song, i) => {
    const row = document.createElement("div");
    row.className = "song-row";
    row.style.animationDelay = i * 0.08 + "s";
    row.innerHTML = `<button class="song-play" id="play-${i}">▶</button>
      <div class="song-meta"><div class="song-title">${song.title}</div><div class="song-artist">${song.artist}</div></div>`;
    const audio = new Audio(song.file);
    const playBtn = row.querySelector(".song-play");
    playBtn.onclick = () => {
      const wasPaused = audio.paused;

      toggleSong(audio, playBtn);

      if (wasPaused) {
        showSongMessage(song.message);
      }
    };
    audio.addEventListener("ended", () => {
      playBtn.textContent = "▶";

      const songMessage = document.getElementById("song-message-scroll");

      if (songMessage) {
        songMessage.classList.remove("show");
      }

      currentAudio = null;
    });
    list.appendChild(row);
  });
}
function toggleSong(audio, btn) {
  const songMessage = document.getElementById("song-message-scroll");

  // If another song is playing, stop it
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();

    document.querySelectorAll(".song-play").forEach((b) => {
      b.textContent = "▶";
    });
  }

  if (audio.paused) {
    // Play song
    audio.play().catch(() => {
      alert("Add your song file to assets/audio to play it.");
    });

    btn.textContent = "❚❚";

    currentAudio = audio;

    // Roll paper DOWN
    if (songMessage) {
      songMessage.classList.add("show");
    }
  } else {
    // Pause song
    audio.pause();

    btn.textContent = "▶";

    // Roll paper UP
    if (songMessage) {
      songMessage.classList.remove("show");
    }
  }
}
function showSongMessage(message) {
  const scroll = document.getElementById("song-message-scroll");
  const messageBox = document.getElementById("song-message");

  if (!scroll || !messageBox) return;

  // Close the scroll first
  scroll.classList.remove("show");

  // Wait for it to close, then change message and open again
  setTimeout(() => {
    messageBox.textContent = message || "";

    // Force browser to recognize the closed state
    void scroll.offsetHeight;

    // Roll down again
    scroll.classList.add("show");
  }, 300);
}
/* ===========================================================
   DRAWING / LETTER
   =========================================================== */
function buildDrawingAndLetter() {
  document.getElementById("letter-text").textContent =
    CONFIG.letterText.replace(/\{\{name\}\}/g, CONFIG.girlfriendName);

  document.getElementById("letter-signoff").textContent = CONFIG.letterSignoff;
}

/* letter voice note */
/* ===========================================================
   LETTER VOICE NOTE
   =========================================================== */

let letterVoice = null;
let letterVoiceBtn = null;

function buildLetterVoice() {
  letterVoice = new Audio(
    "assets/audio/Bruno Mars - Just The Way You Are (Official Music Video).mp3",
  );
  letterVoiceBtn = document.getElementById("letter-player-btn");

  if (!letterVoiceBtn) return;

  letterVoiceBtn.addEventListener("click", () => {
    if (letterVoice.paused) {
      letterVoice.play().catch(() => {
        alert("Add your voice recording to assets/audio/letter-voice.mp3");
      });

      letterVoiceBtn.textContent = "❚❚";
    } else {
      letterVoice.pause();
      letterVoiceBtn.textContent = "▶";
    }
  });

  letterVoice.addEventListener("ended", () => {
    letterVoiceBtn.textContent = "▶";
  });
}

/* letter scroll arrow */

/* ===========================================================
   MOMENTS / ROSES CAROUSEL*/

let roseIndex = 0;

function buildRoses() {
  const track = document.getElementById("rose-track");

  if (!track) {
    console.error("rose-track not found");
    return;
  }

  track.innerHTML = "";

  for (let i = 1; i <= CONFIG.roseCount; i++) {
    const slide = document.createElement("div");
    slide.className = "rose-slide";

    const img = document.createElement("img");

    // Your files are .jpeg
    img.src = `${CONFIG.roseImagePrefix}${i}.jpeg`;
    img.alt = `Rose photo ${i}`;

    img.onerror = function () {
      console.error("Could not load:", img.src);
      this.onerror = null;
      this.src = PLACEHOLDER_IMG;
    };

    const title = document.createElement("div");
    title.className = "rose-title";

    title.textContent = CONFIG.roseTitles?.[i - 1] || `Rose ${i}`;

    slide.appendChild(img);
    slide.appendChild(title);

    track.appendChild(slide);
  }

  roseIndex = 0;
  updateRoseUI();
}

function updateRoseUI() {
  const track = document.getElementById("rose-track");
  const count = document.getElementById("rose-count");

  if (!track) {
    console.error("rose-track not found");
    return;
  }

  track.style.transform = `translateX(-${roseIndex * 100}%)`;

  if (count) {
    count.textContent = `${roseIndex + 1} / ${CONFIG.roseCount}`;
  }
}

function roseNav(direction) {
  roseIndex = (roseIndex + direction + CONFIG.roseCount) % CONFIG.roseCount;

  updateRoseUI();
}

/* ===========================================================
   CAKE
   =========================================================== */
function buildCake() {
  const wrap = document.getElementById("candles");
  wrap.innerHTML = "";
  const total = CONFIG.candleCount;
  for (let i = 0; i < total; i++) {
    const leftPct = 20 + i * (60 / (total - 1 || 1));
    const candle = document.createElement("div");
    candle.className = "candle";
    candle.style.left = `calc(${leftPct}% - 3px)`;
    candle.style.top = "46px";
    const flame = document.createElement("div");
    flame.className = "flame";
    const smoke = document.createElement("div");
    smoke.className = "smoke";
    candle.appendChild(flame);
    candle.appendChild(smoke);
    candle.onclick = () => extinguishOne(flame, smoke);
    wrap.appendChild(candle);
  }
}
function extinguishOne(flame, smoke) {
  if (flame.classList.contains("out")) return;
  flame.classList.add("out");
  smoke.classList.add("rise");
  checkAllOut();
}
function checkAllOut() {
  const flames = document.querySelectorAll("#candles .flame");
  if ([...flames].every((f) => f.classList.contains("out"))) celebrate();
}
function celebrate() {
  document.getElementById("cake-congrats").classList.add("show");

  for (let i = 0; i < 28; i++) {
    const piece = document.createElement("div");

    piece.className = "confetti-piece";

    piece.textContent = ["🎉", "💗", "🌹", "✨", "🎂"][
      Math.floor(Math.random() * 5)
    ];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";
    piece.style.animationDelay = Math.random() * 0.6 + "s";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }

  // Start post credits ONCE
  setTimeout(() => {
    startPostCredits();
  }, 1800);
}
async function enableMic() {
  const btn = document.getElementById("mic-btn");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    btn.textContent = "🎙 Listening... blow now!";
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const source = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);
    let loudFrames = 0,
      stopped = false;
    function tick() {
      if (stopped) return;
      analyser.getByteFrequencyData(data);
      const avg = data.reduce((a, b) => a + b, 0) / data.length;
      loudFrames =
        avg > CONFIG.blowThreshold
          ? loudFrames + 1
          : Math.max(0, loudFrames - 1);
      if (loudFrames >= CONFIG.blowHoldFrames) {
        document.querySelectorAll("#candles .flame").forEach((f, i) => {
          setTimeout(() => {
            const smoke = f.nextElementSibling;
            f.classList.add("out");
            smoke.classList.add("rise");
            checkAllOut();
          }, i * 90);
        });
        stopped = true;
        stream.getTracks().forEach((t) => t.stop());
        btn.textContent = "🎂 Great blow!";
        return;
      }
      requestAnimationFrame(tick);
    }
    tick();
  } catch (err) {
    btn.textContent = "🎙 Mic unavailable — tap the candles instead";
  }
}
/* =====================================================
   POST CREDIT SEQUENCE
===================================================== */
function startPostCredits() {

  const postCredits =
    document.getElementById("post-credits");

  const music =
    document.getElementById("post-credit-music");

  const siren =
    document.getElementById("police-siren");

  const police =
    document.getElementById("police-reveal");

  const policeImage =
    document.getElementById("police-image");

  const arrestTitle =
    document.getElementById("arrest-title");

  const arrestLines =
    document.querySelectorAll(".arrest-line");

  const caseFile =
    document.getElementById("under-arrest-file");


  if (!postCredits) return;


  /* =================================================
     START CREDITS
  ================================================= */

  postCredits.classList.add("active");


  /* Start cinematic music */

  if (music) {

    music.currentTime = 0;

    music.volume = 0.7;

    music.play().catch(() => {});

  }


  /* =================================================
     WAIT FOR CREDITS TO FINISH
  ================================================= */

  setTimeout(() => {


    /* Stop cinematic music */

    if (music) {

      music.pause();

      music.currentTime = 0;

    }


    /* =================================================
       SHOW POLICE SCREEN
    ================================================= */

    police.classList.add("show");


    /* Start police siren */

    if (siren) {

      siren.currentTime = 0;

      siren.volume = 0.85;

      siren.play().catch(() => {});

    }


    /* =================================================
       1. POLICE IMAGE APPEARS FIRST
    ================================================= */

    setTimeout(() => {

      policeImage.classList.add("show");

    }, 300);


    /* =================================================
       2. YOU'RE UNDER ARREST
    ================================================= */

    setTimeout(() => {

      arrestTitle.classList.add("show");

    }, 1400);


    /* =================================================
       3. LINES APPEAR ONE BY ONE
    ================================================= */

    arrestLines.forEach((line, index) => {

      setTimeout(() => {

        line.classList.add("show");

      }, 2500 + index * 1200);

    });


    /* =================================================
       4. STOP SIREN
    ================================================= */

    setTimeout(() => {

      if (siren) {

        siren.pause();

        siren.currentTime = 0;

      }

    }, 4000);


    /* =================================================
       5. SLAP CASE FILE ON SCREEN
    ================================================= */

    setTimeout(() => {

      caseFile.classList.add("slap");

    }, 7800);


  }, 38500);

}
/* ===========================================================
   INIT
   =========================================================== */
window.addEventListener("DOMContentLoaded", () => {
  injectSVGs();

  buildScrambleLine(
    document.getElementById("opening-line1"),
    CONFIG.openingLine1,
  );

  buildScrambleLine(
    document.getElementById("opening-line2"),
    CONFIG.openingLine2,
  );

  buildAlbum();
  buildSongs();
  buildDrawingAndLetter();
  buildRoses();
  buildCake();

  const letterText = document.getElementById("letter-text");
  const scrollHint = document.getElementById("letter-scroll-hint");

  if (letterText && scrollHint) {
    letterText.addEventListener("scroll", () => {
      if (letterText.scrollTop > 10) {
        scrollHint.classList.add("hidden");
      } else {
        scrollHint.classList.remove("hidden");
      }
    });
  }
});
