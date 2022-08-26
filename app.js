const numberBtn = document.querySelectorAll('button');
const display = document.querySelector('.output');
const result = document.querySelector('.result');

const calculate = (e) => {
  let buttonT = e.target.innerText;

  switch (buttonT) {
    case 'AC':
      display.innerText = '';
      result.innerText = '0';
      break;

    case 'CE':
      display.textContent = display.textContent.substring(
        0,
        display.textContent.length - 1
      );
      break;
    case '=':
      result.innerText = eval(display.innerText);
    default:
      display.textContent += buttonT;
      break;
  }
};

numberBtn.forEach((btn) => {
  btn.addEventListener('click', calculate);
});
