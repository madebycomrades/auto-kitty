Kitties = new Mongo.Collection('kitties');

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
