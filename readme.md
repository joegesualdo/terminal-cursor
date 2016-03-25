## Terminal Cursor [![Build Status](https://travis-ci.org/joegesualdo/terminal-cursor.svg?branch=master)](https://travis-ci.org/joegesualdo/terminal-cursor)
> Manipulate terminal cursor (move, hide, show, etc)

## Install
```
$ npm install --save terminal-cursor 
```

## Usage
```javascript
var Cursor = require("terminal-cursor")

var cursor = new Cursor(0, 0)
cursor.move("down", 2)
console.log("Hello")
cursor.move("down", 4)
console.log("World")
```

## Test
```
$ npm test
```

## API

### `new Cursor(xPos, yPos)`
> Creates an instance of Cursor at a given position

| Name | Type | Description |
|------|------|-------------|
| xPos | `Number` | x coordinate of the cursor you are creating
| yPos | `Number` | y coordinate of the cursor you are creating

Returns a `Cursor` instance

```javascript
var Cursor = require("terminal-cursor")

var cursor = new Cursor(0, 0)
cursor.move("down", 2)
console.log("Hello")
cursor.move("down", 4)
console.log("World")
```

### `move(type, count)`
> Moves the cursor in a given position

| Name | Type | Description |
|------|------|-------------|
| type | `String` | Type of movement: "up", "down", "right", "left"|
| count | `Number` | How many times should the cursor move.

```javascript
var Cursor = require("terminal-cursor")

var cursor = new Cursor(0, 0)
cursor.move("down", 2)
console.log("Hello")
cursor.move("down", 4)
console.log("World")
```

### `movePos(xPos, yPos)`
> Moves the cursor to a given coordinate

| Name | Type | Description |
|------|------|-------------|
| xPos | `Number` | The x coordinate where you want to move the cursor.
| yPos | `Number` | The y coordinate where you want to move the cursor.

```javascript
var Cursor = require("terminal-cursor")

var cursor = new Cursor(0, 0)
cursor.movePos(5, 10)
console.log("Hello")
```

### `show()`
> Displays the cursor

### `hide()`
> Hides the cursor

## License
MIT © [Joe Gesualdo]()
