const resultScreen = document.querySelector('.result');

const allResetBtn = document.querySelector('.reset-btn');
const delBtn = document.querySelector('.del-btn');

const numberBtns = document.querySelectorAll('.number-btn');
const signBtns = document.querySelectorAll('.sign-btn');

const pointBtn = document.querySelector('.point-btn');

const equalBtn = document.querySelector('.equal-btn');

let isSign = false;
let isPoint = false;

for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener('click', (e) => {
    resultScreen.innerText += e.target.innerText;
    // isPoint = false;
    isSign = false;
  });
}
for (let i = 0; i < signBtns.length; i++) {
  signBtns[i].addEventListener('click', (e) => {
    if (!isSign) {
      resultScreen.innerText += e.target.innerText;
      isSign = true;
      isPoint = false;
    }
  });
}

pointBtn.addEventListener('click', () => {
  if (!isPoint) {
    resultScreen.innerText += pointBtn.innerText;
    console.log('hi');
    isPoint = true;
  }
});

delBtn.addEventListener('click', () => {
  const slicedExpression = resultScreen.innerText.slice(0, -1);
  resultScreen.innerText = slicedExpression;
  isPoint = false;
  isSign = false;
});

allResetBtn.addEventListener('click', () => {
  resultScreen.innerText = '';
});

equalBtn.addEventListener('click', () => {
  if (resultScreen.innerText !== '') {
    resultScreen.innerText = eval(resultScreen.innerText);
    isPoint = false;
    isSign = false;
  }
});
