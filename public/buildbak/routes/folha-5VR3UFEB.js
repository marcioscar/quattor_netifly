import {
  FaCaretRight
} from "/build/_shared/chunk-ETBWFWNG.js";
import {
  Edit,
  Money
} from "/build/_shared/chunk-FQZ62RZM.js";
import {
  require_folha
} from "/build/_shared/chunk-3V4LHCFL.js";
import {
  require_auth
} from "/build/_shared/chunk-OZVJ2KGS.js";
import {
  Navbar
} from "/build/_shared/chunk-2CCO43HO.js";
import "/build/_shared/chunk-VWXJ4X5T.js";
import {
  NavLink,
  Outlet,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/folha.tsx
var import_react2 = __toESM(require_react());
var import_folha = __toESM(require_folha());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Folha() {
  const { funcionarios } = useLoaderData();
  const [filtrar, setFiltrar] = (0, import_react2.useState)("");
  const funcFilter = funcionarios == null ? void 0 : funcionarios.filter(
    (funcionarios2) => funcionarios2.nome.toLowerCase().includes(filtrar.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/folha.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/folha.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "flex  justify-center font-bold text-slate-500 text-xl", children: "FOLHA DE PAGAMENTO" }, void 0, false, {
      fileName: "app/routes/folha.tsx",
      lineNumber: 28,
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
                fileName: "app/routes/folha.tsx",
                lineNumber: 41,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/folha.tsx",
            lineNumber: 34,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/folha.tsx",
          lineNumber: 33,
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
            fileName: "app/routes/folha.tsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/folha.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          className: " flex mr-4  focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
          to: "new",
          children: "Nova"
        },
        void 0,
        false,
        {
          fileName: "app/routes/folha.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/folha.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-3/4 mt-4 text-sm text-left border-l-2 border-r-2 border-slate-100 text-gray-500 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-10 py-3 text-left", children: "Nome" }, void 0, false, {
          fileName: "app/routes/folha.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Fun\xE7\xE3o" }, void 0, false, {
          fileName: "app/routes/folha.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3 text-left", children: "Modalidade" }, void 0, false, {
          fileName: "app/routes/folha.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3 text-center", children: "Pago" }, void 0, false, {
          fileName: "app/routes/folha.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3" }, void 0, false, {
          fileName: "app/routes/folha.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3" }, void 0, false, {
          fileName: "app/routes/folha.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/folha.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/folha.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: funcFilter.map((func) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "tr",
        {
          className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", className: "px-6  whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-gray-800", children: func.nome }, void 0, false, {
                fileName: "app/routes/folha.tsx",
                lineNumber: 95,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex items-center font-light text-xs text-blue-500", children: [
                func.salarios.map((s) => s.valor).pop().toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaCaretRight, { className: "mr-1 ml-1" }, void 0, false, {
                  fileName: "app/routes/folha.tsx",
                  lineNumber: 106,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-600", children: func.salarios.map((s) => s.valor + s.fgts + s.ferias + s.decimo).pop().toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/folha.tsx",
                  lineNumber: 107,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaCaretRight, { className: "mr-1 ml-1" }, void 0, false, {
                  fileName: "app/routes/folha.tsx",
                  lineNumber: 118,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600", children: func.conta }, void 0, false, {
                  fileName: "app/routes/folha.tsx",
                  lineNumber: 119,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/folha.tsx",
                lineNumber: 96,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/folha.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/folha.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 ", children: func.funcao }, void 0, false, {
              fileName: "app/routes/folha.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 ", children: func.modalidade }, void 0, false, {
              fileName: "app/routes/folha.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 text-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "checkbox",
                readOnly: true,
                checked: !!func.salarios.map((s) => s.pago).pop()
              },
              void 0,
              false,
              {
                fileName: "app/routes/folha.tsx",
                lineNumber: 126,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/folha.tsx",
              lineNumber: 125,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-2 py-3 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              NavLink,
              {
                to: `salario/${func.id}`,
                className: "font-medium text-green-600 dark:text-blue-500 hover:underline",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, {}, void 0, false, {
                  fileName: "app/routes/folha.tsx",
                  lineNumber: 138,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/folha.tsx",
                lineNumber: 134,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/folha.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4  py-3 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              NavLink,
              {
                to: `${func.id}`,
                className: "font-medium text-stone-500 ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Edit, {}, void 0, false, {
                  fileName: "app/routes/folha.tsx",
                  lineNumber: 146,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/folha.tsx",
                lineNumber: 142,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/folha.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this)
          ]
        },
        func.id,
        true,
        {
          fileName: "app/routes/folha.tsx",
          lineNumber: 89,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/folha.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/folha.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/folha.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/folha.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  Folha as default
};
//# sourceMappingURL=/build/routes/folha-5VR3UFEB.js.map
