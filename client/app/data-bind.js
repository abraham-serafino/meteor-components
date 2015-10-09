_ = lodash;

/**
 * Binds a data model to a template]
 * @param {object} template - the template we are binding the data model to
 * @param {object} model - the data model to be bound
 */
function bindModel(template) {

  var dataModel;

  function _updateModel(event, tmpl) {

    var key    = event.target.getAttribute('data-model'),
        value  = $( event.target ).val(),
        model  = tmpl.dataModel.get();

    _.set(model, key, value);
    tmpl.dataModel.set(model);

    $('[data-model="' + key + '"]').val(value);
  }

  template.onCreated(function onCreated() {
    dataModel = Template.currentData().dataModel || {};
    this.dataModel = new ReactiveVar(dataModel);
  });

  template.events({
    'change [data-model]': _updateModel,
    'keyup [data-model]': _updateModel
  });

  template.onRendered(function onRendered() {

    $('[data-model]').each(function() {

      var key   = this.getAttribute('data-model'),
          value = _.get(dataModel, key);

      $(this).val(value);
    });

  });
}
