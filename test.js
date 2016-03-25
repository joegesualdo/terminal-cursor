var expect = require("chai").expect
var Cursor = require("./index")

describe("Cursor", function(){
  describe(".move", function(){
    it("can be instantiated with x and y cords", function(){
      var cursor = new Cursor(10, 10);

      expect(cursor.xPos).to.equal(10)
      expect(cursor.yPos).to.equal(10)
    })
    it("correctly moves down", function(){
      var cursor = new Cursor(10, 10);
      cursor.move("down", 2)
      expect(cursor.yPos).to.equal(12)
      expect(cursor.xPos).to.equal(10)
    })
    it("correctly moves up", function(){
      var cursor = new Cursor(10, 10);
      cursor.move("up", 2)
      expect(cursor.yPos).to.equal(8)
      expect(cursor.xPos).to.equal(10)
    })
    it("correctly moves right", function(){
      var cursor = new Cursor(10, 10);
      cursor.move("right", 2)
      expect(cursor.yPos).to.equal(10)
      expect(cursor.xPos).to.equal(12)
    })
    it("correctly moves left", function(){
      var cursor = new Cursor(10, 10);
      cursor.move("left", 2)
      expect(cursor.yPos).to.equal(10)
      expect(cursor.xPos).to.equal(8)
    })
  })
  describe(".movePos", function(){
    it("correctly moves to position", function(){
      var cursor = new Cursor(10, 10);

      cursor.movePos(30, 20)
      expect(cursor.xPos).to.equal(30)
      expect(cursor.yPos).to.equal(20)
    })
  })
})
