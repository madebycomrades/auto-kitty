Template.kitty.events({
    'submit .js-add-person-form': function (event) {

        event.preventDefault();

        var name = event.target.name.value;

        Meteor.call('newPerson', name, Session.get('kittyId'));
    },
    'click .js-remove-person-btn': function (event) {

        event.preventDefault();

        var id = $(event.target).closest('li').data('id');

        Meteor.call('removePerson', id);
    }
});
