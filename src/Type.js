define([
  "pentaho/visual/base/modelFactory",
  "pentaho/i18n!Type"
  //"./theme/type"
], function(visualFactory, bundle) {

  "use strict";

  return function(context) {

    var Visual = context.get(visualFactory);

    return Visual.extend({
      meta: {
        id: "pentaho-viz-calc-sample",
        v2Id: "pentaho-viz-calc-sample",

        view: "src/View",
        styleClass: "pentaho-viz-calc-sample-style",
        props: [
          {
            name: "measure",
            required: true
          },
          {
            name: "operation",
            type: {
              base: "string",
              domain: ["min", "max", "avg", "sum"]
            },
            value: "min"
          }
        ]
      }
    })
    .implement({meta: bundle.structured});
  };
});
