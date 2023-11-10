const { setTimeout } = require('timers');

function sleep(ms) {
  return new Promise((resolve) => {});
}

const foo = async () => {
  const wait = (timeToDelay) =>
    new Promise((resolve) => {
      setTimeout(resolve, timeToDelay);
      console.log(resolve);


      for (let i = 0; i < 10; i++) {
        console.log(i);
      }
    });
  await wait(1000);

  console.log('hell01');
};

const foo2 = () => {
  console.log('hell02');
};

foo();
foo2();
// const main = async () => {
//
// };
//
// main();
