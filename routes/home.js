Router.route('home', {
    path: '/',
    waitOn: function () {
        return Meteor.subscribe('allKitties');
    },
    data: function () {
        return {
            kitties: Kitties.find()
        }
    }
});
