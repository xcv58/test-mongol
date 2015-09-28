var name = 'count';
var Counter = new Meteor.Collection(name);
// var Counter = new Meteor.Collection('count');

Meteor.startup(function () {
  // code to run on server at startup
  Meteor.publish(name, function () {
    return Counter.find();
  });
});
