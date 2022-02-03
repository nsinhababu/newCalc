const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const signArr = ['+', '-', '*', '/', '.'];
const functioningArr = ['c', '<=', '='];

const nubersContainer = document.querySelector('.numbers-container');
const signsContainer = document.querySelector('.signs-container');
const functionContainer = document.querySelector('.function-container');
const resultDiv = document.querySelector('.result');
//

// creates html element for all array items and provides a class for every array

function elementCreator(arr, elementType, className, parentElem) {
  arr.forEach((item, index) => {
    let newElem = document.createElement(elementType);

    newElem.classList.add(className);

    newElem.innerText = `${item}`;

    parentElem.appendChild(newElem);
  });
}

elementCreator(numberArr, 'button', 'number-btn', nubersContainer);
elementCreator(signArr, 'button', 'sign-btn', signsContainer);
elementCreator(functioningArr, 'button', 'function-btn', functionContainer);

const resetBtn = document.querySelectorAll('.function-btn')[0];
const backBtn = document.querySelectorAll('.function-btn')[1];
const equalBtn = document.querySelectorAll('.function-btn')[2];
const numberBtns = document.querySelectorAll('.number-btn');
const signBtns = document.querySelectorAll('.sign-btn');

console.log(numberBtns, signBtns);

function numberSignBtnClickController(btnType) {
  for (let i = 0; i < btnType.length; i++) {
    btnType[i].addEventListener('click', () => {
      resultDiv.innerText += btnType[i].innerText;
    });
  }
}

numberSignBtnClickController(numberBtns);
numberSignBtnClickController(signBtns);

resetBtn.addEventListener('click', () => {
  resultDiv.innerText = '';
});
