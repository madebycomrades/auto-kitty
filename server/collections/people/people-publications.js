Meteor.publish('kittyPeople', function (kittyId, localCollection) {

    var people = [];
    var self = this;

    var handle = People.find({kittyId: kittyId}).observe({
        added: function (doc) {
            self.added(localCollection, doc._id, doc);
        },
        removed: function (doc) {
            self.removed(localCollection, doc._id);
        }
    });

    this.ready();

    this.onStop(function () {
        handle.stop();
    });
});
