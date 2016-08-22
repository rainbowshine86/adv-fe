var Resource = require('components/resource/resource.js');

module.exports = function UserWealth() {
    var elem = $('<div></div>');

    var goldResource = new Resource({
        name: 'Gold',
        count: 20
    });
    var copperResource = new Resource({
        name: 'Copper',
        count: 30
    });
    var someResource = new Resource({
        name: 'Some',
        count: 30
    });

    function render() {
        elem.html(App.templates['user-wealth']({}));

        elem.find('.user-wealth__gold-resource').html(goldResource.render().elem);
        elem.find('.user-wealth__copper-resource').html(copperResource.render().elem);
        elem.find('.user-wealth__some-resource').html(someResource.render().elem);

        return this;
    }

    return {
        render: render,
        elem: elem
    }
};