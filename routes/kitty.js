Router.route('kitty', {
    path: '/:kittyId',
    waitOn: function () {

        return [
            Meteor.subscribe('oneKitty', this.params.kittyId, 'theKitty'),
            Meteor.subscribe('kittyPeople', this.params.kittyId, 'theKittyPeople')
        ];
    },
    data: function () {

        Session.set('kittyId', this.params.kittyId);

        var kitty = TheKitty.findOne(this.params.kittyId);

        if ( kitty ) {
            return {
                kitty: TheKitty.findOne(this.params.kittyId),
                people: TheKittyPeople.find()
            }
        }
    }
});
