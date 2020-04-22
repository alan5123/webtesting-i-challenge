const {repair} = require('./enhancer.js');
// test away!

const item = {
    name: "pickaxe",
    durability: 0
  };

    describe("repair()", function () {
      it("should accept an item object and return a new item with the durability restored to 100", function () {
        repair(item);
        expect(item.durability).toBe(100);
      });
    });
