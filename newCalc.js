const numberBtn = document.querySelectorAll('.number-btn');
const signBtn = document.querySelectorAll('.sign-btn');
const equalBtn = document.querySelector('.equal-btn');
const resetBtn = document.querySelector('.reset-btn');
const backBtn = document.querySelector('.back-btn');
const resultDiv = document.querySelector('.result');
let equation;

console.log(resetBtn);

// for (let i = 0; i < numberBtn.length; i++) {
//   numberBtn[i].value = numberBtn[i].innerText;
//   numberBtn[i].addEventListener('click', () => {
//     resultDiv.innerText += numberBtn[i].value;
//   });
//   console.log();
// }

function masterFunction(param) {
  for (let i = 0; i < param.length; i++) {
    param[i].value = param[i].innerText;
    param[i].addEventListener('click', () => {
      resultDiv.innerText += param[i].value;
    });
    // console.log(param[i].value);
  }
}
masterFunction(numberBtn);
masterFunction(signBtn);

equalBtn.addEventListener('click', () => {
  equation = resultDiv.innerText;
  resultDiv.innerText = eval(equation);
});

resetBtn.addEventListener('click', () => {
  resultDiv.innerText = '';
});
// backBtn.addEventListener('click', () => {
//   const stringArr = resultDiv.innerText.split('');
//   stringArr.pop();
//   resultDiv.innerText = stringArr.join('');
// });

backBtn.addEventListener('click', () => {
  let text = resultDiv.innerText;
  let slicedText = text.slice(0, -1);
  resultDiv.innerText = slicedText;
});
