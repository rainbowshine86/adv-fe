var GodGiftForm = require('containers/god-gift-form/god-gift-form.js');
var UserWealth = require('containers/user-wealth/user-wealth.js');

module.exports = function Game() {
    var elem = $('<div></div>');

    function render() {
        elem.html(App.templates['game']({}));

        elem.find('.content').html(new GodGiftForm().render().elem);
        elem.find('.top-block').html(new UserWealth().render().elem);

        return this;
    }

    return {
        render: render,
        elem: elem
    }
};