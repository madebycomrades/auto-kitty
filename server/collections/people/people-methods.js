Meteor.methods({
    newPerson: function (name, kittyId) {

        var person = {
            kittyId: kittyId,
            name: name
        };

        return People.insert(person);
    },
    removePerson: function (id) {
        
        return People.remove(id);
    }
});
