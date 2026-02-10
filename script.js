// --- Customize these to make it "you two" ---
const BOYFRIEND_NAME = "babe"; // change to his name / nickname
const YOUR_NAME = "me";        // optional

// Story nodes. Each node has:
// - text: what is shown
// - choices: array of { label, hint, next, scoreDelta }
// - ending: optional { title, note, canon } to end the story
const story = {
  start: {
    text: `It’s Valentine’s Day. You find a little envelope on your desk.\n\nInside it says: “Okay ${BOYFRIEND_NAME}, you’re about to make choices that decide our date. Choose wisely. (No pressure.)”`,
    choices: [
      { label: "Stay in 🕯️", hint: "cozy mode, maximum vibes", next: "stayIn", scoreDelta: 1 },
      { label: "Go out 🌃", hint: "main character energy", next: "goOut", scoreDelta: 1 }
    ]
  },

  stayIn: {
    text: `You choose to stay in. The playlist is queued. The lights are warm.\n\nBut there’s a twist: the snack situation is critical.`,
    choices: [
      { label: "Cook something together 🍝", hint: "chaos + teamwork", next: "cookTogether", scoreDelta: 2 },
      { label: "Order takeout 🥡", hint: "efficient, iconic", next: "takeout", scoreDelta: 1 }
    ]
  },

  goOut: {
    text: `You choose to go out. The air is crisp and everything feels a little cinematic.\n\nThe question is: what kind of night is this?`,
    choices: [
      { label: "Cute dinner 🍽️", hint: "classy but still us", next: "dinner", scoreDelta: 2 },
      { label: "Something silly 🎯", hint: "laugh until it hurts", next: "silly", scoreDelta: 2 }
    ]
  },

  cookTogether: {
    text: `You start cooking together. One of you is confident. The other is “support staff.”\n\nA debate begins: who is in charge?`,
    choices: [
      { label: `${BOYFRIEND_NAME} leads 👨‍🍳`, hint: "I trust you (mostly)", next: "kitchenLeadHim", scoreDelta: 1 },
      { label: `${YOUR_NAME} leads 👩‍🍳`, hint: "I read the recipe, relax", next: "kitchenLeadYou", scoreDelta: 1 }
    ]
  },

  takeout: {
    text: `You order takeout. Perfect. Zero dishes.\n\nIt arrives early. Suspiciously early.\n\nDo you:`,
    choices: [
      { label: "Eat immediately 😌", hint: "peace is the goal", next: "eatNow", scoreDelta: 1 },
      { label: "Plate it nicely 🍽️", hint: "we’re fancy now", next: "plateIt", scoreDelta: 2 }
    ]
  },

  dinner: {
    text: `You sit down for dinner. The conversation is easy.\n\nAt some point, the waiter asks if you’re celebrating anything.`,
    choices: [
      { label: "Say: “Yes, he’s my Valentine.” 💘", hint: "watch him get shy", next: "valentineReveal", scoreDelta: 2 },
      { label: "Say: “We’re celebrating us.” 🫶", hint: "soft launch: feelings", next: "celebrateUs", scoreDelta: 3 }
    ]
  },

  silly: {
    text: `You pick something silly—maybe an arcade, mini golf, or one of those places where you can be aggressively competitive.\n\nSomeone is about to win.`,
    choices: [
      { label: "Let him win 😇", hint: "angel behavior", next: "letHimWin", scoreDelta: 1 },
      { label: "Go full tryhard 😈", hint: "I came to dominate", next: "tryhard", scoreDelta: 2 }
    ]
  },

  kitchenLeadHim: {
    text: `He leads. Somehow, it’s both adorable and extremely serious.\n\nHalfway through, you catch him concentrating and think: “I love this person.”`,
    choices: [
      { label: "Tell him right now 🥺", hint: "vulnerability speedrun", next: "sayItNow", scoreDelta: 3 },
      { label: "Save it for later 😌", hint: "build the moment", next: "saveForLater", scoreDelta: 2 }
    ]
  },

  kitchenLeadYou: {
    text: `You lead. He becomes your official taste tester.\n\nHe keeps stealing bites and acting innocent.`,
    choices: [
      { label: "Scold him (playfully) 😤", hint: "fake mad, real amused", next: "playfulScold", scoreDelta: 2 },
      { label: "Join him 😈", hint: "if you can’t beat them…", next: "stealBites", scoreDelta: 2 }
    ]
  },

  eatNow: {
    text: `You eat immediately. 10/10 decision.\n\nNow it’s time to pick the movie.`,
    choices: [
      { label: "Rom-com 💞", hint: "predictable but correct", next: "romcom", scoreDelta: 1 },
      { label: "Something dramatic 🎭", hint: "we will cry (maybe)", next: "drama", scoreDelta: 1 }
    ]
  },

  plateIt: {
    text: `You plate it nicely. Candles. Napkins. Presentation.\n\nHe looks at you like you just did something illegal (in a cute way).`,
    choices: [
      { label: "Act like it’s normal 😌", hint: "I always eat like this", next: "actNormal", scoreDelta: 2 },
      { label: "Admit you wanted to impress him 🫣", hint: "honesty points", next: "admitImpress", scoreDelta: 3 }
    ]
  },

  valentineReveal: {
    text: `You say it out loud: “Yes, he’s my Valentine.”\n\nHe smiles in that way that makes your brain go quiet.`,
    choices: [
      { label: "Hold his hand under the table 🤍", hint: "simple + perfect", next: "handHold", scoreDelta: 3 },
      { label: "Make a dumb joke 😭", hint: "love language: comedy", next: "dumbJoke", scoreDelta: 2 }
    ]
  },

  celebrateUs: {
    text: `You say: “We’re celebrating us.”\n\nIt’s understated, but it lands.\n\nOutside, the night feels soft.`,
    choices: [
      { label: "Take a photo together 📸", hint: "evidence", next: "photo", scoreDelta: 2 },
      { label: "Skip the photo, stay present 🌙", hint: "just us", next: "present", scoreDelta: 3 }
    ]
  },

  letHimWin: {
    text: `You let him win. He celebrates like he just conquered a small nation.\n\nIt’s incredibly endearing.`,
    choices: [
      { label: "Demand a victory speech 🎤", hint: "I need the theatrics", next: "speech", scoreDelta: 2 },
      { label: "Challenge him to a rematch 🔥", hint: "it’s not over", next: "rematch", scoreDelta: 2 }
    ]
  },

  tryhard: {
    text: `You go full tryhard and win.\n\nHe stares at the score like it personally betrayed him.`,
    choices: [
      { label: "Comfort him (a little) 😌", hint: "gentle winner", next: "comfort", scoreDelta: 2 },
      { label: "Roast him (lovingly) 😭", hint: "I’m sorry but also no", next: "roast", scoreDelta: 2 }
    ]
  },

  // --- Endings ---
  sayItNow: {
    text: `You say it right there in the kitchen.\n\nIt’s not a big speech. Just: “I love you.”\n\nAnd the world feels correct.`,
    ending: {
      title: "Canon Ending: The Quiet Truth 💖",
      note: `If there’s one thing I’m sure about, it’s you.\n\nHappy Valentine’s Day, ${BOYFRIEND_NAME}.\n\n(Yes, I coded this. Yes, I’m obsessed.)`,
      canon: true
    }
  },

  saveForLater: {
    text: `You save it for later.\n\nAt the end of the night, you say it when it matters most—and it hits even harder.`,
    ending: {
      title: "Ending: The Slow Burn 🕯️",
      note: `You’re my favorite person to come home to.\n\nHappy Valentine’s Day.`,
      canon: false
    }
  },

  playfulScold: {
    text: `You “scold” him. He grins like he won.\n\nSomehow you both end up laughing in the middle of cooking.`,
    ending: {
      title: "Ending: Chaos Chefs 🍝",
      note: `We are not calm people.\n\nAnd that’s why we’re perfect.`,
      canon: false
    }
  },

  stealBites: {
    text: `You join him and start stealing bites too.\n\nNow it’s a competition. Nobody wins. Everybody eats.`,
    ending: {
      title: "Ending: Snack Bandits 🥷",
      note: `Us vs. the kitchen. Us vs. the snacks.\n\nUs winning, always.`,
      canon: false
    }
  },

  romcom: {
    text: `You pick a rom-com. You both pretend you’re not invested.\n\nYou’re extremely invested.`,
    ending: {
      title: "Ending: Predictably Cute 💞",
      note: `I love loving you.\n\nThat’s the whole thing.`,
      canon: false
    }
  },

  drama: {
    text: `You pick something dramatic.\n\nYou both claim you’re not emotional people.\n\nYou are lying.`,
    ending: {
      title: "Ending: Tears & Treats 🎭",
      note: `Thank you for being my safe place.\n\nEven when the movie is devastating.`,
      canon: false
    }
  },

  actNormal: {
    text: `You act like it’s normal.\n\nHe side-eyes the candles but looks pleased anyway.`,
    ending: {
      title: "Ending: Fancy People 🍽️",
      note: `We can be classy.\n\nBut only for like, 20 minutes.`,
      canon: false
    }
  },

  admitImpress: {
    text: `You admit you wanted to impress him.\n\nHe says something sweet and you immediately regret having a nervous system.`,
    ending: {
      title: "Ending: Soft & Honest 🫶",
      note: `You make me want to be brave.\n\nEven when it’s just about feelings.`,
      canon: false
    }
  },

  handHold: {
    text: `You hold his hand under the table.\n\nIt’s small, but it’s everything.`,
    ending: {
      title: "Ending: The Handhold 🤍",
      note: `No matter what we’re doing, I just like doing it with you.`,
      canon: false
    }
  },

  dumbJoke: {
    text: `You make a dumb joke.\n\nHe laughs. You win.`,
    ending: {
      title: "Ending: Comedy Couple 😭",
      note: `My favorite sound is you laughing.\n\n(Yes, even at my bad jokes.)`,
      canon: false
    }
  },

  photo: {
    text: `You take a photo together.\n\nIt’s slightly blurry.\n\nIt’s perfect.`,
    ending: {
      title: "Ending: Proof of Us 📸",
      note: `I want a million tiny snapshots.\n\nAll of them with you.`,
      canon: false
    }
  },

  present: {
    text: `You skip the photo.\n\nYou just stay there, together.\n\nNo distractions. Just you two.`,
    ending: {
      title: "Ending: Stay Here 🌙",
      note: `Being with you feels like exhaling.\n\nHappy Valentine’s Day.`,
      canon: false
    }
  },

  speech: {
    text: `You demand a victory speech.\n\nHe gives one. It’s ridiculous.\n\nYou’re in love.`,
    ending: {
      title: "Ending: Tiny Champion 🎤",
      note: `I love your confidence.\n\nEven when it’s completely unearned.`,
      canon: false
    }
  },

  rematch: {
    text: `You challenge him to a rematch.\n\nNow it’s serious.\n\nYou both are laughing too hard to aim.`,
    ending: {
      title: "Ending: Rematch Energy 🔥",
      note: `Life is more fun with you in it.\n\nThat’s it. That’s the note.`,
      canon: false
    }
  },

  comfort: {
    text: `You comfort him (a little).\n\nHe pretends he’s fine.\n\nHe is not fine.`,
    ending: {
      title: "Ending: Gentle Winner 😌",
      note: `I’ll be nice…\n\n(But I will win again.)`,
      canon: false
    }
  },

  roast: {
    text: `You roast him (lovingly).\n\nHe laughs, then vows revenge.`,
    ending: {
      title: "Ending: Competitive Love 😈",
      note: `You’re my favorite opponent.\n\nAnd my favorite person.`,
      canon: false
    }
  }
};

