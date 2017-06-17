'use strict';

describe('Gutter game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('Has a score of 0, does not allow player to bowl again', function() {
    for(var i = 0; i < 20; i++) { game.bowl(0) };
    game.calculateScore();
    expect(game.currentScore()).toEqual(0);
    expect(function() { game.bowl(0) }).toThrow(new Error('Cannot bowl - game is complete'));
  });
});

describe('Game with no 10th frame bonus', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('Calculates all scores and bonuses correctly, knows it is finished', function() {
    game.bowl(1);
    game.bowl(4);
    game.bowl(4);
    game.bowl(5);
    game.bowl(6);
    game.bowl(4);
    game.bowl(5);
    game.bowl(5);
    game.bowl(10);
    game.bowl(0);
    game.bowl(1);
    game.bowl(7);
    game.bowl(3);
    game.bowl(6);
    game.bowl(4);
    game.bowl(10);
    game.bowl(2);
    game.bowl(7);
    game.calculateScore();
    expect(game.currentScore()).toEqual(125);
    expect(function() { game.bowl(0) }).toThrow(new Error('Cannot bowl - game is complete'));
  });
});
