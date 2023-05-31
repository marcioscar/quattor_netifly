import {
  RiCloseCircleFill
} from "/build/_shared/chunk-WEPS7XSP.js";
import {
  Modal_default
} from "/build/_shared/chunk-DCONWLWA.js";
import "/build/_shared/chunk-VWXJ4X5T.js";
import {
  require_despesas
} from "/build/_shared/chunk-PGYEW3RH.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useLoaderData,
  useNavigate,
  useTransition
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:../../utils/despesas.server
var require_despesas2 = __commonJS({
  "empty-module:../../utils/despesas.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/despesas/$despesa.tsx
var import_despesas = __toESM(require_despesas());
var import_despesas2 = __toESM(require_despesas2());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Despesa() {
  const navigate = useNavigate();
  const transition = useTransition();
  function closeHandler() {
    navigate("..");
  }
  const { despesa } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Alterar de Despesas" }, void 0, false, {
        fileName: "app/routes/despesas/$despesa.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiCloseCircleFill, { className: " text-red-500  w-8 h-8 " }, void 0, false, {
        fileName: "app/routes/despesas/$despesa.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/despesas/$despesa.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/despesas/$despesa.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        reloadDocument: true,
        method: "post",
        className: "rounded-2xl bg-gray-200 p-6 w-96",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { hidden: true, type: "text", name: "id", defaultValue: despesa == null ? void 0 : despesa.id }, void 0, false, {
            fileName: "app/routes/despesas/$despesa.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Conta" }, void 0, false, {
            fileName: "app/routes/despesas/$despesa.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              id: "conta",
              name: "conta",
              defaultValue: despesa == null ? void 0 : despesa.conta,
              className: "w-full p-2 rounded-xl my-2"
            },
            void 0,
            false,
            {
              fileName: "app/routes/despesas/$despesa.tsx",
              lineNumber: 66,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Valor" }, void 0, false, {
            fileName: "app/routes/despesas/$despesa.tsx",
            lineNumber: 73,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: "w-full p-2 rounded-xl my-2",
              placeholder: "Valor",
              name: "valor",
              defaultValue: (despesa == null ? void 0 : despesa.valor).toLocaleString()
            },
            void 0,
            false,
            {
              fileName: "app/routes/despesas/$despesa.tsx",
              lineNumber: 76,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Data" }, void 0, false, {
            fileName: "app/routes/despesas/$despesa.tsx",
            lineNumber: 83,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "date",
              id: "data",
              name: "data",
              className: "w-full p-2 rounded-xl my-2",
              defaultValue: new Date(despesa == null ? void 0 : despesa.data).toISOString().substring(0, 10)
            },
            void 0,
            false,
            {
              fileName: "app/routes/despesas/$despesa.tsx",
              lineNumber: 86,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tipo", className: "text-blue-600 font-semibold", children: "Tipo" }, void 0, false, {
            fileName: "app/routes/despesas/$despesa.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "select",
            {
              id: "tipo",
              name: "tipo",
              defaultValue: despesa == null ? void 0 : despesa.tipo,
              className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "fixa", children: "Fixa" }, void 0, false, {
                  fileName: "app/routes/despesas/$despesa.tsx",
                  lineNumber: 104,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "variavel", children: "Vari\xE1vel" }, void 0, false, {
                  fileName: "app/routes/despesas/$despesa.tsx",
                  lineNumber: 105,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/despesas/$despesa.tsx",
              lineNumber: 98,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center space-x-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
                name: "_action",
                value: "save",
                children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
              },
              void 0,
              false,
              {
                fileName: "app/routes/despesas/$despesa.tsx",
                lineNumber: 109,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1",
                name: "_action",
                value: "delete",
                children: transition.state === "submitting" ? "Apagando..." : "Apagar"
              },
              void 0,
              false,
              {
                fileName: "app/routes/despesas/$despesa.tsx",
                lineNumber: 119,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/despesas/$despesa.tsx",
            lineNumber: 108,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/despesas/$despesa.tsx",
        lineNumber: 57,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/despesas/$despesa.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/despesas/$despesa.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
export {
  Despesa as default
};
//# sourceMappingURL=/build/routes/despesas/$despesa-3A4LIR4A.js.map
