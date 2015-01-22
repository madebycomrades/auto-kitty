/**
 * Meteor.methods are functions that run on the server but are callable from the client using the
 * `Meteor.call` function.
 */

Meteor.methods({
    newKitty: function (name) {

        var existingKitty = Kitties.findOne({name: name});

        if ( existingKitty ) {
            throw new Meteor.Error('Kitty name already taken');
        }

        var kitty = {
            name: name,
            expenses: [],
            people: [],
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return Kitties.insert(kitty);
    }
});
