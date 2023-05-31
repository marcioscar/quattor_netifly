import {
  require_lodash
} from "/build/_shared/chunk-2FZQQZH4.js";
import {
  Delete,
  Pagar
} from "/build/_shared/chunk-FQZ62RZM.js";
import {
  require_folha
} from "/build/_shared/chunk-3V4LHCFL.js";
import {
  pt_default
} from "/build/_shared/chunk-D4IAWJ57.js";
import {
  format
} from "/build/_shared/chunk-UP4WGC7H.js";
import {
  Navbar
} from "/build/_shared/chunk-2CCO43HO.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/folha.salario.$pagamento.tsx
var import_react2 = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_folha = __toESM(require_folha());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Pagamento() {
  const transition = useTransition();
  let isAdding = transition.state === "submitting";
  let formRef = (0, import_react2.useRef)();
  const [salId, setSalId] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    var _a;
    if (!isAdding) {
      (_a = formRef.current) == null ? void 0 : _a.reset();
    }
  }, [isAdding]);
  const { funcionario } = useLoaderData();
  const PagFechado = funcionario.salarios.map((s) => s.pago).pop();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/folha.salario.$pagamento.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  p-6 bg-white border-b-2 border-stone-300 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold", children: funcionario.nome }, void 0, false, {
          fileName: "app/routes/folha.salario.$pagamento.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm uppercase text-gray-500", children: funcionario.funcao }, void 0, false, {
            fileName: "app/routes/folha.salario.$pagamento.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-400", children: "|" }, void 0, false, {
            fileName: "app/routes/folha.salario.$pagamento.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm uppercase text-gray-500", children: funcionario.modalidade }, void 0, false, {
            fileName: "app/routes/folha.salario.$pagamento.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-400", children: "|" }, void 0, false, {
            fileName: "app/routes/folha.salario.$pagamento.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm uppercase text-gray-500", children: funcionario.conta }, void 0, false, {
            fileName: "app/routes/folha.salario.$pagamento.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/folha.salario.$pagamento.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/folha.salario.$pagamento.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Form,
        {
          ref: formRef,
          method: "post",
          className: " bg-stone-100 p-6 container mt-4 mx-auto px-10",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 mb-2 ml-80 mr-80 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  hidden: true,
                  type: "text",
                  name: "id",
                  defaultValue: funcionario == null ? void 0 : funcionario.id
                },
                void 0,
                false,
                {
                  fileName: "app/routes/folha.salario.$pagamento.tsx",
                  lineNumber: 84,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { hidden: true, type: "text", name: "sal_id", defaultValue: salId }, void 0, false, {
                fileName: "app/routes/folha.salario.$pagamento.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this),
              PagFechado && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "label",
                  {
                    htmlFor: "valor",
                    className: "block mb-2  text-sm font-medium text-gray-900 ",
                    children: "Valor"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/folha.salario.$pagamento.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    type: "float",
                    className: "w-full p-2 rounded-xl my-2",
                    placeholder: "Valor",
                    name: "valor"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/folha.salario.$pagamento.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "label",
                  {
                    htmlFor: "data",
                    className: "block mb-2 text-sm font-medium  dark:text-gray-300",
                    children: "Data"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/folha.salario.$pagamento.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    id: "data",
                    name: "data",
                    className: "w-full p-2 rounded-xl my-2 "
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/folha.salario.$pagamento.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "rounded-xl  bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
                    name: "_action",
                    value: "cadastrar",
                    children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/folha.salario.$pagamento.tsx",
                    lineNumber: 118,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/folha.salario.$pagamento.tsx",
                  lineNumber: 117,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/folha.salario.$pagamento.tsx",
                lineNumber: 92,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/folha.salario.$pagamento.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex mt-2 justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-3/4 text-sm text-left text-gray-500 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3", children: "Data" }, void 0, false, {
                  fileName: "app/routes/folha.salario.$pagamento.tsx",
                  lineNumber: 137,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-right py-3", children: "Valor" }, void 0, false, {
                  fileName: "app/routes/folha.salario.$pagamento.tsx",
                  lineNumber: 140,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3 text-left", children: "Refer\xEAncia" }, void 0, false, {
                  fileName: "app/routes/folha.salario.$pagamento.tsx",
                  lineNumber: 143,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 py-3 text-center", children: "Pago" }, void 0, false, {
                  fileName: "app/routes/folha.salario.$pagamento.tsx",
                  lineNumber: 146,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/folha.salario.$pagamento.tsx",
                lineNumber: 136,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/routes/folha.salario.$pagamento.tsx",
                lineNumber: 135,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: import_lodash.default.orderBy(funcionario.salarios, ["data"], ["desc"]).map(
                (sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "tr",
                  {
                    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "th",
                        {
                          scope: "row",
                          className: "px-6   font-medium text-gray-900 dark:text-white whitespace-nowrap",
                          children: format(new Date(sal.data), "dd-MMM", { locale: pt_default })
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/folha.salario.$pagamento.tsx",
                          lineNumber: 158,
                          columnNumber: 23
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 text-right ", children: sal.valor.toLocaleString("pt-br", {
                        minimumFractionDigits: 2
                      }) }, void 0, false, {
                        fileName: "app/routes/folha.salario.$pagamento.tsx",
                        lineNumber: 164,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 ", children: sal.referencia }, void 0, false, {
                        fileName: "app/routes/folha.salario.$pagamento.tsx",
                        lineNumber: 169,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " py-3 text-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "input",
                        {
                          type: "checkbox",
                          readOnly: true,
                          checked: sal.pago
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/folha.salario.$pagamento.tsx",
                          lineNumber: 172,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/folha.salario.$pagamento.tsx",
                        lineNumber: 171,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "button",
                        {
                          className: "text-orange-400 mr-2 ",
                          type: "submit",
                          name: "_action",
                          value: "pagar",
                          onClick: () => setSalId(sal.sal_id),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagar, {}, void 0, false, {
                            fileName: "app/routes/folha.salario.$pagamento.tsx",
                            lineNumber: 186,
                            columnNumber: 27
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/folha.salario.$pagamento.tsx",
                          lineNumber: 179,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/folha.salario.$pagamento.tsx",
                        lineNumber: 178,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "button",
                        {
                          className: "text-red-500 mr-2 ",
                          type: "submit",
                          name: "_action",
                          value: "delete",
                          onClick: () => setSalId(sal.sal_id),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Delete, {}, void 0, false, {
                            fileName: "app/routes/folha.salario.$pagamento.tsx",
                            lineNumber: 197,
                            columnNumber: 27
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/folha.salario.$pagamento.tsx",
                          lineNumber: 190,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/folha.salario.$pagamento.tsx",
                        lineNumber: 189,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  sal.sal_id,
                  true,
                  {
                    fileName: "app/routes/folha.salario.$pagamento.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                  },
                  this
                )
              ) }, void 0, false, {
                fileName: "app/routes/folha.salario.$pagamento.tsx",
                lineNumber: 151,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/folha.salario.$pagamento.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/routes/folha.salario.$pagamento.tsx",
              lineNumber: 133,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/folha.salario.$pagamento.tsx",
          lineNumber: 77,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/folha.salario.$pagamento.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/folha.salario.$pagamento.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
export {
  Pagamento as default
};
//# sourceMappingURL=/build/routes/folha.salario.$pagamento-BWB53SNA.js.map
