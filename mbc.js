if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('dcount', 0);
  Session.setDefault('ccount', 0);
  Session.setDefault('earned', 0);
  //Session.setDefault('choice', NULL);
  Template.registerHelper('equals',
    function(v1, v2) {
        return (v1 === v2);
    }
  );


  Template.task.helpers({
    ccount: function () {
      return Session.get('ccount');
    },
    dcount: function () {
      return Session.get('dcount');
    },  
    counter: function () {
      return Session.get('counter');
    },
    earned: function () {
      return Session.get('earned');
    },   
    choice: function () {
      return Session.get('choice');
    }   
  });

  Template.task.events({
    'click button': function (e) {
      var clickedButton = e.currentTarget;
      if ($(clickedButton).val()==1) {
        // increment the counter when button is clicked
        Session.set('ccount', Session.get('ccount') + 1);
        Session.set('choice', 1);        
      } 
      else {
        Session.set('dcount', Session.get('dcount') + 1);
        Session.set('choice', 2);        
      }
      Session.set('counter', Session.get('counter') + 1);     
      Session.set('earned', Session.get('dcount') * payoffs.DD + Session.get('ccount') * payoffs.CC);
    }    
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
