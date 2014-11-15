(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/eric/Documents/code/fc-mill/bower_components/bootstrap/js/tab.js":[function(require,module,exports){
/* ========================================================================
 * Bootstrap: tab.js v3.3.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.0'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

},{}],"/home/eric/Documents/code/fc-mill/bower_components/datatables/media/js/jquery.dataTables.min.js":[function(require,module,exports){
(function (global){
/*! DataTables 1.10.3
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */
(function(Da,P,l){var O=function(h){function V(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),d[c]=e,"o"===b[1]&&V(a[e])});a._hungarianMap=d}function G(a,b,c){a._hungarianMap||V(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==l&&(c||b[d]===l))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),G(a[d],b[d],c)):b[d]=b[e]})}function O(a){var b=p.defaults.oLanguage,c=a.sZeroRecords;
!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&D(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&D(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){z(a,"ordering","bSort");z(a,"orderMulti","bSortMulti");z(a,"orderClasses","bSortClasses");z(a,"orderCellsTop","bSortCellsTop");z(a,"order","aaSorting");z(a,"orderFixed","aaSortingFixed");z(a,"paging","bPaginate");
z(a,"pagingType","sPaginationType");z(a,"pageLength","iDisplayLength");z(a,"searching","bFilter");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&G(p.models.oSearch,a[b])}function fb(a){z(a,"orderable","bSortable");z(a,"orderData","aDataSort");z(a,"orderSequence","asSorting");z(a,"orderDataType","sortDataType")}function gb(a){var a=a.oBrowser,b=h("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,
overflow:"scroll"}).append(h('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body"),c=b.find(".test");a.bScrollOversize=100===c[0].offsetWidth;a.bScrollbarLeft=1!==c.offset().left;b.remove()}function hb(a,b,c,d,e,f){var g,i=!1;c!==l&&(g=c,i=!0);for(;d!==e;)a.hasOwnProperty(d)&&(g=i?b(g,a[d],d,a):a[d],i=!0,d+=f);return g}function Ea(a,b){var c=p.defaults.column,d=a.aoColumns.length,c=h.extend({},p.models.oColumn,c,{nTh:b?b:P.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:
"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},p.models.oSearch,c[d]);ia(a,d,null)}function ia(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==l&&null!==c&&(fb(c),G(p.defaults.column,c),c.mDataProp!==l&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&
!c.sClass&&(c.sClass=c.className),h.extend(b,c),D(b,c,"sWidth","sWidthOrig"),"number"===typeof c.iDataSort&&(b.aDataSort=[c.iDataSort]),D(b,c,"aDataSort"));var g=b.mData,i=W(g),j=b.mRender?W(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b.fnGetData=function(a,b,c){var d=i(a,b,l,c);return j&&b?j(d,b,a,c):d};b.fnSetData=function(a,b,c){return Q(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||
(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function X(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Fa(a);for(var c=0,d=b.length;c<
d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Y(a);u(a,null,"column-sizing",[a])}function ja(a,b){var c=Z(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function $(a,b){var c=Z(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function aa(a){return Z(a,"bVisible").length}function Z(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ga(a){var b=a.aoColumns,c=a.aoData,d=p.ext.type.detect,e,f,g,i,j,h,m,o,k;e=0;for(f=b.length;e<f;e++)if(m=
b[e],k=[],!m.sType&&m._sManualType)m.sType=m._sManualType;else if(!m.sType){g=0;for(i=d.length;g<i;g++){j=0;for(h=c.length;j<h&&!(k[j]===l&&(k[j]=w(a,j,e,"type")),o=d[g](k[j],a),!o||"html"===o);j++);if(o){m.sType=o;break}}m.sType||(m.sType="string")}}function ib(a,b,c,d){var e,f,g,i,j,n,m=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var o=n.targets!==l?n.targets:n.aTargets;h.isArray(o)||(o=[o]);f=0;for(g=o.length;f<g;f++)if("number"===typeof o[f]&&0<=o[f]){for(;m.length<=o[f];)Ea(a);d(o[f],
n)}else if("number"===typeof o[f]&&0>o[f])d(m.length+o[f],n);else if("string"===typeof o[f]){i=0;for(j=m.length;i<j;i++)("_all"==o[f]||h(m[i].nTh).hasClass(o[f]))&&d(i,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function I(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},p.models.oRow,{src:c?"dom":"data"});f._aData=b;a.aoData.push(f);for(var b=a.aoColumns,f=0,g=b.length;f<g;f++)c&&Ha(a,e,f,w(a,e,f)),b[f].sType=null;a.aiDisplayMaster.push(e);(c||!a.oFeatures.bDeferRender)&&Ia(a,e,c,d);return e}
function ka(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=la(a,e);return I(a,c.data,e,c.cells)})}function w(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,i=f.sDefaultContent,c=f.fnGetData(g,d,{settings:a,row:b,col:c});if(c===l)return a.iDrawError!=e&&null===i&&(R(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b,4),a.iDrawError=e),i;if((c===g||null===c)&&null!==i)c=i;else if("function"===typeof c)return c.call(g);
return null===c&&"display"==d?"":c}function Ha(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function Ja(a){return h.map(a.match(/(\\.|[^\.])+/g),function(a){return a.replace(/\\./g,".")})}function W(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=W(c))});return function(a,c,f,g){var i=b[c]||b._;return i!==l?i(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===
typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,i;if(""!==f){i=Ja(f);for(var j=0,h=i.length;j<h;j++){f=i[j].match(ba);g=i[j].match(S);if(f){i[j]=i[j].replace(ba,"");""!==i[j]&&(a=a[i[j]]);g=[];i.splice(0,j+1);i=i.join(".");j=0;for(h=a.length;j<h;j++)g.push(c(a[j],b,i));a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){i[j]=i[j].replace(S,"");a=a[i[j]]();continue}if(null===a||a[i[j]]===l)return l;a=a[i[j]]}}return a};return function(b,
e){return c(b,e,a)}}return function(b){return b[a]}}function Q(a){if(h.isPlainObject(a))return Q(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ja(e),f;f=e[e.length-1];for(var g,i,j=0,h=e.length-1;j<h;j++){g=e[j].match(ba);i=e[j].match(S);if(g){e[j]=e[j].replace(ba,"");a[e[j]]=[];f=e.slice();f.splice(0,j+1);g=f.join(".");i=0;for(h=
d.length;i<h;i++)f={},b(f,d[i],g),a[e[j]].push(f);return}i&&(e[j]=e[j].replace(S,""),a=a[e[j]](d));if(null===a[e[j]]||a[e[j]]===l)a[e[j]]={};a=a[e[j]]}if(f.match(S))a[f.replace(S,"")](d);else a[f.replace(ba,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ka(a){return C(a.aoData,"_aData")}function ma(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0}function na(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===l&&
a.splice(d,1)}function oa(a,b,c,d){var e=a.aoData[b],f;if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=la(a,e).data;else{var g=e.anCells,i;if(g){c=0;for(f=g.length;c<f;c++){for(i=g[c];i.childNodes.length;)i.removeChild(i.firstChild);g[c].innerHTML=w(a,b,c,"display")}}}e._aSortData=null;e._aFilterData=null;a=a.aoColumns;if(d!==l)a[d].sType=null;else{c=0;for(f=a.length;c<f;c++)a[c].sType=null}La(e)}function la(a,b){var c=[],d=b.firstChild,e,f,g=0,i,j=a.aoColumns,n=a._rowReadObject,m=n?{}:[],
o=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),Q(a)(m,b.getAttribute(c)))}},k=function(a){f=j[g];i=h.trim(a.innerHTML);f&&f._bAttrSrc?(Q(f.mData._)(m,i),o(f.mData.sort,a),o(f.mData.type,a),o(f.mData.filter,a)):n?(f._setter||(f._setter=Q(f.mData)),f._setter(m,i)):m.push(i);g++};if(d)for(;d;){e=d.nodeName.toUpperCase();if("TD"==e||"TH"==e)k(d),c.push(d);d=d.nextSibling}else{c=b.anCells;d=0;for(e=c.length;d<e;d++)k(c[d])}return{data:m,cells:c}}function Ia(a,
b,c,d){var e=a.aoData[b],f=e._aData,g=[],i,j,h,m,o;if(null===e.nTr){i=c||P.createElement("tr");e.nTr=i;e.anCells=g;i._DT_RowIndex=b;La(e);m=0;for(o=a.aoColumns.length;m<o;m++){h=a.aoColumns[m];j=c?d[m]:P.createElement(h.sCellType);g.push(j);if(!c||h.mRender||h.mData!==m)j.innerHTML=w(a,b,m,"display");h.sClass&&(j.className+=" "+h.sClass);h.bVisible&&!c?i.appendChild(j):!h.bVisible&&c&&j.parentNode.removeChild(j);h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,j,w(a,b,m),f,b,m)}u(a,"aoRowCreatedCallback",
null,[i,f,b])}e.nTr.setAttribute("role","row")}function La(a){var b=a.nTr,c=a._aData;if(b){c.DT_RowId&&(b.id=c.DT_RowId);if(c.DT_RowClass){var d=c.DT_RowClass.split(" ");a.__rowc=a.__rowc?Ma(a.__rowc.concat(d)):d;h(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)}c.DT_RowData&&h(b).data(c.DT_RowData)}}function jb(a){var b,c,d,e,f,g=a.nTHead,i=a.nTFoot,j=0===h("th, td",g).length,n=a.oClasses,m=a.aoColumns;j&&(e=h("<tr/>").appendTo(g));b=0;for(c=m.length;b<c;b++)f=m[b],d=h(f.nTh).addClass(f.sClass),
j&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Na(a,f.nTh,b))),f.sTitle!=d.html()&&d.html(f.sTitle),Oa(a,"header")(a,d,f,n);j&&ca(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);if(null!==i){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=m[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function da(a,
b,c){var d,e,f,g=[],i=[],j=a.aoColumns.length,n;if(b){c===l&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=j-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);i.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=j=1,i[d][f]===l){a.appendChild(g[d][f].cell);for(i[d][f]=1;g[d+j]!==l&&g[d][f].cell==g[d+j][f].cell;)i[d+j][f]=1,j++;for(;g[d][f+n]!==l&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<
j;c++)i[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",j).attr("colspan",n)}}}}function L(a){var b=u(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))B(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,i="ssp"==A(a),j=a.aiDisplay;a.bDrawing=!0;g!==l&&-1!==g&&(a._iDisplayStart=i?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,B(a,!1);else if(i){if(!a.bDestroying&&
!kb(a))return}else a.iDraw++;if(0!==j.length){f=i?a.aoData.length:n;for(i=i?0:g;i<f;i++){var m=j[i],o=a.aoData[m];null===o.nTr&&Ia(a,m);m=o.nTr;if(0!==e){var k=d[c%e];o._sRowStripe!=k&&(h(m).removeClass(o._sRowStripe).addClass(k),o._sRowStripe=k)}u(a,"aoRowCallback",null,[m,o._aData,c,i]);b.push(m);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==A(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:aa(a),
"class":a.oClasses.sRowEmpty}).html(c))[0];u(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ka(a),g,n,j]);u(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ka(a),g,n,j]);d=h(a.nTBody);d.children().detach();d.append(h(b));u(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function M(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&lb(a);d?ea(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;L(a);a._drawHold=
!1}function mb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,i,j,n,m,o,k=0;k<f.length;k++){g=null;i=f[k];if("<"==i){j=h("<div/>")[0];n=f[k+1];if("'"==n||'"'==n){m="";for(o=2;f[k+o]!=n;)m+=f[k+o],o++;"H"==m?m=b.sJUIHeader:"F"==m&&(m=b.sJUIFooter);-1!=m.indexOf(".")?(n=m.split("."),
j.id=n[0].substr(1,n[0].length-1),j.className=n[1]):"#"==m.charAt(0)?j.id=m.substr(1,m.length-1):j.className=m;k+=o}e.append(j);e=h(j)}else if(">"==i)e=e.parent();else if("l"==i&&d.bPaginate&&d.bLengthChange)g=nb(a);else if("f"==i&&d.bFilter)g=ob(a);else if("r"==i&&d.bProcessing)g=pb(a);else if("t"==i)g=qb(a);else if("i"==i&&d.bInfo)g=rb(a);else if("p"==i&&d.bPaginate)g=sb(a);else if(0!==p.ext.feature.length){j=p.ext.feature;o=0;for(n=j.length;o<n;o++)if(i==j[o].cFeature){g=j[o].fnInit(a);break}}g&&
(j=a.aanFeatures,j[i]||(j[i]=[]),j[i].push(g),e.append(g))}c.replaceWith(e)}function ca(a,b){var c=h(b).children("tr"),d,e,f,g,i,j,n,m,o,k;a.splice(0,a.length);f=0;for(j=c.length;f<j;f++)a.push([]);f=0;for(j=c.length;f<j;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){m=1*e.getAttribute("colspan");o=1*e.getAttribute("rowspan");m=!m||0===m||1===m?1:m;o=!o||0===o||1===o?1:o;g=0;for(i=a[f];i[g];)g++;n=g;k=1===m?!0:!1;for(i=0;i<m;i++)for(g=0;g<o;g++)a[f+
g][n+i]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function pa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ca(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function qa(a,b,c){u(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,i=a.oInstance;
if(h.isPlainObject(g)&&g.data){f=g.data;var j=h.isFunction(f)?f(b):f,b=h.isFunction(f)&&j?j:h.extend(!0,b,j);delete g.data}j={data:b,success:function(b){var d=b.error||b.sError;d&&a.oApi._fnLog(a,0,d);a.json=b;u(a,null,"xhr",[a,b]);c(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=a.oApi._fnLog;"parsererror"==c?d(a,0,"Invalid JSON response",1):4===b.readyState&&d(a,0,"Ajax error",7);B(a,!1)}};a.oAjaxData=b;u(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(i,a.sAjaxSource,
h.map(b,function(a,b){return{name:b,value:a}}),c,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(j,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(i,b,c,a):(a.jqXHR=h.ajax(h.extend(j,g)),g.data=f)}function kb(a){return a.bAjaxDataGet?(a.iDraw++,B(a,!0),qa(a,tb(a),function(b){ub(a,b)}),!1):!0}function tb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,i=[],j,n,m,o=T(a);g=a._iDisplayStart;j=!1!==d.bPaginate?a._iDisplayLength:-1;var k=function(a,
b){i.push({name:a,value:b})};k("sEcho",a.iDraw);k("iColumns",c);k("sColumns",C(b,"sName").join(","));k("iDisplayStart",g);k("iDisplayLength",j);var l={draw:a.iDraw,columns:[],order:[],start:g,length:j,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],m=f[g],j="function"==typeof n.mData?"function":n.mData,l.columns.push({data:j,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:m.sSearch,regex:m.bRegex}}),k("mDataProp_"+g,j),d.bFilter&&(k("sSearch_"+g,m.sSearch),
k("bRegex_"+g,m.bRegex),k("bSearchable_"+g,n.bSearchable)),d.bSort&&k("bSortable_"+g,n.bSortable);d.bFilter&&(k("sSearch",e.sSearch),k("bRegex",e.bRegex));d.bSort&&(h.each(o,function(a,b){l.order.push({column:b.col,dir:b.dir});k("iSortCol_"+a,b.col);k("sSortDir_"+a,b.dir)}),k("iSortingCols",o.length));b=p.ext.legacy.ajax;return null===b?a.sAjaxSource?i:l:b?i:l}function ub(a,b){var c=b.sEcho!==l?b.sEcho:b.draw,d=b.iTotalRecords!==l?b.iTotalRecords:b.recordsTotal,e=b.iTotalDisplayRecords!==l?b.iTotalDisplayRecords:
b.recordsFiltered;if(c){if(1*c<a.iDraw)return;a.iDraw=1*c}ma(a);a._iRecordsTotal=parseInt(d,10);a._iRecordsDisplay=parseInt(e,10);c=ra(a,b);d=0;for(e=c.length;d<e;d++)I(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;L(a);a._bInitComplete||sa(a,b);a.bAjaxDataGet=!0;B(a,!1)}function ra(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==l?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?W(c)(b):b}function ob(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,
f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',i=d.sSearch,i=i.match(/_INPUT_/)?i.replace("_INPUT_",g):i+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(i)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ea(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,L(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===A(a)?400:0,j=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",
g?ta(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{j[0]!==P.activeElement&&j.val(e.sSearch)}catch(d){}});return b[0]}function ea(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ga(a);if("ssp"!=A(a)){vb(a,b.sSearch,c,b.bEscapeRegex!==l?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);
f(b);for(b=0;b<e.length;b++)wb(a,e[b].sSearch,b,e[b].bEscapeRegex!==l?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);xb(a)}else f(b);a.bFiltered=!0;u(a,null,"search",[a])}function xb(a){for(var b=p.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var i=[],j=0,h=c.length;j<h;j++)e=c[j],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,j)&&i.push(e);c.length=0;c.push.apply(c,i)}}function wb(a,b,c,d,e,f){if(""!==b)for(var g=a.aiDisplay,d=Pa(b,d,e,f),e=g.length-1;0<=e;e--)b=a.aoData[g[e]]._aFilterData[c],
d.test(b)||g.splice(e,1)}function vb(a,b,c,d,e,f){var d=Pa(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==p.ext.search.length&&(c=!0);g=yb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(g||c||e.length>b.length||0!==b.indexOf(e)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Pa(a,b,c,d){a=b?a:Qa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||"",function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),
a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Qa(a){return a.replace(Xb,"\\$1")}function yb(a){var b=a.aoColumns,c,d,e,f,g,i,j,h,m=p.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){i=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(j=w(a,d,e,"filter"),m[c.sType]&&(j=m[c.sType](j)),null===j&&(j=""),"string"!==typeof j&&j.toString&&(j=j.toString())):j="",j.indexOf&&-1!==j.indexOf("&")&&(ua.innerHTML=j,j=Yb?
ua.textContent:ua.innerText),j.replace&&(j=j.replace(/[\r\n]/g,"")),i.push(j);h._aFilterData=i;h._sFilterRow=i.join("  ");c=!0}return c}function zb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Ab(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function rb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Bb,sName:"information"}),
d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Bb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),i=g?c.sInfo:c.sInfoEmpty;g!==f&&(i+=" "+c.sInfoFiltered);i+=c.sInfoPostFix;i=Cb(a,i);c=c.fnInfoCallback;null!==c&&(i=c.call(a.oInstance,a,d,e,f,g,i));h(b).html(i)}}function Cb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,
f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function va(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;if(a.bInitialised){mb(a);jb(a);da(a,a.aoHeader);da(a,a.aoFooter);B(a,!0);c.bAutoWidth&&Fa(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&
(f.nTh.style.width=s(f.sWidth));M(a);e=A(a);"ssp"!=e&&("ajax"==e?qa(a,[],function(c){var f=ra(a,c);for(b=0;b<f.length;b++)I(a,f[b]);a.iInitDisplayStart=d;M(a);B(a,!1);sa(a,c)},a):(B(a,!1),sa(a)))}else setTimeout(function(){va(a)},200)}function sa(a,b){a._bInitComplete=!0;b&&X(a);u(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);u(a,null,"length",[a,c])}function nb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?
d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,i=f.length;g<i;g++)e[0][g]=new Option(d[g],f[g]);var j=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(j[0].id=c+"_length");j.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",j).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());L(a)});h(a.nTable).bind("length.dt.DT",function(b,c,d){a===c&&h("select",j).val(d)});return j[0]}function sb(a){var b=
a.sPaginationType,c=p.ext.pager[b],d="function"===typeof c,e=function(a){L(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,j=a._iDisplayLength,h=a.fnRecordsDisplay(),m=-1===j,b=m?0:Math.ceil(b/j),j=m?1:Math.ceil(h/j),h=c(b,j),o,m=0;for(o=f.p.length;m<o;m++)Oa(a,"pageButton")(a,f.p[m],m,h,b,j)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Ta(a,
b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:R(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(u(a,null,"page",[a]),c&&L(a));return b}function pb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}
function B(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");u(a,null,"processing",[a,b])}function qb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),i=g.length?g[0]._captionSide:null,j=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),m=b.children("tfoot");c.sX&&"100%"===b.attr("width")&&b.removeAttr("width");m.length||(m=null);c=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",
{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:s(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(j.removeAttr("id").css("margin-left",0).append(b.children("thead")))).append("top"===i?g:null)).append(h("<div/>",{"class":f.sScrollBody}).css({overflow:"auto",height:!e?null:s(e),width:!d?null:s(d)}).append(b));m&&c.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",
border:0,width:d?!d?null:s(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",0).append(b.children("tfoot")))).append("bottom"===i?g:null));var b=c.children(),o=b[0],f=b[1],k=m?b[2]:null;d&&h(f).scroll(function(){var a=this.scrollLeft;o.scrollLeft=a;m&&(k.scrollLeft=a)});a.nScrollHead=o;a.nScrollBody=f;a.nScrollFoot=k;a.aoDrawCallback.push({fn:Y,sName:"scrolling"});return c[0]}function Y(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,f=b.iBarWidth,
g=h(a.nScrollHead),i=g[0].style,j=g.children("div"),n=j[0].style,m=j.children("table"),j=a.nScrollBody,o=h(j),k=j.style,l=h(a.nScrollFoot).children("div"),p=l.children("table"),r=h(a.nTHead),q=h(a.nTable),fa=q[0],N=fa.style,J=a.nTFoot?h(a.nTFoot):null,t=a.oBrowser,u=t.bScrollOversize,x,v,w,K,y,z=[],A=[],B=[],C,D=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};q.children("thead, tfoot").remove();y=r.clone().prependTo(q);x=r.find("tr");
w=y.find("tr");y.find("th, td").removeAttr("tabindex");J&&(K=J.clone().prependTo(q),v=J.find("tr"),K=K.find("tr"));c||(k.width="100%",g[0].style.width="100%");h.each(pa(a,y),function(b,c){C=ja(a,b);c.style.width=a.aoColumns[C].sWidth});J&&F(function(a){a.style.width=""},K);b.bCollapse&&""!==e&&(k.height=o[0].offsetHeight+r[0].offsetHeight+"px");g=q.outerWidth();if(""===c){if(N.width="100%",u&&(q.find("tbody").height()>j.offsetHeight||"scroll"==o.css("overflow-y")))N.width=s(q.outerWidth()-f)}else""!==
d?N.width=s(d):g==o.width()&&o.height()<q.height()?(N.width=s(g-f),q.outerWidth()>g-f&&(N.width=s(g))):N.width=s(g);g=q.outerWidth();F(D,w);F(function(a){B.push(a.innerHTML);z.push(s(h(a).css("width")))},w);F(function(a,b){a.style.width=z[b]},x);h(w).height(0);J&&(F(D,K),F(function(a){A.push(s(h(a).css("width")))},K),F(function(a,b){a.style.width=A[b]},v),h(K).height(0));F(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+B[b]+"</div>";a.style.width=z[b]},
w);J&&F(function(a,b){a.innerHTML="";a.style.width=A[b]},K);if(q.outerWidth()<g){v=j.scrollHeight>j.offsetHeight||"scroll"==o.css("overflow-y")?g+f:g;if(u&&(j.scrollHeight>j.offsetHeight||"scroll"==o.css("overflow-y")))N.width=s(v-f);(""===c||""!==d)&&R(a,1,"Possible column misalignment",6)}else v="100%";k.width=s(v);i.width=s(v);J&&(a.nScrollFoot.style.width=s(v));!e&&u&&(k.height=s(fa.offsetHeight+f));e&&b.bCollapse&&(k.height=s(e),b=c&&fa.offsetWidth>j.offsetWidth?f:0,fa.offsetHeight<j.offsetHeight&&
(k.height=s(fa.offsetHeight+b)));b=q.outerWidth();m[0].style.width=s(b);n.width=s(b);m=q.height()>j.clientHeight||"scroll"==o.css("overflow-y");t="padding"+(t.bScrollbarLeft?"Left":"Right");n[t]=m?f+"px":"0px";J&&(p[0].style.width=s(b),l[0].style.width=s(b),l[0].style[t]=m?f+"px":"0px");o.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}function F(a,b,c){for(var d=0,e=0,f=b.length,g,i;e<f;){g=b[e].firstChild;for(i=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,i,d):a(g,d),d++),g=
g.nextSibling,i=c?i.nextSibling:null;e++}}function Fa(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,i=c.length,d=Z(a,"bVisible"),j=h("th",a.nTHead),n=b.getAttribute("width"),m=b.parentNode,o=!1,k,l;for(k=0;k<d.length;k++)l=c[d[k]],null!==l.sWidth&&(l.sWidth=Db(l.sWidthOrig,m),o=!0);if(!o&&!f&&!e&&i==aa(a)&&i==j.length)for(k=0;k<i;k++)c[k].sWidth=s(j.eq(k).width());else{i=h(b).clone().empty().css("visibility","hidden").removeAttr("id").append(h(a.nTHead).clone(!1)).append(h(a.nTFoot).clone(!1)).append(h("<tbody><tr/></tbody>"));
i.find("tfoot th, tfoot td").css("width","");var p=i.find("tbody tr"),j=pa(a,i.find("thead")[0]);for(k=0;k<d.length;k++)l=c[d[k]],j[k].style.width=null!==l.sWidthOrig&&""!==l.sWidthOrig?s(l.sWidthOrig):"";if(a.aoData.length)for(k=0;k<d.length;k++)o=d[k],l=c[o],h(Eb(a,o)).clone(!1).append(l.sContentPadding).appendTo(p);i.appendTo(m);f&&g?i.width(g):f?(i.css("width","auto"),i.width()<m.offsetWidth&&i.width(m.offsetWidth)):e?i.width(m.offsetWidth):n&&i.width(n);Fb(a,i[0]);if(f){for(k=g=0;k<d.length;k++)l=
c[d[k]],e=h(j[k]).outerWidth(),g+=null===l.sWidthOrig?e:parseInt(l.sWidth,10)+e-h(j[k]).width();i.width(s(g));b.style.width=s(g)}for(k=0;k<d.length;k++)if(l=c[d[k]],e=h(j[k]).width())l.sWidth=s(e);b.style.width=s(i.css("width"));i.remove()}n&&(b.style.width=s(n));if((n||f)&&!a._reszEvt)h(Da).bind("resize.DT-"+a.sInstance,ta(function(){X(a)})),a._reszEvt=!0}function ta(a,b){var c=b!==l?b:200,d,e;return function(){var b=this,g=+new Date,i=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=
l;a.apply(b,i)},c)):d?(d=g,a.apply(b,i)):d=g}}function Db(a,b){if(!a)return 0;var c=h("<div/>").css("width",s(a)).appendTo(b||P.body),d=c[0].offsetWidth;c.remove();return d}function Fb(a,b){var c=a.oScroll;if(c.sX||c.sY)c=!c.sX?c.iBarWidth:0,b.style.width=s(h(b).outerWidth()-c)}function Eb(a,b){var c=Gb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(w(a,c,b,"display"))[0]:d.anCells[b]}function Gb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=w(a,f,b,"display")+"",
c=c.replace(Zb,""),c.length>d&&(d=c.length,e=f);return e}function s(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function Hb(){if(!p.__scrollbarWidth){var a=h("<p/>").css({width:"100%",height:200,padding:0})[0],b=h("<div/>").css({position:"absolute",top:0,left:0,width:200,height:150,padding:0,overflow:"hidden",visibility:"hidden"}).append(a).appendTo("body"),c=a.offsetWidth;b.css("overflow","scroll");a=a.offsetWidth;c===a&&(a=b[0].clientWidth);b.remove();p.__scrollbarWidth=
c-a}return p.__scrollbarWidth}function T(a){var b,c,d=[],e=a.aoColumns,f,g,i,j;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):n.push.apply(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){j=n[a][0];f=e[j].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],i=e[g].sType||"string",n[a]._idx===l&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:j,col:g,dir:n[a][1],index:n[a]._idx,type:i,formatter:p.ext.type.order[i+
"-pre"]})}return d}function lb(a){var b,c,d=[],e=p.ext.type.order,f=a.aoData,g=0,i,h=a.aiDisplayMaster,n;Ga(a);n=T(a);b=0;for(c=n.length;b<c;b++)i=n[b],i.formatter&&g++,Ib(a,i.col);if("ssp"!=A(a)&&0!==n.length){b=0;for(c=h.length;b<c;b++)d[h[b]]=b;g===n.length?h.sort(function(a,b){var c,e,g,i,h=n.length,j=f[a]._aSortData,l=f[b]._aSortData;for(g=0;g<h;g++)if(i=n[g],c=j[i.col],e=l[i.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===i.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):h.sort(function(a,b){var c,
g,i,h,j=n.length,l=f[a]._aSortData,p=f[b]._aSortData;for(i=0;i<j;i++)if(h=n[i],c=l[h.col],g=p[h.col],h=e[h.type+"-"+h.dir]||e["string-"+h.dir],c=h(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=T(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var i=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var h=c.nTh;h.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(h.setAttribute("aria-sort","asc"==e[0].dir?"ascending":
"descending"),c=i[e[0].index+1]||i[0]):c=i[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);h.setAttribute("aria-label",b)}}function Ua(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===l&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,C(e,"0")),-1!==c?(b=g(e[c],!0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&
e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);M(a);"function"==typeof d&&d(a)}function Na(a,b,c,d){var e=a.aoColumns[c];Va(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(B(a,!0),setTimeout(function(){Ua(a,c,b.shiftKey,d);"ssp"!==A(a)&&B(a,!1)},0)):Ua(a,c,b.shiftKey,d))})}function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=T(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(C(a.aoData,
"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(C(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Ib(a,b){var c=a.aoColumns[b],d=p.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,$(a,b)));for(var f,g=p.ext.type.order[c.sType+"-pre"],i=0,h=a.aoData.length;i<h;i++)if(c=a.aoData[i],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[i]:w(a,i,b,"sort"),c._aSortData[b]=g?g(f):f}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b=
{time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:zb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:zb(a.aoPreSearchCols[d])}})};u(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,d=a.aoColumns;if(a.oFeatures.bStateSave){var e=a.fnStateLoadCallback.call(a.oInstance,a);if(e&&e.time&&(b=u(a,"aoStateLoadParams","stateLoadParams",
[a,e]),-1===h.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&e.time<+new Date-1E3*b)&&d.length===e.columns.length))){a.oLoadedState=h.extend(!0,{},e);a._iDisplayStart=e.start;a.iInitDisplayStart=e.start;a._iDisplayLength=e.length;a.aaSorting=[];h.each(e.order,function(b,c){a.aaSorting.push(c[0]>=d.length?[0,c[1]]:c)});h.extend(a.oPreviousSearch,Ab(e.search));b=0;for(c=e.columns.length;b<c;b++){var f=e.columns[b];d[b].bVisible=f.visible;h.extend(a.aoPreSearchCols[b],Ab(f.search))}u(a,"aoStateLoaded","stateLoaded",
[a,e])}}}function ya(a){var b=p.settings,a=h.inArray(a,C(b,"nTable"));return-1!==a?b[a]:null}function R(a,b,c,d){c="DataTables warning: "+(null!==a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)Da.console&&console.log&&console.log(c);else if(a=p.ext,"alert"==(a.sErrMode||a.errMode))alert(c);else throw Error(c);}function D(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?D(a,b,d[0],d[1]):D(a,b,d)}):(d===l&&
(d=c),b[c]!==l&&(a[d]=b[c]))}function Lb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Va(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function y(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function u(a,b,c,d){var e=
[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&h(a.nTable).trigger(c+".dt",d);return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);if(-1===d||0>b)b=0;a._iDisplayStart=b}function Oa(a,b){var c=a.renderer,d=p.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function A(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Wa(a,b){var c=
[],c=Mb.numbers_length,d=Math.floor(c/2);b<=c?c=U(0,b):a<=d?(c=U(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=U(b-(c-2),b):(c=U(a-1,a+2),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function db(a){h.each({num:function(b){return za(b,a)},"num-fmt":function(b){return za(b,a,Xa)},"html-num":function(b){return za(b,a,Aa)},"html-num-fmt":function(b){return za(b,a,Aa,Xa)}},function(b,c){v.type.order[b+a+"-pre"]=c})}function Nb(a){return function(){var b=
[ya(this[p.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return p.ext.internal[a].apply(this,b)}}var p,v,q,r,t,Ya={},Ob=/[\r\n]/g,Aa=/<.*?>/g,$b=/^[\w\+\-]/,ac=/[\w\+\-]$/,Xb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Xa=/[',$\u00a3\u20ac\u00a5%\u2009\u202F]/g,H=function(a){return!a||!0===a||"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Ya[b]||(Ya[b]=RegExp(Qa(b),"g"));return"string"===
typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var d="string"===typeof a;b&&d&&(a=Qb(a,b));c&&d&&(a=a.replace(Xa,""));return H(a)||!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return H(a)?!0:!(H(a)||"string"===typeof a)?null:Za(a.replace(Aa,""),b,c)?!0:null},C=function(a,b,c){var d=[],e=0,f=a.length;if(c!==l)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ga=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==
l)for(;f<g;f++)e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},U=function(a,b){var c=[],d;b===l?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Ma=function(a){var b=[],c,d,e=a.length,f,g=0;d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b},z=function(a,b,c){a[b]!==l&&(a[c]=a[b])},ba=/\[.*?\]$/,S=/\(\)$/,ua=h("<div>")[0],Yb=ua.textContent!==l,Zb=/<.*?>/g;p=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,
b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new q(ya(this[v.iApiIndex])):new q(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===l||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===l||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&Y(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();
(a===l||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===l||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(!a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===l?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=
this.api(!0);if(a!==l){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==l||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==l?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};
this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===l||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===l||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ya(this[v.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=
this.api(!0);c===l||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===l||e)&&h.columns.adjust();(d===l||d)&&h.draw();return 0};this.fnVersionCheck=v.fnVersionCheck;var b=this,c=a===l,d=this.length;c&&(a={});this.oApi=this.internal=v.internal;for(var e in p.ext.internal)e&&(this[e]=Nb(e));this.each(function(){var e={},g=1<d?Lb(e,a,!0):a,i=0,j,n=this.getAttribute("id"),e=!1,m=p.defaults;if("table"!=this.nodeName.toLowerCase())R(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(m);
fb(m.column);G(m,m,!0);G(m.column,m.column,!0);G(m,g);var o=p.settings,i=0;for(j=o.length;i<j;i++){if(o[i].nTable==this){j=g.bRetrieve!==l?g.bRetrieve:m.bRetrieve;if(c||j)return o[i].oInstance;if(g.bDestroy!==l?g.bDestroy:m.bDestroy){o[i].oInstance.fnDestroy();break}else{R(o[i],0,"Cannot reinitialise DataTable",3);return}}if(o[i].sTableId==this.id){o.splice(i,1);break}}if(null===n||""===n)this.id=n="DataTables_Table_"+p.ext._unique++;var k=h.extend(!0,{},p.models.oSettings,{nTable:this,oApi:b.internal,
oInit:g,sDestroyWidth:h(this)[0].style.width,sInstance:n,sTableId:n});o.push(k);k.oInstance=1===b.length?b:h(this).dataTable();eb(g);g.oLanguage&&O(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=Lb(h.extend(!0,{},m),g);D(k.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));D(k,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber",
"sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);D(k.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);
D(k.oLanguage,g,"fnInfoCallback");y(k,"aoDrawCallback",g.fnDrawCallback,"user");y(k,"aoServerParams",g.fnServerParams,"user");y(k,"aoStateSaveParams",g.fnStateSaveParams,"user");y(k,"aoStateLoadParams",g.fnStateLoadParams,"user");y(k,"aoStateLoaded",g.fnStateLoaded,"user");y(k,"aoRowCallback",g.fnRowCallback,"user");y(k,"aoRowCreatedCallback",g.fnCreatedRow,"user");y(k,"aoHeaderCallback",g.fnHeaderCallback,"user");y(k,"aoFooterCallback",g.fnFooterCallback,"user");y(k,"aoInitComplete",g.fnInitComplete,
"user");y(k,"aoPreDrawCallback",g.fnPreDrawCallback,"user");n=k.oClasses;g.bJQueryUI?(h.extend(n,p.ext.oJUIClasses,g.oClasses),g.sDom===m.sDom&&"lfrtip"===m.sDom&&(k.sDom='<"H"lfr>t<"F"ip>'),k.renderer)?h.isPlainObject(k.renderer)&&!k.renderer.header&&(k.renderer.header="jqueryui"):k.renderer="jqueryui":h.extend(n,p.ext.classes,g.oClasses);h(this).addClass(n.sTable);if(""!==k.oScroll.sX||""!==k.oScroll.sY)k.oScroll.iBarWidth=Hb();!0===k.oScroll.sX&&(k.oScroll.sX="100%");k.iInitDisplayStart===l&&(k.iInitDisplayStart=
g.iDisplayStart,k._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(k.bDeferLoading=!0,i=h.isArray(g.iDeferLoading),k._iRecordsDisplay=i?g.iDeferLoading[0]:g.iDeferLoading,k._iRecordsTotal=i?g.iDeferLoading[1]:g.iDeferLoading);""!==g.oLanguage.sUrl?(k.oLanguage.sUrl=g.oLanguage.sUrl,h.getJSON(k.oLanguage.sUrl,null,function(a){O(a);G(m.oLanguage,a);h.extend(true,k.oLanguage,g.oLanguage,a);va(k)}),e=!0):h.extend(!0,k.oLanguage,g.oLanguage);null===g.asStripeClasses&&(k.asStripeClasses=[n.sStripeOdd,
n.sStripeEven]);var i=k.asStripeClasses,r=h("tbody tr:eq(0)",this);-1!==h.inArray(!0,h.map(i,function(a){return r.hasClass(a)}))&&(h("tbody tr",this).removeClass(i.join(" ")),k.asDestroyStripes=i.slice());var o=[],q,i=this.getElementsByTagName("thead");0!==i.length&&(ca(k.aoHeader,i[0]),o=pa(k));if(null===g.aoColumns){q=[];i=0;for(j=o.length;i<j;i++)q.push(null)}else q=g.aoColumns;i=0;for(j=q.length;i<j;i++)Ea(k,o?o[i]:null);ib(k,g.aoColumnDefs,q,function(a,b){ia(k,a,b)});if(r.length){var s=function(a,
b){return a.getAttribute("data-"+b)?b:null};h.each(la(k,r[0]).cells,function(a,b){var c=k.aoColumns[a];if(c.mData===a){var d=s(b,"sort")||s(b,"order"),e=s(b,"filter")||s(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:l,type:d!==null?a+".@data-"+d:l,filter:e!==null?a+".@data-"+e:l};ia(k,a)}}})}var t=k.oFeatures;g.bStateSave&&(t.bStateSave=!0,Kb(k,g),y(k,"aoDrawCallback",xa,"state_save"));if(g.aaSorting===l){o=k.aaSorting;i=0;for(j=o.length;i<j;i++)o[i][1]=k.aoColumns[i].asSorting[0]}wa(k);
t.bSort&&y(k,"aoDrawCallback",function(){if(k.bSorted){var a=T(k),b={};h.each(a,function(a,c){b[c.src]=c.dir});u(k,null,"order",[k,a,b]);Jb(k)}});y(k,"aoDrawCallback",function(){(k.bSorted||A(k)==="ssp"||t.bDeferRender)&&wa(k)},"sc");gb(k);i=h(this).children("caption").each(function(){this._captionSide=h(this).css("caption-side")});j=h(this).children("thead");0===j.length&&(j=h("<thead/>").appendTo(this));k.nTHead=j[0];j=h(this).children("tbody");0===j.length&&(j=h("<tbody/>").appendTo(this));k.nTBody=
j[0];j=h(this).children("tfoot");if(0===j.length&&0<i.length&&(""!==k.oScroll.sX||""!==k.oScroll.sY))j=h("<tfoot/>").appendTo(this);0===j.length||0===j.children().length?h(this).addClass(n.sNoFooter):0<j.length&&(k.nTFoot=j[0],ca(k.aoFooter,k.nTFoot));if(g.aaData)for(i=0;i<g.aaData.length;i++)I(k,g.aaData[i]);else(k.bDeferLoading||"dom"==A(k))&&ka(k,h(k.nTBody).children("tr"));k.aiDisplay=k.aiDisplayMaster.slice();k.bInitialised=!0;!1===e&&va(k)}});b=null;return this};var Sb=[],x=Array.prototype,
bc=function(a){var b,c,d=p.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};q=function(a,b){if(!this instanceof q)throw"DT API must be constructed as a new object";
var c=[],d=function(a){(a=bc(a))&&c.push.apply(c,a)};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=Ma(c);b&&this.push.apply(this,b.toArray?b.toArray():b);this.selector={rows:null,cols:null,opts:null};q.extend(this,this,Sb)};p.Api=q;q.prototype={concat:x.concat,context:[],each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new q(b[a],this[a]):null},filter:function(a){var b=[];
if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new q(this.context,b)},flatten:function(){var a=[];return new q(this.context,a.concat.apply(a,this.toArray()))},join:x.join,indexOf:x.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c){var d=[],e,f,g,h,j,n=this.context,m,o,k=this.selector;"string"===typeof a&&(c=b,b=a,a=!1);f=0;for(g=n.length;f<g;f++){var p=
new q(n[f]);if("table"===b)e=c.call(p,n[f],f),e!==l&&d.push(e);else if("columns"===b||"rows"===b)e=c.call(p,n[f],this[f],f),e!==l&&d.push(e);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[f];"column-rows"===b&&(m=Ba(n[f],k.opts));h=0;for(j=o.length;h<j;h++)e=o[h],e="cell"===b?c.call(p,n[f],e.row,e.column,f,h):c.call(p,n[f],e,f,h,m),e!==l&&d.push(e)}}return d.length?(a=new q(n,a?d.concat.apply([],d):d),b=a.selector,b.rows=k.rows,b.cols=k.cols,b.opts=k.opts,a):this},lastIndexOf:x.lastIndexOf||
function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(x.map)b=x.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new q(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:x.pop,push:x.push,reduce:x.reduce||function(a,b){return hb(this,a,b,0,this.length,1)},reduceRight:x.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:x.reverse,selector:null,
shift:x.shift,sort:x.sort,splice:x.splice,toArray:function(){return x.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new q(this.context,Ma(this))},unshift:x.unshift};q.extend=function(a,b,c){if(b&&(b instanceof q||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);q.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?
{}:f.val,b[f.name].__dt_wrapper=!0,q.extend(a,b[f.name],f.propExt)}};q.register=r=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)q.register(a[c],b);else for(var e=a.split("."),f=Sb,g,i,c=0,d=e.length;c<d;c++){g=(i=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var j;a:{j=0;for(var n=f.length;j<n;j++)if(f[j].name===g){j=f[j];break a}j=null}j||(j={name:g,val:{},methodExt:[],propExt:[]},f.push(j));c===d-1?j.val=b:f=i?j.methodExt:j.propExt}};q.registerPlural=t=function(a,b,c){q.register(a,
c);q.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof q?a.length?h.isArray(a[0])?new q(a.context,a[0]):a[0]:l:a})};r("tables()",function(a){var b;if(a){b=q;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});r("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new q(b[0]):a});t("tables().nodes()",
"table().node()",function(){return this.iterator("table",function(a){return a.nTable})});t("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody})});t("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead})});t("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot})});t("tables().containers()","table().container()",function(){return this.iterator("table",
function(a){return a.nTableWrapper})});r("draw()",function(a){return this.iterator("table",function(b){M(b,!1===a)})});r("page()",function(a){return a===l?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});r("page.info()",function(){if(0===this.context.length)return l;var a=this.context[0],b=a._iDisplayStart,c=a._iDisplayLength,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),
recordsDisplay:d}});r("page.len()",function(a){return a===l?0!==this.context.length?this.context[0]._iDisplayLength:l:this.iterator("table",function(b){Ra(b,a)})});var Tb=function(a,b,c){"ssp"==A(a)?M(a,b):(B(a,!0),qa(a,[],function(c){ma(a);for(var c=ra(a,c),d=0,g=c.length;d<g;d++)I(a,c[d]);M(a,b);B(a,!1)}));if(c){var d=new q(a);d.one("draw",function(){c(d.ajax.json())})}};r("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});r("ajax.params()",function(){var a=this.context;
if(0<a.length)return a[0].oAjaxData});r("ajax.reload()",function(a,b){return this.iterator("table",function(c){Tb(c,!1===b,a)})});r("ajax.url()",function(a){var b=this.context;if(a===l){if(0===b.length)return l;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});r("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Tb(c,!1===b,a)})});var $a=function(a,b){var c=
[],d,e,f,g,i,j;d=typeof a;if(!a||"string"===d||"function"===d||a.length===l)a=[a];f=0;for(g=a.length;f<g;f++){e=a[f]&&a[f].split?a[f].split(","):[a[f]];i=0;for(j=e.length;i<j;i++)(d=b("string"===typeof e[i]?h.trim(e[i]):e[i]))&&d.length&&c.push.apply(c,d)}return c},ab=function(a){a||(a={});a.filter&&!a.search&&(a.search=a.filter);return{search:a.search||"none",order:a.order||"current",page:a.page||"all"}},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a.length=1,a.context=
[a.context[b]],a;a.length=0;return a},Ba=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var i=b.search;d=b.order;e=b.page;if("ssp"==A(a))return"removed"===i?[]:U(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==i?c.slice():"applied"==i?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==i?f.push(c):(e=h.inArray(c,
g),(-1===e&&"removed"==i||0<=e&&"applied"==i)&&f.push(c))}return f};r("rows()",function(a,b){a===l?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=b;return $a(a,function(a){var b=Pb(a);if(b!==null&&!e)return[b];var i=Ba(c,e);if(b!==null&&h.inArray(b,i)!==-1)return[b];if(!a)return i;b=ga(c.aoData,i,"nTr");return typeof a==="function"?h.map(i,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null}):a.nodeName&&h.inArray(a,b)!==-1?[a._DT_RowIndex]:h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()})});
c.selector.rows=a;c.selector.opts=b;return c});r("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||l})});r("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ga(a.aoData,b,"_aData")})});t("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData})});t("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,
c){oa(b,c,a)})});t("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b})});t("rows().remove()","row().remove()",function(){var a=this;return this.iterator("row",function(b,c,d){var e=b.aoData;e.splice(c,1);for(var f=0,g=e.length;f<g;f++)null!==e[f].nTr&&(e[f].nTr._DT_RowIndex=f);h.inArray(c,b.aiDisplay);na(b.aiDisplayMaster,c);na(b.aiDisplay,c);na(a[d],c,!1);Sa(b)})});r("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;
for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ka(b,c)[0]):h.push(I(b,c));return h}),c=this.rows(-1);c.pop();c.push.apply(c,b.toArray());return c});r("row()",function(a,b){return bb(this.rows(a,b))});r("row().data()",function(a){var b=this.context;if(a===l)return b.length&&this.length?b[0].aoData[this[0]]._aData:l;b[0].aoData[this[0]]._aData=a;oa(b[0],this[0],"data");return this});r("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||
null:null});r("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ka(b,a)[0]:I(b,a)});return this.row(b[0])});var cb=function(a,b){var c=a.context;c.length&&(c=c[0].aoData[b!==l?b:a[0]],c._details&&(c._details.remove(),c._detailsShow=l,c._details=l))},Ub=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();
var e=c[0],f=new q(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<C(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=aa(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,
b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&cb(f,c)}))}}};r("row().child()",function(a,b){var c=this.context;if(a===l)return c.length&&this.length?c[0].aoData[this[0]]._details:l;if(!0===a)this.child.show();else if(!1===a)cb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(a.nodeName&&"tr"===a.nodeName.toLowerCase())e.push(a);else{var c=h("<tr><td/></tr>").addClass(b);h("td",c).addClass(b).html(a)[0].colSpan=aa(d);e.push(c[0])}};if(h.isArray(a)||
a instanceof h)for(var g=0,i=a.length;g<i;g++)f(a[g],b);else f(a,b);c._details&&c._details.remove();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});r(["row().child.show()","row().child().show()"],function(){Ub(this,!0);return this});r(["row().child.hide()","row().child().hide()"],function(){Ub(this,!1);return this});r(["row().child.remove()","row().child().remove()"],function(){cb(this);return this});r("row().child.isShown()",function(){var a=this.context;return a.length&&
this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var cc=/^(.+):(name|visIdx|visible)$/,Vb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(w(a,e[d],b));return c};r("columns()",function(a,b){a===l?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,i=C(g,"sName"),j=C(g,"nTh");return $a(e,function(a){var b=Pb(a);if(a==="")return U(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,
function(b,f){return a(f,Vb(c,f,0,0,e),j[f])?f:null})}var k=typeof a==="string"?a.match(cc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var l=h.map(g,function(a,b){return a.bVisible?b:null});return[l[l.length+b]]}return[ja(c,b)];case "name":return h.map(i,function(a,b){return a===k[1]?b:null})}else return h(j).filter(a).map(function(){return h.inArray(this,j)}).toArray()})});c.selector.cols=a;c.selector.opts=b;return c});t("columns().header()","column().header()",
function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh})});t("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf})});t("columns().data()","column().data()",function(){return this.iterator("column-rows",Vb)});t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData})});t("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",
function(b,c,d,e,f){return ga(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)})});t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ga(a.aoData,e,"anCells",b)})});t("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,d){var e;if(a===l)e=c.aoColumns[d].bVisible;else{var f=c.aoColumns;e=f[d];var g=c.aoData,i,j,n;if(a===l)e=e.bVisible;else{if(e.bVisible!==a){if(a){var m=h.inArray(!0,C(f,
"bVisible"),d+1);i=0;for(j=g.length;i<j;i++)n=g[i].nTr,f=g[i].anCells,n&&n.insertBefore(f[d],f[m]||null)}else h(C(c.aoData,"anCells",d)).detach();e.bVisible=a;da(c,c.aoHeader);da(c,c.aoFooter);if(b===l||b)X(c),(c.oScroll.sX||c.oScroll.sY)&&Y(c);u(c,null,"column-visibility",[c,d,a]);xa(c)}e=void 0}}return e})});t("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?$(b,c):c})});r("columns.adjust()",function(){return this.iterator("table",
function(a){X(a)})});r("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return ja(c,b);if("fromData"===a||"toVisible"===a)return $(c,b)}});r("column()",function(a,b){return bb(this.columns(a,b))});r("cells()",function(a,b,c){h.isPlainObject(a)&&(typeof a.row!==l?(c=b,b=null):(c=a,a=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===l)return this.iterator("table",function(b){var d=a,e=ab(c),f=b.aoData,g=Ba(b,e),e=ga(f,g,"anCells"),
i=h([].concat.apply([],e)),j,m=b.aoColumns.length,n,p,r,q,s,t;return $a(d,function(a){var c=typeof a==="function";if(a===null||a===l||c){n=[];p=0;for(r=g.length;p<r;p++){j=g[p];for(q=0;q<m;q++){s={row:j,column:q};if(c){t=b.aoData[j];a(s,w(b,j,q),t.anCells[q])&&n.push(s)}else n.push(s)}}return n}return h.isPlainObject(a)?[a]:i.filter(a).map(function(a,b){j=b.parentNode._DT_RowIndex;return{row:j,column:h.inArray(b,f[j].anCells)}}).toArray()})});var d=this.columns(b,c),e=this.rows(a,c),f,g,i,j,n,m=this.iterator("table",
function(a,b){f=[];g=0;for(i=e[b].length;g<i;g++){j=0;for(n=d[b].length;j<n;j++)f.push({row:e[b][g],column:d[b][j]})}return f});h.extend(m.selector,{cols:b,rows:a,opts:c});return m});t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return a.aoData[b].anCells[c]})});r("cells().data()",function(){return this.iterator("cell",function(a,b,c){return w(a,b,c)})});t("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",
function(b,c,d){return b.aoData[c][a][d]})});t("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return w(b,c,d,a)})});t("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:$(a,c)}})});r(["cells().invalidate()","cell().invalidate()"],function(a){var b=this.selector;this.rows(b.rows,b.opts).invalidate(a);return this});r("cell()",function(a,b,c){return bb(this.cells(a,b,c))});r("cell().data()",
function(a){var b=this.context,c=this[0];if(a===l)return b.length&&c.length?w(b[0],c[0].row,c[0].column):l;Ha(b[0],c[0].row,c[0].column,a);oa(b[0],c[0].row,"data",c[0].column);return this});r("order()",function(a,b){var c=this.context;if(a===l)return 0!==c.length?c[0].aaSorting:l;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});r("order.listener()",function(a,b,c){return this.iterator("table",
function(d){Na(d,a,b,c)})});r(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});r("search()",function(a,b,c,d){var e=this.context;return a===l?0!==e.length?e[0].oPreviousSearch.sSearch:l:this.iterator("table",function(e){e.oFeatures.bFilter&&ea(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});t("columns().search()",
"column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===l)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ea(e,e.oPreviousSearch,1))})});r("state()",function(){return this.context.length?this.context[0].oSavedState:null});r("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});r("state.loaded()",
function(){return this.context.length?this.context[0].oLoadedState:null});r("state.save()",function(){return this.iterator("table",function(a){xa(a)})});p.versionCheck=p.fnVersionCheck=function(a){for(var b=p.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};p.isDataTable=p.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(p.settings,function(a,e){if(e.nTable===b||e.nScrollHead===b||e.nScrollFoot===b)c=!0});
return c};p.tables=p.fnTables=function(a){return jQuery.map(p.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable})};p.util={throttle:ta};p.camelToHungarian=G;r("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){r(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0].match(/\.dt\b/)||(a[0]+=".dt");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});
r("clear()",function(){return this.iterator("table",function(a){ma(a)})});r("settings()",function(){return new q(this.context,this.context)});r("data()",function(){return this.iterator("table",function(a){return C(a.aoData,"_aData")}).flatten()});r("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,i=b.nTFoot,j=h(e),f=h(f),l=h(b.nTableWrapper),m=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=
!0;u(b,"aoDestroyCallback","destroy",[b]);a||(new q(b)).columns().visible(!0);l.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(Da).unbind(".DT-"+b.sInstance);e!=g.parentNode&&(j.children("thead").detach(),j.append(g));i&&e!=i.parentNode&&(j.children("tfoot").detach(),j.append(i));j.detach();l.detach();b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(m).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&
(h("th span."+d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));!a&&c&&c.insertBefore(e,b.nTableReinsertBefore);f.children().detach();f.append(m);j.css("width",b.sDestroyWidth).removeClass(d.sTable);(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])});c=h.inArray(b,p.settings);-1!==c&&p.settings.splice(c,1)})});p.version="1.10.3";p.settings=
[];p.models={};p.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};p.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null};p.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",
sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};p.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,
fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,
fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},
sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},p.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,
sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null};V(p.defaults);p.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};V(p.defaults.column);p.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,
bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],
sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,
bAjaxDataGet:!0,jqXHR:null,json:l,oAjaxData:l,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==A(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==A(this)?1*this._iRecordsDisplay:
this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{}};p.ext=v={classes:{},errMode:"alert",feature:[],search:[],internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],
search:{},order:{}},_unique:0,fnVersionCheck:p.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:p.version};h.extend(v,{afnFiltering:v.search,aTypes:v.type.detect,ofnSearch:v.type.search,oSort:v.type.order,afnSortData:v.order,aoFeatures:v.feature,oApi:v.internal,oStdClasses:v.classes,oPagination:v.pager});h.extend(p.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",
sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",
sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ca="",Ca="",E=Ca+"ui-state-default",ha=Ca+"css_right ui-icon ui-icon-",Wb=Ca+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(p.ext.oJUIClasses,p.ext.classes,{sPageButton:"fg-button ui-button "+
E,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:E+" sorting_asc",sSortDesc:E+" sorting_desc",sSortable:E+" sorting",sSortableAsc:E+" sorting_asc_disabled",sSortableDesc:E+" sorting_desc_disabled",sSortableNone:E+" sorting_disabled",sSortJUIAsc:ha+"triangle-1-n",sSortJUIDesc:ha+"triangle-1-s",sSortJUI:ha+"carat-2-n-s",sSortJUIAscAllowed:ha+"carat-1-n",sSortJUIDescAllowed:ha+
"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+E,sScrollFoot:"dataTables_scrollFoot "+E,sHeaderTH:E,sFooterTH:E,sJUIHeader:Wb+" ui-corner-tl ui-corner-tr",sJUIFooter:Wb+" ui-corner-bl ui-corner-br"});var Mb=p.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},simple_numbers:function(a,b){return["previous",Wa(a,b),"next"]},full_numbers:function(a,b){return["first",
"previous",Wa(a,b),"next","last"]},_numbers:Wa,numbers_length:7});h.extend(!0,p.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,i=a.oLanguage.oPaginate,j,l,m=0,o=function(b,d){var k,p,r,q,s=function(b){Ta(a,b.data.action,true)};k=0;for(p=d.length;k<p;k++){q=d[k];if(h.isArray(q)){r=h("<"+(q.DT_el||"div")+"/>").appendTo(b);o(r,q)}else{l=j="";switch(q){case "ellipsis":b.append("<span>&hellip;</span>");break;case "first":j=i.sFirst;l=q+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":j=
i.sPrevious;l=q+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":j=i.sNext;l=q+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":j=i.sLast;l=q+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:j=q+1;l=e===q?g.sPageButtonActive:""}if(j){r=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof q==="string"?a.sTableId+"_"+q:null}).html(j).appendTo(b);Va(r,{action:q},s);m++}}}};try{var k=h(P.activeElement).data("dt-idx");o(h(b).empty(),
d);k!==null&&h(b).find("[data-dt-idx="+k+"]").focus()}catch(p){}}}});var za=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(v.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return H(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return H(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,
b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});db("");h.extend(p.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!$b.test(a)||!ac.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||H(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c)?"html-num"+c:null},function(a,b){var c=
b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return H(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(p.ext.type.search,{html:function(a){return H(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Aa,""):""},string:function(a){return H(a)?a:"string"===typeof a?a.replace(Ob," "):a}});h.extend(!0,p.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+
" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+
" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});p.render={number:function(a,b,c,d){return{display:function(e){var f=0>e?"-":"",e=Math.abs(parseFloat(e)),g=parseInt(e,10),e=c?b+(e-g).toFixed(c).substring(2):"";return f+(d||"")+g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+e}}}};h.extend(p.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:qa,_fnAjaxUpdate:kb,_fnAjaxParameters:tb,_fnAjaxUpdateDraw:ub,
_fnAjaxDataSrc:ra,_fnAddColumn:Ea,_fnColumnOptions:ia,_fnAdjustColumnSizing:X,_fnVisibleToColumnIndex:ja,_fnColumnIndexToVisible:$,_fnVisbleColumns:aa,_fnGetColumns:Z,_fnColumnTypes:Ga,_fnApplyColumnDefs:ib,_fnHungarianMap:V,_fnCamelToHungarian:G,_fnLanguageCompat:O,_fnBrowserDetect:gb,_fnAddData:I,_fnAddTr:ka,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==l?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:w,_fnSetCellData:Ha,
_fnSplitObjNotation:Ja,_fnGetObjectDataFn:W,_fnSetObjectDataFn:Q,_fnGetDataMaster:Ka,_fnClearTable:ma,_fnDeleteIndex:na,_fnInvalidateRow:oa,_fnGetRowElements:la,_fnCreateTr:Ia,_fnBuildHead:jb,_fnDrawHead:da,_fnDraw:L,_fnReDraw:M,_fnAddOptionsHtml:mb,_fnDetectHeader:ca,_fnGetUniqueThs:pa,_fnFeatureHtmlFilter:ob,_fnFilterComplete:ea,_fnFilterCustom:xb,_fnFilterColumn:wb,_fnFilter:vb,_fnFilterCreateSearch:Pa,_fnEscapeRegex:Qa,_fnFilterData:yb,_fnFeatureHtmlInfo:rb,_fnUpdateInfo:Bb,_fnInfoMacros:Cb,_fnInitialise:va,
_fnInitComplete:sa,_fnLengthChange:Ra,_fnFeatureHtmlLength:nb,_fnFeatureHtmlPaginate:sb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:pb,_fnProcessingDisplay:B,_fnFeatureHtmlTable:qb,_fnScrollDraw:Y,_fnApplyToChildren:F,_fnCalculateColumnWidths:Fa,_fnThrottle:ta,_fnConvertToWidth:Db,_fnScrollingWidthAdjust:Fb,_fnGetWidestNode:Eb,_fnGetMaxLenString:Gb,_fnStringToCss:s,_fnScrollBarWidth:Hb,_fnSortFlatten:T,_fnSort:lb,_fnSortAria:Jb,_fnSortListener:Ua,_fnSortAttachListener:Na,_fnSortingClasses:wa,_fnSortData:Ib,
_fnSaveState:xa,_fnLoadState:Kb,_fnSettingsFromNode:ya,_fnLog:R,_fnMap:D,_fnBindAction:Va,_fnCallbackReg:y,_fnCallbackFire:u,_fnLengthOverflow:Sa,_fnRenderer:Oa,_fnDataSource:A,_fnRowAttributes:La,_fnCalculateEnd:function(){}});h.fn.dataTable=p;h.fn.dataTableSettings=p.settings;h.fn.dataTableExt=p.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(p,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable};"function"===typeof define&&define.amd?define("datatables",["jquery"],
O):"object"===typeof exports?O((typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null)):jQuery&&!jQuery.fn.dataTable&&O(jQuery)})(window,document);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/eric/Documents/code/fc-mill/bower_components/moment/min/moment.min.js":[function(require,module,exports){
(function (global){
//! moment.js
//! version : 2.8.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>23?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){return b._isUTC?tb(a).zone(b._offset||0):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"X":return Xb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return Yb;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(a){if(a._f===tb.ISO_8601)return void $(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=O(a._f,a._locale).match(Nb)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(P(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),pc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),R(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Db]<12&&(a._a[Db]+=12),a._isPm===!1&&12===a._a[Db]&&(a._a[Db]=0),T(a),F(a)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c=b._i,d=b._f;return b._locale=b._locale||tb.localeData(b._l),null===c||d===a&&""===c?tb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),tb.isMoment(c)?new k(c,!0):(d?u(d)?Z(b):W(b):bb(b),new k(b)))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.3",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+(\.\d{1,3})?/,Yb=/\d{1,2}/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=tb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=x(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):+this.clone().startOf(b)>+tb(a).startOf(b)},isBefore:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):+this.clone().startOf(b)<+tb(a).startOf(b)},isSame:function(a,b){return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):+this.clone().startOf(b)===+K(a,this).startOf(b)},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+qb(this._months/12),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";
return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/eric/Documents/code/fc-mill/bower_components/pickadate/lib/picker.date.js":[function(require,module,exports){
(function (global){

/*!
 * Date picker for pickadate.js v3.5.4
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker','jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null) )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, { format: formatString })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( Date.UTC(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange) )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date(Date.UTC(value[ 0 ], value[ 1 ], value[ 2 ] ))
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number, make a normalized date.
    else if ( _.isInteger( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a date object, make a normalized date.
    else if ( _.isDate( value ) ) {
        value = calendar.normalize( value, options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getUTCFullYear(),
        month: isInfiniteValue || value.getUTCMonth(),
        date: isInfiniteValue || value.getUTCDate(),
        day: isInfiniteValue || value.getUTCDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setUTCDate( value.getUTCDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( Date.UTC( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 ) )
        targetYear = targetDateObject.getUTCFullYear()
        targetMonth = targetDateObject.getUTCMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( Date.UTC( targetYear, targetMonth, targetDate ) ).getUTCMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setUTCHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || !options.nav ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        var word = string.match( /\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getUTCFullYear(), unitToEnable.getUTCMonth(), unitToEnable.getUTCDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysShort ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        createMonthLabel = function() {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths ) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth,
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        createYearLabel = function() {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                return _.node( 'select',
                    _.group({
                        min: lowestYear,
                        max: highestYear,
                        i: 1,
                        node: 'option',
                        item: function( loopedYear ) {
                            return [

                                // The looped year and no classes.
                                loopedYear, 0,

                                // Set the value and selected index.
                                'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                            ]
                        }
                    }),
                    settings.klass.selectYear,
                    ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelYearSelect + '"'
                )
            }

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


    // Create and return the entire calendar.
    return _.node(
        'div',
        ( settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            selected: isSelected && calendar.$node.val() === _.trigger(
                                                    calendar.formats.toString,
                                                    calendar,
                                                    [ settings.format, targetDate ]
                                                ) ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    ) +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, settings.klass.buttonToday,
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, settings.klass.buttonClear,
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, settings.klass.buttonClose,
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',

            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));




}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./picker.js":"/home/eric/Documents/code/fc-mill/bower_components/pickadate/lib/picker.js"}],"/home/eric/Documents/code/fc-mill/bower_components/pickadate/lib/picker.js":[function(require,module,exports){
(function (global){
/*!
 * pickadate.js v3.5.4, 2014/09/11
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null) )

    // Browser globals.
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == document.activeElement
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root with a holder and then prepare it.
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root"') )
                prepareElementRoot()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) P.$root.html( createWrappedComponent() )
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the element’s jQuery object.
                    $ELEMENT.trigger( 'focus' )

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$root.children()[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == ELEMENT && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight ).close()
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                    // The focus is triggered *after* the close has completed - causing it
                    // to open again. So unbind and rebind the event at the next tick.
                    $ELEMENT.off( 'focus.' + STATE.id ).trigger( 'focus' )
                    setTimeout( function() {
                        $ELEMENT.on( 'focus.' + STATE.id, focusToOpen )
                    }, 0 )
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            ).

            // On focus/click, open the picker and adjust the root “focused” state.
            on('focus.' + STATE.id + ' click.' + STATE.id, focusToOpen)


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            // Handle keyboard event based on the picker being opened or not.
            $ELEMENT.on('keydown.' + STATE.id, function(event) {

                var keycode = event.keyCode,

                    // Check if one of the delete keys was pressed.
                    isKeycodeDelete = /^(8|46)$/.test(keycode)

                // For some reason IE clears the input value on “escape”.
                if ( keycode == 27 ) {
                    P.close()
                    return false
                }

                // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
                if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

                    // Prevent it from moving the page and bubbling to doc.
                    event.preventDefault()
                    event.stopPropagation()

                    // If `delete` was pressed, clear the values and close the picker.
                    // Otherwise open the picker.
                    if ( isKeycodeDelete ) { P.clear().close() }
                    else { P.open() }
                }
            })
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root' + (P._hidden ? ' ' + P._hidden.id : '')
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

        P.$root.

            on({

                // When something within the root is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( ':input' ) && target.nodeName != 'OPTION' ) {

                            event.preventDefault()

                            // Re-focus onto the element so that users can click away
                            // from elements focused within the picker.
                            ELEMENT.focus()
                        }
                    }
                }
            }).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = document.activeElement
                    activeElement = activeElement && ( activeElement.type || activeElement.href ) && activeElement

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    ELEMENT.focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick ).close( true )
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear().close( true )
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$root

        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            }).

            // Insert the hidden input after the element.
            after(P._hidden)
    }


    // Separated for IE
    function focusToOpen( event ) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // If it’s a focus event, add the “focused” class to the root.
        if ( event.type == 'focus' ) {
            P.$root.addClass( CLASSES.focused )
        }

        // And then finally open the picker.
        P.open()
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getUTCDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}



// Expose the picker constructor.
return PickerConstructor


}));




}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/eric/Documents/code/fc-mill/bower_components/select2/select2.min.js":[function(require,module,exports){
/*
Copyright 2014 Igor Vaynberg

Version: 3.5.2 Timestamp: Sat Nov  1 14:43:36 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function o(a){function b(a){return m[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function p(a,b){for(var c=0,d=b.length;d>c;c+=1)if(r(a,b[c]))return c;return-1}function q(){var b=a(l);b.appendTo(document.body);var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function r(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function s(a,b,c){var d,e,f;if(null===a||a.length<1)return[];for(d=a.split(b),e=0,f=d.length;f>e;e+=1)d[e]=c(d[e]);return d}function t(a){return a.outerWidth(!1)-a.width()}function u(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function v(c){c.on("mousemove",function(c){var d=h;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function w(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function x(a,b){var c=w(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){p(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus();var e=b.offsetWidth>0||b.offsetHeight>0;e&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!g){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);g=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),g.attr("class","select2-sizer"),a(document.body).append(g)}return g.text(b.val()),g.width()}function D(b,c,d){var e,g,f=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(g))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=o(a.toUpperCase()).indexOf(o(b.toUpperCase())),f=b.length;return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page,i);i.callback(b)},error:function(a,b,c){var d={hasError:!0,jqXHR:a,textStatus:b,errorThrown:c};i.callback(d)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?(b.callback(c()),void 0):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),b.callback(e),void 0)}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g))}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function K(b,c){if(a.isFunction(b)){var d=Array.prototype.slice.call(arguments,2);return b.apply(c,d)}return b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(r(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(){var b=this;a.each(arguments,function(a,c){b[c].remove(),b[c]=null})}function O(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,i,j,h={x:0,y:0},k={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case k.LEFT:case k.RIGHT:case k.UP:case k.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case k.SHIFT:case k.CTRL:case k.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"};i=a(document),f=function(){var a=1;return function(){return a++}}(),c=O(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,g=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a(".select2-hidden-accessible"),0==this.liveRegion.length&&(this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+f()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a(document.body),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss,this.opts.element)),this.container.addClass(K(c.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",A),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(c.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",A),this.results=d=this.container.find(g),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",A),v(this.results),this.dropdown.on("mousemove-filtered",g,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",g,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",g,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",g,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),x(80,this.results),this.dropdown.on("scroll-debounced",g,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),u(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",g,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.nextSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),j=j||q(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:function(){var a=this.opts.element,c=a.data("select2"),d=this;this.close(),a.length&&a[0].detachEvent&&d._sync&&a.each(function(){d._sync&&this.detachEvent("onpropertychange",d._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.show().removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show()),N.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:r(a.attr("locked"),"locked")||r(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,g,h,i=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{populateResults:function(d,e,g){var h,j=this.opts.id,k=this.liveRegion;h=function(d,e,l){var m,n,o,p,q,r,s,t,u,v;d=c.sortResults(d,e,g);var w=[];for(m=0,n=d.length;n>m;m+=1)o=d[m],q=o.disabled===!0,p=!q&&j(o)!==b,r=o.children&&o.children.length>0,s=a("<li></li>"),s.addClass("select2-results-dept-"+l),s.addClass("select2-result"),s.addClass(p?"select2-result-selectable":"select2-result-unselectable"),q&&s.addClass("select2-disabled"),r&&s.addClass("select2-result-with-children"),s.addClass(i.opts.formatResultCssClass(o)),s.attr("role","presentation"),t=a(document.createElement("div")),t.addClass("select2-result-label"),t.attr("id","select2-result-label-"+f()),t.attr("role","option"),v=c.formatResult(o,t,g,i.opts.escapeMarkup),v!==b&&(t.html(v),s.append(t)),r&&(u=a("<ul></ul>"),u.addClass("select2-result-sub"),h(o.children,u,l+1),s.append(u)),s.data("select2-data",o),w.push(s[0]);e.append(w),k.text(c.formatMatches(d.length))},h(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(g=c.id,c.id=function(a){return a[g]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,h,c={results:[],more:!1},e=a.term;h=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(i.optionToData(b)):b.is("optgroup")&&(d=i.optionToData(b),b.children().each2(function(a,b){h(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){h(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(h=c.element.data("ajax-url"),h&&h.length>0&&(c.ajax.url=h),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(s(b.val(),c.separator,c.transformVal)).each(function(){var b={id:this,text:this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){return r(this.id,b.id)?(b=this,!1):void 0}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var d,c=this.opts.element,e=this;c.on("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),this._sync=this.bind(function(){var a=c.prop("disabled");a===b&&(a=!1),this.enable(!a);var d=c.prop("readonly");d===b&&(d=!1),this.readonly(d),this.container&&(D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass,this.opts.element))),this.dropdown&&(D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass,this.opts.element)))}),c.length&&c[0].attachEvent&&c.each(function(){this.attachEvent("onpropertychange",e._sync)}),d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new d(function(b){a.each(b,e._sync)}),this.propertyObserver.observe(c.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b,choice:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},opened:function(){return this.container?this.container.hasClass("select2-dropdown-open"):!1},positionDropdown:function(){var v,w,x,y,z,b=this.dropdown,c=this.container,d=c.offset(),e=c.outerHeight(!1),f=c.outerWidth(!1),g=b.outerHeight(!1),h=a(window),i=h.width(),k=h.height(),l=h.scrollLeft()+i,m=h.scrollTop()+k,n=d.top+e,o=d.left,p=m>=n+g,q=d.top-g>=h.scrollTop(),r=b.outerWidth(!1),s=function(){return l>=o+r},t=function(){return d.left+l+c.outerWidth(!1)>r},u=b.hasClass("select2-drop-above");u?(w=!0,!q&&p&&(x=!0,w=!1)):(w=!1,!p&&q&&(x=!0,w=!0)),x&&(b.hide(),d=this.container.offset(),e=this.container.outerHeight(!1),f=this.container.outerWidth(!1),g=b.outerHeight(!1),l=h.scrollLeft()+i,m=h.scrollTop()+k,n=d.top+e,o=d.left,r=b.outerWidth(!1),b.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(z=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),r=b.outerWidth(!1)+(z.scrollHeight===z.clientHeight?0:j.width),r>f?f=r:r=f,g=b.outerHeight(!1)):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(v=this.body.offset(),n-=v.top,o-=v.left),!s()&&t()&&(o=d.left+this.container.outerWidth(!1)-r),y={left:o,width:f},w?(y.top=d.top-g,y.bottom="auto",this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(y.top=n,y.bottom="auto",this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),y=a.extend(y,K(this.opts.dropdownCss,this.opts.element)),b.css(y)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),i.on("mousemove.select2Event",function(a){h.x=a.pageX,h.y=a.pageY}),!0):!1},opening:function(){var f,b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),f=a("#select2-drop-mask"),0===f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body),f.on("mousedown touchstart click",function(b){n(f);var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close(),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(){g.opened()&&g.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),i.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,j,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),j=(e.offset()||{}).top||0,f=j+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!1),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=j-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;
var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?p(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",d.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(d.text()),e=d.data("select2-data"),e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e}),void 0)},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),e.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).html(e.opts.escapeMarkup(K(e.opts.formatLoadMore,e.opts.element,d+1))),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown(),e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?h.liveRegion.text(e.text()):h.liveRegion.text(h.opts.formatMatches(e.find('.select2-result-selectable:not(".select2-selected")').length))}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!r(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+K(f.formatSelectionTooBig,f.element,o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+K(f.formatInputTooShort,f.element,d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+K(f.formatInputTooLong,f.element,d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+K(f.formatSearching,f.element)+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(g.hasError!==b&&J(f.formatAjaxError,"formatAjaxError"))return n("<li class='select2-ajax-error'>"+K(f.formatAjaxError,f.element,g.jqXHR,g.textStatus,g.errorThrown)+"</li>"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return r(h.id(this),h.id(i))}).length&&this.opts.createSearchChoicePosition(g.results,i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+K(f.formatNoMatches,f.element,d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+f.escapeMarkup(K(f.formatLoadMore,f.element,this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){if(this._touchMoved)return this.clearTouchMoved(),void 0;var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},initContainerWidth:function(){function c(){var c,d,e,f,g,h;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(h=d[f].replace(/\s/g,""),e=h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),d=O(c,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e))),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"selection","focusser")},initContainer:function(){var b,g,c=this.container,d=this.dropdown,e=f();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=c.find(".select2-choice"),this.focusser=c.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+e),this.focusser.attr("aria-labelledby","select2-chosen-"+e),this.results.attr("id","select2-results-"+e),this.search.attr("aria-owns","select2-results-"+e),this.focusser.attr("id","s2id_autogen"+e),g=a("label[for='"+this.opts.element.attr("id")+"']"),this.opts.element.focus(this.bind(function(){this.focus()})),this.focusser.prev().text(g.text()).attr("for",this.focusser.attr("id"));var h=this.opts.element.attr("title");this.opts.element.attr("title",h||g.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&229!=a.keyCode){if(a.which===k.PAGE_UP||a.which===k.PAGE_DOWN)return A(a),void 0;switch(a.which){case k.UP:case k.DOWN:return this.moveHighlight(a.which===k.UP?-1:1),A(a),void 0;case k.ENTER:return this.selectHighlighted(),A(a),void 0;case k.TAB:return this.selectHighlighted({noFocus:!0}),void 0;case k.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(function(){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==k.TAB&&!k.isControl(a)&&!k.isFunctionKey(a)&&a.which!==k.ESC){if(this.opts.openOnEnter===!1&&a.which===k.ENTER)return A(a),void 0;if(a.which==k.DOWN||a.which==k.UP||a.which==k.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),A(a),void 0}return a.which==k.DELETE||a.which==k.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0}})),u(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection&&this.selection.focus())})),b.on("mousedown touchstart",this.bind(function(c){n(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(c)})),d.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.hide(),this.setPlaceholder()},clear:function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder(),c.nextSearchTerm=c.opts.nextSearchTerm(a,c.search.val()))})}},isPlaceholderOptionSelected:function(){var a;return this.getPlaceholder()===b?!1:(a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val()},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=r(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return r(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),r(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return this.clear(c),void 0;if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),e=O(c,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=s(c.val(),b.separator,b.transformVal),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return r(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(r(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"searchContainer","selection")},initContainer:function(){var c,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=c=this.container.find(b);var d=this;this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(){d.search[0].focus(),d.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+f()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.opts.element.focus(this.bind(function(){this.focus()})),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=c.find(".select2-search-choice-focus"),d=b.prev(".select2-search-choice:not(.select2-locked)"),e=b.next(".select2-search-choice:not(.select2-locked)"),f=z(this.search);if(b.length&&(a.which==k.LEFT||a.which==k.RIGHT||a.which==k.BACKSPACE||a.which==k.DELETE||a.which==k.ENTER)){var g=b;return a.which==k.LEFT&&d.length?g=d:a.which==k.RIGHT?g=e.length?e:null:a.which===k.BACKSPACE?this.unselect(b.first())&&(this.search.width(10),g=d.length?d:e):a.which==k.DELETE?this.unselect(b.first())&&(this.search.width(10),g=e.length?e:null):a.which==k.ENTER&&(g=null),this.selectChoice(g),A(a),g&&g.length||this.open(),void 0}if((a.which===k.BACKSPACE&&1==this.keydowns||a.which==k.LEFT)&&0==f.offset&&!f.length)return this.selectChoice(c.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;if(this.selectChoice(null),this.opened())switch(a.which){case k.UP:case k.DOWN:return this.moveHighlight(a.which===k.UP?-1:1),A(a),void 0;case k.ENTER:return this.selectHighlighted(),A(a),void 0;case k.TAB:return this.selectHighlighted({noFocus:!0}),this.close(),void 0;case k.ESC:return this.cancel(a),A(a),void 0}if(a.which!==k.TAB&&!k.isControl(a)&&!k.isFunctionKey(a)&&a.which!==k.BACKSPACE&&a.which!==k.ESC){if(a.which===k.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===k.PAGE_UP||a.which===k.PAGE_DOWN)&&A(a),a.which===k.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.hide(),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c=[],d=[],e=this;a(b).each(function(){p(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){e.addSelectedChoice(this)}),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,c){this.triggerSelect(a)&&""!==a.text&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),c&&c.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(c){var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith(a("<div></div>").html(j)),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),A(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)},unselect:function(b){var d,e,c=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(d=b.data("select2-data")){var f=a.Event("select2-removing");if(f.val=this.id(d),f.choice=d,this.opts.element.trigger(f),f.isDefaultPrevented())return!1;for(;(e=p(this.id(d),c))>=0;)c.splice(e,1),this.setVal(c),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(d),choice:d}),this.triggerChange({removed:d}),!0}},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));p(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&this.opts.closeOnSelect===!0&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+K(g.opts.formatNoMatches,g.opts.element,g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-t(this.search)},resizeSearch:function(){var a,b,c,d,e,f=t(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(Math.floor(e))},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),s(a,this.opts.separator,this.opts.transformVal))},setVal:function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){p(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)r(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c>0&&c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({added:this.data(),removed:e}),void 0;if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,e,f,g,h,c=Array.prototype.slice.call(arguments,0),i=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],j=["opened","isFocused","container","dropdown"],k=["val","data"],l={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?h=d.element.prop("multiple"):(h=d.multiple||!1,"tags"in d&&(d.multiple=h=!0)),e=h?new window.Select2["class"].multi:new window.Select2["class"].single,e.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(p(c[0],i)<0)throw"Unknown method: "+c[0];if(g=b,e=a(this).data("select2"),e===b)return;if(f=c[0],"container"===f?g=e.container:"dropdown"===f?g=e.dropdown:(l[f]&&(f=l[f]),g=e[f].apply(e,c.slice(1))),p(c[0],j)>=0||p(c[0],k)>=0&&1==c.length)return!1}}),g===b?this:g},a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(this.text(a),c.term,e,d),e.join("")},transformVal:function(b){return a.trim(b)},formatSelection:function(a,c,d){return a?d(this.text(a)):b},sortResults:function(a){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(){return b},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a==b?null:a.id},text:function(b){return b&&this.data&&this.data.text?a.isFunction(this.data.text)?this.data.text(b):b[this.data.text]:b.text
},matcher:function(a,b){return o(""+b).toUpperCase().indexOf(o(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(a){var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return b?a.opts.minimumResultsForSearch<0?!1:!0:!0}},a.fn.select2.locales=[],a.fn.select2.locales.en={formatMatches:function(a){return 1===a?"One result is available, press enter to select it.":a+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatAjaxError:function(){return"Loading failed"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results\u2026"},formatSearching:function(){return"Searching\u2026"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.en),a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:w,markMatch:E,escapeMarkup:F,stripDiacritics:o},"class":{"abstract":c,single:d,multi:e}}}}(jQuery);
},{}],"/home/eric/Documents/code/fc-mill/bower_components/underscore/underscore-min.js":[function(require,module,exports){
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
//# sourceMappingURL=underscore-min.map
},{}],"/home/eric/Documents/code/fc-mill/js/index.js":[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
require('../bower_components/pickadate/lib/picker');
require('../bower_components/pickadate/lib/picker.date');
require('../bower_components/select2/select2.min');

var initViewPage = require('./view').init;

function initIndexPage() {
    $(':input[type=date]').pickadate({
        format: 'm/d/yy'
    });

    $('select').select2();

    $(':input[name=state]').change(function () {
        $(':input[name=city],:input[name=zip]').prop('disabled', $(this).val() === '');
    });
}

$(document).ready(function () {
    if ($('.main-index-page').length > 0) {
        initIndexPage();
    }
    if ($('.view-page').length > 0) {
        initViewPage();
    }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../bower_components/pickadate/lib/picker":"/home/eric/Documents/code/fc-mill/bower_components/pickadate/lib/picker.js","../bower_components/pickadate/lib/picker.date":"/home/eric/Documents/code/fc-mill/bower_components/pickadate/lib/picker.date.js","../bower_components/select2/select2.min":"/home/eric/Documents/code/fc-mill/bower_components/select2/select2.min.js","./view":"/home/eric/Documents/code/fc-mill/js/view.js"}],"/home/eric/Documents/code/fc-mill/js/view.js":[function(require,module,exports){
var _ = require('../bower_components/underscore/underscore-min'),
    moment = require('../bower_components/moment/min/moment.min');

require('../bower_components/bootstrap/js/tab');
require('../bower_components/datatables/media/js/jquery.dataTables.min');


function createFakeDataset() {
    var dataSet = [],
        currentDate = moment('2014-01-01'),
        crops = ['corn', 'peppers (hot)', 'tomatoes'];

    _.each(_.range(_.random(75)), function () {
        currentDate = currentDate.add(_.random(3), 'days');
        dataSet.push([
            currentDate.format('M/D/YY'),
            _.random(5),
            _.sample(crops)
        ]);
    });
    return dataSet;
}

function asObjects(data) {
    return _.map(data, function (d) {
        return {
            date: d[0],
            total: d[1],
            crop: d[2]
        };
    });
}

function makeChart($chart, data) {
    data = data.slice(0, 10);

    // Set our margins
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 60
    },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

    // Our X scale
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

    // Our Y scale
    var y = d3.scale.linear().rangeRound([height, 0]);

    // Our color bands
    var color = d3.scale.ordinal()
        .range(["#308fef", "#5fa9f3", "#1176db"]);

    // Use our X scale to set a bottom axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    // Same for our left axis
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    var svg = d3.select($chart[0]).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    color.domain(d3.keys(data[0]).filter(function (key) {
        return key !== "year";
    }));

    data.forEach(function (d) {
        var y0 = 0;
        d.types = color.domain().map(function (name) {
            return {
                name: name,
                y0: y0,
                y1: y0 += +d.total
            };
        });
        d.total = d.types[d.types.length - 1].y1;
    });

    // Our X domain is our set of dates
    x.domain(data.map(function (d) {
        return d.date;
    }));

    // Our Y domain is from zero to our highest total
    y.domain([0, d3.max(data, function (d) {
        return d.total;
    })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    var date = svg.selectAll(".date")
        .data(data)
        .enter().append("g")
        .attr("class", "g")
        .attr("transform", function (d) {
            return "translate(" + x(d.date) + ",0)";
        });

    date.selectAll("rect")
        .data(function (d) {
            return d.types;
        })
        .enter().append("rect")
            .attr("width", x.rangeBand())
            .attr("y", function (d) {
                return y(d.y1);
            })
            .attr("height", function (d) {
                return y(d.y0) - y(d.y1);
            })
            .style("fill", function (d) {
                return '#6b812d';
            });
}

module.exports = {
    init: function () {
        $('.metric-table').each(function () {
            var columns = [
                { "title": "Recorded" },
                { "title": $(this).data('number-label') }
            ];
            if ($(this).data('crops')) {
                columns.push({ "title": "Crop" });
            }
            var data = createFakeDataset();
            $(this).dataTable({
                columns: columns,
                data: data,
                lengthChange: false,
                pageLength: 5,
                searching: false
            });

            var $chart = $(this).parentsUntil('.tab-pane').find('.chart');
            makeChart($chart, asObjects(data));
        });

        $('.btn-download').click(function () {
            alert('Not implemented yet! Will be an Excel file with all the data.');
        });

        $('.btn-hide').click(function () {
            alert('Not implemented yet! Will hide filters to emphasize data more.');
        });
    }
};

},{"../bower_components/bootstrap/js/tab":"/home/eric/Documents/code/fc-mill/bower_components/bootstrap/js/tab.js","../bower_components/datatables/media/js/jquery.dataTables.min":"/home/eric/Documents/code/fc-mill/bower_components/datatables/media/js/jquery.dataTables.min.js","../bower_components/moment/min/moment.min":"/home/eric/Documents/code/fc-mill/bower_components/moment/min/moment.min.js","../bower_components/underscore/underscore-min":"/home/eric/Documents/code/fc-mill/bower_components/underscore/underscore-min.js"}]},{},["/home/eric/Documents/code/fc-mill/js/index.js"]);
