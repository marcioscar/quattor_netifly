import {
  require_react
} from "/build/_shared/chunk-ZJDISFZC.js";
import {
  require_receitas
} from "/build/_shared/chunk-HLCOEEE4.js";
import {
  Modal_default
} from "/build/_shared/chunk-DCONWLWA.js";
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

// app/routes/receitas/new.tsx
var import_react = __toESM(require_react());
var import_receitas = __toESM(require_receitas());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function New() {
  const navigate = useNavigate();
  const transition = useTransition();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Cadastro de Receitas" }, void 0, false, {
      fileName: "app/routes/receitas/new.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Centro" }, void 0, false, {
        fileName: "app/routes/receitas/new.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "centro",
          name: "centro",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/new.tsx",
          lineNumber: 36,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Forma" }, void 0, false, {
        fileName: "app/routes/receitas/new.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "forma",
          name: "forma",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/new.tsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Valor" }, void 0, false, {
        fileName: "app/routes/receitas/new.tsx",
        lineNumber: 51,
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
          fileName: "app/routes/receitas/new.tsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Data" }, void 0, false, {
        fileName: "app/routes/receitas/new.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "data",
          name: "data",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/new.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full space-x-4 text-center", children: [
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
            fileName: "app/routes/receitas/new.tsx",
            lineNumber: 73,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", className: "rounded-xl mt-2 bg-yellow-500  px-3 py-2 ", children: "Cancelar" }, void 0, false, {
          fileName: "app/routes/receitas/new.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/receitas/new.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/receitas/new.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/receitas/new.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/receitas/new.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  New as default
};
//# sourceMappingURL=/build/routes/receitas/new-VGO5HN6W.js.map
