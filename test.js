const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const signArr = ['+', '-', '*', '/'];
const functioningArr = ['c', '<=', '=', '.'];

const nubersContainer = document.querySelector('.numbers-container');
const signsContainer = document.querySelector('.signs-container');
const functionContainer = document.querySelector('.function-container');

const resetBtn = document.querySelectorAll('.function-btn')[0];
const backBtn = document.querySelectorAll('.function-btn')[1];
const equalBtn = document.querySelectorAll('.function-btn')[2];

console.log();

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
