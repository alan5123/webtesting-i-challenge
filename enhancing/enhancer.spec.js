const {repair, succeed, fail} = require('./enhancer.js');
// test away!

let item = {
    name: "pickaxe",
    durability: 55,
    enhancement: 5,
  };

  let maxItem = {
    name: "pickaxe",
    durability: 100,
    enhancement: 20,
  };


  let pick = {
    name: "pickaxe",
    durability: 55,
    enhancement: 5,
  };
 

 

    describe("repair()", function () {
      it("should accept an item object and return a new item with the durability restored to 100", function () {
        repair(item);
        expect(item.durability).toBe(100);
      });
    });

describe("succeed()", function(){
  it("should accept an item and The item's enhancement increases by 1 except if level 20", function(){
    succeed(item);
    expect(item.enhancement).toBe(6)
  })
})


describe("fail()", function(){
  it("should accept an item and The item's durability decreases by 5 if enchament is less than 5 and by 10 if greater than or equal to 15, should laso lose one enchanment level if above 16", function(){
 
    fail(maxItem);
    expect(maxItem.durability).toBe(90)
    expect(maxItem.enhancement).toBe(19)
    fail(pick);
    expect(pick.durability).toBe(50)
  })
})

