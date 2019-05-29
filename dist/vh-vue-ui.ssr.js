'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
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
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
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

var normalizeComponent_1 = normalizeComponent;function createInjectorSSR(context) {
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VHAccordion"},[_vm._t("default")],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-1c25e586_0", { source: ".VHAccordion[data-v-1c25e586]{position:relative}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-1c25e586";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-1c25e586";
  /* functional template */
  var __vue_is_functional_template__ = false;

  
  var VHAccordion = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
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
  name: 'VHAccordionItem',
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
        'VHAccordionItem--bordered': this.bordered
      }, obj[("VHAccordionItem--" + (this.size))] = this.size, obj );
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
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VHAccordionItem",class:_vm.itemClasses},[_vm._ssrNode("<div"+(_vm._ssrClass("VHAccordionItem-header",_vm.stateClasses))+">","</div>",[_c('vh-icon',{attrs:{"name":"chevronDown","color":"darkGrey","size":"large"}}),_vm._ssrNode(" "),_vm._t("header")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("VHAccordionItem-body",_vm.stateClasses))+">","</div>",[(!_vm.lazy || (_vm.lazy && _vm.hasBeenOpened))?_vm._ssrNode("<div>","</div>",[_vm._t("body")],2):_vm._e()])],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-70f4ddea_0", { source: ".VHAccordionItem-header[data-v-70f4ddea]{min-height:3.75rem;cursor:pointer;display:flex;justify-items:center;align-items:center;z-index:var(--z-index--low);margin:0;padding:var(--space--small) 0}& h2[data-v-70f4ddea]{padding:var(--space--medium) 0;border-bottom:1px solid var(--color--grey300)}& .Icon[data-v-70f4ddea]{margin-left:var(--space--medium);margin-right:var(--space--medium);transition-property:all;transition-duration:.2s}& h2[data-v-70f4ddea],& h3[data-v-70f4ddea]{border-bottom:1px solid transparent}.VHAccordionItem-body.is-open[data-v-70f4ddea]{height:100%;opacity:1;overflow:visible;border-bottom:1px solid var(--color--grey300);padding-bottom:var(--space--xLarge)}.VHAccordionItem--small[data-v-70f4ddea]{display:flex;justify-items:center;align-items:center;z-index:var(--z-index--low);margin:0;padding:0;line-height:1;font-size:var(--font-size--medium);font-weight:400;font-family:var(--font-family)}& .Icon[data-v-70f4ddea]{margin-left:var(--space--medium);margin-right:var(--space--medium);transition-property:all;transition-duration:.1s}& .VHAccordionItem-body.is-open[data-v-70f4ddea]{padding-top:var(--space--medium);border-bottom:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = "data-v-70f4ddea";
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-70f4ddea";
  /* functional template */
  var __vue_is_functional_template__$1 = false;

  
  var VHAccordionItem = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
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

      return ( obj = {}, obj[("Avatar--" + (this.size))] = this.size, obj[("Avatar--" + (this.color))] = this.color, obj );
    },
  },
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"Avatar",class:_vm.computedClasses},_vm.$listeners),[_vm._t("default")],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-118babbc_0", { source: ".Avatar[data-v-118babbc]{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;position:relative;text-align:center;vertical-align:middle;background-color:var(--color--blue400);border-color:var(--color--blue400);color:var(--color--white);font-weight:var(--font-weight--light);flex:0 0 auto}.Avatar--small[data-v-118babbc]{height:var(--avatar-size--small);width:var(--avatar-size--small);font-size:12px!important}.Avatar--medium[data-v-118babbc]{height:var(--avatar-size--medium);width:var(--avatar-size--medium);font-size:16px!important}.Avatar--large[data-v-118babbc]{height:var(--avatar-size--large);width:var(--avatar-size--large);font-size:24px!important}.Avatar--grey[data-v-118babbc]{background-color:var(--color--grey500)}.Avatar--yellow[data-v-118babbc]{background-color:var(--color--yellow500)}.Avatar--orange[data-v-118babbc]{background-color:var(--color--orange500)}.Avatar--green[data-v-118babbc]{background-color:var(--color--green500)}.Avatar--red[data-v-118babbc]{background-color:var(--color--red500)}.Avatar--blue[data-v-118babbc]{background-color:var(--color--blue500)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$2 = "data-v-118babbc";
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-118babbc";
  /* functional template */
  var __vue_is_functional_template__$2 = false;

  
  var VHAvatar = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
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
//
//
//
//

var script$3 = {
  name: 'VHBadge',
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
        'VHBadge--white': this.color === 'white',
        'VHBadge--blue': this.color === 'blue',
        'VHBadge--orange': this.color === 'orange',
      };
    },
  },
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VHBadgeContainer"},[_vm._ssrNode("<span>","</span>",[_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<span"+(_vm._ssrClass("VHBadge",_vm.computedClasses))+">","</span>",[_vm._t("badge")],2)],2)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = function (inject) {
    if (!inject) { return }
    inject("data-v-18658cfe_0", { source: ".VHBadgeContainer[data-v-18658cfe]{display:inline-block;position:relative}.VHBadge[data-v-18658cfe]{position:absolute;display:flex;top:8px;right:10px;height:16px;min-width:16px;padding:0 2px;z-index:1;align-items:center;justify-content:center;font-size:8px;border-radius:10px;transform:scale(1) translate(90%,-60%);transform-origin:100% 0}.VHBadge--white[data-v-18658cfe]{background-color:var(--color--white);color:var(--text-color)}.VHBadge--blue[data-v-18658cfe]{background-color:var(--color--blue400);color:var(--color--white)}.VHBadge--orange[data-v-18658cfe]{background-color:var(--color--orange500);color:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$3 = "data-v-18658cfe";
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-18658cfe";
  /* functional template */
  var __vue_is_functional_template__$3 = false;

  
  var VHBadge = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
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
//
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
var __vue_render__$4 = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.nuxt && _vm.href ? 'nuxt-link' : _vm.href ? 'a' : 'button',_vm._g(_vm._b({tag:"component",staticClass:"VHButton",class:( _obj = {
    'VHButton--disabled': _vm.disabled,
    'VHButton--block': _vm.block
  }, _obj[("VHButton--" + _vm.variation)] = _vm.variation, _obj[("VHButton--" + _vm.size)] = _vm.size, _obj ),attrs:{"to":_vm.nuxt && _vm.href}},'component',_vm.attrs,false),_vm.$listeners),[_c('span',{staticClass:"VHButton-iconLeft"},[_vm._t("icon-left")],2),_vm._v(" "),_c('span',{staticClass:"VHButton-label"},[_vm._t("default")],2)])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = function (inject) {
    if (!inject) { return }
    inject("data-v-06598d32_0", { source: "a.VHButton[data-v-06598d32]{display:inline-flex}.VHButton[data-v-06598d32]{min-width:calc(var(--space--xLarge) * 1.5);display:flex;align-items:center;color:var(--VHButton-color);user-select:none;border:var(--VHButton-borderWidth) solid var(--VHButton-borderColor);text-decoration:none;border-radius:var(--VHButton-borderRadius);font-size:var(--font-size--small);font-weight:var(--font-weight--medium);outline:0;cursor:pointer;text-transform:uppercase;line-height:1;-webkit-appearance:none;padding:0 var(--space--medium)}.VHButton[data-v-06598d32]:focus{outline:0}.VHButton-iconLeft[data-v-06598d32]{margin-right:var(--space--small)}.VHButton-iconLeft[data-v-06598d32]:empty{display:none}.VHButton--disabled[data-v-06598d32]{pointer-events:none;opacity:var(--VHButton--disabled-opacity)}.VHButton--primary[data-v-06598d32]{background-color:var(--VHButton--primary-backgroundColor);border:var(--VHButton--primary-borderWidth) solid var(--VHButton--primary-borderColor);color:var(--VHButton--primary-color)!important;transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VHButton--primary[data-v-06598d32]:hover{border-color:var(--VHButton--primary-backgroundColor-hover);background-color:var(--VHButton--primary-backgroundColor-hover)}.VHButton--primary[data-v-06598d32]:active,.VHButton--primary[data-v-06598d32]:focus{border-color:var(--VHButton--primary-backgroundColor-active);background-color:var(--VHButton--primary-backgroundColor-active)}.VHButton--disabled.VHButton--primary[data-v-06598d32]{pointer-events:none;color:var(--color--grey500)!important;opacity:1}.VHButton--secondary[data-v-06598d32]{background:var(--VHButton--secondary-backgroundColor);border:var(--VHButton--secondary-borderWidth) solid var(--VHButton--secondary-borderColor);color:var(--VHButton--secondary-color);transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VHButton--secondary[data-v-06598d32]:hover{background-color:var(--color--blue100)}.VHButton--secondary[data-v-06598d32]:active,.VHButton--secondary[data-v-06598d32]:focus{color:var(--color--grey700);background-color:var(--color--grey50);border-color:var(--color--grey600)}.VHButton--text[data-v-06598d32]{background:var(--VHButton--text-backgroundColor);border:var(--VHButton--text-borderWidth) solid var(--VHButton--text-borderColor);color:var(--VHButton--text-color);transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VHButton--text[data-v-06598d32]:hover{background-color:var(--color--blue100)}.VHButton--text[data-v-06598d32]:active,.VHButton--text[data-v-06598d32]:focus{color:var(--color--grey700)}.VHButton--link[data-v-06598d32]{display:inline-block;border:none;background:0 0;color:var(--link-color);font-size:inherit;text-transform:initial;min-width:initial;min-height:initial;padding:0;margin:0;fill:currentColor}.VHButton--small[data-v-06598d32]{font-size:var(--font-size--xSmall);height:var(--space--large);padding:0 var(--space--small)}.VHButton--medium[data-v-06598d32]{height:var(--space--xLarge)}.VHButton--large[data-v-06598d32]{font-size:var(--font-size--medium);font-weight:var(--font-weight--bold);padding:0 var(--space--large);height:calc(var(--space--xLarge) + var(--space--small))}.VHButton--block[data-v-06598d32]{width:100%;max-width:100%;justify-content:center}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$4 = "data-v-06598d32";
  /* module identifier */
  var __vue_module_identifier__$4 = "data-v-06598d32";
  /* functional template */
  var __vue_is_functional_template__$4 = false;

  
  var VHButton = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
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
//
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
        'Card--horizontal': Boolean(this.horizontal),
        'Card--hover': Boolean(this.href || this.nuxt || this.hover),
        'Card--padded': Boolean(this.padded),
        'Card--block': Boolean(this.block)
      }, obj[("Card--" + (this.color))] = Boolean(this.color), obj['Card--twoLineTitle'] =  Boolean(this.twoLineTitle), obj['is-active'] =  Boolean(this.active), obj );
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
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.computedElement,_vm._g(_vm._b({tag:"component",staticClass:"Card",class:_vm.computedClasses,attrs:{"to":_vm.nuxt && _vm.href}},'component',_vm.attrs,false),_vm.$listeners),[_c('div',{staticClass:"Card-default"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"Card-header"},[_vm._t("card-header")],2),_vm._v(" "),_c('div',{staticClass:"Card-content"},[_c('div',{staticClass:"Card-title"},[_vm._t("card-title")],2),_vm._v(" "),_vm._t("card-content")],2),_vm._v(" "),_c('div',{staticClass:"Card-action"},[_vm._t("card-action")],2)])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = function (inject) {
    if (!inject) { return }
    inject("data-v-bf8d004a_0", { source: ".Card[data-v-bf8d004a]{--Card-borderColor:var(--color--grey300);--Card-color:var(--color--grey700);--Card-hoverEnterTransition:0.3s ease-out;--Card-hoverExitTransition:0.3s ease-in;--Card-clickTransition:0.15s ease-in;position:relative;display:flex;flex-direction:column;border:1px solid var(--Card-borderColor);text-align:start;min-width:min-content;max-width:max-content;width:290px}.Card-default[data-v-bf8d004a]:not(:empty){border-bottom:1px solid var(--Card-borderColor)}.Card-header[data-v-bf8d004a]{display:flex;align-items:center;padding:var(--space--small)}.Card-title[data-v-bf8d004a]{margin-bottom:var(--space--medium);font-size:var(--font-size--large);font-weight:var(--font-weight--bold);overflow:hidden;max-height:1.575rem}.Card-header[data-v-bf8d004a] :not(:last-child){margin-right:var(--space--small)}.Card-content[data-v-bf8d004a]{padding:var(--space--medium);color:var(--Card-color);width:100%;height:100%}.Card-action[data-v-bf8d004a]{padding:var(--space--small)}.Card-action[data-v-bf8d004a]:empty,.Card-content[data-v-bf8d004a]:empty,.Card-header[data-v-bf8d004a]:empty,.Card-title[data-v-bf8d004a]:empty{display:none}.Card--block[data-v-bf8d004a]{max-width:100%;width:100%}.Card--padded[data-v-bf8d004a]{padding:var(--space--large)}.Card--hover.nuxt-link-exact-active[data-v-bf8d004a]{font-weight:initial}.Card--hover[data-v-bf8d004a]:link,.Card--hover[data-v-bf8d004a]:visited{text-decoration:none}.Card--hover.is-active[data-v-bf8d004a]{pointer-events:none;border:2px solid var(--color--green700)}.Card--hover[data-v-bf8d004a]::after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;opacity:0;box-shadow:5px 5px 20px var(--Card-borderColor);will-change:opacity;transition:opacity var(--Card-hoverExitTransition);z-index:calc(var(--z-index--low) * -1)}.Card--hover[data-v-bf8d004a]:hover::after{opacity:1;transition:opacity var(--Card-hoverEnterTransition)}.Card--hover[data-v-bf8d004a]:active::after{opacity:0;transition:opacity var(--Card-clickTransition)}.Card--blue[data-v-bf8d004a]{color:var(--color--white)}& .Card-default[data-v-bf8d004a]:not(:empty){border-bottom:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$5 = "data-v-bf8d004a";
  /* module identifier */
  var __vue_module_identifier__$5 = "data-v-bf8d004a";
  /* functional template */
  var __vue_is_functional_template__$5 = false;

  
  var VHCard = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
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
        'VHChip--disabled': this.disabled,
        'VHChip--hover': this.hasParentClickHandler
      }, obj[("VHChip--" + (this.size))] = this.size, obj );
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
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g({staticClass:"VHChip",class:_vm.computedClasses,attrs:{"type":"button"}},_vm.$listeners),[_vm._ssrNode("<span class=\"VHChip-iconLeft\">","</span>",[_vm._t("icon-left")],2),_vm._ssrNode(" "),_vm._ssrNode("<span class=\"VHChip-content\">","</span>",[_vm._t("default")],2),_vm._ssrNode(" "),(_vm.dismissible)?_vm._ssrNode("<span class=\"VHChip-iconRight\">","</span>",[_c('vh-icon',{attrs:{"name":"closeCircle","size":"small"}})],1):_vm._e()],2)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = function (inject) {
    if (!inject) { return }
    inject("data-v-11c6a13e_0", { source: ".VHChip[data-v-11c6a13e]{--VHChip-borderRadius:32px;--VHChip-color:var(--color--blue700);--VHChip--disabled-opacity:0.4;display:inline-flex;align-items:center;user-select:none;color:var(--color--grey700);background-color:var(--color--grey200);text-decoration:none;line-height:1;font-weight:var(--font-weight--normal);outline:0;cursor:pointer;border-radius:var(--VHChip-borderRadius);transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms;-webkit-appearance:none;vertical-align:middle;padding:0 var(--space--medium)}.VHChip[data-v-11c6a13e]:hover{background-color:var(--color--grey400)}.VHChip[data-v-11c6a13e]:active,.VHChip[data-v-11c6a13e]:focus{background-color:var(--color--blue100);color:var(--color--blue700)}.VHChip-iconLeft[data-v-11c6a13e]{margin:0 2px 0 -12px;border-radius:50%;height:22px}.VHChip--small .VHChip-iconLeft[data-v-11c6a13e]{margin:0 2px 0 -3px;height:16px}.VHChip-iconRight[data-v-11c6a13e]:empty{display:none}.VHChip--small .VHChip-iconRight[data-v-11c6a13e]{margin:0 -3px 0 2px;height:16px}.VHChip:active .VHChip-iconRight[data-v-11c6a13e]{fill:var(--color--blue700)}.VHChip--hover[data-v-11c6a13e]{cursor:pointer}.VHChip--medium[data-v-11c6a13e]{height:var(--space--xLarge);font-size:var(--font-size--medium)}.VHChip--small[data-v-11c6a13e]{height:var(--space--large);font-size:var(--font-size--xSmall);padding:0 var(--space--small)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$6 = "data-v-11c6a13e";
  /* module identifier */
  var __vue_module_identifier__$6 = "data-v-11c6a13e";
  /* functional template */
  var __vue_is_functional_template__$6 = false;

  
  var VHChip = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
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
var __vue_render__$7 = function (_h,_vm) {
var _obj;
var _c=_vm._c;return _c('div',{staticClass:"Container",class:( _obj = { 'Container--isTop': _vm.props.isTop }, _obj[_vm.data.staticClass] = _vm.data.staticClass, _obj )},[_vm._ssrNode("<div class=\"Container-main\">","</div>",[_vm._t("main")],2),_vm._ssrNode(" "),_vm._ssrNode("<aside class=\"Container-aside u-sm-hidden u-md-hidden\">","</aside>",[_vm._t("aside")],2)],2)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  var __vue_inject_styles__$7 = function (inject) {
    if (!inject) { return }
    inject("data-v-5898ddc4_0", { source: ".Container[data-v-5898ddc4]{display:flex;flex-direction:column;margin-left:auto;margin-right:auto;padding-left:var(--space--medium);padding-right:var(--space--medium)}.Container-main[data-v-5898ddc4]{flex:1 1 100%;width:100%}.Container-aside[data-v-5898ddc4] .Ad:first-child{margin-top:0}.Container-aside[data-v-5898ddc4]:empty{display:none}.Container-main+.Container-aside[data-v-5898ddc4]{max-width:var(--aside--width);flex:0 0 var(--aside--width);margin-bottom:var(--space--large)}.Container--isTop[data-v-5898ddc4]{margin-top:var(--space--xLarge)}@media (--viewport--medium){.Container-main[data-v-5898ddc4]{overflow:hidden;margin-bottom:0;display:block}}@media (--viewport--medium-up){.Container[data-v-5898ddc4]{flex-direction:row;width:var(--breakpoint--large);max-width:100%}.Container-main+.Container-aside[data-v-5898ddc4]{margin-left:calc(var(--space--medium) * 2);margin-bottom:0}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$7 = "data-v-5898ddc4";
  /* module identifier */
  var __vue_module_identifier__$7 = "data-v-5898ddc4";
  /* functional template */
  var __vue_is_functional_template__$7 = true;

  
  var VHContainer = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
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

var itemsPerRowValidator = function (value) { return value > 0 && value <= 4; };

var script$8 = {
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
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",staticClass:"Group",class:_vm.computedClasses,style:(_vm.computedStyles)},[_vm._t("default")],2)};
var __vue_staticRenderFns__$8 = [];

  /* style */
  var __vue_inject_styles__$8 = function (inject) {
    if (!inject) { return }
    inject("data-v-3f646784_0", { source: ".Group[data-v-3f646784]{display:grid}@media (--viewport--small){.Group-columnsMobile1--maxContent[data-v-3f646784]{grid-template-columns:repeat(1,max-content)!important}.Group-columnsMobile2--maxContent[data-v-3f646784]{grid-template-columns:repeat(2,max-content)!important}.Group-columnsMobile3--maxContent[data-v-3f646784]{grid-template-columns:repeat(3,max-content)!important}.Group-columnsMobile4--maxContent[data-v-3f646784]{grid-template-columns:repeat(4,max-content)!important}.Group-columnsMobile1--fraction[data-v-3f646784]{grid-template-columns:repeat(1,1fr)!important}.Group-columnsMobile2--fraction[data-v-3f646784]{grid-template-columns:repeat(2,1fr)!important}.Group-columnsMobile3--fraction[data-v-3f646784]{grid-template-columns:repeat(3,1fr)!important}.Group-columnsMobile4--fraction[data-v-3f646784]{grid-template-columns:repeat(4,1fr)!important}}@media (--viewport--medium){.Group-columnsTablet1--maxContent[data-v-3f646784]{grid-template-columns:repeat(1,max-content)!important}.Group-columnsTablet2--maxContent[data-v-3f646784]{grid-template-columns:repeat(2,max-content)!important}.Group-columnsTablet3--maxContent[data-v-3f646784]{grid-template-columns:repeat(3,max-content)!important}.Group-columnsTablet4--maxContent[data-v-3f646784]{grid-template-columns:repeat(4,max-content)!important}.Group-columnsTablet1--fraction[data-v-3f646784]{grid-template-columns:repeat(1,1fr)!important}.Group-columnsTablet2--fraction[data-v-3f646784]{grid-template-columns:repeat(2,1fr)!important}.Group-columnsTablet3--fraction[data-v-3f646784]{grid-template-columns:repeat(3,1fr)!important}.Group-columnsTablet4--fraction[data-v-3f646784]{grid-template-columns:repeat(4,1fr)!important}}@media (--viewport--large){.Group-columnsDesktop1--maxContent[data-v-3f646784]{grid-template-columns:repeat(1,max-content)!important}.Group-columnsDesktop2--maxContent[data-v-3f646784]{grid-template-columns:repeat(2,max-content)!important}.Group-columnsDesktop3--maxContent[data-v-3f646784]{grid-template-columns:repeat(3,max-content)!important}.Group-columnsDesktop4--maxContent[data-v-3f646784]{grid-template-columns:repeat(4,max-content)!important}.Group-columnsDesktop1--fraction[data-v-3f646784]{grid-template-columns:repeat(1,1fr)!important}.Group-columnsDesktop2--fraction[data-v-3f646784]{grid-template-columns:repeat(2,1fr)!important}.Group-columnsDesktop3--fraction[data-v-3f646784]{grid-template-columns:repeat(3,1fr)!important}.Group-columnsDesktop4--fraction[data-v-3f646784]{grid-template-columns:repeat(4,1fr)!important}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$8 = "data-v-3f646784";
  /* module identifier */
  var __vue_module_identifier__$8 = "data-v-3f646784";
  /* functional template */
  var __vue_is_functional_template__$8 = false;

  
  var VHGroup = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
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

var script$9 = {
  name: 'VHHeroButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g({staticClass:"VHHeroButton",attrs:{"disabled":_vm.disabled}},_vm.$listeners),[_vm._t("default")],2)};
var __vue_staticRenderFns__$9 = [];

  /* style */
  var __vue_inject_styles__$9 = function (inject) {
    if (!inject) { return }
    inject("data-v-803494c6_0", { source: ".VHHeroButton[data-v-803494c6]{display:block;height:var(--VHHeroButton-height);padding:0 var(--space--xLarge);user-select:none;text-decoration:none;text-transform:uppercase;line-height:1;font-size:var(--font-size--medium);white-space:nowrap;border-radius:calc(var(--VHHeroButton-height)/ 2);border:var(--VHHeroButton-borderWidth) solid var(--VHHeroButton-borderColor);background-color:var(--VHHeroButton-backgroundColor);outline:0;cursor:pointer;color:var(--VHHeroButton-color);transition:background-color .1s ease-out .1s;text-align:center}.VHHeroButton[data-v-803494c6]:focus{outline:0}.VHHeroButton[data-v-803494c6]:active,.VHHeroButton[data-v-803494c6]:focus,.VHHeroButton[data-v-803494c6]:hover{background-color:var(--VHHeroButton-backgroundColor--hover)}.VHHeroButton[disabled][data-v-803494c6]{opacity:.75;cursor:not-allowed}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$9 = "data-v-803494c6";
  /* module identifier */
  var __vue_module_identifier__$9 = "data-v-803494c6";
  /* functional template */
  var __vue_is_functional_template__$9 = false;

  
  var VHHeroButton = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
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

var script$a = {
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

      return ( obj = {}, obj[("VHIcon--" + (this.size))] = this.size, obj[("VHIcon--" + (this.color))] = this.color, obj );
    },
  },
};/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"VHIcon",class:_vm.computedClasses,attrs:{"xmlns":"http://www.w3.org/2000/svg","role":"presentation"}},[_vm._ssrNode("<use"+(_vm._ssrAttrs({ 'xlink:href': ("/icons-sprite.svg#" + _vm.name) }))+"></use>")])};
var __vue_staticRenderFns__$a = [];

  /* style */
  var __vue_inject_styles__$a = function (inject) {
    if (!inject) { return }
    inject("data-v-221af74a_0", { source: ".VHIcon[data-v-221af74a]{display:block;width:var(--VHIcon-size--medium);height:var(--VHIcon-size--medium);font-size:var(--VHIcon-size--medium);user-select:none;flex-shrink:0}.VHIcon--xSmall[data-v-221af74a]{width:var(--VHIcon-size--xSmall);height:var(--VHIcon-size--xSmall)}.VHIcon--small[data-v-221af74a]{width:var(--VHIcon-size--small);height:var(--VHIcon-size--small)}.VHIcon--medium[data-v-221af74a]{width:var(--VHIcon-size--medium);height:var(--VHIcon-size--medium)}.VHIcon--large[data-v-221af74a]{width:var(--VHIcon-size--large);height:var(--VHIcon-size--large)}.VHIcon--xLarge[data-v-221af74a]{width:var(--VHIcon-size--xLarge);height:var(--VHIcon-size--xLarge)}.VHIcon--default[data-v-221af74a]{fill:currentColor}.VHIcon--lightOrange[data-v-221af74a]{fill:var(--color--orange300)}.VHIcon--orange[data-v-221af74a]{fill:var(--color--orange500)}.VHIcon--darkOrange[data-v-221af74a]{fill:var(--color--orange700)}.VHIcon--lightGrey[data-v-221af74a]{fill:var(--color--grey300)}.VHIcon--grey[data-v-221af74a]{fill:var(--color--grey500)}.VHIcon--darkGrey[data-v-221af74a]{fill:var(--color--grey700)}.VHIcon--lightBlue[data-v-221af74a]{fill:var(--color--blue300)}.VHIcon--blue[data-v-221af74a]{fill:var(--color--blue500)}.VHIcon--darkBlue[data-v-221af74a]{fill:var(--color--blue700)}.VHIcon--lightRed[data-v-221af74a]{fill:var(--color--red300)}.VHIcon--red[data-v-221af74a]{fill:var(--color--red500)}.VHIcon--darkRed[data-v-221af74a]{fill:var(--color--red700)}.VHIcon--lightYellow[data-v-221af74a]{fill:var(--color--yellow300)}.VHIcon--yellow[data-v-221af74a]{fill:var(--color--yellow500)}.VHIcon--darkYellow[data-v-221af74a]{fill:var(--color--yellow700)}.VHIcon--lightGreen[data-v-221af74a]{fill:var(--color--green300)}.VHIcon--green[data-v-221af74a]{fill:var(--color--green500)}.VHIcon--darkGreen[data-v-221af74a]{fill:var(--color--green700)}.VHIcon--white[data-v-221af74a]{fill:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$a = "data-v-221af74a";
  /* module identifier */
  var __vue_module_identifier__$a = "data-v-221af74a";
  /* functional template */
  var __vue_is_functional_template__$a = false;

  
  var VHIcon = normalizeComponent_1(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'VHImage--padded': this.padded,
        'VHImage--setWidth': this.width,
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
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VHImage",class:_vm.computedClasses},[(_vm.backgroundImage)?_vm._ssrNode("<div class=\"VHImage-backgroundContainer\""+(_vm._ssrStyle(null,_vm.containerStyles, null))+">","</div>",[_vm._ssrNode("<div class=\"VHImage-sizer\""+(_vm._ssrStyle(null,_vm.sizerStyles, null))+"></div> <div role=\"img\""+(_vm._ssrAttr("aria-alt",_vm.alt))+" class=\"VHImage-backgroundImage\""+(_vm._ssrStyle(null,_vm.imageStyles, null))+"></div> "),(_vm.lazy)?_c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:(_vm.visibilityChanged),expression:"visibilityChanged"}],staticClass:"VHImage-backgroundImage",style:(_vm.imageStyles),attrs:{"role":"img","aria-alt":_vm.alt}},[]):_vm._e()],2):_vm._ssrNode("<div class=\"VHImage-imageContainer\""+(_vm._ssrStyle(null,_vm.containerStyles, null))+">","</div>",[(_vm.lazy)?_c('img',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:(_vm.visibilityChanged),expression:"visibilityChanged"}],staticClass:"VHImage-image",attrs:{"src":_vm.internalSrc,"alt":_vm.alt}},[]):_vm._ssrNode(("<img"+(_vm._ssrAttr("src",_vm.internalSrc))+(_vm._ssrAttr("alt",_vm.alt))+" class=\"VHImage-image\">"))])])};
var __vue_staticRenderFns__$b = [];

  /* style */
  var __vue_inject_styles__$b = function (inject) {
    if (!inject) { return }
    inject("data-v-a34e7394_0", { source: ".VHImage[data-v-a34e7394]{padding:0}.VHImage-backgroundContainer[data-v-a34e7394]{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.VHImage-sizer[data-v-a34e7394]{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}.VHImage-backgroundImage[data-v-a34e7394]{background-repeat:no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%}.VHImage-image[data-v-a34e7394]{width:100%;max-width:100%;height:auto}.VHImage--setWidth[data-v-a34e7394]{max-width:max-content}.VHImage--padded[data-v-a34e7394]{padding:var(--space--medium)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$b = "data-v-a34e7394";
  /* module identifier */
  var __vue_module_identifier__$b = "data-v-a34e7394";
  /* functional template */
  var __vue_is_functional_template__$b = false;

  
  var VHImage = normalizeComponent_1(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
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

var script$c = {
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
        'VHList--horizontal': this.horizontal,
      };
    },
  },
};/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.as,{tag:"component",staticClass:"VHList",class:_vm.computedClasses},[_vm._t("default")],2)};
var __vue_staticRenderFns__$c = [];

  /* style */
  var __vue_inject_styles__$c = function (inject) {
    if (!inject) { return }
    inject("data-v-4d6f9a26_0", { source: ".VHList[data-v-4d6f9a26]{display:flex;flex-direction:column}.VHList--horizontal[data-v-4d6f9a26]{flex-direction:row}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$c = "data-v-4d6f9a26";
  /* module identifier */
  var __vue_module_identifier__$c = "data-v-4d6f9a26";
  /* functional template */
  var __vue_is_functional_template__$c = false;

  
  var VHList = normalizeComponent_1(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
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

var script$d = {
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
var __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.as,_vm._g({tag:"component",staticClass:"VHListItem"},_vm.$listeners),[_c('div',{staticClass:"VHListItem-icon"},[(_vm.icon)?_c('vh-icon',{attrs:{"name":_vm.icon}}):_vm._e()],1),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('div',{staticClass:"VHListItem-rightContent"},[_vm._t("right-content")],2)],2)};
var __vue_staticRenderFns__$d = [];

  /* style */
  var __vue_inject_styles__$d = function (inject) {
    if (!inject) { return }
    inject("data-v-437d807c_0", { source: ".VHListItem[data-v-437d807c]{display:flex;align-items:center}.VHListItem-icon[data-v-437d807c]{margin-right:var(--space--small)}.VHListItem-rightContent[data-v-437d807c]{margin-left:auto}.VHListItem-icon[data-v-437d807c]:empty,.VHListItem-rightContent[data-v-437d807c]:empty{display:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$d = "data-v-437d807c";
  /* module identifier */
  var __vue_module_identifier__$d = "data-v-437d807c";
  /* functional template */
  var __vue_is_functional_template__$d = false;

  
  var VHListItem = normalizeComponent_1(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"VHLogo",attrs:{"width":_vm.width,"version":"1.1","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 148 28","xml:space":"preserve","role":"presentation"}},[_vm._ssrNode("<path d=\"M7.6,4.5c2.7,4.8,5.3,9.6,8,14.5l0.8-1.4h4.9l-4.8,8.7l-0.9,1.6L0.2,0h11.9L9.6,4.5H7.6z M15.8,0h2.1l-2.5,4.5\n\th-2.1L15.8,0z M12.9,0h2l-2.5,4.5h-2L12.9,0z\"></path> <path d=\"M21.7,4.7l-0.7,1.2h1.7l0.1-0.1l0.7-1.3h0l1.8-3.3l0-0.1l0.6-1H31l-0.6,1h0l-3,5.5L22,16.3h-0.7h-4.3l2.7-4.9\n\tl0,0l0-0.1l0,0l0-0.1l0.1-0.1l0,0l0.4-0.7h-1.7l-0.8,1.5h0L15.5,16l-2.3-4.2v0L13,11.6c1.9-3.4,4.6-8.3,6.4-11.6h4.9L21.7,4.7z\"></path> <path d=\"M47.7,7.1l-4.5,9.3h-1.8l-4.6-9.3h2.3l3.1,6.4l3.1-6.4H47.7z M65.5,9.3h-7.4v1.4H65v2.2h-6.9v1.4h7.4v2.2H56\n\tV7.1h9.5V9.3z M83.6,16.4h-2.1v-3.6h-5.3v3.6h-2.1V7.1h2.1v3.6h5.3V7.1h2.1V16.4z M94.2,16.4h-2.1V7.1h2.1V16.4z M112.6,16.4h-6.9\n\tc-0.8,0-1.5-0.3-2.1-0.8c-0.6-0.6-0.8-1.3-0.8-2.1v-3.4c0-0.8,0.3-1.5,0.8-2.1c0.6-0.6,1.3-0.8,2.1-0.8h6.9v2.2h-6.9\n\tc-0.6,0-0.8,0.3-0.8,0.8v3.4c0,0.5,0.3,0.8,0.8,0.8h6.9V16.4z M130.1,16.4h-8.9V7.1h2.1v7.1h6.8V16.4z M148.2,9.3h-7.4v1.4h6.9v2.2\n\th-6.9v1.4h7.4v2.2h-9.5V7.1h9.5V9.3z\"></path> <path d=\"M41.4,27.2v-6.3h1.2v2.5H45v-2.5h1.2v6.3H45v-2.7h-2.4v2.7H41.4z M52.2,20.9h1.2v6.3h-1.2V20.9z M59.1,25.2\n\tl1.2-0.1c0.1,0.4,0.2,0.7,0.4,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.3-0.4,0.3-0.6c0-0.1,0-0.3-0.1-0.4\n\tc-0.1-0.1-0.2-0.2-0.4-0.3c-0.1-0.1-0.5-0.1-1-0.3c-0.6-0.2-1.1-0.4-1.4-0.6c-0.4-0.3-0.6-0.8-0.6-1.3c0-0.3,0.1-0.6,0.3-0.9\n\tc0.2-0.3,0.4-0.5,0.7-0.6c0.3-0.1,0.7-0.2,1.2-0.2c0.8,0,1.3,0.2,1.7,0.5c0.4,0.3,0.6,0.8,0.6,1.4l-1.2,0c-0.1-0.3-0.2-0.6-0.3-0.7\n\tc-0.2-0.1-0.4-0.2-0.8-0.2c-0.3,0-0.6,0.1-0.8,0.2c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.1,0.1,0.3,0.2,0.4c0.2,0.1,0.5,0.3,1.1,0.4\n\tc0.6,0.1,1,0.3,1.3,0.5c0.3,0.2,0.5,0.4,0.7,0.6c0.2,0.3,0.2,0.6,0.2,1c0,0.4-0.1,0.7-0.3,1c-0.2,0.3-0.5,0.5-0.8,0.7\n\tc-0.3,0.2-0.8,0.2-1.3,0.2c-0.8,0-1.3-0.2-1.8-0.5C59.4,26.4,59.2,25.9,59.1,25.2 M71.2,27.2V22h-1.8v-1.1h4.8V22h-1.8v5.2H71.2z\n\t M79.3,24.1c0-0.6,0.1-1.2,0.3-1.6c0.1-0.3,0.3-0.6,0.6-0.9c0.2-0.3,0.5-0.4,0.8-0.6c0.4-0.2,0.8-0.2,1.3-0.2c0.9,0,1.6,0.3,2.1,0.9\n\tc0.5,0.6,0.8,1.4,0.8,2.4c0,1-0.3,1.8-0.8,2.4c-0.5,0.6-1.2,0.9-2.1,0.9c-0.9,0-1.6-0.3-2.1-0.9C79.6,25.9,79.3,25.1,79.3,24.1\n\t M80.6,24c0,0.7,0.2,1.2,0.5,1.6c0.3,0.4,0.7,0.5,1.2,0.5c0.5,0,0.9-0.2,1.2-0.5c0.3-0.4,0.5-0.9,0.5-1.6c0-0.7-0.2-1.3-0.5-1.6\n\tc-0.3-0.4-0.7-0.5-1.2-0.5c-0.5,0-0.9,0.2-1.2,0.5C80.7,22.8,80.6,23.3,80.6,24 M90.9,27.2v-6.3h2.6c0.6,0,1.1,0.1,1.4,0.2\n\tc0.3,0.1,0.5,0.3,0.7,0.6c0.2,0.3,0.3,0.6,0.3,1c0,0.5-0.1,0.9-0.4,1.2c-0.3,0.3-0.7,0.5-1.2,0.6c0.3,0.2,0.5,0.3,0.6,0.5\n\tc0.2,0.2,0.4,0.5,0.7,1l0.7,1.2h-1.5L94,25.8c-0.3-0.5-0.5-0.8-0.6-0.9c-0.1-0.1-0.2-0.2-0.4-0.3c-0.1,0-0.3-0.1-0.6-0.1h-0.2v2.6\n\tH90.9z M92.1,23.6H93c0.6,0,0.9,0,1.1-0.1c0.1-0.1,0.3-0.1,0.3-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2-0.1-0.4-0.2-0.5\n\tC94.3,22.1,94.2,22,94,22c-0.1,0-0.4,0-0.9,0h-0.9V23.6z M103,27.2v-2.6l-2.2-3.6h1.4l1.4,2.5l1.4-2.5h1.4l-2.2,3.6v2.6H103z\"></path>")])};
var __vue_staticRenderFns__$e = [];

  /* style */
  var __vue_inject_styles__$e = function (inject) {
    if (!inject) { return }
    inject("data-v-3672d331_0", { source: ".VHLogo[data-v-3672d331]{height:auto;display:block;flex:0 0 auto}.VHLogo>path[data-v-3672d331]{fill:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$e = "data-v-3672d331";
  /* module identifier */
  var __vue_module_identifier__$e = "data-v-3672d331";
  /* functional template */
  var __vue_is_functional_template__$e = false;

  
  var VHLogo = normalizeComponent_1(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
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
//
//
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
var __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"VHLogo",attrs:{"width":_vm.width,"version":"1.1","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 28","xml:space":"preserve","role":"presentation"}},[_vm._ssrNode("<path d=\"M7.6,4.5c2.7,4.9,5.4,9.7,8.1,14.6l0.8-1.4h5l-4.8,8.7L15.7,28L0.2,0h11.9L9.7,4.5H7.6z M15.9,0H18l-2.5,4.5\n\th-2.1L15.9,0z M13,0H15l-2.5,4.5h-2.1L13,0z\"></path> <path d=\"M21.9,4.7l-0.7,1.2h1.7L23,5.8l0.7-1.3h0l1.9-3.3l0-0.1L26.2,0h5l-0.6,1.1h0l-3.1,5.5l-5.4,9.8h-0.7h-4.3l2.7-5\n\tl0,0l0-0.1l0,0l0-0.1l0.1-0.1l0,0l0.4-0.7h-1.7l-0.8,1.5h0l-2.3,4.2l-2.3-4.2v0l-0.1-0.2C15,8.2,17.7,3.3,19.5,0h5L21.9,4.7z\"></path>")])};
var __vue_staticRenderFns__$f = [];

  /* style */
  var __vue_inject_styles__$f = function (inject) {
    if (!inject) { return }
    inject("data-v-47fb9ed8_0", { source: ".VHLogo[data-v-47fb9ed8]{height:auto;display:block;flex:0 0 auto}.VHLogo>path[data-v-47fb9ed8]{fill:var(--color--white)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$f = "data-v-47fb9ed8";
  /* module identifier */
  var __vue_module_identifier__$f = "data-v-47fb9ed8";
  /* functional template */
  var __vue_is_functional_template__$f = false;

  
  var VHLogoMini = normalizeComponent_1(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
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

var script$g = {
  name: 'VhKbbLogo',
};/* script */
var __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img src=\"https://www.vehiclehistory.com/images/logo_kbb_vert_110x201.png\" alt=\"KBB Logo\" class=\"KBBLogo\">")])};
var __vue_staticRenderFns__$g = [];

  /* style */
  var __vue_inject_styles__$g = function (inject) {
    if (!inject) { return }
    inject("data-v-3b140b38_0", { source: ".KBBLogo[data-v-3b140b38]{width:58px;height:auto}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$g = "data-v-3b140b38";
  /* module identifier */
  var __vue_module_identifier__$g = "data-v-3b140b38";
  /* functional template */
  var __vue_is_functional_template__$g = false;

  
  var VHKbbLogo = normalizeComponent_1(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
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

var script$h = {
  name: 'VhHiisLogo',
};/* script */
var __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"IIHSLogo",attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","x":"0px","y":"0px","viewBox":"0 0 750 374.76","xml:space":"preserve","role":"presentation"}},[_vm._ssrNode("<path d=\"M335.13 219.2h57.58v148.49h-57.58zM335.13 7.07h57.58V139.4h-57.58z\" class=\"path1\"></path> <path d=\"M0 7.07h93.94v360.62H0zM116.66 7.07h93.94v360.62h-93.94zM241.19 7.07h93.94V139.4h57.57V7.07h93.94v360.62H392.7V219.2h-57.57v148.49h-93.94zM652.52 111.11v-8.58c0-21.22-8.58-38.89-26.77-38.89-20.2 0-29.29 15.66-29.29 31.82 0 71.21 153.54 36.36 153.54 168.18 0 76.77-45 111.12-127.78 111.12C544.44 374.76 501 348 501 273.24v-12.63h90.92v8.59c0 30.81 12.62 41.92 30.8 41.92 19.2 0 30.31-15.15 30.31-34.85 0-71.21-147.48-35.86-147.48-163.64C505.55 39.9 544.44 0 623.73 0 705.55 0 740.4 33.84 740.4 111.11z\" class=\"path2\"></path>")])};
var __vue_staticRenderFns__$h = [];

  /* style */
  var __vue_inject_styles__$h = function (inject) {
    if (!inject) { return }
    inject("data-v-1a3bcdfd_0", { source: ".IIHSLogo[data-v-1a3bcdfd]{width:132px;height:auto;display:block}.IIHSLogo .path1[data-v-1a3bcdfd]{fill:#ffcc32}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$h = "data-v-1a3bcdfd";
  /* module identifier */
  var __vue_module_identifier__$h = "data-v-1a3bcdfd";
  /* functional template */
  var __vue_is_functional_template__$h = false;

  
  var VHIihsLogo = normalizeComponent_1(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
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

var script$i = {
  name: 'VhNhtsaLogo',
};/* script */
var __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img src=\"https://www.vehiclehistory.com/images/nhtsa.png\" alt=\"NHTSA Logo\" class=\"NhtsaLogo\">")])};
var __vue_staticRenderFns__$i = [];

  /* style */
  var __vue_inject_styles__$i = function (inject) {
    if (!inject) { return }
    inject("data-v-639e43fc_0", { source: ".NhtsaLogo[data-v-639e43fc]{width:140px;height:auto}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$i = "data-v-639e43fc";
  /* module identifier */
  var __vue_module_identifier__$i = "data-v-639e43fc";
  /* functional template */
  var __vue_is_functional_template__$i = false;

  
  var VHNhtsaLogo = normalizeComponent_1(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
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

var script$j = {
  name: 'VhJdpowerLogo',
};/* script */
var __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img src=\"https://www.vehiclehistory.com/images/jd-power.png\" alt=\"J.D. Power Logo\" class=\"JdpowerLogo\">")])};
var __vue_staticRenderFns__$j = [];

  /* style */
  var __vue_inject_styles__$j = function (inject) {
    if (!inject) { return }
    inject("data-v-9ad281b2_0", { source: ".JdpowerLogo[data-v-9ad281b2]{width:140px;height:auto;display:block}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$j = "data-v-9ad281b2";
  /* module identifier */
  var __vue_module_identifier__$j = "data-v-9ad281b2";
  /* functional template */
  var __vue_is_functional_template__$j = false;

  
  var VHJdpowerLogo = normalizeComponent_1(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
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

var script$k = {
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
var __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function (_h,_vm) {
var _obj;
var _c=_vm._c;return _c('div',{staticClass:"VHModule",class:( _obj = {}, _obj[("VHModule--" + (_vm.props.size))] = _vm.props.size, _obj['VHModule--anchor'] =  _vm.props.anchorId, _obj[_vm.data.staticClass] = _vm.data.staticClass, _obj ),attrs:{"id":_vm.props.anchorId}},[_vm._t("default")],2)};
var __vue_staticRenderFns__$k = [];

  /* style */
  var __vue_inject_styles__$k = function (inject) {
    if (!inject) { return }
    inject("data-v-595c10b4_0", { source: ".VHModule[data-v-595c10b4]:first-child{margin-top:0}.VHModule--small[data-v-595c10b4]{margin-top:var(--module--mobile-margin-small);margin-bottom:var(--module--mobile-margin-small)}.VHModule--medium[data-v-595c10b4]{margin-top:var(--module--mobile-margin-medium);margin-bottom:var(--module--mobile-margin-medium)}.VHModule--large[data-v-595c10b4]{margin-top:var(--module--mobile-margin-large);margin-bottom:var(--module--mobile-margin-large)}.VHModule--small.VHModule--anchor[data-v-595c10b4]{padding-top:calc(var(--space--medium) + var(--Header--mobile-height));margin-top:calc(var(--module--mobile-margin-small) * -1)}.VHModule--medium.VHModule--anchor[data-v-595c10b4]{padding-top:calc(var(--space--medium) + var(--Header--mobile-height));margin-top:calc(var(--module--mobile-margin-medium) * -1)}.VHModule--large.VHModule--anchor[data-v-595c10b4]{padding-top:calc(var(--space--medium) + var(--Header--mobile-height));margin-top:calc(var(--module--mobile-margin-large) * -1)}@media (--viewport--medium-up){.VHModule--small[data-v-595c10b4]{margin-top:var(--module--desktop-margin-small);margin-bottom:var(--module--desktop-margin-small)}.VHModule--medium[data-v-595c10b4]{margin-top:var(--module--desktop-margin-medium);margin-bottom:var(--module--desktop-margin-medium)}.VHModule--large[data-v-595c10b4]{margin-top:var(--module--desktop-margin-large);margin-bottom:var(--module--desktop-margin-large)}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$k = "data-v-595c10b4";
  /* module identifier */
  var __vue_module_identifier__$k = "data-v-595c10b4";
  /* functional template */
  var __vue_is_functional_template__$k = true;

  
  var VHModule = normalizeComponent_1(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.nuxt && _vm.href ? 'nuxt-link' : _vm.href ? 'a' : 'button',_vm._g({tag:"component",staticClass:"VHNavigationButton",class:{
    'VHNavigationButton--block': _vm.block,
    'VHNavigationButton--disabled': _vm.disabled,
    'VHNavigationButton--current': _vm.current,
    'VHNavigationButton--static': _vm.isStatic,
  },attrs:{"href":!_vm.nuxt && _vm.href ? _vm.href : null,"to":_vm.nuxt && _vm.href,"type":_vm.nuxt && _vm.href ? _vm.type : null}},_vm.$listeners),[_c('span',{staticClass:"VHNavigationButton-iconLeft"},[_vm._t("icon-left")],2),_vm._v(" "),_c('span',{staticClass:"VHNavigationButton-label"},[_vm._t("default")],2),_vm._v(" "),(!_vm.isStatic && !_vm.current)?_c('span',{staticClass:"VHNavigationButton-iconRight"},[_c('vh-icon',{attrs:{"name":"chevronRight","size":"medium","color":"darkGrey"}})],1):_vm._e()])};
var __vue_staticRenderFns__$l = [];

  /* style */
  var __vue_inject_styles__$l = function (inject) {
    if (!inject) { return }
    inject("data-v-5da3fab3_0", { source: ".VHNavigationButton[data-v-5da3fab3]{--VHNavigationButton-borderColor:var(--color--grey300);--VHNavigationButton-borderWidth:1px;--VHNavigationButton-borderRadius:0;--VHNavigationButton-color:var(--color--blue700);--VHNavigationButton--disabled-opacity:0.4;display:flex;align-items:center;user-select:none;height:3.75rem;min-width:15rem;border:var(--VHNavigationButton-borderWidth) solid var(--VHNavigationButton-borderColor);color:var(--VHNavigationButton-color);text-decoration:none;text-transform:none;border-radius:var(--VHNavigationButton-borderRadius);font-size:var(--font-size--medium);font-weight:var(--font-weight--normal);outline:0;cursor:pointer;line-height:1;-webkit-appearance:none;padding:0 var(--space--medium);background:0 0;transition:background-color 50ms ease-out 50ms,border 50ms ease-out 50ms}.VHNavigationButton[data-v-5da3fab3]:hover{background-color:var(--color--grey100);border-color:var(--color--grey300)}.VHNavigationButton[data-v-5da3fab3]:active,.VHNavigationButton[data-v-5da3fab3]:focus{background-color:var(--color--grey200);border-color:var(--color--grey300)}.VHNavigationButton--disabled[data-v-5da3fab3]{pointer-events:none;color:var(--text-color);opacity:var(--VHNavigationButton--disabled-opacity)}.VHNavigationButton--current[data-v-5da3fab3]{pointer-events:none;color:var(--text-color);background-color:var(--color--grey100);border-color:var(--color--grey300);font-weight:var(--font-weight--medium)}.VHNavigationButton--static[data-v-5da3fab3]{pointer-events:none;color:var(--text-color);background-color:var(--color--white);border-color:var(--color--grey300)}.VHNavigationButton-label[data-v-5da3fab3]{flex:1 1 auto;margin-right:auto;text-align:left}.VHNavigationButton-iconLeft[data-v-5da3fab3]{margin-right:var(--space--medium)}.VHNavigationButton-iconLeft[data-v-5da3fab3]:empty{display:none}.VHNavigationButton-iconRight[data-v-5da3fab3]{flex:0 0 32px;margin-right:calc(var(--space--small) * -1)}.VHNavigationButton--block[data-v-5da3fab3]{width:100%;max-width:100%;justify-content:center}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$l = "data-v-5da3fab3";
  /* module identifier */
  var __vue_module_identifier__$l = "data-v-5da3fab3";
  /* functional template */
  var __vue_is_functional_template__$l = false;

  
  var VHNavigationButton = normalizeComponent_1(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$l,
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
//
//
//
//
//
//

var script$m = {
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
var __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Progress",class:_vm.computedSize,attrs:{"role":"presentation"}},[_vm._ssrNode("<div class=\"Progress-track\"><div"+(_vm._ssrClass("Progress-bar",_vm.computedColor))+(_vm._ssrStyle(null,{ width: _vm.computedWidth }, null))+"></div></div>")])};
var __vue_staticRenderFns__$m = [];

  /* style */
  var __vue_inject_styles__$m = function (inject) {
    if (!inject) { return }
    inject("data-v-32af09fc_0", { source: ".Progress[data-v-32af09fc]{display:block;height:var(--space--large)}.Progress-track[data-v-32af09fc]{background-color:var(--color--grey200);height:100%;width:100%}.Progress-bar[data-v-32af09fc]{height:100%;width:0}.Progress--small[data-v-32af09fc]{height:var(--space--small)}.Progress--medium[data-v-32af09fc]{height:var(--space--medium)}.Progress--large[data-v-32af09fc]{height:var(--space--large)}.Progress-bar--orange[data-v-32af09fc]{background-color:var(--color--orange500)}.Progress-bar--yellow[data-v-32af09fc]{background-color:var(--color--yellow500)}.Progress-bar--red[data-v-32af09fc]{background-color:var(--color--red500)}.Progress-bar--green[data-v-32af09fc]{background-color:var(--color--green700)}.Progress-bar--blue[data-v-32af09fc]{background-color:var(--color--blue500)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$m = "data-v-32af09fc";
  /* module identifier */
  var __vue_module_identifier__$m = "data-v-32af09fc";
  /* functional template */
  var __vue_is_functional_template__$m = false;

  
  var VHProgressBar = normalizeComponent_1(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$m,
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var script$n = {
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
var __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"Progress",class:_vm.computedSize,attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 170 170"}},[_vm._ssrNode("<g transform=\"rotate(90 85 85)\"><circle stroke-width=\"22\" fill=\"none\" cx=\"85\" cy=\"85\""+(_vm._ssrAttr("r",_vm.radius))+" class=\"Progress-track\"></circle></g> <g transform=\"rotate(90 85 85)\"><circle stroke-width=\"22\""+(_vm._ssrAttr("stroke-dasharray",_vm.strokeDasharray))+" stroke-linecap=\"butt\" fill=\"none\" cx=\"85\" cy=\"85\""+(_vm._ssrAttr("r",_vm.radius))+(_vm._ssrClass("Progress-bar",_vm.computedColor))+"></circle></g> <text x=\"86\" y=\"106\" text-anchor=\"middle\" class=\"Progress-label\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.label)+"\n  ")+"</text>")])};
var __vue_staticRenderFns__$n = [];

  /* style */
  var __vue_inject_styles__$n = function (inject) {
    if (!inject) { return }
    inject("data-v-8abc044c_0", { source: ".Progress[data-v-8abc044c]{display:inline-block;font-weight:var(--font-weight--normal)}.Progress-track[data-v-8abc044c]{stroke:var(--color--grey200)}.Progress-bar[data-v-8abc044c]{height:100%;width:0}.Progress-label[data-v-8abc044c]{fill:var(--text-color);font-size:60px}.Progress--small[data-v-8abc044c]{height:36px;width:36px}.Progress--medium[data-v-8abc044c]{height:46px;width:46px}.Progress--large[data-v-8abc044c]{height:64px;width:64px}.Progress-bar--green[data-v-8abc044c]{stroke:var(--color--green700)}.Progress-bar--orange[data-v-8abc044c]{stroke:var(--color--orange500)}.Progress-bar--blue[data-v-8abc044c]{stroke:var(--color--blue500)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$n = "data-v-8abc044c";
  /* module identifier */
  var __vue_module_identifier__$n = "data-v-8abc044c";
  /* functional template */
  var __vue_is_functional_template__$n = false;

  
  var VHProgressDonut = normalizeComponent_1(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$n,
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

var script$o = {
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
        'VHRating--readonly': this.readonly,
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
var __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VHRating",class:_vm.computedClasses},_vm._l((5),function(i){return _vm._ssrNode("<div class=\"VHRating-iconContainer\">","</div>",[_c('vh-icon',_vm._b({key:i,attrs:{"size":_vm.size}},'vh-icon',_vm.individualIconProps(i),false))],1)}),0)};
var __vue_staticRenderFns__$o = [];

  /* style */
  var __vue_inject_styles__$o = function (inject) {
    if (!inject) { return }
    inject("data-v-145b43ec_0", { source: ".VHRating[data-v-145b43ec]{display:flex}.VHRating-iconContainer[data-v-145b43ec]{cursor:pointer}.VHRating--readonly[data-v-145b43ec]{pointer-events:none}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$o = "data-v-145b43ec";
  /* module identifier */
  var __vue_module_identifier__$o = "data-v-145b43ec";
  /* functional template */
  var __vue_is_functional_template__$o = false;

  
  var VHRating = normalizeComponent_1(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$o,
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

var script$p = {
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
var __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('no-ssr',[_c('v-popover',{staticClass:"VHTooltip",attrs:{"trigger":_vm.mode}},[_c('vh-icon',{attrs:{"name":"helpCircleOutline","color":"grey","size":"small"}}),_vm._v(" "),_c('div',{attrs:{"slot":"popover"},slot:"popover"},[_vm._t("default")],2)],1)],1)};
var __vue_staticRenderFns__$p = [];

  /* style */
  var __vue_inject_styles__$p = function (inject) {
    if (!inject) { return }
    inject("data-v-1ab9d50a_0", { source: ".VHTooltip{display:inline-block}.tooltip{display:block!important;z-index:var(--z-index--medium)}.tooltip .tooltip-inner{font-size:var(--font-size--xSmall)!important;background-color:var(--color--grey100)!important;border:1px solid var(--color--grey100)!important;border-radius:3px!important;padding:5px 5px 4px!important;color:var(--color--grey600)!important;box-shadow:2px 2px 3px hsla(0,0%,63%,.4)}.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:var(--color--grey100);z-index:1}.tooltip[x-placement^=top]{margin-bottom:5px}.tooltip[x-placement^=top] .tooltip-arrow{border-width:5px 5px 0 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=bottom]{margin-top:5px}.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 5px 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=right]{margin-left:5px}.tooltip[x-placement^=right] .tooltip-arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip[x-placement^=left]{margin-right:5px}.tooltip[x-placement^=left] .tooltip-arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip.popover .popover-inner{background:#f9f9f9;color:#000;padding:24px;border-radius:5px;box-shadow:0 5px 30px rgba(black,.1);max-width:300px}.tooltip.popover .popover-arrow{border-color:#f9f9f9}.tooltip[aria-hidden=true]{visibility:hidden;opacity:0;transition:opacity .15s,visibility .15s}.tooltip[aria-hidden=false]{visibility:visible;opacity:1;transition:opacity .15s}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$p = undefined;
  /* module identifier */
  var __vue_module_identifier__$p = "data-v-1ab9d50a";
  /* functional template */
  var __vue_is_functional_template__$p = false;

  
  var VHTooltip = normalizeComponent_1(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$p,
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$q = {
  name: 'VhVideoPreview',
  props: {
    /**
     * VHVideo will force play
     */
    forcePlay: {
      type: Boolean,
      default: false,
    },
    /**
     * VHVideoReview will choose quality of preview image
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
var __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"VHVideo"},[_vm._ssrNode("<div class=\"VHVideo-player\">","</div>",[(!_vm.loadPlayer)?_vm._ssrNode("<div class=\"VHVideo-preview\">","</div>",[_vm._ssrNode("<div class=\"VHVideo-previewImageContainer\"><img"+(_vm._ssrAttr("src",_vm.previewImgSrc))+" class=\"VHVideo-previewImage\"></div> "),_vm._ssrNode("<div class=\"VHVideo-previewPlayButtonContainer\">","</div>",[_c('vh-icon',{staticClass:"VHVideo-previewPlayButton",attrs:{"color":"white","name":"playCircle"}})],1)],2):_c('no-ssr',[_c('youtube',_vm._g({ref:"youtube",attrs:{"video-id":_vm.videoId,"player-vars":{ autoplay: 1 }},on:{"ready":_vm.handleForcePlay,"playing":_vm.handlePlaying,"paused":_vm.handlePaused}},_vm.$listeners))],1)],1)])};
var __vue_staticRenderFns__$q = [];

  /* style */
  var __vue_inject_styles__$q = function (inject) {
    if (!inject) { return }
    inject("data-v-207933d6_0", { source: ".VHVideo[data-v-207933d6]{background-color:#000}.VHVideo-player[data-v-207933d6]{overflow:hidden;padding-bottom:56.25%;position:relative;height:0}.VHVideo-preview[data-v-207933d6]{position:relative;cursor:pointer;background-color:#000;width:100%;height:100%}.VHVideo-player .VHVideo-preview[data-v-207933d6],.VHVideo-player[data-v-207933d6] iframe{left:0;top:0;height:100%;width:100%;position:absolute}.VHVideo-previewImageContainer[data-v-207933d6]{position:relative;height:100%;overflow:hidden}.VHVideo-previewImage[data-v-207933d6]{position:absolute;top:50%;transform:translateY(-50%);width:100%;height:auto}.VHVideo-previewPlayButtonContainer[data-v-207933d6]{cursor:pointer;position:absolute;margin-left:auto;margin-right:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.VHVideo-previewPlayButton[data-v-207933d6]{width:48px;height:48px;opacity:.75}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$q = "data-v-207933d6";
  /* module identifier */
  var __vue_module_identifier__$q = "data-v-207933d6";
  /* functional template */
  var __vue_is_functional_template__$q = false;

  
  var VHVideo = normalizeComponent_1(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    undefined,
    server
  );/* eslint-disable import/prefer-default-export */var components = /*#__PURE__*/Object.freeze({VHAccordion: VHAccordion,VHAccordionItem: VHAccordionItem,VHAvatar: VHAvatar,VHBadge: VHBadge,VHButton: VHButton,VHCard: VHCard,VHChip: VHChip,VHContainer: VHContainer,VHGroup: VHGroup,VHHeroButton: VHHeroButton,VHIcon: VHIcon,VHImage: VHImage,VHList: VHList,VHListItem: VHListItem,VHLogo: VHLogo,VHLogoMini: VHLogoMini,VHKbbLogo: VHKbbLogo,VHIihsLogo: VHIihsLogo,VHNhtsaLogo: VHNhtsaLogo,VHJdpowerLogo: VHJdpowerLogo,VHModule: VHModule,VHNavigationButton: VHNavigationButton,VHProgressBar: VHProgressBar,VHProgressDonut: VHProgressDonut,VHRating: VHRating,VHTooltip: VHTooltip,VHVideo: VHVideo});// Import vue components

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
}exports.VHAccordion=VHAccordion;exports.VHAccordionItem=VHAccordionItem;exports.VHAvatar=VHAvatar;exports.VHBadge=VHBadge;exports.VHButton=VHButton;exports.VHCard=VHCard;exports.VHChip=VHChip;exports.VHContainer=VHContainer;exports.VHGroup=VHGroup;exports.VHHeroButton=VHHeroButton;exports.VHIcon=VHIcon;exports.VHIihsLogo=VHIihsLogo;exports.VHImage=VHImage;exports.VHJdpowerLogo=VHJdpowerLogo;exports.VHKbbLogo=VHKbbLogo;exports.VHList=VHList;exports.VHListItem=VHListItem;exports.VHLogo=VHLogo;exports.VHLogoMini=VHLogoMini;exports.VHModule=VHModule;exports.VHNavigationButton=VHNavigationButton;exports.VHNhtsaLogo=VHNhtsaLogo;exports.VHProgressBar=VHProgressBar;exports.VHProgressDonut=VHProgressDonut;exports.VHRating=VHRating;exports.VHTooltip=VHTooltip;exports.VHVideo=VHVideo;exports.default=plugin;