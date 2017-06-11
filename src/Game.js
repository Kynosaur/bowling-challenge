'use strict';

var Game = function() {
  this._frames = [new Frame];
  this._currentFrame = 0;
};

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.addNewFrame = function() {
  this._frames.push(new Frame);
  this._currentFrame = this._frames.length - 1;
}

Game.prototype.bowl = function(pinsAmount) {
  if(!Number.isInteger(pinsAmount) || pinsAmount < 0) throw new Error('Argument must be an integer between 0 and 10');
  this._frames[this._currentFrame].bowl(pinsAmount);
  if(this._frames[this._currentFrame].isComplete()) this.addNewFrame();
}

Game.prototype.currentScore = function() {
  var score = 0;
  this._frames.forEach(function(frame) {
    score += frame.score();
  });
  return score;
}
