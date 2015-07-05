Template.amsCounter.onCreated(function() {
  this.counter = new ReactiveVar(Template.currentData().initCounter);
});

Template.amsCounter.helpers({
  counter: function() {
    return Template.instance().counter.get();
  }
});

Template.amsCounter.events({
  'click #my-btn': function(event, template) {
    template.counter.set(template.counter.get() + 1);
  }
});