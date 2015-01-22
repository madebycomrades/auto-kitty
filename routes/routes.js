Router.plugin('dataNotFound', {
    notFoundTemplate: 'notFound'
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('home', {
    path: '/'
});

Router.route('kitty', {
    path: '/:id',
    waitOn: function () {

        // Subscribe to the 'oneKitty' published record set. The router will wait for the record set
        // to be ready before rendering the route. By passing in 'theKitty' as the client collection
        // name we identify TheKitty as the local collection to receive the record set.

        return Meteor.subscribe('oneKitty', this.params.id, 'theKitty');
    },
    data: function () {

        // By now TheKitty will have been populated with the single document representing the
        // desired kitty. The object returned from this function becomes the template data context
        // for the view.

        return TheKitty.findOne(this.params.id);
    }
});
