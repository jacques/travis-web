window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchMessage: "Ember.LinkView is deprecated. Please use Ember.LinkComponent." },
    { handler: "silence", matchMessage: "Calling store.find() with a query object is deprecated. Use store.query() instead." },
    { handler: "silence", matchMessage: "Ember.View is deprecated. Consult the Deprecations Guide for a migration strategy." },
    { handler: "silence", matchMessage: "Ember.arrayComputed is deprecated. Replace it with plain array methods" },
    { handler: "silence", matchMessage: "The filter API will be moved into a plugin soon. To enable store.filter using an environment flag, or to use an alternative, you can visit the ember-data-filter addon page" },
    { handler: "silence", matchMessage: "Usage of `state` is deprecated, use `_state` instead." },
    { handler: "silence", matchMessage: "Function#observesBefore is deprecated and will be removed in the near future." },
    { handler: "silence", matchMessage: "Ember.addBeforeObserver is deprecated and will be removed in the near future." },
    { handler: "silence", matchMessage: "`Ember.ArrayController` is deprecated." },
    { handler: "silence", matchMessage: "Ember.removeBeforeObserver is deprecated and will be removed in the near future." },
    { handler: "silence", matchMessage: "The default behavior of `shouldBackgroundReloadRecord` will change in Ember Data 2.0 to always return true. If you would like to preserve the current behavior please override `shouldBackgroundReloadRecord` in your adapter:application and return false." },
    { handler: "silence", matchMessage: "RestAdapter#find has been deprecated and renamed to `findRecord`." },
    { handler: "silence", matchMessage: "Using the same function as getter and setter is deprecated." },
    { handler: "silence", matchMessage: "Using store.dematerializeRecord() has been deprecated since it was intended for private use only. You should use store.unloadRecord() instead." },
    { handler: "silence", matchMessage: "A property of <travis@view:-outlet::ember607> was modified inside the didInsertElement hook. You should never change properties on components, services or models during didInsertElement because it causes significant performance degradation." },
    { handler: "silence", matchMessage: "Using DS.Snapshot.get() is deprecated. Use .attr(), .belongsTo() or .hasMany() instead." },
    { handler: "silence", matchMessage: "Usage of `typeKey` has been deprecated and will be removed in Ember Data 2.0. It has been replaced by `modelName` on the model class." }
  ]
};
