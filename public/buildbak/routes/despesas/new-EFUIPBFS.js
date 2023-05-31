import {
  require_react
} from "/build/_shared/chunk-ZJDISFZC.js";
import {
  Modal_default
} from "/build/_shared/chunk-DCONWLWA.js";
import {
  require_despesas
} from "/build/_shared/chunk-PGYEW3RH.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useNavigate,
  useTransition
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/despesas/new.tsx
var import_react = __toESM(require_react());
var import_despesas = __toESM(require_despesas());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function New() {
  const navigate = useNavigate();
  const transition = useTransition();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full  justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Cadastro de Despesas" }, void 0, false, {
      fileName: "app/routes/despesas/new.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Conta" }, void 0, false, {
        fileName: "app/routes/despesas/new.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "conta",
          name: "conta",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/despesas/new.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Valor" }, void 0, false, {
        fileName: "app/routes/despesas/new.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.default,
        {
          className: "w-full p-2 rounded-xl my-2",
          placeholder: "Valor",
          name: "valor",
          options: { numeral: true, numeralDecimalMark: ",", delimiter: "." }
        },
        void 0,
        false,
        {
          fileName: "app/routes/despesas/new.tsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Data" }, void 0, false, {
        fileName: "app/routes/despesas/new.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "date",
          id: "data",
          name: "data",
          className: "w-full p-2 rounded-xl my-2",
          defaultValue: new Date().toISOString().substring(0, 10)
        },
        void 0,
        false,
        {
          fileName: "app/routes/despesas/new.tsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tipo", className: "text-blue-600 font-semibold", children: "Tipo" }, void 0, false, {
        fileName: "app/routes/despesas/new.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          id: "tipo",
          name: "tipo",
          className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "fixa", children: "Fixa" }, void 0, false, {
              fileName: "app/routes/despesas/new.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "variavel", children: "Vari\xE1vel" }, void 0, false, {
              fileName: "app/routes/despesas/new.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/despesas/new.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
            value: "Cadastrar",
            children: transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"
          },
          void 0,
          false,
          {
            fileName: "app/routes/despesas/new.tsx",
            lineNumber: 74,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", className: "rounded-xl mt-2 bg-yellow-500  px-3 py-2 ", children: "Cancelar" }, void 0, false, {
          fileName: "app/routes/despesas/new.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/despesas/new.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/despesas/new.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/despesas/new.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/despesas/new.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  New as default
};
//# sourceMappingURL=/build/routes/despesas/new-EFUIPBFS.js.map
