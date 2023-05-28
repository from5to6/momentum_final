const quotes = [
  {
    quotes: "일찍 일어난 새가 벌레를 잡는다",
    author: "-미상-",
  },

  {
    quotes: "열정!열정!열정!",
    author: "-한사랑산악회-",
  },

  {
    quotes: "아버지 나를 낳으시고 바지적삼 다 적시셨네",
    author: "-박명수-",
  },

  {
    quotes: "명언이라 적혀 있다고 모두 믿지 마라",
    author: "-미상-",
  },

  {
    quotes: "인터넷에 있는 말 믿지마라",
    author: "미상",
  },

  {
    quotes: "힘들면 참고해라, 아 참고 하라고 ㅋㅋㅋ",
    author: "-미상-",
  },

  {
    quotes: "기대하지 않으면 실망도 없다",
    author: "-크레토스-",
  },

  {
    quotes: "유명해야 명언도 남기고 하지",
    author: "-미상-",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
