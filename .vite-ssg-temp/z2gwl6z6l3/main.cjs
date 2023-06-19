"use strict";
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const vueRouter = require("vue-router");
const pinia = require("pinia");
const globals = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>Test yay!</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/f3ve/personal-projects/vue-starter-template/src/App.vue"]]);
const layouts = {};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      meta: route.meta,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: route.path === "/" ? [route] : [{ ...route, path: "" }]
    };
  });
}
const routes$1 = [];
const routes = setupLayouts(routes$1);
const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory("/"),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition;
    return { top: 0, left: 0 };
  },
  routes
});
const app = vue.createApp(App);
app.use(pinia.createPinia());
app.use(router);
app.mount("#app");
