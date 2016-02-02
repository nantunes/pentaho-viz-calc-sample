define([
  "pentaho/visual/base/modelFactory",
  "pentaho/type/facets/DiscreteDomain",
  "pentaho/i18n!Type"
], function(visualFactory, DiscreteDomainRefinementFacet, bundle) {

  "use strict";

  return function(context) {

    var Visual = context.get(visualFactory);

    var Operations = context.get("pentaho/type/string").refine({
      meta: {
        facets: DiscreteDomainRefinementFacet,
        domain: ["min", "max", "avg", "sum"]
      }
    });

    return Visual.extend({
        meta: {
          id: "pentaho-viz-calc-sample",
          v2Id: "pentaho-viz-calc-sample",

          view: "src/View",
          styleClass: "pentaho-viz-calc-sample-style",
          props: [
            {
              name: "myList",
              type: ["string"],
              countMin: 1,
              countMax: 3
            },
            {
              name: "measure",
              required: true
            },
            {
              name: "operation",
              required: true,
              type: Operations
            }
          ]
        }
      })
      .implement({meta: bundle.structured});
  };
});
