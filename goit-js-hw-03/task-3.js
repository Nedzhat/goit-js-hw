const findBestEmployee = function (employees) {
  const findInfo = Object.entries(employees);
  let biggestPoints = 0;
  for (const item of findInfo) {
    if (item[1] > biggestPoints) {
      biggestPoints = item[1];
    }
  }
  for (const item of findInfo) {
    if (item[1] === biggestPoints) {
      return item[0];
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
