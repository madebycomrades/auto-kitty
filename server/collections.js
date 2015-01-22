/**
 * These are collections only defined on the server. The client doesn't have access to these, unless
 * via a subscription or a remote Meteor.method call.
 */

Kitties = new Mongo.Collection('kitties');
