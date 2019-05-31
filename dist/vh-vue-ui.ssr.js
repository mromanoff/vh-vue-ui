'use strict';Object.defineProperty(exports,'__esModule',{value:true});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;/* script */

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"display":"none"},attrs:{"xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<defs><symbol id=\"alert\" viewBox=\"0 0 24 24\"><path d=\"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z\"></path></symbol> <symbol id=\"error\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></symbol> <symbol id=\"calendar\" viewBox=\"0 0 24 24\"><path d=\"M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z\"></path></symbol> <symbol id=\"camera\" viewBox=\"0 0 24 24\"><path d=\"M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z\"></path></symbol> <symbol id=\"car\" viewBox=\"0 0 24 24\"><path d=\"M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z\"></path></symbol> <symbol id=\"check\" viewBox=\"0 0 24 24\"><path d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\"></path></symbol> <symbol id=\"checkboxBlank\" viewBox=\"0 0 24 24\"><path d=\"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z\"></path></symbol> <symbol id=\"checkboxMarked\" viewBox=\"0 0 24 24\"><path d=\"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z\"></path></symbol> <symbol id=\"checkCircle\" viewBox=\"0 0 24 24\"><path d=\"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"></path></symbol> <symbol id=\"chevronDown\" viewBox=\"0 0 24 24\"><path d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"></path></symbol> <symbol id=\"chevronLeft\" viewBox=\"0 0 24 24\"><path d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"></path></symbol> <symbol id=\"chevronRight\" viewBox=\"0 0 24 24\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"></path></symbol> <symbol id=\"chevronUp\" viewBox=\"0 0 24 24\"><path d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"></path></symbol> <symbol id=\"circle\" viewBox=\"0 0 24 24\"><path d=\"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"></path></symbol> <symbol id=\"close\" viewBox=\"0 0 24 24\"><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"></path></symbol> <symbol id=\"closeCircle\" viewBox=\"0 0 24 24\"><path d=\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z\"></path></symbol> <symbol id=\"colorFill\" viewBox=\"0 0 24 24\"><path d=\"M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z\"></path></symbol> <symbol id=\"helpCircle\" viewBox=\"0 0 24 24\"><path d=\"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z\"></path></symbol> <symbol id=\"helpCircleOutline\" viewBox=\"0 0 24 24\"><path d=\"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z\"></path></symbol> <symbol id=\"mapMarker\" viewBox=\"0 0 24 24\"><path d=\"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z\"></path></symbol> <symbol id=\"menu\" viewBox=\"0 0 24 24\"><path d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\"></path></symbol> <symbol id=\"menuDown\" viewBox=\"0 0 24 24\"><path d=\"M7,10L12,15L17,10H7Z\"></path></symbol> <symbol id=\"menuUp\" viewBox=\"0 0 24 24\"><path d=\"M7,15L12,10L17,15H7Z\"></path></symbol> <symbol id=\"playCircle\" viewBox=\"0 0 24 24\"><path d=\"M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"></path></symbol> <symbol id=\"priceDollar\" viewBox=\"0 0 24 24\"><path d=\"M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z\"></path></symbol> <symbol id=\"profileCard\" viewBox=\"0 0 24 24\"><path d=\"M18,19H6V17.6C6,15.6 10,14.5 12,14.5C14,14.5 18,15.6 18,17.6M12,7A3,3 0 0,1 15,10A3,3 0 0,1 12,13A3,3 0 0,1 9,10A3,3 0 0,1 12,7M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z\"></path></symbol> <symbol id=\"range\" viewBox=\"0 0 24 24\"><path d=\"M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z\"></path></symbol> <symbol id=\"speedometer\" viewBox=\"0 0 24 24\"><path d=\"M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z\"></path></symbol> <symbol id=\"star\" viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"></path></symbol> <symbol id=\"starHalf\" viewBox=\"0 0 24 24\"><path d=\"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z\"></path></symbol> <symbol id=\"starOutline\" viewBox=\"0 0 24 24\"><path d=\"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z\"></path></symbol> <symbol id=\"thumbUp\" viewBox=\"0 0 24 24\"><path d=\"M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z\"></path></symbol> <symbol id=\"video\" viewBox=\"0 0 24 24\"><path d=\"M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z\"></path></symbol> <symbol id=\"clipboard\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"></path></symbol> <symbol id=\"colorOptions\" viewBox=\"0 0 24 24\"><circle cx=\"11.97\" cy=\"8.41\" r=\"4.1\" fill=\"#f78f41\"></circle> <circle cx=\"7.87\" cy=\"15.59\" r=\"4.1\" fill=\"#398bd3\"></circle> <circle cx=\"16.13\" cy=\"15.59\" r=\"4.1\" fill=\"#4db45d\"></circle></symbol> <symbol id=\"expertReview\" viewBox=\"0 0 24 24\"><path d=\"M9 5a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 9 12a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 9 5m0 8.75c3.87 0 7 1.57 7 3.5V19H2v-1.75c0-1.93 3.13-3.5 7-3.5m8-1.09l-2.75-3 1.16-1.16L17 10.09l3.59-3.59 1.16 1.41L17 12.66z\"></path></symbol> <symbol id=\"openInNew\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></symbol> <symbol id=\"phone\" viewBox=\"0 0 24 24\"><path d=\"M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></symbol> <symbol id=\"eMail\" viewBox=\"0 0 24 24\"><path d=\"M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path></symbol></defs>")])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-4cb41370";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VhSvgSprite = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    {},
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );//
//
//
//
//
//

var script = {
  name: 'VhAccordion',
  props: {
    expandMode: {
      type: String,
      default: 'single',
      validator: function (value) {
        return value.match(/(single|multiple)/);
      },
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    this.$children.forEach(function (child) { return child.$on('accordion-item-select', function (id) {
        this$1.handleAccordionItemSelect(child, id);
      }); }
    );
  },
  methods: {
    handleAccordionItemSelect: function handleAccordionItemSelect(child, id) {
      switch (this.expandMode) {
        case 'single':
          this.$children.forEach(function (child) {
            if (child.id === id) {
              child.isOpen = !child.isOpen;
            } else if (child.id !== id && child.isOpen) {
              child.isOpen = false;
            }
          });
          break;
        case 'multiple':
          child.isOpen = !child.isOpen;
          break;
        default:
          break;
      }
    },
  },
};function createInjectorSSR(context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }

  if (!context) { return function () {}; }

  if (!('styles' in context)) {
    context._styles = context._styles || {};
    Object.defineProperty(context, 'styles', {
      enumerable: true,
      get: function get() {
        return context._renderStyles(context._styles);
      }
    });
    context._renderStyles = context._renderStyles || renderStyles;
  }

  return function (id, style) {
    return addStyle(id, style, context);
  };
}

function addStyle(id, css, context) {
  var group = css.media || 'default';
  var style = context._styles[group] || (context._styles[group] = {
    ids: [],
    css: ''
  });

  if (!style.ids.includes(id)) {
    style.media = css.media;
    style.ids.push(id);
    var code = css.source;

    style.css += code + '\n';
  }
}

function renderStyles(styles) {
  var css = '';

  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + Array.from(style.ids).join(' ') + '"' + (style.media ? ' media="' + style.media + '"' : '') + '>' + style.css + '</style>';
  }

  return css;
}

