import {
  require_receitas
} from "/build/_shared/chunk-HLCOEEE4.js";
import "/build/_shared/chunk-D4IAWJ57.js";
import "/build/_shared/chunk-UP4WGC7H.js";
import {
  Navbar
} from "/build/_shared/chunk-2CCO43HO.js";
import {
  require_despesas
} from "/build/_shared/chunk-PGYEW3RH.js";
import {
  isRouteErrorResponse,
  require_jsx_dev_runtime,
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/fluxo_bak.tsx
var import_receitas = __toESM(require_receitas());
var import_despesas = __toESM(require_despesas());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Fluxo() {
  const { totReceitas, ReceitasM, ReceitasMJun, recDataun, desData } = useLoaderData();
  function invert(d) {
    const a = d.toString().slice(0, 10).replace(/-/g, "/");
    return a.substr(8, 2) + "/" + a.substr(5, 2) + "/" + a.substr(0, 4);
  }
  const dias = [
    "01/05/2023",
    "02/05/2023",
    "03/05/2023",
    "04/05/2023",
    "05/05/2023",
    "06/05/2023",
    "07/05/2023",
    "08/05/2023",
    "09/05/2023",
    "10/05/2023",
    "11/05/2023",
    "12/05/2023",
    "13/05/2023",
    "14/05/2023",
    "15/05/2023",
    "16/05/2023",
    "17/05/2023",
    "18/05/2023",
    "19/05/2023",
    "20/05/2023",
    "21/05/2023",
    "22/05/2023",
    "23/05/2023",
    "24/05/2023",
    "25/05/2023",
    "26/05/2023",
    "27/05/2023",
    "28/05/2023",
    "29/05/2023",
    "30/05/2023",
    "31/05/2023"
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/fluxo_bak.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex container mx-auto flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block min-w-full py-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full text-left text-sm font-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "border-b font-medium dark:border-neutral-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-center", children: "Receitas" }, void 0, false, {
        fileName: "app/routes/fluxo_bak.tsx",
        lineNumber: 106,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/fluxo_bak.tsx",
        lineNumber: 105,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/fluxo_bak.tsx",
        lineNumber: 104,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: dias.map((d, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "td",
        {
          scope: "col",
          className: "px-3 font-normal text-gray-500 text-center py-4 ",
          children: [
            d.substr(0, 5),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-base font-semibold divide-y divide-dashed divide-gray-600", children: recDataun.filter((r) => r.data === d).map(
              (data) => {
                var _a;
                return (_a = data._sum.valor) == null ? void 0 : _a.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                });
              }
            ) }, void 0, false, {
              fileName: "app/routes/fluxo_bak.tsx",
              lineNumber: 118,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-red-500 text-base font-semibold divide-y divide-dashed divide-gray-600", children: desData.filter((r) => invert(r.data) === d).map(
              (data) => (data._sum.valor * -1).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ) }, void 0, false, {
              fileName: "app/routes/fluxo_bak.tsx",
              lineNumber: 128,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: recDataun.filter((r) => r.data === d).map((data) => data._sum.valor) + recDataun.filter(
              (r) => r.data === (d.substr(0, 2) - 1 < 10 ? "0" + (d.substr(0, 2) - 1) : d.substr(0, 2) - 1) + d.substr(2, 10)
            ).map((data) => data._sum.valor) }, void 0, false, {
              fileName: "app/routes/fluxo_bak.tsx",
              lineNumber: 150,
              columnNumber: 25
            }, this)
          ]
        },
        index,
        true,
        {
          fileName: "app/routes/fluxo_bak.tsx",
          lineNumber: 112,
          columnNumber: 23
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/fluxo_bak.tsx",
        lineNumber: 110,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/fluxo_bak.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fluxo_bak.tsx",
      lineNumber: 103,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/fluxo_bak.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/fluxo_bak.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/fluxo_bak.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/fluxo_bak.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fluxo_bak.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "ERRO" }, void 0, false, {
      fileName: "app/routes/fluxo_bak.tsx",
      lineNumber: 205,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
    fileName: "app/routes/fluxo_bak.tsx",
    lineNumber: 207,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  Fluxo as default
};
//# sourceMappingURL=/build/routes/fluxo_bak-4B2ZN7PJ.js.map
