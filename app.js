// let num = 14
// firstname = 'Kyrylos'
// const isProgrammer = true

// Can do

// firstaname = 'Max' 
// isProgrammer = false // error because of const 

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const btn0 = document.getElementById('btn0')
const clear = document.getElementById('clear')
const actions = document.getElementById('actions')

function updateInputValues(input, value) {
    input.value += value     
    }

    let CurrentInput = input1
    
btn1.onclick = () => updateInputValues(CurrentInput, '1')
    
btn2.onclick = () => updateInputValues(CurrentInput, '2')

btn3.onclick = () => updateInputValues(CurrentInput, '3')

btn4.onclick = () => updateInputValues(CurrentInput, '4')

btn5.onclick = () => updateInputValues(CurrentInput, '5')

btn6.onclick = () => updateInputValues(CurrentInput, '6')

btn7.onclick = () => updateInputValues(CurrentInput, '7')

btn8.onclick = () => updateInputValues(CurrentInput, '8')

btn9.onclick = () => updateInputValues(CurrentInput, '9')

btn0.onclick = () => updateInputValues(CurrentInput, '0')

clear.onclick = function() {
     CurrentInput.value = CurrentInput.value.slice(0, CurrentInput.value.length - 1)   
}

if (actions.value != '') {
    CurrentInput = input2
  }

const sum = Number(input1.value) + Number(input2.value)
resultElement.textContent = sum
let action = '+'

function act (MyAction) {
    actions.value = MyAction
    CurrentInput = input2
}

let actions1 = 'actions'

plus.onclick = () => act('+') 

minus.onclick = () => act('-')

multiply.onclick = () => act('*')

divide.onclick = () => act('/')


function printResult(result) {
    if (result < 0) {
    resultElement.style.color = 'red'
   } else {
    resultElement.style.color = 'green'  
  }
  resultElement.textContent = result
}

function computerWithAction(inp1, inp2, actionSymbol) {
const num1 = Number(inp1.value)
const num2 = Number(inp2.value)
 if (actionSymbol == '+') {
    return num1 + num2
    } else if (actionSymbol == '-') {
    return num1 - num2
   } else if (actionSymbol == '*') {
    return num1 * num2
   } else if (actionSymbol == '/') { 
    return num1 / num2
}

}


submitBtn.onclick = function() {
    const result = computerWithAction(input1, input2, actions.value)
    printResult(result)
    console.log(input1);
    clear.onclick()
    input1.value = result
    CurrentInput = input1
    input2.value = ''
    actions.value = ''
  
}
    
 

//  if (action == '+') {
//     const sum = Number(input1.value) + Number(input2.value) 
//     printResult(sum)
//   } else if (action == '-') {
//     const sum = Number(input1.value) - Number(input2.value)
//     printResult(sum)
// }


// // --- Close-on-submit control: detect Ctrl+Enter to disable auto-close ---
// const preventCloseKey = 'preventCloseOnSubmit';
// let preventClose = localStorage.getItem(preventCloseKey) === '1';

// // При перезавантаженні страницы сбрасываем сохранённый флаг — чтобы по умолчанию
// // после перезагрузки кнопка снова могла закрывать вкладку.
// window.addEventListener('load', function () {
//     try {
//         localStorage.removeItem(preventCloseKey);
//     } catch (err) {
//         console.warn('Unable to remove preventClose flag on load', err);
//     }
//     preventClose = false;
//     // Сбрасываем session flag authPassed при перезагрузке — чтобы после reload
//     // пользователь снова проходил голосовую проверку пароля.
//     try {
//         sessionStorage.removeItem('authPassed');
//     } catch (err) {
//         console.warn('Unable to remove session auth flag on load', err);
//     }
// });

// window.addEventListener('keydown', function (e) {
//     // Detect Ctrl + Enter
//     if (e.ctrlKey && (e.key === 'Enter' || e.key === 'Return')) {
//         preventClose = true;
//         try {
//             localStorage.setItem(preventCloseKey, '1');
//         } catch (err) {
//             console.warn('Unable to write preventClose flag to localStorage', err);
//         }
//         console.log('Ctrl+Enter detected — submit will NOT close the tab (flag persisted).');
//     }
//     // Detect Ctrl + Backspace: now we REMOVE the preventClose flag and attempt to close the tab
//     if (e.ctrlKey && (e.key === 'Backspace' || e.key === 'Delete')) {
//         preventClose = false;
//         try {
//             localStorage.removeItem(preventCloseKey);
//         } catch (err) {
//             console.warn('Unable to remove preventClose flag from localStorage', err);
//         }
//         console.log('Ctrl+Backspace detected — preventClose cleared; attempting to close the tab now.');
//         // Попытаться закрыть вкладку сразу
//         try {
//             attemptClose();
//         } catch (err) {
//             console.warn('attemptClose failed when called from Ctrl+Backspace handler', err);
//         }
//     }
// });

// function attemptClose() {
//     // Если пользователь уже прошёл проверку пароля в этой сессии — не перенаправляем
//     try {
//         if (sessionStorage.getItem('authPassed') === '1') {
//             console.log('Auth already passed in this session — not redirecting to password page.');
//             return;
//         }
//     } catch (err) {
//         // если доступ к sessionStorage заблокирован по каким-то причинам — продолжаем нормальную логику
//         console.warn('sessionStorage access failed:', err);
//     }
//     // Вместо закрытия вкладки — перенаправляем на страницу с голосовой проверкой пароля
//     try {
//         window.location.href = 'password.html';
//     } catch (err) {
//         console.warn('Unable to redirect to password.html:', err);
//     }
// }