var server = createInjectorSSR;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhAccordion"},[_vm._t("default")],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-649a78dd_0", { source: ".VhAccordion[data-v-649a78dd]{position:relative}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = "data-v-649a78dd";
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-649a78dd";
  /* functional template */
  var __vue_is_functional_template__$1 = false;

  
  var VhAccordion = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
  name: 'VhAccordionItem',
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small',
    },
  },
  data: function data() {
    return {
      id: null,
      isOpen: this.open,
      hasBeenOpened: this.open,
    };
  },
  computed: {
    itemClasses: function itemClasses() {
      var obj;

      return ( obj = {
        'VhAccordionItem--bordered': this.bordered
      }, obj[("VhAccordionItem--" + (this.size))] = this.size, obj );
    },
    stateClasses: function stateClasses() {
      return {
        'is-open': this.isOpen,
      };
    },
  },
  watch: {
    isOpen: function isOpen(newValue, oldValue) {
      if (this.hasBeenOpened === true) { return null; }
      else if (newValue === true && oldValue === false) {
        this.hasBeenOpened = true;
      }
    },
  },
  mounted: function mounted() {
    this.id = this.$uuid.v4();
  },
  methods: {
    handleClick: function handleClick() {
      /**
       * @event accordion-item-select
       * @type {String}
       */
      this.$emit('accordion-item-select', this.id);
    },
  },
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhAccordionItem",class:_vm.itemClasses},[_vm._ssrNode("<div"+(_vm._ssrClass("VhAccordionItem-header",_vm.stateClasses))+">","</div>",[_c('vh-icon',{attrs:{"name":"chevronDown","color":"darkGrey","size":"large"}}),_vm._ssrNode(" "),_vm._t("header")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("VhAccordionItem-body",_vm.stateClasses))+">","</div>",[(!_vm.lazy || (_vm.lazy && _vm.hasBeenOpened))?_vm._ssrNode("<div>","</div>",[_vm._t("body")],2):_vm._e()])],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-2524360b_0", { source: ".VhAccordionItem-header[data-v-2524360b]{min-height:3.75rem;cursor:pointer;display:flex;justify-items:center;align-items:center;z-index:var(--z-index--low);margin:0;padding:var(--space--small) 0}& h2[data-v-2524360b]{padding:var(--space--medium) 0;border-bottom:1px solid var(--color--grey300)}& .Icon[data-v-2524360b]{margin-left:var(--space--medium);margin-right:var(--space--medium);transition-property:all;transition-duration:.2s}& h2[data-v-2524360b],& h3[data-v-2524360b]{border-bottom:1px solid transparent}.VhAccordionItem-body.is-open[data-v-2524360b]{height:100%;opacity:1;overflow:visible;border-bottom:1px solid var(--color--grey300);padding-bottom:var(--space--xLarge)}.VhAccordionItem--small[data-v-2524360b]{display:flex;justify-items:center;align-items:center;z-index:var(--z-index--low);margin:0;padding:0;line-height:1;font-size:var(--font-size--medium);font-weight:400;font-family:var(--font-family)}& .Icon[data-v-2524360b]{margin-left:var(--space--medium);margin-right:var(--space--medium);transition-property:all;transition-duration:.1s}& .VhAccordionItem-body.is-open[data-v-2524360b]{padding-top:var(--space--medium);border-bottom:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$2 = "data-v-2524360b";
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-2524360b";
  /* functional template */
  var __vue_is_functional_template__$2 = false;

  
  var VhAccordionItem = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$1,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//

var script$2 = {
  name: 'VhAvatar',
  props: {
    /**
     *  One of these colors: grey, yellow, orange, green, red, blue
     */
    color: {
      type: String,
      default: 'grey',
      validator: function (value) {
        return value.match(/(grey|green|yellow|orange|red|blue)/);
      },
    },
    /**
     * One of these sizes: small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(small|medium|large)/);
      },
    },
  },
  computed: {
    computedClasses: function computedClasses() {
      var obj;

      return ( obj = {}, obj[("VhAvatar--" + (this.size))] = this.size, obj[("VhAvatar--" + (this.color))] = this.color, obj );
    },
  },
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"VhAvatar",class:_vm.computedClasses},_vm.$listeners),[_vm._t("default")],2)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = function (inject) {
    if (!inject) { return }
    inject("data-v-7a50278a_0", { source: ".VhAvatar[data-v-7a50278a]{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;position:relative;text-align:center;vertical-align:middle;background-color:var(--color--blue400);border-color:var(--color--blue400);color:var(--color--white);font-weight:var(--font-weight--light);flex:0 0 auto}.VhAvatar--small[data-v-7a50278a]{height:var(--VhAvatar-size--small);width:var(--VhAvatar-size--small);font-size:12px!important}.VhAvatar--medium[data-v-7a50278a]{height:var(--VhAvatar-size--medium);width:var(--VhAvatar-size--medium);font-size:16px!important}.VhAvatar--large[data-v-7a50278a]{height:var(--VhAvatar-size--large);width:var(--VhAvatar-size--large);font-size:24px!important}.VhAvatar--grey[data-v-7a50278a]{background-color:var(--color--grey500)}.VhAvatar--yellow[data-v-7a50278a]{background-color:var(--color--yellow500)}.VhAvatar--orange[data-v-7a50278a]{background-color:var(--color--orange500)}.VhAvatar--green[data-v-7a50278a]{background-color:var(--color--green500)}.VhAvatar--red[data-v-7a50278a]{background-color:var(--color--red500)}.VhAvatar--blue[data-v-7a50278a]{background-color:var(--color--blue500)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$3 = "data-v-7a50278a";
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-7a50278a";
  /* functional template */
  var __vue_is_functional_template__$3 = false;

  
  var VhAvatar = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$2,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
  name: 'VhBadge',
  props: {
    /**
     * Badge Color: white, blue, orange.
     */
    color: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        'VhBadge--white': this.color === 'white',
        'VhBadge--blue': this.color === 'blue',
        'VhBadge--orange': this.color === 'orange',
      };
    },
  },
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhBadgeContainer"},[_vm._ssrNode("<span>","</span>",[_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<span"+(_vm._ssrClass("VhBadge",_vm.computedClasses))+">","</span>",[_vm._t("badge")],2)],2)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = function (inject) {
    if (!inject) { return }
    inject("data-v-a6f2c504_0", { source: ".VhBadgeContainer[data-v-a6f2c504]{display:inline-block;position:relative}.VhBadge[data-v-a6f2c504]{position:absolute;display:flex;top:8px;right:10px;height:16px;min-width:16px;padding:0 2px;z-index:1;align-items:center;justify-content:center;font-size:8px;border-radius:10px;transform:scale(1) translate(90%,-60%);transform-origin:100% 0}.VhBadge--white[data-v-a6f2c504]{background-color:var(--color--white);color:var(--text-color)}.VhBadge--blue[data-v-a6f2c504]{background-color:var(--color--blue400);color:var(--color--white)}.VhBadge--orange[data-v-a6f2c504]{background-color:var(--color--orange500);color:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$4 = "data-v-a6f2c504";
  /* module identifier */
  var __vue_module_identifier__$4 = "data-v-a6f2c504";
  /* functional template */
  var __vue_is_functional_template__$4 = false;

  
  var VhBadge = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$3,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$4 = {
  name: 'VhButton',
  props: {
    /**
     * Button will expand to 100% width of container
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will become a clickable hyperlink
     */
    href: {
      type: [String, Object],
      default: null,
    },
    /**
     * Button will become a nuxt-link using href as "to"
     */
    nuxt: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will become either "small" "medium" "large"
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(small|medium|large)/);
      },
    },
    /**
     * Button will have type attribute of either "button", "submit", or "reset"
     */
    type: {
      type: String,
      default: 'button',
      validator: function (value) {
        return value.match(/(button|submit|reset)/);
      },
    },
    /**
     * Button will become become either "primary" or "secondary"
     */
    variation: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return value.match(/(primary|secondary|link|text)/);
      },
    },
  },
  computed: {
    attrs: function attrs() {
      var ref = this;
      var nuxt = ref.nuxt;
      var href = ref.href;
      var attrs = {};

      if (!nuxt && href) { attrs.href = this.href; }
      if (nuxt && href) { attrs.type = this.type; }

      return attrs;
    },
  },
};/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$5 = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.nuxt && _vm.href ? 'nuxt-link' : _vm.href ? 'a' : 'button',_vm._g(_vm._b({tag:"component",staticClass:"VhButton",class:( _obj = {
    'VhButton--disabled': _vm.disabled,
    'VhButton--block': _vm.block
  }, _obj[("VhButton--" + _vm.variation)] = _vm.variation, _obj[("VhButton--" + _vm.size)] = _vm.size, _obj ),attrs:{"to":_vm.nuxt && _vm.href}},'component',_vm.attrs,false),_vm.$listeners),[_c('span',{staticClass:"VhButton-iconLeft"},[_vm._t("icon-left")],2),_vm._v(" "),_c('span',{staticClass:"VhButton-label"},[_vm._t("default")],2)])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = function (inject) {
    if (!inject) { return }
    inject("data-v-f51a33dc_0", { source: "a.VhButton[data-v-f51a33dc]{display:inline-flex}.VhButton[data-v-f51a33dc]{min-width:calc(var(--space--xLarge) * 1.5);display:flex;align-items:center;color:var(--VhButton-color);user-select:none;border:var(--VhButton-borderWidth) solid var(--VhButton-borderColor);text-decoration:none;border-radius:var(--VhButton-borderRadius);font-size:var(--font-size--small);font-weight:var(--font-weight--medium);outline:0;cursor:pointer;text-transform:uppercase;line-height:1;-webkit-appearance:none;padding:0 var(--space--medium)}.VhButton[data-v-f51a33dc]:focus{outline:0}.VhButton-iconLeft[data-v-f51a33dc]{margin-right:var(--space--small)}.VhButton-iconLeft[data-v-f51a33dc]:empty{display:none}.VhButton--disabled[data-v-f51a33dc]{pointer-events:none;opacity:var(--VhButton--disabled-opacity)}.VhButton--primary[data-v-f51a33dc]{background-color:var(--VhButton--primary-backgroundColor);border:var(--VhButton--primary-borderWidth) solid var(--VhButton--primary-borderColor);color:var(--VhButton--primary-color)!important;transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VhButton--primary[data-v-f51a33dc]:hover{border-color:var(--VhButton--primary-backgroundColor-hover);background-color:var(--VhButton--primary-backgroundColor-hover)}.VhButton--primary[data-v-f51a33dc]:active,.VhButton--primary[data-v-f51a33dc]:focus{border-color:var(--VhButton--primary-backgroundColor-active);background-color:var(--VhButton--primary-backgroundColor-active)}.VhButton--disabled.VhButton--primary[data-v-f51a33dc]{pointer-events:none;color:var(--color--grey500)!important;opacity:1}.VhButton--secondary[data-v-f51a33dc]{background:var(--VhButton--secondary-backgroundColor);border:var(--VhButton--secondary-borderWidth) solid var(--VhButton--secondary-borderColor);color:var(--VhButton--secondary-color);transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VhButton--secondary[data-v-f51a33dc]:hover{background-color:var(--color--blue100)}.VhButton--secondary[data-v-f51a33dc]:active,.VhButton--secondary[data-v-f51a33dc]:focus{color:var(--color--grey700);background-color:var(--color--grey50);border-color:var(--color--grey600)}.VhButton--text[data-v-f51a33dc]{background:var(--VhButton--text-backgroundColor);border:var(--VhButton--text-borderWidth) solid var(--VhButton--text-borderColor);color:var(--VhButton--text-color);transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VhButton--text[data-v-f51a33dc]:hover{background-color:var(--color--blue100)}.VhButton--text[data-v-f51a33dc]:active,.VhButton--text[data-v-f51a33dc]:focus{color:var(--color--grey700)}.VhButton--link[data-v-f51a33dc]{display:inline-block;border:none;background:0 0;color:var(--link-color);font-size:inherit;text-transform:initial;min-width:initial;min-height:initial;padding:0;margin:0;fill:currentColor}.VhButton--small[data-v-f51a33dc]{font-size:var(--font-size--xSmall);height:var(--space--large);padding:0 var(--space--small)}.VhButton--medium[data-v-f51a33dc]{height:var(--space--xLarge)}.VhButton--large[data-v-f51a33dc]{font-size:var(--font-size--medium);font-weight:var(--font-weight--bold);padding:0 var(--space--large);height:calc(var(--space--xLarge) + var(--space--small))}.VhButton--block[data-v-f51a33dc]{width:100%;max-width:100%;justify-content:center}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$5 = "data-v-f51a33dc";
  /* module identifier */
  var __vue_module_identifier__$5 = "data-v-f51a33dc";
  /* functional template */
  var __vue_is_functional_template__$5 = false;

  
  var VhButton = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$4,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$5 = {
  name: 'VhCard',
  props: {
    /**
     * Card will be active and unable to be interacted with
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * Card will expand to full width of container
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Card header background color will change
     */
    color: {
      type: String,
      default: null,
      validator: function (value) {
        return value.match(/(blue|red)/);
      },
    },
    /**
     * Card's flex direction will be set to horizontal
     */
    horizontal: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    /**
     * Card will become a clickable hyperlink
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * Card will become a nuxt-link using href as "to"
     */
    nuxt: {
      type: Boolean,
      default: false,
    },
    /**
     * Card exterior will have padding, removes container padding
     */
    padded: {
      type: Boolean,
      default: false,
    },
    twoLineTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    attrs: function attrs() {
      var ref = this;
      var nuxt = ref.nuxt;
      var href = ref.href;
      var attrs = {};

      if (!nuxt && href) { attrs.href = this.href; }

      return attrs;
    },
    computedClasses: function() {
      var obj;

      return ( obj = {
        'VhCard--horizontal': Boolean(this.horizontal),
        'VhCard--hover': Boolean(this.href || this.nuxt || this.hover),
        'VhCard--padded': Boolean(this.padded),
        'VhCard--block': Boolean(this.block)
      }, obj[("VhCard--" + (this.color))] = Boolean(this.color), obj['VhCard--twoLineTitle'] =  Boolean(this.twoLineTitle), obj['is-active'] =  Boolean(this.active), obj );
    },
    computedElement: function() {
      if (this.nuxt && this.href) {
        return 'nuxt-link';
      } else if (this.href) {
        return 'a';
      } else {
        return 'div';
      }
    },
  },
};/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.computedElement,_vm._g(_vm._b({tag:"component",staticClass:"VhCard",class:_vm.computedClasses,attrs:{"to":_vm.nuxt && _vm.href}},'component',_vm.attrs,false),_vm.$listeners),[_c('div',{staticClass:"VhCard-default"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"VhCard-header"},[_vm._t("card-header")],2),_vm._v(" "),_c('div',{staticClass:"VhCard-content"},[_c('div',{staticClass:"VhCard-title"},[_vm._t("card-title")],2),_vm._v(" "),_vm._t("card-content")],2),_vm._v(" "),_c('div',{staticClass:"VhCard-action"},[_vm._t("card-action")],2)])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = function (inject) {
    if (!inject) { return }
    inject("data-v-63578338_0", { source: ".VhCard[data-v-63578338]{position:relative;display:flex;flex-direction:column;border:1px solid var(--VhCard-borderColor);text-align:start;min-width:min-content;max-width:max-content;width:290px}.VhCard-default[data-v-63578338]:not(:empty){border-bottom:1px solid var(--VhCard-borderColor)}.VhCard-header[data-v-63578338]{display:flex;align-items:center;padding:var(--space--small)}.VhCard-title[data-v-63578338]{margin-bottom:var(--space--medium);font-size:var(--font-size--large);font-weight:var(--font-weight--bold);overflow:hidden;max-height:1.575rem}.VhCard-header[data-v-63578338] :not(:last-child){margin-right:var(--space--small)}.VhCard-content[data-v-63578338]{padding:var(--space--medium);color:var(--VhCard-color);width:100%;height:100%}.VhCard-action[data-v-63578338]{padding:var(--space--small)}.VhCard-action[data-v-63578338]:empty,.VhCard-content[data-v-63578338]:empty,.VhCard-header[data-v-63578338]:empty,.VhCard-title[data-v-63578338]:empty{display:none}.VhCard--block[data-v-63578338]{max-width:100%;width:100%}.VhCard--padded[data-v-63578338]{padding:var(--space--large)}.VhCard--hover.nuxt-link-exact-active[data-v-63578338]{font-weight:initial}.VhCard--hover[data-v-63578338]:link,.VhCard--hover[data-v-63578338]:visited{text-decoration:none}.VhCard--hover.is-active[data-v-63578338]{pointer-events:none;border:2px solid var(--color--green700)}.VhCard--hover[data-v-63578338]::after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;opacity:0;box-shadow:5px 5px 20px var(--VhCard-borderColor);will-change:opacity;transition:opacity var(--VhCard-hoverExitTransition);z-index:calc(var(--z-index--low) * -1)}.VhCard--hover[data-v-63578338]:hover::after{opacity:1;transition:opacity var(--VhCard-hoverEnterTransition)}.VhCard--hover[data-v-63578338]:active::after{opacity:0;transition:opacity var(--VhCard-clickTransition)}.VhCard--blue[data-v-63578338]{color:var(--color--white)}& .VhCard-default[data-v-63578338]:not(:empty){border-bottom:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$6 = "data-v-63578338";
  /* module identifier */
  var __vue_module_identifier__$6 = "data-v-63578338";
  /* functional template */
  var __vue_is_functional_template__$6 = false;

  
  var VhCard = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$5,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$6 = {
  name: 'VhChip',
  props: {
    /**
     * Disabled Chip
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Chip will become either "small" or "medium"
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(small|medium)/);
      },
    },
    /**
     * Dismissible Chip true, false
     */
    dismissible: {
      type: Boolean,
      default: false,
    },
    /**
     * Controls visibility  TODO: do we need this still????
     */
    // value: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  // data() {
  //   return {
  //     isActive: this.value,
  //   };
  // },
  computed: {
    computedClasses: function computedClasses() {
      var obj;

      return ( obj = {
        'VhChip--disabled': this.disabled,
        'VhChip--hover': this.hasParentClickHandler
      }, obj[("VhChip--" + (this.size))] = this.size, obj );
    },
    hasParentClickHandler: function hasParentClickHandler() {
      return Boolean(this.$listeners.click);
    },
  },
  methods: {
    handleInput: function handleInput() {
      this.$emit('input');
    },
  },
};/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g({staticClass:"VhChip",class:_vm.computedClasses,attrs:{"type":"button"}},_vm.$listeners),[_vm._ssrNode("<span class=\"VhChip-iconLeft\">","</span>",[_vm._t("icon-left")],2),_vm._ssrNode(" "),_vm._ssrNode("<span class=\"VhChip-content\">","</span>",[_vm._t("default")],2),_vm._ssrNode(" "),(_vm.dismissible)?_vm._ssrNode("<span class=\"VhChip-iconRight\">","</span>",[_c('vh-icon',{attrs:{"name":"closeCircle","size":"small"}})],1):_vm._e()],2)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  var __vue_inject_styles__$7 = function (inject) {
    if (!inject) { return }
    inject("data-v-be36b638_0", { source: ".VhChip[data-v-be36b638]{display:inline-flex;align-items:center;user-select:none;color:var(--color--grey700);background-color:var(--color--grey200);text-decoration:none;line-height:1;font-weight:var(--font-weight--normal);outline:0;cursor:pointer;border-radius:var(--VhChip-borderRadius);transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms;-webkit-appearance:none;vertical-align:middle;padding:0 var(--space--medium)}.VhChip[data-v-be36b638]:hover{background-color:var(--color--grey400)}.VhChip[data-v-be36b638]:active,.VhChip[data-v-be36b638]:focus{background-color:var(--color--blue100);color:var(--color--blue700)}.VhChip-iconLeft[data-v-be36b638]{margin:0 2px 0 -12px;border-radius:50%;height:22px}.VhChip--small .VhChip-iconLeft[data-v-be36b638]{margin:0 2px 0 -3px;height:16px}.VhChip-iconRight[data-v-be36b638]:empty{display:none}.VhChip--small .VhChip-iconRight[data-v-be36b638]{margin:0 -3px 0 2px;height:16px}.VhChip:active .VhChip-iconRight[data-v-be36b638]{fill:var(--color--blue700)}.VhChip--hover[data-v-be36b638]{cursor:pointer}.VhChip--medium[data-v-be36b638]{height:var(--space--xLarge);font-size:var(--font-size--medium)}.VhChip--small[data-v-be36b638]{height:var(--space--large);font-size:var(--font-size--xSmall);padding:0 var(--space--small)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$7 = "data-v-be36b638";
  /* module identifier */
  var __vue_module_identifier__$7 = "data-v-be36b638";
  /* functional template */
  var __vue_is_functional_template__$7 = false;

  
  var VhChip = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$6,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
  props: {
    isTop: {
      type: Boolean,
      default: false,
    },
  },
};/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhContainer",class:{ 'VhContainer--isTop': this.isTop }},[_vm._ssrNode("<div class=\"VhContainer-main\">","</div>",[_vm._t("main")],2),_vm._ssrNode(" "),_vm._ssrNode("<aside class=\"VhContainer-aside u-sm-hidden u-md-hidden\">","</aside>",[_vm._t("aside")],2)],2)};
var __vue_staticRenderFns__$8 = [];

  /* style */
  var __vue_inject_styles__$8 = function (inject) {
    if (!inject) { return }
    inject("data-v-5bf28c95_0", { source: ".VhContainer[data-v-5bf28c95]{display:flex;flex-direction:column;margin-left:auto;margin-right:auto;padding-left:var(--space--medium);padding-right:var(--space--medium)}.VhContainer-main[data-v-5bf28c95]{flex:1 1 100%;width:100%}.VhContainer-aside[data-v-5bf28c95] .Ad:first-child{margin-top:0}.VhContainer-aside[data-v-5bf28c95]:empty{display:none}.VhContainer-main+.VhContainer-aside[data-v-5bf28c95]{max-width:var(--aside--width);flex:0 0 var(--aside--width);margin-bottom:var(--space--large)}.VhContainer--isTop[data-v-5bf28c95]{margin-top:var(--space--xLarge)}@media (--viewport--medium){.VhContainer-main[data-v-5bf28c95]{overflow:hidden;margin-bottom:0;display:block}}@media (--viewport--medium-up){.VhContainer[data-v-5bf28c95]{flex-direction:row;width:var(--breakpoint--large);max-width:100%}.VhContainer-main+.VhContainer-aside[data-v-5bf28c95]{margin-left:calc(var(--space--medium) * 2);margin-bottom:0}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$8 = "data-v-5bf28c95";
  /* module identifier */
  var __vue_module_identifier__$8 = "data-v-5bf28c95";
  /* functional template */
  var __vue_is_functional_template__$8 = false;

  
  var VhContainer = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$7,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$8 = {
  name: 'VhFloatingButton',
  props: {
    /**
     * Button will become either "small" or "medium"
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(small|medium)/);
      },
    },
  },
};/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$9 = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({staticClass:"VhFloatingButton",class:( _obj = {}, _obj[("VhFloatingButton--" + _vm.size)] = _vm.size, _obj ),attrs:{"type":"button","to":_vm.nuxt && _vm.href}},'button',_vm.attrs,false),_vm.$listeners),[_vm._t("default")],2)};
var __vue_staticRenderFns__$9 = [];

  /* style */
  var __vue_inject_styles__$9 = function (inject) {
    if (!inject) { return }
    inject("data-v-de87c8a4_0", { source: ".VhFloatingButton[data-v-de87c8a4]{display:flex;align-items:center;justify-content:center;color:var(--VhFloatingButton-color);background:var(--VhFloatingButton-backgroundColor);border-radius:var(--VhFloatingButton-borderRadius);user-select:none;text-decoration:none;outline:0;cursor:pointer;line-height:0;-webkit-appearance:button;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);transition:background-color .1s ease-out .1s;will-change:box-shadow;min-width:0;padding:0}.VhFloatingButton[data-v-de87c8a4]:focus{outline:0}.VhFloatingButton[data-v-de87c8a4]:hover{background-color:var(--VhFloatingButton-backgroundColor-hover)}.VhFloatingButton[data-v-de87c8a4]:active,.VhFloatingButton[data-v-de87c8a4]:focus{background-color:var(--VhFloatingButton-backgroundColor-active)}.VhFloatingButton--small[data-v-de87c8a4]{width:24px;height:24px}.VhFloatingButton--medium[data-v-de87c8a4]{width:48px;height:48px}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$9 = "data-v-de87c8a4";
  /* module identifier */
  var __vue_module_identifier__$9 = "data-v-de87c8a4";
  /* functional template */
  var __vue_is_functional_template__$9 = false;

  
  var VhFloatingButton = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$8,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//

var itemsPerRowValidator = function (value) { return value > 0 && value <= 4; };

var script$9 = {
  name: 'VhGroup',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: function (value) {
        return value.match(/(div|nav)/);
      },
    },
    /**
     * Group will align items within parent container, each column will be overridden only be max-content width
     */
    alignItems: {
      type: String,
      default: null,
      validator: function (value) {
        return value.match(/(start|center|end)/);
      },
    },
    /**
     * Group will have x items per row
     */
    itemsPerRow: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },
    /**
     * Group will have x items per row at mobile breakpoint
     */
    itemsPerRowMobile: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },

    /**
     * Group will have x items per row at tablet breakpoint
     */
    itemsPerRowTablet: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },

    /**
     * Group will have x items per row at desktop breakpoint
     */
    itemsPerRowDesktop: {
      type: [Number, String],
      default: null,
      validator: itemsPerRowValidator,
    },
    /**
     * Group will have x rem spacing between items
     */
    spaceBetweenItems: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    component: function component() {
      return this.as === 'div' || this.as === 'nav' ? this.as : 'div';
    },
    strictItemsPerRow: function strictItemsPerRow() {
      return Number(this.itemsPerRow) >= 5 ? 4 : Number(this.itemsPerRow);
    },
    computedClasses: function computedClasses() {
      var obj;

      return ( obj = {}, obj[("Group-columnsMobile" + (this.itemsPerRowMobile) + "--maxContent")] = this.alignItems && this.itemsPerRowMobile, obj[("Group-columnsTablet" + (this.itemsPerRowTablet) + "--maxContent")] = this.alignItems && this.itemsPerRowTablet, obj[("Group-columnsDesktop" + (this.itemsPerRowDesktop) + "--maxContent")] = this.alignItems && this.itemsPerRowDesktop, obj[("Group-columnsMobile" + (this.itemsPerRowMobile) + "--fraction")] = !this.alignItems && this.itemsPerRowMobile, obj[("Group-columnsTablet" + (this.itemsPerRowTablet) + "--fraction")] = !this.alignItems && this.itemsPerRowTablet, obj[("Group-columnsDesktop" + (this.itemsPerRowDesktop) + "--fraction")] = !this.alignItems && this.itemsPerRowDesktop, obj );
    },
    computedStyles: function computedStyles() {
      return {
        'grid-template-columns': !this.itemsPerRow
          ? ''
          : this.alignItems
          ? ("repeat(" + (this.strictItemsPerRow) + ", max-content)")
          : ("repeat(" + (this.strictItemsPerRow) + ", 1fr)"),
        'justify-content': this.alignItems,
        'grid-gap': ((Number(this.spaceBetweenItems)) + "rem"),
        'justify-items': this.center ? 'center' : 'stretch',
      };
    },
  },
};/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",staticClass:"Group",class:_vm.computedClasses,style:(_vm.computedStyles)},[_vm._t("default")],2)};
var __vue_staticRenderFns__$a = [];

  /* style */
  var __vue_inject_styles__$a = function (inject) {
    if (!inject) { return }
    inject("data-v-2cd927a4_0", { source: ".Group[data-v-2cd927a4]{display:grid}@media (--viewport--small){.Group-columnsMobile1--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(1,max-content)!important}.Group-columnsMobile2--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(2,max-content)!important}.Group-columnsMobile3--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(3,max-content)!important}.Group-columnsMobile4--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(4,max-content)!important}.Group-columnsMobile1--fraction[data-v-2cd927a4]{grid-template-columns:repeat(1,1fr)!important}.Group-columnsMobile2--fraction[data-v-2cd927a4]{grid-template-columns:repeat(2,1fr)!important}.Group-columnsMobile3--fraction[data-v-2cd927a4]{grid-template-columns:repeat(3,1fr)!important}.Group-columnsMobile4--fraction[data-v-2cd927a4]{grid-template-columns:repeat(4,1fr)!important}}@media (--viewport--medium){.Group-columnsTablet1--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(1,max-content)!important}.Group-columnsTablet2--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(2,max-content)!important}.Group-columnsTablet3--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(3,max-content)!important}.Group-columnsTablet4--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(4,max-content)!important}.Group-columnsTablet1--fraction[data-v-2cd927a4]{grid-template-columns:repeat(1,1fr)!important}.Group-columnsTablet2--fraction[data-v-2cd927a4]{grid-template-columns:repeat(2,1fr)!important}.Group-columnsTablet3--fraction[data-v-2cd927a4]{grid-template-columns:repeat(3,1fr)!important}.Group-columnsTablet4--fraction[data-v-2cd927a4]{grid-template-columns:repeat(4,1fr)!important}}@media (--viewport--large){.Group-columnsDesktop1--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(1,max-content)!important}.Group-columnsDesktop2--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(2,max-content)!important}.Group-columnsDesktop3--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(3,max-content)!important}.Group-columnsDesktop4--maxContent[data-v-2cd927a4]{grid-template-columns:repeat(4,max-content)!important}.Group-columnsDesktop1--fraction[data-v-2cd927a4]{grid-template-columns:repeat(1,1fr)!important}.Group-columnsDesktop2--fraction[data-v-2cd927a4]{grid-template-columns:repeat(2,1fr)!important}.Group-columnsDesktop3--fraction[data-v-2cd927a4]{grid-template-columns:repeat(3,1fr)!important}.Group-columnsDesktop4--fraction[data-v-2cd927a4]{grid-template-columns:repeat(4,1fr)!important}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$a = "data-v-2cd927a4";
  /* module identifier */
  var __vue_module_identifier__$a = "data-v-2cd927a4";
  /* functional template */
  var __vue_is_functional_template__$a = false;

  
  var VhGroup = normalizeComponent_1(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$9,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//

var script$a = {
  name: 'VhHeroButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g({staticClass:"VhHeroButton",attrs:{"disabled":_vm.disabled}},_vm.$listeners),[_vm._t("default")],2)};
var __vue_staticRenderFns__$b = [];

  /* style */
  var __vue_inject_styles__$b = function (inject) {
    if (!inject) { return }
    inject("data-v-561939dd_0", { source: ".VhHeroButton[data-v-561939dd]{display:block;height:var(--VhHeroButton-height);padding:0 var(--space--xLarge);user-select:none;text-decoration:none;text-transform:uppercase;line-height:1;font-size:var(--font-size--medium);white-space:nowrap;border-radius:calc(var(--VhHeroButton-height)/ 2);border:var(--VhHeroButton-borderWidth) solid var(--VhHeroButton-borderColor);background-color:var(--VhHeroButton-backgroundColor);outline:0;cursor:pointer;color:var(--VhHeroButton-color);transition:background-color .1s ease-out .1s;text-align:center}.VhHeroButton[data-v-561939dd]:focus{outline:0}.VhHeroButton[data-v-561939dd]:active,.VhHeroButton[data-v-561939dd]:focus,.VhHeroButton[data-v-561939dd]:hover{background-color:var(--VhHeroButton-backgroundColor--hover)}.VhHeroButton[disabled][data-v-561939dd]{opacity:.75;cursor:not-allowed}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$b = "data-v-561939dd";
  /* module identifier */
  var __vue_module_identifier__$b = "data-v-561939dd";
  /* functional template */
  var __vue_is_functional_template__$b = false;

  
  var VhHeroButton = normalizeComponent_1(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$a,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//

var script$b = {
  name: 'VhIcon',
  props: {
    /**
     *  One of these colors: lightGrey, grey, darkGrey, lightBlue, blue, darkBlue, lightRed, red, darkRed, lightOrange, orange, darkOrange, lightYellow, yellow, darkYellow, lightGreen, green, darkGreen, white
     */
    color: {
      type: String,
      default: 'default',
      validator: function (value) {
        return value.match(
          /(default|lightGrey|grey|darkGrey|lightBlue|blue|darkBlue|lightRed|red|darkRed|lightOrange|orange|darkOrange|lightYellow|yellow|darkYellow|lightGreen|green|darkGreen|white)/
        );
      },
    },
    /**
     * valid icon name look at Vehicle History Icons Guide
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * One of these sizes: xSmall, small, medium, large, xLarge
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(xSmall|small|medium|large|xLarge)/);
      },
    },
  },

  computed: {
    computedClasses: function computedClasses() {
      var obj;

      return ( obj = {}, obj[("VhIcon--" + (this.size))] = this.size, obj[("VhIcon--" + (this.color))] = this.color, obj );
    },
  },
};/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"VhIcon",class:_vm.computedClasses,attrs:{"xmlns":"http://www.w3.org/2000/svg","role":"presentation"}},[_vm._ssrNode("<use"+(_vm._ssrAttrs({ 'xlink:href': ("#" + _vm.name) }))+"></use>")])};
var __vue_staticRenderFns__$c = [];

  /* style */
  var __vue_inject_styles__$c = function (inject) {
    if (!inject) { return }
    inject("data-v-eb119806_0", { source: ".VhIcon[data-v-eb119806]{display:block;width:var(--VhIcon-size--medium);height:var(--VhIcon-size--medium);font-size:var(--VhIcon-size--medium);user-select:none;flex-shrink:0}.VhIcon--xSmall[data-v-eb119806]{width:var(--VhIcon-size--xSmall);height:var(--VhIcon-size--xSmall)}.VhIcon--small[data-v-eb119806]{width:var(--VhIcon-size--small);height:var(--VhIcon-size--small)}.VhIcon--medium[data-v-eb119806]{width:var(--VhIcon-size--medium);height:var(--VhIcon-size--medium)}.VhIcon--large[data-v-eb119806]{width:var(--VhIcon-size--large);height:var(--VhIcon-size--large)}.VhIcon--xLarge[data-v-eb119806]{width:var(--VhIcon-size--xLarge);height:var(--VhIcon-size--xLarge)}.VhIcon--default[data-v-eb119806]{fill:currentColor}.VhIcon--lightOrange[data-v-eb119806]{fill:var(--color--orange300)}.VhIcon--orange[data-v-eb119806]{fill:var(--color--orange500)}.VhIcon--darkOrange[data-v-eb119806]{fill:var(--color--orange700)}.VhIcon--lightGrey[data-v-eb119806]{fill:var(--color--grey300)}.VhIcon--grey[data-v-eb119806]{fill:var(--color--grey500)}.VhIcon--darkGrey[data-v-eb119806]{fill:var(--color--grey700)}.VhIcon--lightBlue[data-v-eb119806]{fill:var(--color--blue300)}.VhIcon--blue[data-v-eb119806]{fill:var(--color--blue500)}.VhIcon--darkBlue[data-v-eb119806]{fill:var(--color--blue700)}.VhIcon--lightRed[data-v-eb119806]{fill:var(--color--red300)}.VhIcon--red[data-v-eb119806]{fill:var(--color--red500)}.VhIcon--darkRed[data-v-eb119806]{fill:var(--color--red700)}.VhIcon--lightYellow[data-v-eb119806]{fill:var(--color--yellow300)}.VhIcon--yellow[data-v-eb119806]{fill:var(--color--yellow500)}.VhIcon--darkYellow[data-v-eb119806]{fill:var(--color--yellow700)}.VhIcon--lightGreen[data-v-eb119806]{fill:var(--color--green300)}.VhIcon--green[data-v-eb119806]{fill:var(--color--green500)}.VhIcon--darkGreen[data-v-eb119806]{fill:var(--color--green700)}.VhIcon--white[data-v-eb119806]{fill:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$c = "data-v-eb119806";
  /* module identifier */
  var __vue_module_identifier__$c = "data-v-eb119806";
  /* functional template */
  var __vue_is_functional_template__$c = false;

  
  var VhIcon = normalizeComponent_1(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$b,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$c = {
  name: 'VhImage',
  props: {
    /**
     * Image description
     */
    alt: {
      type: String,
      required: true,
    },
    /**
     * Image will be background image
     */
    backgroundImage: {
      type: Boolean,
      default: false,
    },
    /**
     * Set height
     */
    height: {
      type: [Number, String],
      default: null,
    },
    /**
     * Add 1rem padding around image
     */
    padded: {
      type: Boolean,
      default: false,
    },
    /**
     * Prevents loading of image until visible
     */
    lazy: {
      type: Boolean,
      default: false,
    },
    /**
     * Image source
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * Set width
     */
    width: {
      type: [Number, String],
      default: null,
    },
  },
  data: function data() {
    return {
      calculatedAspectRatio: undefined,
      isActive: false,
    };
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        'VhImage--padded': this.padded,
        'VhImage--setWidth': this.width,
      };
    },
    containerStyles: function containerStyles() {
      return {
        width: this.width && ((this.width) + "px"),
        'max-width': this.width && ((this.width) + "px"),
        height: this.height && ((this.height) + "px"),
        'max-height': this.height && ((this.height) + "px"),
      };
    },
    imageStyles: function imageStyles() {
      return {
        backgroundImage: ("url(" + (this.src) + ")"),
        backgroundPosition: 'center center',
      };
    },
    internalSrc: function internalSrc() {
      if (this.lazy) {
        return this.isActive ? this.src : null;
      } else {
        return this.src;
      }
    },
    sizerStyles: function sizerStyles() {
      if (this.calculatedAspectRatio) {
        var paddingBottomPercentage = (1 / this.calculatedAspectRatio) * 100 + '%';
        return { paddingBottom: paddingBottomPercentage };
      } else { return {}; }
    },
  },
  mounted: function mounted() {
    if (this.backgroundImage) {
      this.initBackgroundImage();
    }
  },
  methods: {
    initBackgroundImage: function initBackgroundImage() {
      this.loadImage();
    },
    loadImage: function loadImage() {
      var image = new Image();
      image.src = this.src;
      this.pollForSize(image);
    },
    pollForSize: function pollForSize(img, timeout) {
      var this$1 = this;
      if ( timeout === void 0 ) timeout = 100;

      var poll = function () {
        var naturalHeight = img.naturalHeight;
        var naturalWidth = img.naturalWidth;

        if (naturalHeight || naturalWidth) {
          this$1.calculatedAspectRatio = naturalWidth / naturalHeight;
        } else {
          setTimeout(poll, timeout);
        }
      };

      poll();
    },
    visibilityChanged: function visibilityChanged(isVisible, entry) {
      if (!this.isActive && isVisible) {
        this.isActive = true;
      }
    },
  },
};/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhImage",class:_vm.computedClasses},[(_vm.backgroundImage)?_vm._ssrNode("<div class=\"VhImage-backgroundContainer\""+(_vm._ssrStyle(null,_vm.containerStyles, null))+">","</div>",[_vm._ssrNode("<div class=\"VhImage-sizer\""+(_vm._ssrStyle(null,_vm.sizerStyles, null))+"></div> <div role=\"img\""+(_vm._ssrAttr("aria-alt",_vm.alt))+" class=\"VhImage-backgroundImage\""+(_vm._ssrStyle(null,_vm.imageStyles, null))+"></div> "),(_vm.lazy)?_c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:(_vm.visibilityChanged),expression:"visibilityChanged"}],staticClass:"VhImage-backgroundImage",style:(_vm.imageStyles),attrs:{"role":"img","aria-alt":_vm.alt}},[]):_vm._e()],2):_vm._ssrNode("<div class=\"VhImage-imageContainer\""+(_vm._ssrStyle(null,_vm.containerStyles, null))+">","</div>",[(_vm.lazy)?_c('img',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:(_vm.visibilityChanged),expression:"visibilityChanged"}],staticClass:"VhImage-image",attrs:{"src":_vm.internalSrc,"alt":_vm.alt}},[]):_vm._ssrNode(("<img"+(_vm._ssrAttr("src",_vm.internalSrc))+(_vm._ssrAttr("alt",_vm.alt))+" class=\"VhImage-image\">"))])])};
var __vue_staticRenderFns__$d = [];

  /* style */
  var __vue_inject_styles__$d = function (inject) {
    if (!inject) { return }
    inject("data-v-3ff20c94_0", { source: ".VhImage[data-v-3ff20c94]{padding:0}.VhImage-backgroundContainer[data-v-3ff20c94]{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.VhImage-sizer[data-v-3ff20c94]{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}.VhImage-backgroundImage[data-v-3ff20c94]{background-repeat:no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%}.VhImage-image[data-v-3ff20c94]{width:100%;max-width:100%;height:auto}.VhImage--setWidth[data-v-3ff20c94]{max-width:max-content}.VhImage--padded[data-v-3ff20c94]{padding:var(--space--medium)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$d = "data-v-3ff20c94";
  /* module identifier */
  var __vue_module_identifier__$d = "data-v-3ff20c94";
  /* functional template */
  var __vue_is_functional_template__$d = false;

  
  var VhImage = normalizeComponent_1(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$c,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//

var script$d = {
  name: 'VhLabel',
  props: {
    /**
     *  One of these colors: grey, green, blue, black
     */
    color: {
      type: String,
      default: 'grey',
      validator: function (value) {
        return value.match(/(grey|green|blue|black)/);
      },
    },
  },
};/* script */
var __vue_script__$d = script$d;

/* template */
var __vue_render__$e = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhLabel",class:( _obj = {}, _obj[("VhLabel--" + _vm.color)] = _vm.color, _obj[("VhLabel--" + _vm.size)] = _vm.size, _obj )},[_vm._t("default")],2)};
var __vue_staticRenderFns__$e = [];

  /* style */
  var __vue_inject_styles__$e = function (inject) {
    if (!inject) { return }
    inject("data-v-64cbf65a_0", { source: ".VhLabel[data-v-64cbf65a]{font-size:var(--font-size--xSmall);line-height:1;height:var(--space--large);align-items:center;border-radius:3px;display:inline-flex;justify-content:center;text-align:center;vertical-align:middle;color:var(--text-color);padding:0 var(--space--small);text-transform:uppercase;font-weight:var(--font-weight--medium)}.VhLabel--grey[data-v-64cbf65a]{color:var(--color--grey700);background-color:var(--color--grey200)}.VhLabel--green[data-v-64cbf65a]{color:var(--color--white);background-color:var(--color--green700)}.VhLabel--blue[data-v-64cbf65a]{color:var(--color--blue700);background-color:var(--color--blue100)}.VhLabel--black[data-v-64cbf65a]{color:var(--color--white);background-color:var(--color--black)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$e = "data-v-64cbf65a";
  /* module identifier */
  var __vue_module_identifier__$e = "data-v-64cbf65a";
  /* functional template */
  var __vue_is_functional_template__$e = false;

  
  var VhLabel = normalizeComponent_1(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$d,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//

var script$e = {
  name: 'VhList',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: function (value) {
        return value.match(/(div|ul|ol|a)/);
      },
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        'VhList--horizontal': this.horizontal,
      };
    },
  },
};/* script */
var __vue_script__$e = script$e;

/* template */
var __vue_render__$f = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.as,{tag:"component",staticClass:"VhList",class:_vm.computedClasses},[_vm._t("default")],2)};
var __vue_staticRenderFns__$f = [];

  /* style */
  var __vue_inject_styles__$f = function (inject) {
    if (!inject) { return }
    inject("data-v-5edbe68d_0", { source: ".VhList[data-v-5edbe68d]{display:flex;flex-direction:column}.VhList--horizontal[data-v-5edbe68d]{flex-direction:row}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$f = "data-v-5edbe68d";
  /* module identifier */
  var __vue_module_identifier__$f = "data-v-5edbe68d";
  /* functional template */
  var __vue_is_functional_template__$f = false;

  
  var VhList = normalizeComponent_1(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$e,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$f = {
  name: 'VhListItem',
  props: {
    as: {
      type: String,
      default: 'div',
      validator: function (value) {
        return value.match(/(div|li|nav)/);
      },
    },
    icon: {
      type: String,
      default: null,
    },
  },
};/* script */
var __vue_script__$f = script$f;

/* template */
var __vue_render__$g = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.as,_vm._g({tag:"component",staticClass:"VhListItem"},_vm.$listeners),[_c('div',{staticClass:"VhListItem-icon"},[(_vm.icon)?_c('vh-icon',{attrs:{"name":_vm.icon}}):_vm._e()],1),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('div',{staticClass:"VhListItem-rightContent"},[_vm._t("right-content")],2)],2)};
var __vue_staticRenderFns__$g = [];

  /* style */
  var __vue_inject_styles__$g = function (inject) {
    if (!inject) { return }
    inject("data-v-10da5748_0", { source: ".VhListItem[data-v-10da5748]{display:flex;align-items:center}.VhListItem-icon[data-v-10da5748]{margin-right:var(--space--small)}.VhListItem-rightContent[data-v-10da5748]{margin-left:auto}.VhListItem-icon[data-v-10da5748]:empty,.VhListItem-rightContent[data-v-10da5748]:empty{display:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$g = "data-v-10da5748";
  /* module identifier */
  var __vue_module_identifier__$g = "data-v-10da5748";
  /* functional template */
  var __vue_is_functional_template__$g = false;

  
  var VhListItem = normalizeComponent_1(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$f,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$g = {
  name: 'VhLogo',
  props: {
    /**
     *  Width: Number no units
     */
    width: {
      type: Number,
      default: 132,
    },
  },
};/* script */
var __vue_script__$g = script$g;

/* template */
var __vue_render__$h = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"VhLogo",attrs:{"width":_vm.width,"version":"1.1","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 148 28","xml:space":"preserve","role":"presentation"}},[_vm._ssrNode("<path d=\"M7.6,4.5c2.7,4.8,5.3,9.6,8,14.5l0.8-1.4h4.9l-4.8,8.7l-0.9,1.6L0.2,0h11.9L9.6,4.5H7.6z M15.8,0h2.1l-2.5,4.5\n\th-2.1L15.8,0z M12.9,0h2l-2.5,4.5h-2L12.9,0z\"></path> <path d=\"M21.7,4.7l-0.7,1.2h1.7l0.1-0.1l0.7-1.3h0l1.8-3.3l0-0.1l0.6-1H31l-0.6,1h0l-3,5.5L22,16.3h-0.7h-4.3l2.7-4.9\n\tl0,0l0-0.1l0,0l0-0.1l0.1-0.1l0,0l0.4-0.7h-1.7l-0.8,1.5h0L15.5,16l-2.3-4.2v0L13,11.6c1.9-3.4,4.6-8.3,6.4-11.6h4.9L21.7,4.7z\"></path> <path d=\"M47.7,7.1l-4.5,9.3h-1.8l-4.6-9.3h2.3l3.1,6.4l3.1-6.4H47.7z M65.5,9.3h-7.4v1.4H65v2.2h-6.9v1.4h7.4v2.2H56\n\tV7.1h9.5V9.3z M83.6,16.4h-2.1v-3.6h-5.3v3.6h-2.1V7.1h2.1v3.6h5.3V7.1h2.1V16.4z M94.2,16.4h-2.1V7.1h2.1V16.4z M112.6,16.4h-6.9\n\tc-0.8,0-1.5-0.3-2.1-0.8c-0.6-0.6-0.8-1.3-0.8-2.1v-3.4c0-0.8,0.3-1.5,0.8-2.1c0.6-0.6,1.3-0.8,2.1-0.8h6.9v2.2h-6.9\n\tc-0.6,0-0.8,0.3-0.8,0.8v3.4c0,0.5,0.3,0.8,0.8,0.8h6.9V16.4z M130.1,16.4h-8.9V7.1h2.1v7.1h6.8V16.4z M148.2,9.3h-7.4v1.4h6.9v2.2\n\th-6.9v1.4h7.4v2.2h-9.5V7.1h9.5V9.3z\"></path> <path d=\"M41.4,27.2v-6.3h1.2v2.5H45v-2.5h1.2v6.3H45v-2.7h-2.4v2.7H41.4z M52.2,20.9h1.2v6.3h-1.2V20.9z M59.1,25.2\n\tl1.2-0.1c0.1,0.4,0.2,0.7,0.4,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.3-0.4,0.3-0.6c0-0.1,0-0.3-0.1-0.4\n\tc-0.1-0.1-0.2-0.2-0.4-0.3c-0.1-0.1-0.5-0.1-1-0.3c-0.6-0.2-1.1-0.4-1.4-0.6c-0.4-0.3-0.6-0.8-0.6-1.3c0-0.3,0.1-0.6,0.3-0.9\n\tc0.2-0.3,0.4-0.5,0.7-0.6c0.3-0.1,0.7-0.2,1.2-0.2c0.8,0,1.3,0.2,1.7,0.5c0.4,0.3,0.6,0.8,0.6,1.4l-1.2,0c-0.1-0.3-0.2-0.6-0.3-0.7\n\tc-0.2-0.1-0.4-0.2-0.8-0.2c-0.3,0-0.6,0.1-0.8,0.2c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.1,0.1,0.3,0.2,0.4c0.2,0.1,0.5,0.3,1.1,0.4\n\tc0.6,0.1,1,0.3,1.3,0.5c0.3,0.2,0.5,0.4,0.7,0.6c0.2,0.3,0.2,0.6,0.2,1c0,0.4-0.1,0.7-0.3,1c-0.2,0.3-0.5,0.5-0.8,0.7\n\tc-0.3,0.2-0.8,0.2-1.3,0.2c-0.8,0-1.3-0.2-1.8-0.5C59.4,26.4,59.2,25.9,59.1,25.2 M71.2,27.2V22h-1.8v-1.1h4.8V22h-1.8v5.2H71.2z\n\t M79.3,24.1c0-0.6,0.1-1.2,0.3-1.6c0.1-0.3,0.3-0.6,0.6-0.9c0.2-0.3,0.5-0.4,0.8-0.6c0.4-0.2,0.8-0.2,1.3-0.2c0.9,0,1.6,0.3,2.1,0.9\n\tc0.5,0.6,0.8,1.4,0.8,2.4c0,1-0.3,1.8-0.8,2.4c-0.5,0.6-1.2,0.9-2.1,0.9c-0.9,0-1.6-0.3-2.1-0.9C79.6,25.9,79.3,25.1,79.3,24.1\n\t M80.6,24c0,0.7,0.2,1.2,0.5,1.6c0.3,0.4,0.7,0.5,1.2,0.5c0.5,0,0.9-0.2,1.2-0.5c0.3-0.4,0.5-0.9,0.5-1.6c0-0.7-0.2-1.3-0.5-1.6\n\tc-0.3-0.4-0.7-0.5-1.2-0.5c-0.5,0-0.9,0.2-1.2,0.5C80.7,22.8,80.6,23.3,80.6,24 M90.9,27.2v-6.3h2.6c0.6,0,1.1,0.1,1.4,0.2\n\tc0.3,0.1,0.5,0.3,0.7,0.6c0.2,0.3,0.3,0.6,0.3,1c0,0.5-0.1,0.9-0.4,1.2c-0.3,0.3-0.7,0.5-1.2,0.6c0.3,0.2,0.5,0.3,0.6,0.5\n\tc0.2,0.2,0.4,0.5,0.7,1l0.7,1.2h-1.5L94,25.8c-0.3-0.5-0.5-0.8-0.6-0.9c-0.1-0.1-0.2-0.2-0.4-0.3c-0.1,0-0.3-0.1-0.6-0.1h-0.2v2.6\n\tH90.9z M92.1,23.6H93c0.6,0,0.9,0,1.1-0.1c0.1-0.1,0.3-0.1,0.3-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2-0.1-0.4-0.2-0.5\n\tC94.3,22.1,94.2,22,94,22c-0.1,0-0.4,0-0.9,0h-0.9V23.6z M103,27.2v-2.6l-2.2-3.6h1.4l1.4,2.5l1.4-2.5h1.4l-2.2,3.6v2.6H103z\"></path>")])};
var __vue_staticRenderFns__$h = [];

  /* style */
  var __vue_inject_styles__$h = function (inject) {
    if (!inject) { return }
    inject("data-v-4ed4228a_0", { source: ".VhLogo[data-v-4ed4228a]{height:auto;display:block;flex:0 0 auto;fill:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$h = "data-v-4ed4228a";
  /* module identifier */
  var __vue_module_identifier__$h = "data-v-4ed4228a";
  /* functional template */
  var __vue_is_functional_template__$h = false;

  
  var VhLogo = normalizeComponent_1(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$g,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$h = {
  name: 'VhLogoMini',
  props: {
    /**
     *  Width: Number no units
     */
    width: {
      type: Number,
      default: 28,
    },
  },
};/* script */
var __vue_script__$h = script$h;

/* template */
var __vue_render__$i = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"VhLogo",attrs:{"width":_vm.width,"version":"1.1","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 28","xml:space":"preserve","role":"presentation"}},[_vm._ssrNode("<path d=\"M7.6,4.5c2.7,4.9,5.4,9.7,8.1,14.6l0.8-1.4h5l-4.8,8.7L15.7,28L0.2,0h11.9L9.7,4.5H7.6z M15.9,0H18l-2.5,4.5\n\th-2.1L15.9,0z M13,0H15l-2.5,4.5h-2.1L13,0z\"></path> <path d=\"M21.9,4.7l-0.7,1.2h1.7L23,5.8l0.7-1.3h0l1.9-3.3l0-0.1L26.2,0h5l-0.6,1.1h0l-3.1,5.5l-5.4,9.8h-0.7h-4.3l2.7-5\n\tl0,0l0-0.1l0,0l0-0.1l0.1-0.1l0,0l0.4-0.7h-1.7l-0.8,1.5h0l-2.3,4.2l-2.3-4.2v0l-0.1-0.2C15,8.2,17.7,3.3,19.5,0h5L21.9,4.7z\"></path>")])};
var __vue_staticRenderFns__$i = [];

  /* style */
  var __vue_inject_styles__$i = function (inject) {
    if (!inject) { return }
    inject("data-v-5a0a1250_0", { source: ".VhLogo[data-v-5a0a1250]{height:auto;display:block;flex:0 0 auto}.VhLogo>path[data-v-5a0a1250]{fill:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$i = "data-v-5a0a1250";
  /* module identifier */
  var __vue_module_identifier__$i = "data-v-5a0a1250";
  /* functional template */
  var __vue_is_functional_template__$i = false;

  
  var VhLogoMini = normalizeComponent_1(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$h,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//

var script$i = {
  name: 'VhKbbLogo',
};/* script */
var __vue_script__$i = script$i;

/* template */
var __vue_render__$j = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img src=\"https://www.vehiclehistory.com/images/logo_kbb_vert_110x201.png\" alt=\"KBB Logo\" class=\"KbbLogo\">")])};
var __vue_staticRenderFns__$j = [];

  /* style */
  var __vue_inject_styles__$j = function (inject) {
    if (!inject) { return }
    inject("data-v-b7ac3378_0", { source: ".KbbLogo[data-v-b7ac3378]{width:58px;height:auto}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$j = "data-v-b7ac3378";
  /* module identifier */
  var __vue_module_identifier__$j = "data-v-b7ac3378";
  /* functional template */
  var __vue_is_functional_template__$j = false;

  
  var VhKbbLogo = normalizeComponent_1(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$i,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$j = {
  name: 'VhIihsLogo',
};/* script */
var __vue_script__$j = script$j;

/* template */
var __vue_render__$k = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"IihSLogo",attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","x":"0px","y":"0px","viewBox":"0 0 750 374.76","xml:space":"preserve","role":"presentation"}},[_vm._ssrNode("<path d=\"M335.13 219.2h57.58v148.49h-57.58zM335.13 7.07h57.58V139.4h-57.58z\" class=\"path1\"></path> <path d=\"M0 7.07h93.94v360.62H0zM116.66 7.07h93.94v360.62h-93.94zM241.19 7.07h93.94V139.4h57.57V7.07h93.94v360.62H392.7V219.2h-57.57v148.49h-93.94zM652.52 111.11v-8.58c0-21.22-8.58-38.89-26.77-38.89-20.2 0-29.29 15.66-29.29 31.82 0 71.21 153.54 36.36 153.54 168.18 0 76.77-45 111.12-127.78 111.12C544.44 374.76 501 348 501 273.24v-12.63h90.92v8.59c0 30.81 12.62 41.92 30.8 41.92 19.2 0 30.31-15.15 30.31-34.85 0-71.21-147.48-35.86-147.48-163.64C505.55 39.9 544.44 0 623.73 0 705.55 0 740.4 33.84 740.4 111.11z\" class=\"path2\"></path>")])};
var __vue_staticRenderFns__$k = [];

  /* style */
  var __vue_inject_styles__$k = function (inject) {
    if (!inject) { return }
    inject("data-v-5d0a1b86_0", { source: ".IihSLogo[data-v-5d0a1b86]{width:132px;height:auto;display:block}.IihsLogo .path1[data-v-5d0a1b86]{fill:#ffcc32}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$k = "data-v-5d0a1b86";
  /* module identifier */
  var __vue_module_identifier__$k = "data-v-5d0a1b86";
  /* functional template */
  var __vue_is_functional_template__$k = false;

  
  var VhIihsLogo = normalizeComponent_1(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$j,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//

var script$k = {
  name: 'VhNhtsaLogo',
};/* script */
var __vue_script__$k = script$k;

/* template */
var __vue_render__$l = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img src=\"https://www.vehiclehistory.com/images/nhtsa.png\" alt=\"NHTSA Logo\" class=\"NhtsaLogo\">")])};
var __vue_staticRenderFns__$l = [];

  /* style */
  var __vue_inject_styles__$l = function (inject) {
    if (!inject) { return }
    inject("data-v-63778622_0", { source: ".NhtsaLogo[data-v-63778622]{width:140px;height:auto}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$l = "data-v-63778622";
  /* module identifier */
  var __vue_module_identifier__$l = "data-v-63778622";
  /* functional template */
  var __vue_is_functional_template__$l = false;

  
  var VhNhtsaLogo = normalizeComponent_1(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$k,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//

var script$l = {
  name: 'VhJdpowerLogo',
};/* script */
var __vue_script__$l = script$l;

/* template */
var __vue_render__$m = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img src=\"https://www.vehiclehistory.com/images/jd-power.png\" alt=\"J.D. Power Logo\" class=\"JdpowerLogo\">")])};
var __vue_staticRenderFns__$m = [];

  /* style */
  var __vue_inject_styles__$m = function (inject) {
    if (!inject) { return }
    inject("data-v-e1694172_0", { source: ".JdpowerLogo[data-v-e1694172]{width:140px;height:auto;display:block}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$m = "data-v-e1694172";
  /* module identifier */
  var __vue_module_identifier__$m = "data-v-e1694172";
  /* functional template */
  var __vue_is_functional_template__$m = false;

  
  var VhJdpowerLogo = normalizeComponent_1(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$l,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//

var script$m = {
  name: 'VhModule',
  /**
   *  One of these size: small, medium, large
   */
  props: {
    anchorId: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
};/* script */
var __vue_script__$m = script$m;

/* template */
var __vue_render__$n = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhModule",class:( _obj = {}, _obj[("VhModule--" + (this.size))] = this.size, _obj['VhModule--anchor'] =  this.anchorId, _obj ),attrs:{"id":this.anchorId}},[_vm._t("default")],2)};
var __vue_staticRenderFns__$n = [];

  /* style */
  var __vue_inject_styles__$n = function (inject) {
    if (!inject) { return }
    inject("data-v-0093623d_0", { source: ".VhModule[data-v-0093623d]:first-child{margin-top:0}.VhModule--small[data-v-0093623d]{margin-top:var(--VhModule--mobile-margin-small);margin-bottom:var(--VhModule--mobile-margin-small)}.VhModule--medium[data-v-0093623d]{margin-top:var(--VhModule--mobile-margin-medium);margin-bottom:var(--VhModule--mobile-margin-medium)}.VhModule--large[data-v-0093623d]{margin-top:var(--VhModule--mobile-margin-large);margin-bottom:var(--VhModule--mobile-margin-large)}.VhModule--small.VhModule--anchor[data-v-0093623d]{padding-top:calc(var(--space--medium) + var(--Header--mobile-height));margin-top:calc(var(--VhModule--mobile-margin-small) * -1)}.VhModule--medium.VhModule--anchor[data-v-0093623d]{padding-top:calc(var(--space--medium) + var(--Header--mobile-height));margin-top:calc(var(--VhModule--mobile-margin-medium) * -1)}.VhModule--large.VhModule--anchor[data-v-0093623d]{padding-top:calc(var(--space--medium) + var(--Header--mobile-height));margin-top:calc(var(--VhModule--mobile-margin-large) * -1)}@media (--viewport--medium-up){.VhModule--small[data-v-0093623d]{margin-top:var(--VhModule--desktop-margin-small);margin-bottom:var(--VhModule--desktop-margin-small)}.VhModule--medium[data-v-0093623d]{margin-top:var(--VhModule--desktop-margin-medium);margin-bottom:var(--VhModule--desktop-margin-medium)}.VhModule--large[data-v-0093623d]{margin-top:var(--VhModule--desktop-margin-large);margin-bottom:var(--VhModule--desktop-margin-large)}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$n = "data-v-0093623d";
  /* module identifier */
  var __vue_module_identifier__$n = "data-v-0093623d";
  /* functional template */
  var __vue_is_functional_template__$n = false;

  
  var VhModule = normalizeComponent_1(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$m,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$n = {
  name: 'VhNavigationButton',
  props: {
    /**
     * Button will expand to 100% width of container
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be current, (current page)
     */
    current: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be static, (no action)
     */
    isStatic: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will become a clickable hyperlink
     */
    href: {
      type: [String, Object],
      default: null,
    },
    /**
     * Button will become a nuxt-link using href as "to"
     */
    nuxt: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will have type attribute of either "button", "submit", or "reset"
     */
    type: {
      type: String,
      default: 'button',
      validator: function (value) {
        return value.match(/(button|submit|reset)/);
      },
    },
  },
};/* script */
var __vue_script__$n = script$n;

/* template */
var __vue_render__$o = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.nuxt && _vm.href ? 'nuxt-link' : _vm.href ? 'a' : 'button',_vm._g({tag:"component",staticClass:"VhNavigationButton",class:{
    'VhNavigationButton--block': _vm.block,
    'VhNavigationButton--disabled': _vm.disabled,
    'VhNavigationButton--current': _vm.current,
    'VhNavigationButton--static': _vm.isStatic,
  },attrs:{"href":!_vm.nuxt && _vm.href ? _vm.href : null,"to":_vm.nuxt && _vm.href,"type":_vm.nuxt && _vm.href ? _vm.type : null}},_vm.$listeners),[_c('span',{staticClass:"VhNavigationButton-iconLeft"},[_vm._t("icon-left")],2),_vm._v(" "),_c('span',{staticClass:"VhNavigationButton-label"},[_vm._t("default")],2),_vm._v(" "),(!_vm.isStatic && !_vm.current)?_c('span',{staticClass:"VhNavigationButton-iconRight"},[_c('vh-icon',{attrs:{"name":"chevronRight","size":"medium","color":"darkGrey"}})],1):_vm._e()])};
var __vue_staticRenderFns__$o = [];

  /* style */
  var __vue_inject_styles__$o = function (inject) {
    if (!inject) { return }
    inject("data-v-3f542b13_0", { source: ".VhNavigationButton[data-v-3f542b13]{--VhNavigationButton-borderColor:var(--color--grey300);--VhNavigationButton-borderWidth:1px;--VhNavigationButton-borderRadius:0;--VhNavigationButton-color:var(--color--blue700);--VhNavigationButton--disabled-opacity:0.4;display:flex;align-items:center;user-select:none;height:3.75rem;min-width:15rem;border:var(--VhNavigationButton-borderWidth) solid var(--VhNavigationButton-borderColor);color:var(--VhNavigationButton-color);text-decoration:none;text-transform:none;border-radius:var(--VhNavigationButton-borderRadius);font-size:var(--font-size--medium);font-weight:var(--font-weight--normal);outline:0;cursor:pointer;line-height:1;-webkit-appearance:none;padding:0 var(--space--medium);background:0 0;transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VhNavigationButton[data-v-3f542b13]:hover{background-color:var(--color--grey100);border-color:var(--color--grey300)}.VhNavigationButton[data-v-3f542b13]:active,.VhNavigationButton[data-v-3f542b13]:focus{background-color:var(--color--grey200);border-color:var(--color--grey300)}.VhNavigationButton--disabled[data-v-3f542b13]{pointer-events:none;color:var(--text-color);opacity:var(--VhNavigationButton--disabled-opacity)}.VhNavigationButton--current[data-v-3f542b13]{pointer-events:none;color:var(--text-color);background-color:var(--color--grey100);border-color:var(--color--grey300);font-weight:var(--font-weight--medium)}.VhNavigationButton--static[data-v-3f542b13]{pointer-events:none;color:var(--text-color);background-color:var(--color--white);border-color:var(--color--grey300)}.VhNavigationButton-label[data-v-3f542b13]{flex:1 1 auto;margin-right:auto;text-align:left}.VhNavigationButton-iconLeft[data-v-3f542b13]{margin-right:var(--space--medium)}.VhNavigationButton-iconLeft[data-v-3f542b13]:empty{display:none}.VhNavigationButton-iconRight[data-v-3f542b13]{flex:0 0 32px;margin-right:calc(var(--space--small) * -1)}.VhNavigationButton--block[data-v-3f542b13]{width:100%;max-width:100%;justify-content:center}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$o = "data-v-3f542b13";
  /* module identifier */
  var __vue_module_identifier__$o = "data-v-3f542b13";
  /* functional template */
  var __vue_is_functional_template__$o = false;

  
  var VhNavigationButton = normalizeComponent_1(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$n,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$o = {
  name: 'VhNotification',
  props: {
    /**
     * Notification Type: info, warning, success, error.
     */
    type: {
      type: String,
      default: 'info',
      validator: function (value) {
        return value.match(/(info|warning|success|error)/);
      },
    },
    /**
     * Dismissible Notification: true, false
     */
    dismissible: {
      type: Boolean,
      default: false,
    },
    /**
     * VhNotification is active
     */
    value: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    computedClasses: function computedClasses() {
      return {
        'VhNotification--info': this.type === 'info',
        'VhNotification--warning': this.type === 'warning',
        'VhNotification--success': this.type === 'success',
        'VhNotification--error': this.type === 'error',
      };
    },

    computedIconColor: function computedIconColor() {
      var color;
      switch (this.type) {
        case 'info':
          color = 'lightBlue';
          break;

        case 'warning':
          color = 'yellow';
          break;

        case 'success':
          color = 'green';
          break;

        case 'error':
          color = 'red';
          break;
        default:
          console.warn("Notification type doesn't exist " + this.type + '.');
      }

      return color;
    },
  },
  methods: {
    onClick: function onClick() {
      /* TOTO: please verify this implementation */
      this.$emit('remove', this);
    },
  },
};/* script */
var __vue_script__$o = script$o;

/* template */
var __vue_render__$p = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhNotification",class:_vm.computedClasses},[_c('vh-icon',{staticClass:"VhNotification-svg",attrs:{"name":"error","color":_vm.computedIconColor,"size":"large"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"VhNotification-message\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),(_vm.dismissible)?_vm._ssrNode("<button class=\"VhNotification-closeButton\">","</button>",[_c('vh-icon',{attrs:{"name":"close","size":"medium","color":_vm.computedIconColor}})],1):_vm._e()],2)};
var __vue_staticRenderFns__$p = [];

  /* style */
  var __vue_inject_styles__$p = function (inject) {
    if (!inject) { return }
    inject("data-v-334b95e8_0", { source: ".VhNotification[data-v-334b95e8]{position:relative;display:flex;padding:var(--space--medium) 0;color:var(--text-color);align-items:center}.VhNotification-svg[data-v-334b95e8]{width:72px;flex:0 0 72px}.VhNotification-message[data-v-334b95e8]{flex:1 1 auto;margin-right:64px}.VhNotification-closeButton[data-v-334b95e8]{position:absolute;right:8px;top:8px;border:none;width:44px;height:44px;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer}.VhNotification-closeButton[data-v-334b95e8]:focus{outline:0}.VhNotification--info[data-v-334b95e8]{background-color:color-mod(var(--color--blue200) a(50%));color:var(--color--blue700)}.VhNotification--success[data-v-334b95e8]{background-color:color-mod(var(--color--green300) a(50%));color:var(--color--green700)}.VhNotification--warning[data-v-334b95e8]{background-color:color-mod(var(--color--yellow300) a(50%));color:var(--color--yellow700)}.VhNotification--error[data-v-334b95e8]{background-color:color-mod(var(--color--red300) a(50%));color:var(--color--red700)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$p = "data-v-334b95e8";
  /* module identifier */
  var __vue_module_identifier__$p = "data-v-334b95e8";
  /* functional template */
  var __vue_is_functional_template__$p = false;

  
  var VhNotification = normalizeComponent_1(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$o,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$p = {
  name: 'VhProgressBar',
  props: {
    /**
     *  One of these colors: orange, green, blue
     */
    color: {
      type: String,
      default: 'orange',
      validator: function (value) {
        return value.match(/(green|yellow|red|orange|blue)/);
      },
    },
    /**
     * One of these sizes: small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(small|medium|large)/);
      },
    },
    /**
     * value number from 0 to 100
     */
    value: {
      type: [Number, String],
      default: 0,
    },
  },

  computed: {
    computedSize: function computedSize() {
      var obj;

      return ( obj = {}, obj[("Progress--" + (this.size))] = this.size, obj );
    },
    computedColor: function computedColor() {
      var obj;

      return ( obj = {}, obj[("Progress-bar--" + (this.color))] = this.color, obj );
    },

    computedWidth: function computedWidth() {
      return ((this.normalizedValue) + "%");
    },

    normalizedValue: function normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return parseFloat(this.value);
    },
  },
};/* script */
var __vue_script__$p = script$p;

/* template */
var __vue_render__$q = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Progress",class:_vm.computedSize,attrs:{"role":"presentation"}},[_vm._ssrNode("<div class=\"Progress-track\"><div"+(_vm._ssrClass("Progress-bar",_vm.computedColor))+(_vm._ssrStyle(null,{ width: _vm.computedWidth }, null))+"></div></div>")])};
var __vue_staticRenderFns__$q = [];

  /* style */
  var __vue_inject_styles__$q = function (inject) {
    if (!inject) { return }
    inject("data-v-7b6cc5dc_0", { source: ".Progress[data-v-7b6cc5dc]{display:block;height:var(--space--large)}.Progress-track[data-v-7b6cc5dc]{background-color:var(--color--grey200);height:100%;width:100%}.Progress-bar[data-v-7b6cc5dc]{height:100%;width:0}.Progress--small[data-v-7b6cc5dc]{height:var(--space--small)}.Progress--medium[data-v-7b6cc5dc]{height:var(--space--medium)}.Progress--large[data-v-7b6cc5dc]{height:var(--space--large)}.Progress-bar--orange[data-v-7b6cc5dc]{background-color:var(--color--orange500)}.Progress-bar--yellow[data-v-7b6cc5dc]{background-color:var(--color--yellow500)}.Progress-bar--red[data-v-7b6cc5dc]{background-color:var(--color--red500)}.Progress-bar--green[data-v-7b6cc5dc]{background-color:var(--color--green700)}.Progress-bar--blue[data-v-7b6cc5dc]{background-color:var(--color--blue500)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$q = "data-v-7b6cc5dc";
  /* module identifier */
  var __vue_module_identifier__$q = "data-v-7b6cc5dc";
  /* functional template */
  var __vue_is_functional_template__$q = false;

  
  var VhProgressBar = normalizeComponent_1(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$p,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
Example:
Radius = 85
Percentage to fill = 25
π = 3.14159
Circumference = 2 * π * Radius = 534
Stroke length = (Circumference / 100) * Percentage to fill
*/
var script$q = {
  name: 'VhProgressDonut',
  props: {
    /**
     *  One of these colors: orange, green, blue
     */
    color: {
      type: String,
      default: 'green',
      validator: function (value) {
        return value.match(/(green|orange|blue)/);
      },
    },
    /**
     * One of these sizes: small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(small|medium|large)/);
      },
    },
    /**
     * value number from 0 to 100
     */
    value: {
      type: [Number, String],
      default: 0,
    },
    /**
     * label: 4.5 etc.
     */
    label: {
      type: String,
      default: '',
    },
  },

  data: function data() {
    return {
      radius: 70,
      Pi: 3.14159,
    };
  },
  computed: {
    computedSize: function computedSize() {
      var obj;

      return ( obj = {}, obj[("Progress--" + (this.size))] = this.size, obj );
    },

    computedColor: function computedColor() {
      var obj;

      return ( obj = {}, obj[("Progress-bar--" + (this.color))] = this.color, obj );
    },

    circumference: function circumference() {
      return 2 * this.Pi * this.radius;
    },

    strokeLength: function strokeLength() {
      return (this.circumference / 100) * this.normalizedValue;
    },

    strokeDasharray: function strokeDasharray() {
      return ((this.strokeLength) + ", " + (this.circumference));
    },

    computedWidth: function computedWidth() {
      return ((this.normalizedValue) + "%");
    },

    normalizedValue: function normalizedValue() {
      if (this.value < 0) {
        return 0;
      }
      if (this.value > 100) {
        return 100;
      }
      return parseFloat(this.value);
    },
  },
};/* script */
var __vue_script__$q = script$q;

/* template */
var __vue_render__$r = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"Progress",class:_vm.computedSize,attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 170 170"}},[_vm._ssrNode("<g transform=\"rotate(90 85 85)\"><circle stroke-width=\"22\" fill=\"none\" cx=\"85\" cy=\"85\""+(_vm._ssrAttr("r",_vm.radius))+" class=\"Progress-track\"></circle></g> <g transform=\"rotate(90 85 85)\"><circle stroke-width=\"22\""+(_vm._ssrAttr("stroke-dasharray",_vm.strokeDasharray))+" stroke-linecap=\"butt\" fill=\"none\" cx=\"85\" cy=\"85\""+(_vm._ssrAttr("r",_vm.radius))+(_vm._ssrClass("Progress-bar",_vm.computedColor))+"></circle></g> <text x=\"86\" y=\"106\" text-anchor=\"middle\" class=\"Progress-label\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.label)+"\n  ")+"</text>")])};
var __vue_staticRenderFns__$r = [];

  /* style */
  var __vue_inject_styles__$r = function (inject) {
    if (!inject) { return }
    inject("data-v-5941cdfa_0", { source: ".Progress[data-v-5941cdfa]{display:inline-block;font-weight:var(--font-weight--normal)}.Progress-track[data-v-5941cdfa]{stroke:var(--color--grey200)}.Progress-bar[data-v-5941cdfa]{height:100%;width:0}.Progress-label[data-v-5941cdfa]{fill:var(--text-color);font-size:60px}.Progress--small[data-v-5941cdfa]{height:36px;width:36px}.Progress--medium[data-v-5941cdfa]{height:46px;width:46px}.Progress--large[data-v-5941cdfa]{height:64px;width:64px}.Progress-bar--green[data-v-5941cdfa]{stroke:var(--color--green700)}.Progress-bar--orange[data-v-5941cdfa]{stroke:var(--color--orange500)}.Progress-bar--blue[data-v-5941cdfa]{stroke:var(--color--blue500)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$r = "data-v-5941cdfa";
  /* module identifier */
  var __vue_module_identifier__$r = "data-v-5941cdfa";
  /* functional template */
  var __vue_is_functional_template__$r = false;

  
  var VhProgressDonut = normalizeComponent_1(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$r,
    __vue_script__$q,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$r = {
  name: 'VhRating',
  props: {
    /**
     * Rating component supports the same colors any icon supports
     */
    color: {
      type: String,
      default: 'orange',
    },
    /**
     * Rating provides visual feedback when hovering over icons
     */
    hover: {
      type: Boolean,
      default: false,
    },
    /**
     * Rating component will have half increments
     */
    halfIncrements: {
      type: Boolean,
      default: false,
    },
    /**
     * Rating component will display either stars or cirles
     */
    icon: {
      type: String,
      default: 'star',
      validator: function (value) {
        return value.match(/(star|circle)/);
      },
    },
    /**
     * Rating will be read only with no events
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Rating takes either xSmall, small, medium, or large size
     */
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return value.match(/(xSmall|small|medium|large)/);
      },
    },
    /**
     * Rating takes a value from 1 to 5
     */
    value: {
      type: [Number, String],
      default: 0,
      validator: function (value) {
        return value <= 5;
      },
    },
  },
  data: function data() {
    return {
      hoverIndex: -1,
      internalValue: Number(this.value),
    };
  },
  computed: {
    computedClasses: function computedClasses() {
      return {
        'VhRating--readonly': this.readonly,
      };
    },
    isHovering: function isHovering() {
      return this.hover && this.hoverIndex >= 0;
    },
  },
  watch: {
    internalValue: function internalValue(val) {
      if (val !== Number(this.value)) {
        /**
         * input event passes a number representing the rating the user selected
         *
         * @event input
         * @type {Number}
         */
        this.$emit('input', val);
      }
    },
    value: function value(val) {
      this.internalValue = val;
    },
  },
  methods: {
    individualIconProps: function individualIconProps(i) {
      var PROPS_BANK = {
        circle: {
          empty: { name: 'circle', color: 'grey' },
          half: { name: 'circle', color: this.color },
          full: { name: 'circle', color: this.color },
        },
        star: {
          empty: { name: 'starOutline', color: this.color },
          half: { name: 'starHalf', color: this.color },
          full: { name: 'star', color: this.color },
        },
      };

      if (this.isHovering) {
        var full = Math.floor(this.hoverIndex) >= i;
        return full ? PROPS_BANK[this.icon].full : PROPS_BANK[this.icon].empty;
      }

      if (i <= Math.floor(this.internalValue)) {
        return PROPS_BANK[this.icon].full;
      }

      if (i >= Math.floor(this.internalValue)) {
        if (this.internalValue % 1 > 0.5 && Math.ceil(this.internalValue) === i) {
          return this.halfIncrements ? PROPS_BANK[this.icon].half : PROPS_BANK[this.icon].empty;
        } else {
          return PROPS_BANK[this.icon].empty;
        }
      }
    },
    handleIconClick: function handleIconClick(i) {
      if (!this.readonly) { this.internalValue = i; }
    },
    handleIconHoverEnter: function handleIconHoverEnter(i) {
      this.hoverIndex = i;
    },
    handleIconHoverLeave: function handleIconHoverLeave(i) {
      this.hoverIndex = -1;
    },
  },
};/* script */
var __vue_script__$r = script$r;

/* template */
var __vue_render__$s = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhRating",class:_vm.computedClasses},_vm._l((5),function(i){return _vm._ssrNode("<div class=\"VhRating-iconContainer\">","</div>",[_c('vh-icon',_vm._b({key:i,attrs:{"size":_vm.size}},'vh-icon',_vm.individualIconProps(i),false))],1)}),0)};
var __vue_staticRenderFns__$s = [];

  /* style */
  var __vue_inject_styles__$s = function (inject) {
    if (!inject) { return }
    inject("data-v-97ea342c_0", { source: ".VhRating[data-v-97ea342c]{display:flex}.VhRating-iconContainer[data-v-97ea342c]{cursor:pointer}.VhRating--readonly[data-v-97ea342c]{pointer-events:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$s = "data-v-97ea342c";
  /* module identifier */
  var __vue_module_identifier__$s = "data-v-97ea342c";
  /* functional template */
  var __vue_is_functional_template__$s = false;

  
  var VhRating = normalizeComponent_1(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$s,
    __vue_script__$r,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$s = {
  name: 'VhTooltip',
  computed: {
    hasChildren: function hasChildren() {
      return Boolean(this.$slots.default);
    },
    mode: function mode() {
      if (this.hasChildren) {
        return 'click';
      } else {
        return 'manual';
      }
    },
  },
};/* script */
var __vue_script__$s = script$s;

/* template */
var __vue_render__$t = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('no-ssr',[_c('v-popover',{staticClass:"VhTooltip",attrs:{"trigger":_vm.mode}},[_c('vh-icon',{attrs:{"name":"helpCircleOutline","color":"grey","size":"small"}}),_vm._v(" "),_c('div',{attrs:{"slot":"popover"},slot:"popover"},[_vm._t("default")],2)],1)],1)};
var __vue_staticRenderFns__$t = [];

  /* style */
  var __vue_inject_styles__$t = function (inject) {
    if (!inject) { return }
    inject("data-v-58bf919b_0", { source: ".VhTooltip{display:inline-block}.tooltip{display:block!important;z-index:var(--z-index--medium)}.tooltip .tooltip-inner{font-size:var(--font-size--xSmall)!important;background-color:var(--color--grey100)!important;border:1px solid var(--color--grey100)!important;border-radius:3px!important;padding:5px 5px 4px!important;color:var(--color--grey600)!important;box-shadow:2px 2px 3px hsla(0,0%,63%,.4)}.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:var(--color--grey100);z-index:1}.tooltip[x-placement^=top]{margin-bottom:5px}.tooltip[x-placement^=top] .tooltip-arrow{border-width:5px 5px 0 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=bottom]{margin-top:5px}.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 5px 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=right]{margin-left:5px}.tooltip[x-placement^=right] .tooltip-arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip[x-placement^=left]{margin-right:5px}.tooltip[x-placement^=left] .tooltip-arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip.popover .popover-inner{background:#f9f9f9;color:#000;padding:24px;border-radius:5px;box-shadow:0 5px 30px rgba(black,.1);max-width:300px}.tooltip.popover .popover-arrow{border-color:#f9f9f9}.tooltip[aria-hidden=true]{visibility:hidden;opacity:0;transition:opacity .15s,visibility .15s}.tooltip[aria-hidden=false]{visibility:visible;opacity:1;transition:opacity .15s}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$t = undefined;
  /* module identifier */
  var __vue_module_identifier__$t = "data-v-58bf919b";
  /* functional template */
  var __vue_is_functional_template__$t = false;

  
  var VhTooltip = normalizeComponent_1(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$t,
    __vue_script__$s,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$t = {
  name: 'VhVideoPreview',
  props: {
    /**
     * VhVideo will force play
     */
    forcePlay: {
      type: Boolean,
      default: false,
    },
    /**
     * VhVideoReview will choose quality of preview image
     */
    quality: {
      type: String,
      default: 'hqdefault',
      validator: function (value) {
        return value.match(/(default|sddefault|mqdefault|hqdefault|maxresdefault)/);
      },
    },
    /**
     * Youtube player will not load until clicked
     */
    lazy: {
      type: Boolean,
      default: false,
    },
    /**
     * Takes a YouTube video source for preview
     */
    videoId: {
      type: String,
      default: '',
    },
  },

  data: function data() {
    return {
      loadPlayer: !this.lazy,
      isPlaying: false,
      isPaused: false,
    };
  },

  computed: {
    youtubePlayer: function youtubePlayer() {
      return this.$refs.youtube ? this.$refs.youtube.player : null;
    },
    previewImgSrc: function previewImgSrc() {
      return ("https://i.ytimg.com/vi/" + (this.videoId) + "/" + (this.quality) + ".jpg");
    },
  },
  watch: {
    loadPlayer: function loadPlayer(val) {
      if (val) { this.$emit('load-player'); }
    },
  },
  methods: {
    handleForcePlay: function handleForcePlay() {
      if (this.forcePlay) {
        this.play();
      }
    },
    handlePreviewClick: function handlePreviewClick() {
      this.loadPlayer = true;
    },
    handlePlaying: function handlePlaying() {
      this.isPlaying = true;
      this.isPaused = false;
    },
    handlePaused: function handlePaused() {
      this.isPaused = true;
      this.isPlaying = false;
    },
    play: function play() {
      this.youtubePlayer.playVideo();
    },
    pause: function pause() {
      this.youtubePlayer.pauseVideo();
    },
  },
};/* script */
var __vue_script__$t = script$t;

/* template */
var __vue_render__$u = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VhVideo"},[_vm._ssrNode("<div class=\"VhVideo-player\">","</div>",[(!_vm.loadPlayer)?_vm._ssrNode("<div class=\"VhVideo-preview\">","</div>",[_vm._ssrNode("<div class=\"VhVideo-previewImageContainer\"><img"+(_vm._ssrAttr("src",_vm.previewImgSrc))+" class=\"VhVideo-previewImage\"></div> "),_vm._ssrNode("<div class=\"VhVideo-previewPlayButtonContainer\">","</div>",[_c('vh-icon',{staticClass:"VhVideo-previewPlayButton",attrs:{"color":"white","name":"playCircle"}})],1)],2):_c('no-ssr',[_c('youtube',_vm._g({ref:"youtube",attrs:{"video-id":_vm.videoId,"player-vars":{ autoplay: 1 }},on:{"ready":_vm.handleForcePlay,"playing":_vm.handlePlaying,"paused":_vm.handlePaused}},_vm.$listeners))],1)],1)])};
var __vue_staticRenderFns__$u = [];

  /* style */
  var __vue_inject_styles__$u = function (inject) {
    if (!inject) { return }
    inject("data-v-2cf59a56_0", { source: ".VhVideo[data-v-2cf59a56]{background-color:#000}.VhVideo-player[data-v-2cf59a56]{overflow:hidden;padding-bottom:56.25%;position:relative;height:0}.VhVideo-preview[data-v-2cf59a56]{position:relative;cursor:pointer;background-color:#000;width:100%;height:100%}.VhVideo-player .VhVideo-preview[data-v-2cf59a56],.VhVideo-player[data-v-2cf59a56] iframe{left:0;top:0;height:100%;width:100%;position:absolute}.VhVideo-previewImageContainer[data-v-2cf59a56]{position:relative;height:100%;overflow:hidden}.VhVideo-previewImage[data-v-2cf59a56]{position:absolute;top:50%;transform:translateY(-50%);width:100%;height:auto}.VhVideo-previewPlayButtonContainer[data-v-2cf59a56]{cursor:pointer;position:absolute;margin-left:auto;margin-right:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.VhVideo-previewPlayButton[data-v-2cf59a56]{width:48px;height:48px;opacity:.75}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$u = "data-v-2cf59a56";
  /* module identifier */
  var __vue_module_identifier__$u = "data-v-2cf59a56";
  /* functional template */
  var __vue_is_functional_template__$u = false;

  
  var VhVideo = normalizeComponent_1(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$u,
    __vue_script__$t,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    undefined,
    server
  );/* eslint-disable import/prefer-default-export */var components = /*#__PURE__*/Object.freeze({VhSvgSprite: VhSvgSprite,VhAccordion: VhAccordion,VhAccordionItem: VhAccordionItem,VhAvatar: VhAvatar,VhBadge: VhBadge,VhButton: VhButton,VhCard: VhCard,VhChip: VhChip,VhContainer: VhContainer,VhFloatingButton: VhFloatingButton,VhGroup: VhGroup,VhHeroButton: VhHeroButton,VhIcon: VhIcon,VhImage: VhImage,VhLabel: VhLabel,VhList: VhList,VhListItem: VhListItem,VhLogo: VhLogo,VhLogoMini: VhLogoMini,VhKbbLogo: VhKbbLogo,VhIihsLogo: VhIihsLogo,VhNhtsaLogo: VhNhtsaLogo,VhJdpowerLogo: VhJdpowerLogo,VhModule: VhModule,VhNavigationButton: VhNavigationButton,VhNotification: VhNotification,VhProgressBar: VhProgressBar,VhProgressDonut: VhProgressDonut,VhRating: VhRating,VhTooltip: VhTooltip,VhVideo: VhVideo});// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}exports.VhAccordion=VhAccordion;exports.VhAccordionItem=VhAccordionItem;exports.VhAvatar=VhAvatar;exports.VhBadge=VhBadge;exports.VhButton=VhButton;exports.VhCard=VhCard;exports.VhChip=VhChip;exports.VhContainer=VhContainer;exports.VhFloatingButton=VhFloatingButton;exports.VhGroup=VhGroup;exports.VhHeroButton=VhHeroButton;exports.VhIcon=VhIcon;exports.VhIihsLogo=VhIihsLogo;exports.VhImage=VhImage;exports.VhJdpowerLogo=VhJdpowerLogo;exports.VhKbbLogo=VhKbbLogo;exports.VhLabel=VhLabel;exports.VhList=VhList;exports.VhListItem=VhListItem;exports.VhLogo=VhLogo;exports.VhLogoMini=VhLogoMini;exports.VhModule=VhModule;exports.VhNavigationButton=VhNavigationButton;exports.VhNhtsaLogo=VhNhtsaLogo;exports.VhNotification=VhNotification;exports.VhProgressBar=VhProgressBar;exports.VhProgressDonut=VhProgressDonut;exports.VhRating=VhRating;exports.VhSvgSprite=VhSvgSprite;exports.VhTooltip=VhTooltip;exports.VhVideo=VhVideo;exports.default=plugin;