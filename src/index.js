// const basicLightbox = require('basiclightbox')
// import * as basicLightbox from 'basiclightbox'

// ---------------MODULE 8----------------------
// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];
// localStorage.setItem(LS_KEY, JSON.stringify(names));

// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

// // localStorage.removeItem(LS_KEY);

// const LS_KEY2 = 'Obj';
// const object = {
//   name: 'Kate',
//   surname: 'Smith',
// };
// localStorage.setItem(LS_KEY2, JSON.stringify(object));

// const objValue = localStorage.getItem(LS_KEY2);
// console.log(objValue);
// console.log(JSON.parse(objValue));

// localStorage.removeItem(LS_KEY2);

// localStorage.clear();

// const LS_KEY_FUN = 'my fuction';

// function add(a, b) {
//   return a + b;
// }
// console.log(add);

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

// // console.log(add);

// // localStorage.setItem(LS_KEY_FUN, JSON.stringify(add));
// // localStorage.getItem(LS_KEY_FUN);

// localStorage.setItem(LS_KEY_FUN, JSON.stringify(calculator));
// const valueFun = localStorage.getItem(LS_KEY_FUN);
// console.log(JSON.parse(valueFun));

// --------------MODULE 9-----------------------

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// const date = new Date();
// console.log(date);

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// const teamMeetingDate = new Date('March 16, 2030');
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
// // Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

// const date = new Date();
// console.log('Date: ', date);

// // Повертає день місяця від 1 до 31
// console.log('getDate(): ', date.getDate());

// // Повертає день тижня від 0 до 6
// console.log('getDay(): ', date.getDay());

// // Повертає місяць від 0 до 11
// console.log('getMonth(): ', date.getMonth());

// // Повертає рік з 4 цифр
// console.log('getFullYear(): ', date.getFullYear());

// // Повертає години
// console.log('getHours(): ', date.getHours());

// // Повертає хвилини
// console.log('getMinutes(): ', date.getMinutes());

// // Повертає секунди
// console.log('getSeconds(): ', date.getSeconds());

// // Повертає мілісекунди
// console.log('getMilliseconds(): ', date.getMilliseconds());

// const date = new Date();
// console.log('Date: ', date);

// // Повертає день місяця від 1 до 31
// console.log('getUTCDate(): ', date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log('getUTCDay(): ', date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log('getUTCMonth(): ', date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log('getUTCFullYear(): ', date.getUTCFullYear());

// // Повертає години
// console.log('getUTCHours(): ', date.getUTCHours());

// // Повертає хвилини
// console.log('getUTCMinutes(): ', date.getUTCMinutes());

// // Повертає секунди
// console.log('getUTCSeconds(): ', date.getUTCSeconds());

// // Повертає мілісекунди
// console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds());

// const date = new Date('2022 10 10 21:15:00');
// console.log(date);

// ------------MODULE 9 PART 2------------------
// ----------------PROMISE-------------------------
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log('After promise.then()');

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// -----------EVENT LOOP-----------------
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'), 5000);
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

// ---------PROMISE--------------------
// const promise = new Promise(resolve => {
//   resolve(10);
// });
// promise
//   .then(value => {
//     return new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => console.log(value));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random();
//     if (random > 0.5) {
//       resolve({ name: 'Alice' });
//     } else {
//       reject('🤬');
//     }
//   }, 500);
// });

// console.log(promise);

// promise
//   .then(value => {
//     console.log(value);
//     value.city = 'Lviv';
//     return value;
//   })
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('whats all');
//   });

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.
const selectors = {
  startBtn: document.querySelector('.js-start'),
  container: document.querySelector('.js-container'),
};

selectors.startBtn.addEventListener('click', handlerStart);

function handlerStart(evt) {
    evt.target.disabled = true;
  const promises = [...selectors.container.children].map(createPromise);
    // const promises = Array.from(selectors.container.children).map((_)=>createPromise());
    Promise.allSettled(promises).then((items) => {
    items.forEach((item, i) => {
    const child = selectors.container.children[i];
        child.textContent = "";
        

    setTimeout(() => {
        child.textContent = item.value || item.reason
        
    if (items.length-1===i) {
    const instance = basicLightbox.create(`
	<h1>${isWinner ? "Winner" : "Loser"}</h1>
`)
        instance.show()
        evt.target.disabled = false;
    }}, 1000 * (i + 1));
    });
        
        const isWinner =
            items.every(({ status }) => status === 'fulfilled') ||
            items.every(({ status }) => status === "rejected")
    })

}

function createPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve('🍋');
    } else {
      reject('🍒');
    }
  });
}
