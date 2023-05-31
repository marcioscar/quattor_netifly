import {
  require_receitas as require_receitas2
} from "/build/_shared/chunk-D2PJBQEV.js";
import {
  require_receitas
} from "/build/_shared/chunk-HLCOEEE4.js";
import {
  RiCloseCircleFill
} from "/build/_shared/chunk-WEPS7XSP.js";
import {
  Modal_default
} from "/build/_shared/chunk-DCONWLWA.js";
import "/build/_shared/chunk-VWXJ4X5T.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useLoaderData,
  useNavigate,
  useTransition
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/receitas/$receita.tsx
var import_receitas = __toESM(require_receitas());
var import_receitas2 = __toESM(require_receitas2());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Receita() {
  const navigate = useNavigate();
  const transition = useTransition();
  function closeHandler() {
    navigate("..");
  }
  const { receita } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Alterar de Receita" }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiCloseCircleFill, { className: " text-red-500  w-8 h-8 " }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/receitas/$receita.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { hidden: true, type: "text", name: "id", defaultValue: receita == null ? void 0 : receita.id }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Centro" }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "centro",
          name: "centro",
          defaultValue: receita == null ? void 0 : receita.centro,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/$receita.tsx",
          lineNumber: 60,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Forma de Pagamento" }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "forma",
          name: "forma",
          defaultValue: receita == null ? void 0 : receita.forma,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/$receita.tsx",
          lineNumber: 70,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "valor", className: "text-blue-600 font-semibold", children: "Valor" }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          className: "w-full p-2 rounded-xl my-2",
          placeholder: "Valor",
          name: "valor",
          defaultValue: (receita == null ? void 0 : receita.valor).toLocaleString()
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/$receita.tsx",
          lineNumber: 80,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Data" }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "texxt",
          id: "data",
          name: "data",
          className: "w-full p-2 rounded-xl my-2",
          defaultValue: receita == null ? void 0 : receita.data
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/$receita.tsx",
          lineNumber: 90,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "text-blue-600 font-semibold", children: "Status" }, void 0, false, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "texxt",
          id: "status",
          name: "status",
          className: "w-full p-2 rounded-xl my-2",
          defaultValue: receita == null ? void 0 : receita.status
        },
        void 0,
        false,
        {
          fileName: "app/routes/receitas/$receita.tsx",
          lineNumber: 100,
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
            fileName: "app/routes/receitas/$receita.tsx",
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
            fileName: "app/routes/receitas/$receita.tsx",
            lineNumber: 118,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/receitas/$receita.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/receitas/$receita.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/receitas/$receita.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/receitas/$receita.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
export {
  Receita as default
};
//# sourceMappingURL=/build/routes/receitas/$receita-YOCQJIOA.js.map
