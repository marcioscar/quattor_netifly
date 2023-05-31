import {
  require_folha
} from "/build/_shared/chunk-3V4LHCFL.js";
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

// app/routes/folha/new.tsx
var import_folha = __toESM(require_folha());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function New() {
  const navigate = useNavigate();
  const transition = useTransition();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-stone-700", children: "Cadastro de Funcion\xE1rios" }, void 0, false, {
      fileName: "app/routes/folha/new.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "rounded-2xl bg-stone-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "nome", className: "text-blue-600 font-semibold", children: "Nome" }, void 0, false, {
        fileName: "app/routes/folha/new.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "nome",
          name: "nome",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/folha/new.tsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "funcao", className: "text-blue-600 font-semibold", children: "Fun\xE7\xE3o" }, void 0, false, {
        fileName: "app/routes/folha/new.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          className: "w-full p-2 rounded-xl my-2",
          name: "funcao",
          id: "funcao",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { hidden: true, children: "Selecione a Fun\xE7\xE3o" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "contrato", children: "Contrato" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "adm", children: "Administrativo" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "coordenador", children: "Coordenador" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "estagiario", children: "Estagi\xE1rio" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 51,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "professor", children: "Professor" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/folha/new.tsx",
          lineNumber: 41,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "modalidade", className: "text-blue-600 font-semibold", children: "Modalidade" }, void 0, false, {
        fileName: "app/routes/folha/new.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          className: "w-full p-2 rounded-xl my-2",
          name: "modalidade",
          id: "modalidade",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { hidden: true, children: "Selecione a Modalidade" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "judo", children: "Jud\xF4" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "musculacao", children: "Muscula\xE7\xE3o" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pilates", children: "Pilates" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "natacao", children: "Nata\xE7\xE3o" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "ballet", children: "Ballet" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "aulas", children: "Aulas" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "geral", children: "Geral" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "boxe", children: "Boxe" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 71,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "muaithay", children: "Muaithay" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "prime", children: "Prime" }, void 0, false, {
              fileName: "app/routes/folha/new.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/folha/new.tsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Conta" }, void 0, false, {
        fileName: "app/routes/folha/new.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          placeholder: "PIX, CC, C. Salario",
          type: "string",
          id: "conta",
          name: "conta",
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/folha/new.tsx",
          lineNumber: 79,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center space-x-4", children: [
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
            fileName: "app/routes/folha/new.tsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", className: "rounded-xl mt-2 bg-yellow-500  px-3 py-2 ", children: "Cancelar" }, void 0, false, {
          fileName: "app/routes/folha/new.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/folha/new.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/folha/new.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/folha/new.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/folha/new.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  New as default
};
//# sourceMappingURL=/build/routes/folha/new-KZQ5KH6A.js.map
