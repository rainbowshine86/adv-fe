var Game = require('containers/game/game.js');

$('.layout').html(new Game().render().elem);
