import Ember from 'ember';
import DS from 'ember-data';
import Model from 'travis/models/model';

export default Model.extend({
  value: DS.attr(),
  description: DS.attr(),
  fingerprint: DS.attr(),
  isCustom: true
});
