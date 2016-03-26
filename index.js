"use strict";

var csi = require("control-sequence-introducer")
var move = require("move-terminal-cursor")

function Cursor(x, y){
  this.xPos = x;
  this.yPos = y;
  this.hidden = false;
  move("toPos", {row: y, col: x})
}

Cursor.prototype.move = function(type, num) {
  num = num || 1
  switch(type) {
    case "up":
      move("up", {count: num})
      this.yPos = this.yPos - num
      break;
    case "down":
      move("down", {count: num})
      this.yPos = this.yPos + num
      break;
    case "right":
      move("right", {count: num})
      this.xPos = this.xPos + num
      break;
    case "left":
      move("left", {count: num})
      this.xPos = this.xPos - num
      break;
    default:
      throw new Error("Movement type not recognized.")
      break;
  }
}

Cursor.prototype.movePos = function(x, y) {
  move("toPos", {row: y, col: x})
  this.xPos = x;
  this.yPos = y;
}

Cursor.prototype.show = function() {
  showCursor()
  this.hidden = false;
}

Cursor.prototype.show = function() {
  hideCursor()
  this.hidden = true;
}

function hideCursorString() {
  return csi + "?25l"
}
function hideCursor() {
  process.stdout.write(hideCursorString())
}
function showCursorString() {
  return csi + "?25h"
}
function showCursor() {
  process.stdout.write(showCursorString())
}

module.exports = Cursor;
