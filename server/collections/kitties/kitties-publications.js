/**
* Here be dragons. Meteor.publish exposes arbitrary result sets to the client that when subscribed
* to fill up local collections. Typically used for exposing controlled subsets of a server
* collection. Subscribed-to data on the client is 'reactive', that is, client changes are
* automatically propagated back to the server and then on to any other subscribed clients which
* then update their DOMs.
*
* @see http://docs.meteor.com/#/full/meteor_publish
* @see http://docs.meteor.com/#/full/observe
*
* @see http://stackoverflow.com/questions/19826804/understanding-meteor-publish-subscribe/21853298#21853298
* @see http://stackoverflow.com/questions/10565654/how-does-the-messages-count-example-in-meteor-docs-work
*/

/**
* Publish a record set called 'oneKitty'. The objective of this record set is just to contain the
* kitty identified by the supplied id, therefore restricting client to only accessing kitties for
* which they have an id.
*
* @param  {string} id The id of the kitty
* @param  {string} collection The name of the local client collection to populate
*/
Meteor.publish('oneKitty', function (id, localCollection) {

    var kitty;
    var self = this;

    // The 'observe()' function watches the events on the result set continually, calling its
    // callbacks whenever the defined events occur (in this case just 'added' and 'changed',
    // although there are more available). The 'added' callback will be called initially
    // syncronously for all documents in the matched result set, in this case just for the one
    // document which matched the id.

    // The 'changed' callback will be called every time any field is updated by any client, so we
    // explicity publish the changes by calling 'this.changed'. Without this call other clients
    // wouldn't see live changes to the document.

    var handle = Kitties.find({_id: id}).observe({
        added: function (doc) {
            kitty = doc;
        },
        changed: function (doc) {
            self.changed(localCollection, id, doc);
        }
    });

    // If we found a matching kitty, the 'added' callback above should have executed once and the
    // value of the 'kitty' var should be a valid document. Put this into the result set by calling
    // the 'this.added' function.

    if ( kitty ) this.added(localCollection, id, kitty);


    // Notify the subscriber that the result set is ready to use.

    this.ready();

    // Stop the observation when the client un-subscribes.

    this.onStop(function () {
        handle.stop();
    });
});

Meteor.publish('allKitties', function () {
    return Kitties.find();
});
