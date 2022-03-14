const divQuotes = document.querySelector(".quotes");

const quotes = {
  0: "Be yourself; everyone else is already taken.",
  1: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  2: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  3: "“So many books, so little time.”",
  4: "“A room without books is like a body without a soul.”",
  5: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
};

divQuotes.innerHTML = quotes[Math.floor(Math.random() * 6)];
