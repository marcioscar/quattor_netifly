import {
  require_folha
} from "/build/_shared/chunk-3V4LHCFL.js";
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

// app/routes/folha/$funcionario.tsx
var import_folha = __toESM(require_folha());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Receita() {
  const navigate = useNavigate();
  const transition = useTransition();
  function closeHandler() {
    navigate("..");
  }
  const { funcionario } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-extrabold text-slate-700", children: "Funcionario" }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiCloseCircleFill, { className: " text-red-500  w-8 h-8 " }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/folha/$funcionario.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "rounded-2xl bg-stone-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { hidden: true, type: "text", name: "id", defaultValue: funcionario == null ? void 0 : funcionario.id }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "nome", className: "text-blue-600 font-semibold", children: "Nome" }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "nome",
          name: "nome",
          className: "w-full p-2 rounded-xl my-2",
          defaultValue: funcionario == null ? void 0 : funcionario.nome
        },
        void 0,
        false,
        {
          fileName: "app/routes/folha/$funcionario.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "funcao", className: "text-blue-600 font-semibold", children: "Fun\xE7\xE3o" }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          className: "w-full p-2 rounded-xl my-2",
          name: "funcao",
          defaultValue: funcionario == null ? void 0 : funcionario.funcao,
          id: "funcao",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { hidden: true, children: "Selecione a Fun\xE7\xE3o" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "contrato", children: "Contrato" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "adm", children: "Administrativo" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 80,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "coordenador", children: "Coordenador" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "estagiario", children: "Estagi\xE1rio" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "professor", children: "Professor" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/folha/$funcionario.tsx",
          lineNumber: 72,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "modalidade", className: "text-blue-600 font-semibold", children: "Modalidade" }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          className: "w-full p-2 rounded-xl my-2",
          name: "modalidade",
          defaultValue: funcionario == null ? void 0 : funcionario.modalidade,
          id: "modalidade",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { hidden: true, children: "Selecione a Modalidade" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 94,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "judo", children: "Jud\xF4" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "musculacao", children: "Muscula\xE7\xE3o" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pilates", children: "Pilates" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 97,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "natacao", children: "Nata\xE7\xE3o" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "ballet", children: "Ballet" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 99,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "aulas", children: "Aulas" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "geral", children: "Geral" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "boxe", children: "Boxe" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "muaithay", children: "Muaithay" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 103,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "prime", children: "Prime" }, void 0, false, {
              fileName: "app/routes/folha/$funcionario.tsx",
              lineNumber: 104,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/folha/$funcionario.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "conta", className: "text-blue-600 font-semibold", children: "Conta" }, void 0, false, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          placeholder: "PIX, CC, C. Salario",
          type: "string",
          id: "conta",
          name: "conta",
          defaultValue: funcionario == null ? void 0 : funcionario.conta,
          className: "w-full p-2 rounded-xl my-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/folha/$funcionario.tsx",
          lineNumber: 110,
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
            children: transition.state === "submitting" ? "Salvando..." : "Salvar"
          },
          void 0,
          false,
          {
            fileName: "app/routes/folha/$funcionario.tsx",
            lineNumber: 120,
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
            fileName: "app/routes/folha/$funcionario.tsx",
            lineNumber: 128,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/folha/$funcionario.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/folha/$funcionario.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/folha/$funcionario.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/folha/$funcionario.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  Receita as default
};
//# sourceMappingURL=/build/routes/folha/$funcionario-RU7TMEGE.js.map
