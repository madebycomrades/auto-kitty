Router.configure({
    layoutTemplate: 'layout'
});

Router.route('home', {
    path: '/'
});

Router.route('kitty', {
    path: '/:id',
    waitOn: function () {
        console.log('Waiting ...', this.params.id);
        return Meteor.subscribe('oneKitties', this.params.id);
    },
    data: function () {
        console.log('Data!');
        return Kitties.findOne();
    }
});