// --- App state ---
let currentId = "start";
let history = []; // stack of { id, score }
let score = 0;
let steps = 0;

const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const backBtn = document.getElementById("backBtn");
const restartBtn = document.getElementById("restartBtn");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");

function render() {
  const node = story[currentId];
  if (!node) {
    textEl.textContent = "Oops—this scene is missing. Check script.js for a typo in a node id.";
    choicesEl.innerHTML = "";
    return;
  }

  // Title changes for endings
  if (node.ending) {
    titleEl.textContent = node.ending.title;
    subtitleEl.textContent = node.ending.canon ? "canon ending unlocked 💖" : "alternate ending unlocked ✨";
  } else {
    titleEl.textContent = "Our Choose-Your-Own Love Story";
    subtitleEl.textContent = "Pick a choice. See what happens.";
  }

  textEl.textContent = node.text;

  // meta
  progressEl.textContent = `Steps: ${steps}`;
  scoreEl.textContent = `Love Points: ${score}`;

  // back disabled at start
  backBtn.disabled = history.length === 0;

  // render choices or ending buttons
  choicesEl.innerHTML = "";

  if (node.ending) {
    const wrap = document.createElement("div");
    wrap.className = "ending";

    const p = document.createElement("p");
    p.className = "text";
    p.textContent = node.ending.note;

    const canonBadge = document.createElement("div");
    canonBadge.className = "badge";
    canonBadge.textContent = node.ending.canon ? "Canon Ending 💖" : "Alternate Ending ✨";

    choicesEl.appendChild(canonBadge);
    choicesEl.appendChild(p);

    // Optional: show a tiny “best score” prompt
    const small = document.createElement("div");
    small.className = "meta";
    small.textContent = "Want another ending? Hit Restart ↻ or go Back ←.";
    choicesEl.appendChild(small);
    return;
  }

  node.choices.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.innerHTML = `${c.label}${c.hint ? `<small>${c.hint}</small>` : ""}`;

    btn.addEventListener("click", () => {
      history.push({ id: currentId, score });
      score += (c.scoreDelta || 0);
      steps += 1;
      currentId = c.next;
      render();
    });

    choicesEl.appendChild(btn);
  });
}

backBtn.addEventListener("click", () => {
  if (history.length === 0) return;
  const prev = history.pop();
  currentId = prev.id;
  score = prev.score;
  steps = Math.max(0, steps - 1);
  render();
});

restartBtn.addEventListener("click", () => {
  currentId = "start";
  history = [];
  score = 0;
  steps = 0;
  render();
});

render();
