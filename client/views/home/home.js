Template.home.events({
    'submit .js-new-kitty-form': function (event) {

        event.preventDefault();

        var name = event.target.name.value;

        Meteor.call('newKitty', name, function (err, id) {

            if ( err ) return console.log(err);

            Router.go('/'+id);
        });
    }
});
