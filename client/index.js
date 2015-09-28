var name = 'count';
// Counter = new Meteor.Collection('count');
// Counter = new Meteor.Collection(name);

Meteor.startup(function () {
  // code to run on server at startup
  Meteor.subscribe('count');
  // Counter = new Meteor.Collection(name);
});

Template.hello.onCreated(function (){
  Counter = new Meteor.Collection(name);
});

Template.hello.helpers({
  counter: function () {
    if (Counter) {
      return Counter.find().count();
    }
    return -1;
  }
});

Template.hello.events({
  'click button': function () {
    Counter.insert({'test': '1'});
  }
});
