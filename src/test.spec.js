const { findMaxWolf } = require("./index");
const { equal } = require("assert");

describe("Wolf", () => {
  it("shuld return max number wolf 3", () => {
    const wolfArray = [1, 1, 1, 2, 2, 3, 3, 3, 3];

    const wolf = findMaxWolf(wolfArray);

    equal(3, wolf);
  });

  it("shuld return max number wolf 3", () => {
    const wolfArray = [5, 5, 5, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5];

    const wolf = findMaxWolf(wolfArray);

    equal(3, wolf);
  });

  it("shuld return max number wolf 1", () => {
    const wolfArray = [1, 1, 1, 2, 2, 3, 3, 3];

    const wolf = findMaxWolf(wolfArray);

    equal(1, wolf);
  });

  it("shuld return max number wolf 1", () => {
    const wolfArray = [1, 1, 1, 1, 2, 2, 2, 2];

    const wolf = findMaxWolf(wolfArray);

    equal(1, wolf);
  });

  it("shuld return max number wolf 3", () => {
    const wolfArray = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

    const wolf = findMaxWolf(wolfArray);

    equal(3, wolf);
  });
});
