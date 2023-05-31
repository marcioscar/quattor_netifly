import {
  require_receitas
} from "/build/_shared/chunk-D2PJBQEV.js";
import {
  Navbar
} from "/build/_shared/chunk-2CCO43HO.js";
import {
  NavLink,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/receitas/index_bak.tsx
var import_react2 = __toESM(require_react());
var import_receitas = __toESM(require_receitas());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Receitas() {
  const { receitas } = useLoaderData();
  const [filtrar, setFiltrar] = (0, import_react2.useState)("");
  const receitaFilter = receitas == null ? void 0 : receitas.filter(
    (receitas2) => receitas2.centro.toLowerCase().includes(filtrar.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/receitas/index_bak.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "flex  justify-center font-bold text-slate-500 text-xl", children: "RECEITAS" }, void 0, false, {
      fileName: "app/routes/receitas/index_bak.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-around items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-1/4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "svg",
          {
            className: "w-5 h-5 text-gray-500 dark:text-gray-400",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              },
              void 0,
              false,
              {
                fileName: "app/routes/receitas/index_bak.tsx",
                lineNumber: 37,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/receitas/index_bak.tsx",
            lineNumber: 30,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "search",
            id: "search",
            value: filtrar,
            onChange: (e) => setFiltrar(e.target.value),
            placeholder: "Procurar",
            className: "block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
          },
          void 0,
          false,
          {
            fileName: "app/routes/receitas/index_bak.tsx",
            lineNumber: 45,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/receitas/index_bak.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          className: " flex mr-4  focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
          to: "new",
          children: "Nova"
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 55,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/receitas/index_bak.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-3/4 text-sm text-left mt-4 text-gray-500 border-l-2 border-r-2 border-slate-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Centro" }, void 0, false, {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Refer\xEAncia" }, void 0, false, {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3 text-right", children: "Valor" }, void 0, false, {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Editar" }, void 0, false, {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/receitas/index_bak.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/receitas/index_bak.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: receitaFilter.map((rec) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "tr",
        {
          className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "th",
              {
                scope: "row",
                className: "px-6  font-medium text-gray-900 dark:text-white whitespace-nowrap",
                children: rec.centro
              },
              void 0,
              false,
              {
                fileName: "app/routes/receitas/index_bak.tsx",
                lineNumber: 87,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 ", children: rec.referencia }, void 0, false, {
              fileName: "app/routes/receitas/index_bak.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6  text-right ", children: rec.valor.toLocaleString("pt-br", {
              minimumFractionDigits: 2
            }) }, void 0, false, {
              fileName: "app/routes/receitas/index_bak.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6  py-3 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              NavLink,
              {
                to: `${rec.id}`,
                className: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-3h-10.721v16h20v-10.573l-2 2.023z" }, void 0, false, {
                      fileName: "app/routes/receitas/index_bak.tsx",
                      lineNumber: 114,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/receitas/index_bak.tsx",
                    lineNumber: 108,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/receitas/index_bak.tsx",
                lineNumber: 104,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/receitas/index_bak.tsx",
              lineNumber: 103,
              columnNumber: 17
            }, this)
          ]
        },
        rec.id,
        true,
        {
          fileName: "app/routes/receitas/index_bak.tsx",
          lineNumber: 83,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/receitas/index_bak.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/receitas/index_bak.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/receitas/index_bak.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/receitas/index_bak.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  Receitas as default
};
//# sourceMappingURL=/build/routes/receitas/index_bak-SJ3OSY4B.js.map
