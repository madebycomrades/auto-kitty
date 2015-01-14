Template.home.helpers({
    kitties: function () {
        return Kitties.find();
    }
});

Template.home.events({
    'submit .js-new-kitty-form': function (event) {

        var name = event.target.name.value;

        Kitties.insert({
            name: name
        });

        event.target.name.value = '';

        return false;
    }
});
