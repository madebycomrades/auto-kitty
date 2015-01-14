Router.configure({
    layoutTemplate: 'layout'
});

Router.route('home', {
    path: '/'
});

Router.route('kitty', {
    path: '/:id',
    data: function () {
        return Kitties.findOne({_id: this.params.id});
    }
});
