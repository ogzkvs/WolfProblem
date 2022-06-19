const findMaxWolf = (wolfs) => {
  const groupWolfs = [];
  let maxNumberWolfs;
  let maxNumber = 0;

  wolfs.forEach((element) => {

    const index = groupWolfs.findIndex((item) => item.wolfID === element);

    if (index === -1) {
      groupWolfs.push({ wolfID: element, number: 1 });

    } else {
      groupWolfs[index].number += 1;
      if (groupWolfs[index].number > maxNumber) {
        maxNumber = groupWolfs[index].number
      }
    }

  });

  maxNumberWolfs = groupWolfs.filter((item) => item.number === maxNumber);
  console.log(maxNumberWolfs)

  let min = maxNumberWolfs[0].wolfID;

  console.log("min", min)

  maxNumberWolfs.forEach((item) => {
    if (item.wolfID < min) {
      min = item.wolfID;
    }
  });

  return min;
};

module.exports = { findMaxWolf };
