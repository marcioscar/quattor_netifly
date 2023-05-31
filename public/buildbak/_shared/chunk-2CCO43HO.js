import {
  Form,
  NavLink,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/Navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Navbar() {
  const activeClassName = "text-orange-500";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-stone-900 text-white border-gray-200 px-2 mb-4 sm:px-4 py-2.5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-wrap justify-between items-center mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "/logo_branco.svg",
        className: "mr-3 h-10 sm:h-9",
        alt: "Quattor Logo"
      },
      void 0,
      false,
      {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 9,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-8 font-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "/",
          className: ({ isActive }) => isActive ? activeClassName : void 0,
          children: "HOME"
        },
        void 0,
        false,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "/despesas",
          className: ({ isActive }) => isActive ? activeClassName : void 0,
          children: "DESPESAS"
        },
        void 0,
        false,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "/receitas",
          className: ({ isActive }) => isActive ? activeClassName : void 0,
          children: "RECEITAS"
        },
        void 0,
        false,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 30,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "/folha",
          className: ({ isActive }) => isActive ? activeClassName : void 0,
          children: "FOLHA"
        },
        void 0,
        false,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "/fluxo",
          className: ({ isActive }) => isActive ? activeClassName : void 0,
          children: "FLUXO"
        },
        void 0,
        false,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-white bg-emerald-600 hover:bg-emerald-800   rounded-lg text-sm px-5 py-2.5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "/novo",
          className: ({ isActive }) => isActive ? activeClassName : void 0,
          children: "NOVO USU\xC1RIO"
        },
        void 0,
        false,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 54,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-white bg-amber-600 hover:bg-amber-800   rounded-lg text-sm px-5 py-2.5 ", children: "Sair" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

export {
  Navbar
};
//# sourceMappingURL=/build/_shared/chunk-2CCO43HO.js.map
