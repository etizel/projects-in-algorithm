const promessa = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(() => {
      resolve({ name: 'Francisco Etizel', age: 27, approved: true });
    }, 1000);
  } else {
    console.log(reject(Error('Um erro ocorreu na promise')));
  }
});

// then().finally()

const thenX = promessa
  .then((resolve) => {
    console.log(resolve);
    return resolve;
  })
  .then((resolve1) => {
    console.log(resolve1);
  })
  .finally((end) => {
    const X = { name: 'kill bill', year: 2000 };
    end = X;
    console.log(end);
  });

console.log(thenX);
// catch

// const thenX = promessa
//   .then((resolve) => {
//     console.log(resolve);
//     return resolve;
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });
// console.log(thenX);
