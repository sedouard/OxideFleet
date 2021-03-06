import DS from 'ember-data';

export default DS.Model.extend({

  trips: DS.hasMany('trip', {async: true}),
  name: DS.attr('string'),
  is_active: DS.attr('boolean'),
  vin: DS.attr('string'),
  make: DS.attr('string'),
  model: DS.attr('string'),
  production_year: DS.attr('string'),
  mileage: DS.attr('string')
});
