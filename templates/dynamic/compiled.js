module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"][["view-filters.hbs"]] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"filters-list-item\">\n    Where:\n    <span class=\"filters-list-item-value\">"
    + escapeExpression(((helpers.filterWhere || (depth0 && depth0.filterWhere) || helperMissing).call(depth0, (depth0 != null ? depth0.city : depth0), (depth0 != null ? depth0.state : depth0), (depth0 != null ? depth0.zip : depth0), {"name":"filterWhere","hash":{},"data":data})))
    + "</span>\n</div>\n<div class=\"filters-list-item\">\n    Metrics:\n    <span class=\"filters-list-item-value\">"
    + escapeExpression(((helpers.filterMetrics || (depth0 && depth0.filterMetrics) || helperMissing).call(depth0, (depth0 != null ? depth0.metric : depth0), {"name":"filterMetrics","hash":{},"data":data})))
    + "</span>\n</div>\n<div class=\"filters-list-item\">\n    When: \n    <span class=\"filters-list-item-value\">"
    + escapeExpression(((helpers.filterWhen || (depth0 && depth0.filterWhen) || helperMissing).call(depth0, (depth0 != null ? depth0.start : depth0), (depth0 != null ? depth0.end : depth0), {"name":"filterWhen","hash":{},"data":data})))
    + "</span>\n</div>\n<div class=\"filters-list-item\">\n    Groups:\n    <span class=\"filters-list-item-value\">"
    + escapeExpression(((helpers.filterGroups || (depth0 && depth0.filterGroups) || helperMissing).call(depth0, (depth0 != null ? depth0.group : depth0), {"name":"filterGroups","hash":{},"data":data})))
    + "</span>\n</div>\n<div class=\"filters-list-item\">\n    Garden types:\n    <span class=\"filters-list-item-value\">"
    + escapeExpression(((helpers.filterTypes || (depth0 && depth0.filterTypes) || helperMissing).call(depth0, (depth0 != null ? depth0.garden_type : depth0), {"name":"filterTypes","hash":{},"data":data})))
    + "</span>\n</div>\n";
},"useData":true});



this["JST"][["view-tabs.hbs"]] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <li role=\"presentation\">\n        <a href=\"#"
    + escapeExpression(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slug","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" data-toggle=\"tab\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    </li>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div role=\"tabpanel\" class=\"tab-pane\" id=\""
    + escapeExpression(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slug","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"metric-tab-row\">\n            <div class=\"metric-tab-table\">\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"metric-table\" height=\"100%\"></table>\n            </div>\n            <div class=\"metric-tab-chart\">\n                <div class=\"chart\"></div>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul class=\"nav nav-tabs\" role=\"tablist\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.metrics : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</ul>\n\n<div class=\"tab-content\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.metrics : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});

return this["JST"];

};