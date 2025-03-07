

//        ⭐ now promise chain example 👇

const printFun = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Print Data :', id);
      resolve('success');
    }, 2000);
  });
}

const fatchPrint = () => {
  console.log('fatching data......');
}


/*
fatchPrint();
printFun(1).then(() => {
  fatchPrint();
  printFun(2).then(() => {
    fatchPrint();
    printFun(3).then(() => {
      fatchPrint();
      printFun(4).then(() => {
        fatchPrint();
        printFun(5).then(() => {
        });
      });
    });
  });         // convert it to the actual promise chaining 👇
});
*/


fatchPrint();
printFun(1).then(() => {
  fatchPrint();
  return printFun(2);
}).then(() => {
  fatchPrint();
  return printFun(3);
}).then(() => {
  fatchPrint();
  return printFun(4);
}).then(() => {
  fatchPrint();
  return printFun(5);
}).then((res) => {
  console.log('Data printing',res);
})


