Meteor.publish('oneKitties', function (id) {
    console.log('oneKitties', id);
    return Kitties.find({_id: id});
});
