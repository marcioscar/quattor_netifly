var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-3OUPYVNS.css";

// route:/Users/marciocarneiro/Documents/remix/quattor/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Quattor Academia",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [{ rel: "stylesheet", href: app_default }];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-stone-200"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/folha.salario.$pagamento.tsx
var folha_salario_pagamento_exports = {};
__export(folha_salario_pagamento_exports, {
  action: () => action,
  default: () => Pagamento,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_date_fns2 = require("date-fns"), import_locale2 = require("date-fns/locale"), import_react5 = require("react"), import_lodash2 = __toESM(require("lodash"));

// app/components/Navbar.tsx
var import_react3 = require("@remix-run/react");
function Navbar() {
  let activeClassName = "text-orange-500";
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-stone-900 text-white border-gray-200 px-2 mb-4 sm:px-4 py-2.5 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-wrap justify-between items-center mx-auto"
  }, /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/",
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/logo_branco.svg",
    className: "mr-3 h-10 sm:h-9",
    alt: "Quattor Logo"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-8 font-light"
  }, /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "HOME"), /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/despesas",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "DESPESAS"), /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/receitas",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "RECEITAS"), /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/folha",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "FOLHA")), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-4 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " text-white bg-emerald-600 hover:bg-emerald-800   rounded-lg text-sm px-5 py-2.5 "
  }, /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/novo",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "NOVO USU\xC1RIO")), /* @__PURE__ */ React.createElement(import_react3.Form, {
    method: "post",
    action: "/logout",
    id: "logout-form"
  }, /* @__PURE__ */ React.createElement("button", {
    className: " text-white bg-amber-600 hover:bg-amber-800   rounded-lg text-sm px-5 py-2.5 "
  }, "Sair")))));
}

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/folha.server.ts
var import_date_fns = require("date-fns"), import_locale = require("date-fns/locale"), import_lodash = __toESM(require("lodash")), getFuncionarios = async () => prisma.folha.findMany({
  orderBy: {
    nome: "asc"
  }
});
var groupSalarioAreas = async (ref) => {
  let sal = await prisma.folha.aggregateRaw({
    pipeline: [{ $unwind: "$salarios" }]
  }), salFilter = import_lodash.default.filter(sal, ["salarios.referencia", ref]), total = (0, import_lodash.default)(salFilter).groupBy("modalidade").map((objs, key) => ({
    mod: key,
    valor: import_lodash.default.sumBy(objs, "salarios.valor")
  })).value();
  return import_lodash.default.orderBy(total, ["valor"], ["desc"]);
}, SalarioAreas = async () => {
  let modal = (await prisma.folha.aggregateRaw({
    pipeline: [
      { $unwind: "$salarios" },
      {
        $group: {
          _id: ["$salarios.referencia", "$modalidade"],
          salario: { $sum: "$salarios.valor" }
        }
      }
    ]
  })).map((o) => Object.assign({}, o, o._id[0] === "jan-2023" && { mes: 1 }, o._id[0] === "fev-2023" && { mes: 2 }, o._id[0] === "mar-2023" && { mes: 3 }, o._id[0] === "abr-2023" && { mes: 4 }, o._id[0] === "mai-2023" && { mes: 5 }, o._id[0] === "jun-2023" && { mes: 6 }, o._id[0] === "jul-2023" && { mes: 7 }, o._id[0] === "ago-2023" && { mes: 8 }, o._id[0] === "set-2023" && { mes: 9 }, o._id[0] === "out-2023" && { mes: 10 }, o._id[0] === "nov-2023" && { mes: 11 }, o._id[0] === "dez-2023" && { mes: 12 }));
  return import_lodash.default.orderBy(modal, ["mes"]);
}, groupSalario = async () => prisma.folha.aggregateRaw({
  pipeline: [
    { $unwind: "$salarios" },
    {
      $group: {
        _id: "$salarios.referencia",
        salario: { $sum: "$salarios.valor" }
      }
    }
  ]
});
var getFuncionario = async (funcionarioId) => prisma.folha.findUnique({
  where: {
    id: funcionarioId
  }
}), createFuncionario = async (funcionario) => ({ newFuncionario: await prisma.folha.create({
  data: {
    nome: funcionario.nome,
    funcao: funcionario.funcao,
    modalidade: funcionario.modalidade,
    conta: funcionario.conta,
    salarios: [
      {
        valor: 0,
        fgts: 0,
        ferias: 0,
        decimo: 0,
        pago: !0
      }
    ]
  }
}) }), updateFuncionario = async (funcionario) => ({ newFuncionario: await prisma.folha.update({
  where: {
    id: funcionario.id
  },
  data: {
    nome: funcionario.nome,
    funcao: funcionario.funcao,
    modalidade: funcionario.modalidade,
    conta: funcionario.conta
  }
}) }), deleteFuncionario = async (funcionario) => {
  await prisma.folha.delete({
    where: {
      id: funcionario.id
    }
  });
}, createSalario = async (salario) => {
  let dt = new Date(salario.data), dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1e3), referencia = (0, import_date_fns.format)(new Date(salario.data), "MMM-yyyy", {
    locale: import_locale.pt
  }), valor = parseFloat(salario.valor.replace(".", "").replace(",", ".")), id = Math.random().toString(36).slice(-5);
  return prisma.folha.update({
    where: {
      id: salario.id
    },
    data: {
      salarios: {
        push: {
          valor,
          data: dataAtual,
          sal_id: id,
          fgts: valor * 0.08,
          ferias: valor / 12,
          decimo: valor / 12,
          referencia,
          pago: !1
        }
      }
    }
  });
}, deleteSalario = async (salario) => (console.log(salario), prisma.folha.update({
  where: {
    id: salario.id
  },
  data: {
    salarios: {
      deleteMany: {
        where: {
          sal_id: salario.sal_id
        }
      }
    }
  }
})), pagarSalario = async (salario) => (console.log(salario), prisma.folha.update({
  where: {
    id: salario.id
  },
  data: {
    salarios: {
      updateMany: {
        where: {
          sal_id: salario.sal_id
        },
        data: {
          pago: !0
        }
      }
    }
  }
}));

// app/utils/icons.tsx
function Arrow() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4 text-slate-500 ",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13 7l5 5m0 0l-5 5m5-5H6"
  }));
}
function Money() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}
function Edit() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    clipRule: "evenodd"
  }));
}
function Pagar() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  }));
}
function Delete() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}
function Load() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  }));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/folha.salario.$pagamento.tsx
var action = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), action12 = form.get("_action");
  if (action12 === "cadastrar") {
    let salario = await createSalario(values);
    return (0, import_node.redirect)("folha");
  } else {
    if (action12 === "delete")
      return await deleteSalario(values), (0, import_node.redirect)("folha");
    if (action12 === "pagar")
      return await pagarSalario(values), (0, import_node.redirect)("folha");
  }
}, loader = async ({ request, params }) => {
  let funcionario = await getFuncionario(params.pagamento);
  return (0, import_node2.json)({ funcionario });
};
function Pagamento() {
  let transition = (0, import_react4.useTransition)(), isAdding = transition.state === "submitting", formRef = (0, import_react5.useRef)(), [salId, setSalId] = (0, import_react5.useState)("");
  (0, import_react5.useEffect)(() => {
    var _a;
    isAdding || (_a = formRef.current) == null || _a.reset();
  }, [isAdding]);
  let { funcionario } = (0, import_react4.useLoaderData)(), PagFechado = funcionario.salarios.map((s) => s.pago).pop();
  return console.log(!PagFechado), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  p-6 bg-white border-b-2 border-stone-300 text-center"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-bold"
  }, funcionario.nome), /* @__PURE__ */ React.createElement("div", {
    className: " space-x-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm uppercase text-gray-500"
  }, funcionario.funcao), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "|"), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm uppercase text-gray-500"
  }, funcionario.modalidade), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "|"), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm uppercase text-gray-500"
  }, funcionario.conta))), /* @__PURE__ */ React.createElement(import_react4.Form, {
    ref: formRef,
    method: "post",
    className: " bg-stone-100 p-6 container mt-4 mx-auto px-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-6 mb-2 ml-80 mr-80 "
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: !0,
    type: "text",
    name: "id",
    defaultValue: funcionario == null ? void 0 : funcionario.id
  }), /* @__PURE__ */ React.createElement("input", {
    hidden: !0,
    type: "text",
    name: "sal_id",
    defaultValue: salId
  }), PagFechado && /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "valor",
    className: "block mb-2  text-sm font-medium text-gray-900 "
  }, "Valor"), /* @__PURE__ */ React.createElement("input", {
    type: "float",
    className: "w-full p-2 rounded-xl my-2",
    placeholder: "Valor",
    name: "valor"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "data",
    className: "block mb-2 text-sm font-medium  dark:text-gray-300"
  }, "Data"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "data",
    name: "data",
    className: "w-full p-2 rounded-xl my-2 "
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl  bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
    name: "_action",
    value: "cadastrar"
  }, transition.state === "submitting" ? "Cadastrando..." : "Cadastrar")))), /* @__PURE__ */ React.createElement("div", {
    className: " flex mt-2 justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 text-sm text-left text-gray-500 "
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase  "
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Data"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 text-right py-3"
  }, "Valor"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left"
  }, "Refer\xEAncia"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-center"
  }, "Pago"))), /* @__PURE__ */ React.createElement("tbody", null, import_lodash2.default.orderBy(funcionario.salarios, ["data"], ["desc"]).map((sal) => /* @__PURE__ */ React.createElement("tr", {
    key: sal.sal_id,
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6   font-medium text-gray-900 dark:text-white whitespace-nowrap"
  }, (0, import_date_fns2.format)(new Date(sal.data), "dd-MMM", { locale: import_locale2.pt })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 text-right "
  }, sal.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, sal.referencia), /* @__PURE__ */ React.createElement("td", {
    className: " py-3 text-center "
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    readOnly: !0,
    checked: sal.pago
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    className: "text-orange-400 mr-2 ",
    type: "submit",
    name: "_action",
    value: "pagar",
    onClick: () => setSalId(sal.sal_id)
  }, /* @__PURE__ */ React.createElement(Pagar, null))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    className: "text-red-500 mr-2 ",
    type: "submit",
    name: "_action",
    value: "delete",
    onClick: () => setSalId(sal.sal_id)
  }, /* @__PURE__ */ React.createElement(Delete, null)))))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/index_bak.tsx
var index_bak_exports = {};
__export(index_bak_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");

// app/utils/receitas.server.ts
var import_date_fns3 = require("date-fns"), import_locale3 = require("date-fns/locale"), getReceitas = async () => prisma.receitas.findMany({
  orderBy: {
    data: "desc"
  }
}), groupReceitasAgrupadas = async (ref) => prisma.receitas.aggregate({
  _sum: {
    valor: !0
  },
  where: {
    referencia: {
      equals: ref
    }
  }
}), ReceitasMes = async (ref) => prisma.receitas.findMany({
  where: {
    referencia: {
      equals: ref
    }
  },
  orderBy: {
    valor: "desc"
  }
}), getReceita = async (receitaId) => prisma.receitas.findUnique({
  where: {
    id: receitaId
  }
}), createReceita = async (receita) => {
  let dt = new Date(receita.data), dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1e3), referencia = (0, import_date_fns3.format)(dataAtual, "MMM-yyyy", { locale: import_locale3.pt });
  return { newReceita: await prisma.receitas.create({
    data: {
      referencia,
      centro: receita.centro,
      data: dataAtual,
      valor: parseFloat(receita.valor.replace(".", "").replace(",", "."))
    }
  }) };
}, updateReceita = async (receita) => {
  let dt = new Date(receita.data), dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1e3), referencia = (0, import_date_fns3.format)(dataAtual, "MMM-yyyy", { locale: import_locale3.pt });
  return { newReceita: await prisma.receitas.update({
    where: {
      id: receita.id
    },
    data: {
      centro: receita.centro,
      data: dataAtual,
      referencia,
      valor: parseFloat(receita.valor.replace(".", "").replace(",", "."))
    }
  }) };
}, deleteReceita = async (receita) => {
  await prisma.receitas.delete({
    where: {
      id: receita.id
    }
  });
};

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/index_bak.tsx
var import_react6 = require("@remix-run/react");

// app/utils/despesas.server.ts
var import_date_fns4 = require("date-fns"), import_locale4 = require("date-fns/locale"), getDespesas = async () => prisma.despesas.findMany({
  orderBy: {
    data: "desc"
  }
}), getDespesa = async (despesaId) => prisma.despesas.findUnique({
  where: {
    id: despesaId
  }
}), totDespesas = async (ref) => prisma.despesas.aggregate({
  _sum: {
    valor: !0
  },
  where: {
    referencia: {
      equals: ref
    }
  }
}), DespesasMes = async (ref) => prisma.despesas.findMany({
  where: {
    referencia: {
      equals: ref
    }
  },
  orderBy: {
    valor: "desc"
  }
});
var totTipoDespesas = async (ref) => await prisma.despesas.groupBy({
  by: ["tipo"],
  _sum: {
    valor: !0
  },
  where: {
    referencia: {
      equals: ref
    }
  }
}), createDespesa = async (despesa) => {
  let dt = new Date(despesa.data), dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1e3), referencia = (0, import_date_fns4.format)(dataAtual, "MMM-yyyy", { locale: import_locale4.pt });
  return { newDespesa: await prisma.despesas.create({
    data: {
      conta: despesa.conta,
      data: dataAtual,
      referencia,
      tipo: despesa.tipo,
      valor: parseFloat(despesa.valor.replace(".", "").replace(",", "."))
    }
  }) };
}, updateDespesa = async (despesa) => {
  let dt = new Date(despesa.data), dataAtual = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1e3), referencia = (0, import_date_fns4.format)(dataAtual, "MMM-yyyy", { locale: import_locale4.pt });
  return { newDespesa: await prisma.despesas.update({
    where: {
      id: despesa.id
    },
    data: {
      conta: despesa.conta,
      data: dataAtual,
      referencia,
      tipo: despesa.tipo,
      valor: parseFloat(despesa.valor.replace(".", "").replace(",", "."))
    }
  }) };
}, deleteDespesa = async (despesa) => {
  await prisma.despesas.delete({
    where: {
      id: despesa.id
    }
  });
};

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/index_bak.tsx
var import_date_fns5 = require("date-fns"), import_locale5 = require("date-fns/locale");
var import_lodash3 = __toESM(require("lodash")), import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2"), loader2 = async ({ request, params }) => {
  let dataAtual = (0, import_date_fns5.format)(new Date(), "MMM-yyyy", { locale: import_locale5.pt }), par = new URL(request.url).searchParams.get("rec"), parametro = par || dataAtual, totReceitas = await groupReceitasAgrupadas(String(parametro)), ReceitasM = await ReceitasMes(String(parametro)), DespesasM = await DespesasMes(String(parametro)), TotDespesas = await totDespesas(String(parametro)), TotSalarios = await groupSalario(), TotSalMes = import_lodash3.default.filter(TotSalarios, ["_id", parametro]), salAreas = await groupSalarioAreas(parametro), totTipoDesp = await totTipoDespesas(parametro), areas = await SalarioAreas();
  return (0, import_node3.json)({
    totReceitas,
    TotDespesas,
    ReceitasM,
    DespesasM,
    TotSalarios,
    TotSalMes,
    salAreas,
    totTipoDesp,
    areas
  });
};
function Index() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let rec = (0, import_react6.useFetcher)(), {
    totReceitas,
    TotSalarios,
    ReceitasM,
    TotDespesas,
    DespesasM,
    TotSalMes,
    salAreas,
    areas
  } = (0, import_react6.useLoaderData)(), totalRec = ((_a = rec.data) == null ? void 0 : _a.totReceitas) ? rec.data.totReceitas : totReceitas, recMes = ((_b = rec.data) == null ? void 0 : _b.ReceitasM) ? rec.data.ReceitasM : ReceitasM, totalDesp = ((_c = rec.data) == null ? void 0 : _c.TotDespesas) ? rec.data.TotDespesas : TotDespesas, despMes = ((_d = rec.data) == null ? void 0 : _d.DespesasM) ? rec.data.DespesasM : DespesasM, TotSalarioMes = ((_e = rec.data) == null ? void 0 : _e.TotSalMes) ? rec.data.TotSalMes : TotSalMes, TotSalAreas = ((_f = rec.data) == null ? void 0 : _f.salAreas) ? rec.data.salAreas : salAreas, DespesasFixas = import_lodash3.default.filter(despMes, ["tipo", "fixa"]), DespesasVariaveis = import_lodash3.default.filter(despMes, ["tipo", "variavel"]), DespesasFixasTotal = import_lodash3.default.sumBy(import_lodash3.default.filter(despMes, ["tipo", "fixa"]), "valor"), DespesasVariavelTotal = import_lodash3.default.sumBy(import_lodash3.default.filter(despMes, ["tipo", "variavel"]), "valor"), SalDiretos = import_lodash3.default.sumBy(import_lodash3.default.filter(TotSalAreas, function(o) {
    return o.mod != "geral";
  }), "valor"), PercentFixa = ((SalDiretos + DespesasFixasTotal) / totalRec._sum.valor).toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2
  }), PercentVariavel = (DespesasVariavelTotal / totalRec._sum.valor).toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2
  }), Mensalidade = (SalDiretos + DespesasFixasTotal) / 1100, Mensalidade6 = Mensalidade * (1 + DespesasVariavelTotal / totalRec._sum.valor) * 1.06, previsao = Mensalidade * (1 + DespesasVariavelTotal / totalRec._sum.valor) * 1.06 * 1100, Lucro = previsao - previsao * (DespesasVariavelTotal / totalRec._sum.valor) - DespesasFixasTotal - SalDiretos, PontoEquilibrio = (DespesasFixasTotal + SalDiretos) / 1 - DespesasVariavelTotal / totalRec._sum.valor, PontoEquilibrioQtd = PontoEquilibrio / Mensalidade6, capitalize = (str) => typeof str != "string" ? "" : str.charAt(0).toUpperCase() + str.substr(1), TotalSalariosMes = TotSalarios.map((o) => Object.assign({}, o, o._id === "jan-2022" && { mes: 1 }, o._id === "fev-2022" && { mes: 2 }, o._id === "mar-2022" && { mes: 3 }, o._id === "abr-2022" && { mes: 4 }, o._id === "mai-2022" && { mes: 5 }, o._id === "jun-2022" && { mes: 6 }, o._id === "jul-2022" && { mes: 7 }, o._id === "ago-2022" && { mes: 8 }, o._id === "set-2022" && { mes: 9 }, o._id === "out-2022" && { mes: 10 }, o._id === "nov-2022" && { mes: 11 }, o._id === "dez-2022" && { mes: 12 }));
  import_chart.Chart.register(import_chart.CategoryScale, import_chart.LinearScale, import_chart.PointElement, import_chart.BarElement, import_chart.LineElement, import_chart.Title, import_chart.Tooltip, import_chart.Legend);
  let optionsLine = {
    responsive: !0,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: !0,
        text: "Total de Sal\xE1rios"
      }
    }
  }, optionsBar = {
    plugins: {
      title: {
        display: !0,
        text: "Chart.js Bar Chart - Stacked"
      }
    },
    responsive: !0,
    interaction: {
      mode: "index",
      intersect: !1
    },
    scales: {
      x: {
        stacked: !0
      },
      y: {
        stacked: !0
      }
    }
  }, labels = import_lodash3.default.orderBy(TotalSalariosMes, "mes").map((dt) => dt._id);
  console.log(import_lodash3.default.filter(areas, ["_id[1]", "geral"]).map((m) => [m.salario, m.mes]));
  let data = {
    labels,
    datasets: [
      {
        label: "Sal\xE1rios",
        data: import_lodash3.default.orderBy(TotalSalariosMes, "mes").map((sal) => sal.salario),
        borderColor: "rgb(240, 96, 57)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  }, dataBar = {
    labels,
    datasets: [
      {
        label: "Muscula\xE7\xE3o",
        data: import_lodash3.default.filter(areas, ["_id[1]", "musculacao"]).map((m) => m.salario),
        backgroundColor: "#293462",
        stack: "Stack 0"
      },
      {
        label: "Prime",
        data: import_lodash3.default.filter(areas, ["_id[1]", "prime"]).map((m) => m.salario),
        backgroundColor: "#1CD6CE",
        stack: "Stack 0"
      },
      {
        label: "Geral",
        data: import_lodash3.default.filter(areas, ["_id[1]", "geral"]).map((m) => m.salario),
        backgroundColor: "#FEDB39",
        stack: "Stack 0"
      },
      {
        label: "Jud\xF4",
        data: import_lodash3.default.filter(areas, ["_id[1]", "judo"]).map((m) => m.salario),
        backgroundColor: "#D61C4E",
        stack: "Stack 0"
      },
      {
        label: "Pilates",
        data: import_lodash3.default.filter(areas, ["_id[1]", "pilates"]).map((m) => m.salario),
        backgroundColor: "#781C68",
        stack: "Stack 0"
      },
      {
        label: "Nata\xE7\xE3o",
        data: import_lodash3.default.filter(areas, ["_id[1]", "natacao"]).map((m) => m.salario),
        backgroundColor: "#D36B00",
        stack: "Stack 0"
      },
      {
        label: "Boxe",
        data: import_lodash3.default.filter(areas, ["_id[1]", "boxe"]).map((m) => m.salario),
        backgroundColor: "#224B0C",
        stack: "Stack 0"
      },
      {
        label: "MuaiThay",
        data: import_lodash3.default.filter(areas, ["_id[1]", "muaithay"]).map((m) => m.salario),
        backgroundColor: "#EED180",
        stack: "Stack 0"
      },
      {
        label: "Ballet",
        data: import_lodash3.default.filter(areas, ["_id[1]", "ballet"]).map((m) => m.salario),
        backgroundColor: "#CA4E79",
        stack: "Stack 0"
      },
      {
        label: "Aulas",
        data: import_lodash3.default.filter(areas, ["_id[1]", "aulas"]).map((m) => m.salario),
        backgroundColor: "#F15412",
        stack: "Stack 0"
      }
    ]
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(rec.Form, {
    method: "get",
    action: "."
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "mr-4 font-light   text-sm ",
    htmlFor: "rec"
  }, "M\xCAS E ANO DE REFER\xCANCIA"), rec.state === "submitting" ? /* @__PURE__ */ React.createElement(Load, null) : null, /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("select", {
    className: "rounded text-blue-600 h-8  pl-5 pr-10 hover:border-gray-400 focus:outline-none ",
    name: "rec",
    defaultValue: (0, import_date_fns5.format)(new Date(), "MMM-yyyy", { locale: import_locale5.pt }),
    onChange: (event) => rec.submit(event.target.form)
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: !0,
    value: ""
  }, "Selecione m\xEAs e ano referencia"), /* @__PURE__ */ React.createElement("option", {
    value: "jan-2023"
  }, "Janeiro - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "fev-2023"
  }, "Fevereiro - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "mar-2023"
  }, "Mar\xE7o - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "abr-2023"
  }, "Abril - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "mai-2023"
  }, "Maio - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "jun-2023"
  }, "Junho - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "jul-2022"
  }, "Julho - 2022"), /* @__PURE__ */ React.createElement("option", {
    value: "ago-2022"
  }, "Agosto - 2022"), /* @__PURE__ */ React.createElement("option", {
    value: "set-2022"
  }, "Setembro - 2022"), /* @__PURE__ */ React.createElement("option", {
    value: "out-2022"
  }, "Outubro - 2022"), /* @__PURE__ */ React.createElement("option", {
    value: "nov-2022"
  }, "Novembro - 2022"), /* @__PURE__ */ React.createElement("option", {
    value: "dez-2022"
  }, "Dezembro - 2022")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center space-x-10 m-4 flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement(import_react_chartjs_2.Bar, {
    options: optionsBar,
    data: dataBar
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_chartjs_2.Line, {
    options: optionsLine,
    data
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "Despesas Fixas"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, DespesasFixasTotal == null ? void 0 : DespesasFixasTotal.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "border-t mt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-56 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, DespesasFixas == null ? void 0 : DespesasFixas.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })))))))))), /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500   font-semibold"
  }, "Despesas Vari\xE1veis"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, DespesasVariavelTotal == null ? void 0 : DespesasVariavelTotal.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "border-t mt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-56 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, DespesasVariaveis == null ? void 0 : DespesasVariaveis.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })))))))))), /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-semibold"
  }, "Sal\xE1rios Diretos"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, SalDiretos == null ? void 0 : SalDiretos.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between  mb-2 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "% Desp. Fixas"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PercentFixa)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 mb-2  font-semibold"
  }, "Ocupa\xE7\xE3o"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, "1.100")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "% Vari\xE1vel"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PercentVariavel)))), /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-pink-500 font-semibold"
  }, "Mensalidades")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between  mb-2 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "S/ Lucro"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, Mensalidade.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "com 6% Lucro"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, Mensalidade6.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-amber-500 font-semibold"
  }, "Previs\xE3o de Receitas")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between  mb-2 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "Previs\xE3o"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, previsao.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between mb-2 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "Lucro"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, Lucro.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between mb-2 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "Ponto de Equil\xEDbrio"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PontoEquilibrio.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500  font-semibold"
  }, "Ponto de Equil\xEDbrio QTD"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PontoEquilibrioQtd.toLocaleString("pt-br", {
    maximumFractionDigits: 0
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-blue-500  font-semibold"
  }, "Receitas"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-blue-500 font-sm "
  }, (_g = totalRec._sum.valor) == null ? void 0 : _g.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "border-t mt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-56 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, recMes == null ? void 0 : recMes.map((rec2) => /* @__PURE__ */ React.createElement("tr", {
    key: rec2.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, rec2.centro), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, rec2.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })))))))))), /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100  rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-orange-500  font-semibold"
  }, "Despesas"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-orange-500 font-sm "
  }, (_h = totalDesp._sum.valor) == null ? void 0 : _h.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "border-t mt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-56 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, despMes == null ? void 0 : despMes.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })))))))))), /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-green-500  font-semibold"
  }, "Sal\xE1rios"), /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("div", {
    className: "text-green-500 font-sm "
  }, TotSalarioMes.map((t) => t.salario).toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "border-t mt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-56 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, TotSalAreas == null ? void 0 : TotSalAreas.map((sal) => /* @__PURE__ */ React.createElement("tr", {
    key: sal.mod,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, capitalize(sal.mod)), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, sal.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/despesas.tsx
var despesas_exports = {};
__export(despesas_exports, {
  default: () => Despesas,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_react8 = require("react");

// app/utils/auth.server.ts
var import_node4 = require("@remix-run/node"), import_bcryptjs = require("bcryptjs"), SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node4.createCookieSessionStorage)({
  cookie: {
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 20 * 24 * 24 * 60 * 60,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node4.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(request.headers.get("Cookie"));
  return (0, import_node4.redirect)("/auth", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  if (!await getUserFromSession(request))
    throw (0, import_node4.redirect)("/auth");
}
async function getUserFromSession(request) {
  let userId = (await sessionStorage.getSession(request.headers.get("Cookie"))).get("userId");
  return userId || null;
}
async function signup({ email, password }) {
  if (console.log(email, password), await prisma.user.findFirst({ where: { email } })) {
    let error = new Error("Usu\xE1rio ja existe");
    throw error.status = 422, error;
  }
  let passwordHash = await (0, import_bcryptjs.hash)(password, 12);
  console.log(passwordHash);
  let user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/");
}
async function login({ email, password }) {
  let usuarioExiste = await prisma.user.findFirst({ where: { email } });
  if (!usuarioExiste) {
    let errors = {};
    return errors.email = "Nome ou senha Inv\xE1lidos !!!", console.log(errors), (0, import_node4.json)(errors, { status: 401 });
  }
  if (!await (0, import_bcryptjs.compare)(password, usuarioExiste.password)) {
    let errors = {};
    return errors.email = "Nome ou senha Inv\xE1lidos !!!", console.log(errors), (0, import_node4.json)(errors, { status: 401 });
  }
  return console.log(usuarioExiste.id), createUserSession(usuarioExiste.id, "/");
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/despesas.tsx
var loader3 = async ({ request }) => {
  await requireUserSession(request);
  let despesas = await getDespesas();
  return (0, import_node5.json)({ despesas });
};
function Despesas() {
  let { despesas } = (0, import_react7.useLoaderData)(), [filtrar, setFiltrar] = (0, import_react8.useState)(""), despesaFilter = despesas == null ? void 0 : despesas.filter((despesas2) => despesas2.conta.toLowerCase().includes(filtrar.toLowerCase()));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_react7.Outlet, null), /* @__PURE__ */ React.createElement("h1", {
    className: "flex  justify-center font-bold text-slate-500 text-xl"
  }, "DESPESAS"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-around items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-1/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    value: filtrar,
    onChange: (e) => setFiltrar(e.target.value),
    placeholder: "Procurar",
    className: "block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
  })), /* @__PURE__ */ React.createElement(import_react7.NavLink, {
    className: " flex mr-4  focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
    to: "new"
  }, "Nova")), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4 justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 text-sm text-left border-l-2 border-r-2 border-slate-100 text-gray-500 "
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-stone-100 "
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Conta"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Data"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-right"
  }, "Tipo"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-right"
  }, "Valor"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Editar")))), /* @__PURE__ */ React.createElement("tbody", null, despesaFilter.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b  hover:bg-gray-50 "
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6  font-medium text-gray-900 whitespace-nowrap"
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, desp.referencia), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  text-right"
  }, desp.tipo), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  text-right "
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react7.NavLink, {
    to: `${desp.id}`,
    className: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-3h-10.721v16h20v-10.573l-2 2.023z"
  }))))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/despesas/index_bak.tsx
var index_bak_exports2 = {};
__export(index_bak_exports2, {
  default: () => Despesas2,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_react10 = require("react"), loader4 = async ({ request }) => {
  let despesas = await getDespesas();
  return (0, import_node6.json)({ despesas });
};
function Despesas2() {
  let { despesas } = (0, import_react9.useLoaderData)(), [filtrar, setFiltrar] = (0, import_react10.useState)(""), despesaFilter = despesas == null ? void 0 : despesas.filter((despesas2) => despesas2.conta.toLowerCase().includes(filtrar.toLowerCase()));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("h1", {
    className: "flex  justify-center font-bold text-slate-500 text-xl"
  }, "DESPESAS"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-around items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-1/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    value: filtrar,
    onChange: (e) => setFiltrar(e.target.value),
    placeholder: "Procurar",
    className: "block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
  })), /* @__PURE__ */ React.createElement(import_react9.NavLink, {
    className: " flex mr-4  focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
    to: "new"
  }, "Nova")), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4 justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 text-sm text-left border-l-2 border-r-2 border-slate-100 text-gray-500 "
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-stone-100 "
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Conta"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Data"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-right"
  }, "Tipo"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-right"
  }, "Valor"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Editar")))), /* @__PURE__ */ React.createElement("tbody", null, despesaFilter.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b  hover:bg-gray-50 "
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6  font-medium text-gray-900 whitespace-nowrap"
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, desp.referencia), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  text-right"
  }, desp.tipo), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  text-right "
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react9.NavLink, {
    to: `${desp.id}`,
    className: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-3h-10.721v16h20v-10.573l-2 2.023z"
  }))))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/despesas/$despesa.tsx
var despesa_exports = {};
__export(despesa_exports, {
  action: () => action2,
  default: () => Despesa,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_react12 = require("@remix-run/react"), import_node8 = require("@remix-run/node");

// app/components/Modal.jsx
function Modal({ children, onClose }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "justify-center bg-white/80  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
    onClick: onClose
  }, /* @__PURE__ */ React.createElement("dialog", {
    className: "relative w-auto my-6 mx-auto max-w-3xl ",
    open: !0,
    onClick: (event) => event.stopPropagation()
  }, children));
}
var Modal_default = Modal;

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/despesas/$despesa.tsx
var import_ri = require("react-icons/ri"), loader5 = async ({ request, params }) => {
  let despesa = await getDespesa(params.despesa);
  return console.log("Despesa:" + (despesa == null ? void 0 : despesa.valor)), (0, import_node7.json)({ despesa });
}, action2 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return form.get("_action") === "save" ? await updateDespesa(values) : await deleteDespesa(values), (0, import_node8.redirect)("/despesas");
};
function Despesa() {
  let navigate = (0, import_react11.useNavigate)(), transition = (0, import_react12.useTransition)();
  function closeHandler() {
    navigate("..");
  }
  let { despesa } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Modal_default, {
    onClose: closeHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full justify-center items-center flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-700"
  }, "Alterar de Despesas"), /* @__PURE__ */ React.createElement(import_react11.Link, {
    to: "..",
    className: ""
  }, /* @__PURE__ */ React.createElement(import_ri.RiCloseCircleFill, {
    className: " text-red-500  w-8 h-8 "
  }))), /* @__PURE__ */ React.createElement(import_react12.Form, {
    reloadDocument: !0,
    method: "post",
    className: "rounded-2xl bg-gray-200 p-6 w-96"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: !0,
    type: "text",
    name: "id",
    defaultValue: despesa == null ? void 0 : despesa.id
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "conta",
    className: "text-blue-600 font-semibold"
  }, "Conta"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "conta",
    name: "conta",
    defaultValue: despesa == null ? void 0 : despesa.conta,
    className: "w-full p-2 rounded-xl my-2"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "valor",
    className: "text-blue-600 font-semibold"
  }, "Valor"), /* @__PURE__ */ React.createElement("input", {
    className: "w-full p-2 rounded-xl my-2",
    placeholder: "Valor",
    name: "valor",
    defaultValue: (despesa == null ? void 0 : despesa.valor).toLocaleString()
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "text-blue-600 font-semibold"
  }, "Data"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "data",
    name: "data",
    className: "w-full p-2 rounded-xl my-2",
    defaultValue: new Date(despesa == null ? void 0 : despesa.data).toISOString().substring(0, 10)
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "tipo",
    className: "text-blue-600 font-semibold"
  }, "Tipo"), /* @__PURE__ */ React.createElement("select", {
    id: "tipo",
    name: "tipo",
    defaultValue: despesa == null ? void 0 : despesa.tipo,
    className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "fixa"
  }, "Fixa"), /* @__PURE__ */ React.createElement("option", {
    value: "variavel"
  }, "Vari\xE1vel")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-center space-x-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
    name: "_action",
    value: "save"
  }, transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1",
    name: "_action",
    value: "delete"
  }, transition.state === "submitting" ? "Apagando..." : "Apagar")))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/despesas/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action3,
  default: () => New
});
var import_react13 = __toESM(require("cleave.js/react")), import_node9 = require("@remix-run/node");
var import_react14 = require("@remix-run/react");
var action3 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return await createDespesa(values), (0, import_node9.redirect)("/despesas");
};
function New() {
  let navigate = (0, import_react14.useNavigate)(), transition = (0, import_react14.useTransition)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ React.createElement(Modal_default, {
    onClose: closeHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full  justify-center items-center flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-700"
  }, "Cadastro de Despesas"), /* @__PURE__ */ React.createElement(import_react14.Form, {
    method: "post",
    className: "rounded-2xl bg-gray-200 p-6 w-96"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "conta",
    className: "text-blue-600 font-semibold"
  }, "Conta"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "conta",
    name: "conta",
    className: "w-full p-2 rounded-xl my-2"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "valor",
    className: "text-blue-600 font-semibold"
  }, "Valor"), /* @__PURE__ */ React.createElement(import_react13.default, {
    className: "w-full p-2 rounded-xl my-2",
    placeholder: "Valor",
    name: "valor",
    options: { numeral: !0, numeralDecimalMark: ",", delimiter: "." }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "text-blue-600 font-semibold"
  }, "Data"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "data",
    name: "data",
    className: "w-full p-2 rounded-xl my-2",
    defaultValue: new Date().toISOString().substring(0, 10)
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "tipo",
    className: "text-blue-600 font-semibold"
  }, "Tipo"), /* @__PURE__ */ React.createElement("select", {
    id: "tipo",
    name: "tipo",
    className: "bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "fixa"
  }, "Fixa"), /* @__PURE__ */ React.createElement("option", {
    value: "variavel"
  }, "Vari\xE1vel")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-center space-x-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
    value: "Cadastrar"
  }, transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"), /* @__PURE__ */ React.createElement(import_react14.Link, {
    to: "..",
    className: "rounded-xl mt-2 bg-yellow-500  px-3 py-2 "
  }, "Cancelar")))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/receitas.tsx
var receitas_exports = {};
__export(receitas_exports, {
  default: () => Receitas,
  loader: () => loader6
});
var import_node10 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react");
var loader6 = async ({ request }) => {
  await requireUserSession(request);
  let receitas = await getReceitas();
  return (0, import_node10.json)({ receitas });
};
function Receitas() {
  let { receitas } = (0, import_react15.useLoaderData)(), [filtrar, setFiltrar] = (0, import_react16.useState)(""), receitaFilter = receitas == null ? void 0 : receitas.filter((receitas2) => receitas2.centro.toLowerCase().includes(filtrar.toLowerCase()));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_react15.Outlet, null), /* @__PURE__ */ React.createElement("h1", {
    className: "flex  justify-center font-bold text-slate-500 text-xl"
  }, "RECEITAS"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-around items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-1/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    value: filtrar,
    onChange: (e) => setFiltrar(e.target.value),
    placeholder: "Procurar",
    className: "block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
  })), /* @__PURE__ */ React.createElement(import_react15.NavLink, {
    className: " flex mr-4  focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
    to: "new"
  }, "Nova")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 text-sm text-left mt-4 text-gray-500 border-l-2 border-r-2 border-slate-100"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Centro"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Refer\xEAncia"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-right"
  }, "Valor"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Editar")))), /* @__PURE__ */ React.createElement("tbody", null, receitaFilter.map((rec) => /* @__PURE__ */ React.createElement("tr", {
    key: rec.id,
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6  font-medium text-gray-900 dark:text-white whitespace-nowrap"
  }, rec.centro), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, rec.referencia), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  text-right "
  }, rec.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react15.NavLink, {
    to: `${rec.id}`,
    className: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-3h-10.721v16h20v-10.573l-2 2.023z"
  }))))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/receitas/index_bak.tsx
var index_bak_exports3 = {};
__export(index_bak_exports3, {
  default: () => Receitas2,
  loader: () => loader7
});
var import_node11 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_react18 = require("react");
var loader7 = async ({ request }) => {
  let receitas = await getReceitas();
  return (0, import_node11.json)({ receitas });
};
function Receitas2() {
  let { receitas } = (0, import_react17.useLoaderData)(), [filtrar, setFiltrar] = (0, import_react18.useState)(""), receitaFilter = receitas == null ? void 0 : receitas.filter((receitas2) => receitas2.centro.toLowerCase().includes(filtrar.toLowerCase()));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("h1", {
    className: "flex  justify-center font-bold text-slate-500 text-xl"
  }, "RECEITAS"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-around items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-1/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    value: filtrar,
    onChange: (e) => setFiltrar(e.target.value),
    placeholder: "Procurar",
    className: "block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
  })), /* @__PURE__ */ React.createElement(import_react17.NavLink, {
    className: " flex mr-4  focus:outline-none text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
    to: "new"
  }, "Nova")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 text-sm text-left mt-4 text-gray-500 border-l-2 border-r-2 border-slate-100"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Centro"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Refer\xEAncia"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-right"
  }, "Valor"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Editar")))), /* @__PURE__ */ React.createElement("tbody", null, receitaFilter.map((rec) => /* @__PURE__ */ React.createElement("tr", {
    key: rec.id,
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6  font-medium text-gray-900 dark:text-white whitespace-nowrap"
  }, rec.centro), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, rec.referencia), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  text-right "
  }, rec.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6  py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react17.NavLink, {
    to: `${rec.id}`,
    className: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-3h-10.721v16h20v-10.573l-2 2.023z"
  }))))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/receitas/$receita.tsx
var receita_exports = {};
__export(receita_exports, {
  action: () => action4,
  default: () => Receita,
  loader: () => loader8
});
var import_node12 = require("@remix-run/node"), import_react19 = require("@remix-run/react");
var import_react20 = require("@remix-run/react"), import_node13 = require("@remix-run/node");
var import_ri2 = require("react-icons/ri"), loader8 = async ({ request, params }) => {
  let receita = await getReceita(params.receita);
  return (0, import_node12.json)({ receita });
}, action4 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return form.get("_action") === "save" ? await updateReceita(values) : await deleteReceita(values), (0, import_node13.redirect)("/receitas");
};
function Receita() {
  let navigate = (0, import_react19.useNavigate)(), transition = (0, import_react20.useTransition)();
  function closeHandler() {
    navigate("..");
  }
  let { receita } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Modal_default, {
    onClose: closeHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full justify-center items-center flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-700"
  }, "Alterar de Receita"), /* @__PURE__ */ React.createElement(import_react19.Link, {
    to: "..",
    className: ""
  }, /* @__PURE__ */ React.createElement(import_ri2.RiCloseCircleFill, {
    className: " text-red-500  w-8 h-8 "
  }))), /* @__PURE__ */ React.createElement(import_react20.Form, {
    method: "post",
    className: "rounded-2xl bg-gray-200 p-6 w-96"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: !0,
    type: "text",
    name: "id",
    defaultValue: receita == null ? void 0 : receita.id
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "conta",
    className: "text-blue-600 font-semibold"
  }, "Centro"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "centro",
    name: "centro",
    defaultValue: receita == null ? void 0 : receita.centro,
    className: "w-full p-2 rounded-xl my-2"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "valor",
    className: "text-blue-600 font-semibold"
  }, "Valor"), /* @__PURE__ */ React.createElement("input", {
    className: "w-full p-2 rounded-xl my-2",
    placeholder: "Valor",
    name: "valor",
    defaultValue: (receita == null ? void 0 : receita.valor).toLocaleString()
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "text-blue-600 font-semibold"
  }, "Data"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "data",
    name: "data",
    className: "w-full p-2 rounded-xl my-2",
    defaultValue: new Date(receita == null ? void 0 : receita.data).toISOString().substring(0, 10)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-center space-x-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
    name: "_action",
    value: "save"
  }, transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1",
    name: "_action",
    value: "delete"
  }, transition.state === "submitting" ? "Apagando..." : "Apagar")))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/receitas/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action5,
  default: () => New2
});
var import_react21 = __toESM(require("cleave.js/react")), import_node14 = require("@remix-run/node");
var import_react22 = require("@remix-run/react");
var action5 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return await createReceita(values), (0, import_node14.redirect)("/receitas");
};
function New2() {
  let navigate = (0, import_react22.useNavigate)(), transition = (0, import_react22.useTransition)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ React.createElement(Modal_default, {
    onClose: closeHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full justify-center items-center flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-700"
  }, "Cadastro de Receitas"), /* @__PURE__ */ React.createElement(import_react22.Form, {
    method: "post",
    className: "rounded-2xl bg-gray-200 p-6 w-96"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "conta",
    className: "text-blue-600 font-semibold"
  }, "Centro"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "centro",
    name: "centro",
    className: "w-full p-2 rounded-xl my-2"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "valor",
    className: "text-blue-600 font-semibold"
  }, "Valor"), /* @__PURE__ */ React.createElement(import_react21.default, {
    className: "w-full p-2 rounded-xl my-2",
    placeholder: "Valor",
    name: "valor",
    options: { numeral: !0, numeralDecimalMark: ",", delimiter: "." }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "text-blue-600 font-semibold"
  }, "Data"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "data",
    name: "data",
    className: "w-full p-2 rounded-xl my-2",
    defaultValue: new Date().toISOString().substring(0, 10)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full space-x-4 text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
    value: "Cadastrar"
  }, transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"), /* @__PURE__ */ React.createElement(import_react22.Link, {
    to: "..",
    className: "rounded-xl mt-2 bg-yellow-500  px-3 py-2 "
  }, "Cancelar")))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action6
});
var import_node15 = require("@remix-run/node");
function action6({ request }) {
  if (request.method !== "POST")
    throw (0, import_node15.json)({ message: "M\xE9todo Inv\xE1lido" }, { status: 400 });
  return destroyUserSession(request);
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/folha.tsx
var folha_exports = {};
__export(folha_exports, {
  default: () => Folha,
  loader: () => loader9
});
var import_node16 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_react24 = require("react");
var import_fa = require("react-icons/fa");
var loader9 = async ({ request }) => {
  await requireUserSession(request);
  let funcionarios = await getFuncionarios();
  return (0, import_node16.json)({ funcionarios });
};
function Folha() {
  let { funcionarios } = (0, import_react23.useLoaderData)(), [filtrar, setFiltrar] = (0, import_react24.useState)(""), funcFilter = funcionarios == null ? void 0 : funcionarios.filter((funcionarios2) => funcionarios2.nome.toLowerCase().includes(filtrar.toLowerCase()));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_react23.Outlet, null), /* @__PURE__ */ React.createElement("h1", {
    className: "flex  justify-center font-bold text-slate-500 text-xl"
  }, "FOLHA DE PAGAMENTO"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-around items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-1/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    value: filtrar,
    onChange: (e) => setFiltrar(e.target.value),
    placeholder: "Procurar",
    className: "block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
  })), /* @__PURE__ */ React.createElement(import_react23.NavLink, {
    className: " flex mr-4  focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
    to: "new"
  }, "Nova")), /* @__PURE__ */ React.createElement("div", {
    className: " flex justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 mt-4 text-sm text-left border-l-2 border-r-2 border-slate-100 text-gray-500 "
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-stone-100  "
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-10 py-3 text-left"
  }, "Nome"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Fun\xE7\xE3o"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left"
  }, "Modalidade"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-center"
  }, "Pago"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }))), /* @__PURE__ */ React.createElement("tbody", null, funcFilter.map((func) => /* @__PURE__ */ React.createElement("tr", {
    key: func.id,
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6  whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " text-gray-800"
  }, func.nome), /* @__PURE__ */ React.createElement("div", {
    className: " flex items-center font-light text-xs text-blue-500"
  }, func.salarios.map((s) => s.valor).pop().toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }), /* @__PURE__ */ React.createElement(import_fa.FaCaretRight, {
    className: "mr-1 ml-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-green-600"
  }, func.salarios.map((s) => s.valor + s.fgts + s.ferias + s.decimo).pop().toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement(import_fa.FaCaretRight, {
    className: "mr-1 ml-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-600"
  }, func.conta)))), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, func.funcao), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, func.modalidade), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 text-center "
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    readOnly: !0,
    checked: !!func.salarios.map((s) => s.pago).pop()
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-2 py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react23.NavLink, {
    to: `salario/${func.id}`,
    className: "font-medium text-green-600 dark:text-blue-500 hover:underline"
  }, /* @__PURE__ */ React.createElement(Money, null))), /* @__PURE__ */ React.createElement("td", {
    className: "px-4  py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react23.NavLink, {
    to: `${func.id}`,
    className: "font-medium text-stone-500 "
  }, /* @__PURE__ */ React.createElement(Edit, null)))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/folha/salario_bak/$pagamento_bak.tsx
var pagamento_bak_exports = {};
__export(pagamento_bak_exports, {
  action: () => action7,
  default: () => Pagamento2,
  loader: () => loader10
});
var import_node17 = require("@remix-run/node"), import_node18 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_date_fns6 = require("date-fns"), import_locale6 = require("date-fns/locale"), import_react26 = require("react"), import_lodash4 = __toESM(require("lodash"));
var action7 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form), action12 = form.get("_action");
  if (action12 === "cadastrar") {
    let salario = await createSalario(values);
    return (0, import_node17.redirect)("folha");
  } else {
    if (action12 === "delete")
      return await deleteSalario(values), (0, import_node17.redirect)("folha");
    if (action12 === "pagar")
      return await pagarSalario(values), (0, import_node17.redirect)("folha");
  }
}, loader10 = async ({ request, params }) => {
  let funcionario = await getFuncionario(params.pagamento);
  return (0, import_node18.json)({ funcionario });
};
function Pagamento2() {
  let transition = (0, import_react25.useTransition)(), isAdding = transition.state === "submitting", formRef = (0, import_react26.useRef)(), [salId, setSalId] = (0, import_react26.useState)("");
  (0, import_react26.useEffect)(() => {
    var _a;
    isAdding || (_a = formRef.current) == null || _a.reset();
  }, [isAdding]);
  let { funcionario } = (0, import_react25.useLoaderData)(), PagFechado = funcionario.salarios.map((s) => s.pago).pop();
  return console.log(!PagFechado), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  p-6 bg-white border-b-2 border-stone-300 text-center"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-bold"
  }, funcionario.nome), /* @__PURE__ */ React.createElement("div", {
    className: " space-x-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm uppercase text-gray-500"
  }, funcionario.funcao), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "|"), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm uppercase text-gray-500"
  }, funcionario.modalidade), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "|"), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm uppercase text-gray-500"
  }, funcionario.conta))), /* @__PURE__ */ React.createElement(import_react25.Form, {
    ref: formRef,
    method: "post",
    className: " bg-stone-100 p-6 container mt-4 mx-auto px-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-6 mb-2 ml-80 mr-80 "
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: !0,
    type: "text",
    name: "id",
    defaultValue: funcionario == null ? void 0 : funcionario.id
  }), /* @__PURE__ */ React.createElement("input", {
    hidden: !0,
    type: "text",
    name: "sal_id",
    defaultValue: salId
  }), PagFechado && /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "valor",
    className: "block mb-2  text-sm font-medium text-gray-900 "
  }, "Valor"), /* @__PURE__ */ React.createElement("input", {
    type: "float",
    className: "w-full p-2 rounded-xl my-2",
    placeholder: "Valor",
    name: "valor"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "data",
    className: "block mb-2 text-sm font-medium  dark:text-gray-300"
  }, "Data"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "data",
    name: "data",
    className: "w-full p-2 rounded-xl my-2 "
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl  bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
    name: "_action",
    value: "cadastrar"
  }, transition.state === "submitting" ? "Cadastrando..." : "Cadastrar")))), /* @__PURE__ */ React.createElement("div", {
    className: " flex mt-2 justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 text-sm text-left text-gray-500 "
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase  "
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Data"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 text-right py-3"
  }, "Valor"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left"
  }, "Refer\xEAncia"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-center"
  }, "Pago"))), /* @__PURE__ */ React.createElement("tbody", null, import_lodash4.default.orderBy(funcionario.salarios, ["data"], ["desc"]).map((sal) => /* @__PURE__ */ React.createElement("tr", {
    key: sal.sal_id,
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6   font-medium text-gray-900 dark:text-white whitespace-nowrap"
  }, (0, import_date_fns6.format)(new Date(sal.data), "dd-MMM", { locale: import_locale6.pt })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 text-right "
  }, sal.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, sal.referencia), /* @__PURE__ */ React.createElement("td", {
    className: " py-3 text-center "
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    readOnly: !0,
    checked: sal.pago
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    className: "text-orange-400 mr-2 ",
    type: "submit",
    name: "_action",
    value: "pagar",
    onClick: () => setSalId(sal.sal_id)
  }, /* @__PURE__ */ React.createElement(Pagar, null))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    className: "text-red-500 mr-2 ",
    type: "submit",
    name: "_action",
    value: "delete",
    onClick: () => setSalId(sal.sal_id)
  }, /* @__PURE__ */ React.createElement(Delete, null)))))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/folha/$funcionario.tsx
var funcionario_exports = {};
__export(funcionario_exports, {
  action: () => action8,
  default: () => Receita2,
  loader: () => loader11
});
var import_node19 = require("@remix-run/node"), import_node20 = require("@remix-run/node"), import_react27 = require("@remix-run/react");
var import_ri3 = require("react-icons/ri"), loader11 = async ({ request, params }) => {
  let funcionario = await getFuncionario(params.funcionario);
  return (0, import_node20.json)({ funcionario });
}, action8 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return form.get("_action") === "save" ? await updateFuncionario(values) : await deleteFuncionario(values), (0, import_node19.redirect)("/folha");
};
function Receita2() {
  let navigate = (0, import_react27.useNavigate)(), transition = (0, import_react27.useTransition)();
  function closeHandler() {
    navigate("..");
  }
  let { funcionario } = (0, import_react27.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Modal_default, {
    onClose: closeHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full justify-center items-center flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-700"
  }, "Funcionario"), /* @__PURE__ */ React.createElement(import_react27.Link, {
    to: "..",
    className: ""
  }, /* @__PURE__ */ React.createElement(import_ri3.RiCloseCircleFill, {
    className: " text-red-500  w-8 h-8 "
  }))), /* @__PURE__ */ React.createElement(import_react27.Form, {
    method: "post",
    className: "rounded-2xl bg-stone-200 p-6 w-96"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: !0,
    type: "text",
    name: "id",
    defaultValue: funcionario == null ? void 0 : funcionario.id
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "nome",
    className: "text-blue-600 font-semibold"
  }, "Nome"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "nome",
    name: "nome",
    className: "w-full p-2 rounded-xl my-2",
    defaultValue: funcionario == null ? void 0 : funcionario.nome
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "funcao",
    className: "text-blue-600 font-semibold"
  }, "Fun\xE7\xE3o"), /* @__PURE__ */ React.createElement("select", {
    className: "w-full p-2 rounded-xl my-2",
    name: "funcao",
    defaultValue: funcionario == null ? void 0 : funcionario.funcao,
    id: "funcao"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: !0
  }, "Selecione a Fun\xE7\xE3o"), /* @__PURE__ */ React.createElement("option", {
    value: "contrato"
  }, "Contrato"), /* @__PURE__ */ React.createElement("option", {
    value: "adm"
  }, "Administrativo"), /* @__PURE__ */ React.createElement("option", {
    value: "coordenador"
  }, "Coordenador"), /* @__PURE__ */ React.createElement("option", {
    value: "estagiario"
  }, "Estagi\xE1rio"), /* @__PURE__ */ React.createElement("option", {
    value: "professor"
  }, "Professor")), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "modalidade",
    className: "text-blue-600 font-semibold"
  }, "Modalidade"), /* @__PURE__ */ React.createElement("select", {
    className: "w-full p-2 rounded-xl my-2",
    name: "modalidade",
    defaultValue: funcionario == null ? void 0 : funcionario.modalidade,
    id: "modalidade"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: !0
  }, "Selecione a Modalidade"), /* @__PURE__ */ React.createElement("option", {
    value: "judo"
  }, "Jud\xF4"), /* @__PURE__ */ React.createElement("option", {
    value: "musculacao"
  }, "Muscula\xE7\xE3o"), /* @__PURE__ */ React.createElement("option", {
    value: "pilates"
  }, "Pilates"), /* @__PURE__ */ React.createElement("option", {
    value: "natacao"
  }, "Nata\xE7\xE3o"), /* @__PURE__ */ React.createElement("option", {
    value: "ballet"
  }, "Ballet"), /* @__PURE__ */ React.createElement("option", {
    value: "aulas"
  }, "Aulas"), /* @__PURE__ */ React.createElement("option", {
    value: "geral"
  }, "Geral"), /* @__PURE__ */ React.createElement("option", {
    value: "boxe"
  }, "Boxe"), /* @__PURE__ */ React.createElement("option", {
    value: "muaithay"
  }, "Muaithay"), /* @__PURE__ */ React.createElement("option", {
    value: "prime"
  }, "Prime")), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "conta",
    className: "text-blue-600 font-semibold"
  }, "Conta"), /* @__PURE__ */ React.createElement("input", {
    placeholder: "PIX, CC, C. Salario",
    type: "string",
    id: "conta",
    name: "conta",
    defaultValue: funcionario == null ? void 0 : funcionario.conta,
    className: "w-full p-2 rounded-xl my-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-center space-x-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1",
    name: "_action",
    value: "save"
  }, transition.state === "submitting" ? "Salvando..." : "Salvar"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-red-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-red-700 hover:-translate-y-1",
    name: "_action",
    value: "delete"
  }, transition.state === "submitting" ? "Apagando..." : "Apagar")))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/folha/index_bak.tsx
var index_bak_exports4 = {};
__export(index_bak_exports4, {
  default: () => Folha2,
  loader: () => loader12
});
var import_node21 = require("@remix-run/node"), import_react28 = require("@remix-run/react"), import_react29 = require("react");
var import_fa2 = require("react-icons/fa"), loader12 = async ({ request }) => {
  let funcionarios = await getFuncionarios();
  return (0, import_node21.json)({ funcionarios });
};
function Folha2() {
  let { funcionarios } = (0, import_react28.useLoaderData)(), [filtrar, setFiltrar] = (0, import_react29.useState)(""), funcFilter = funcionarios == null ? void 0 : funcionarios.filter((funcionarios2) => funcionarios2.nome.toLowerCase().includes(filtrar.toLowerCase()));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("h1", {
    className: "flex  justify-center font-bold text-slate-500 text-xl"
  }, "FOLHA DE PAGAMENTO"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-around items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-1/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    value: filtrar,
    onChange: (e) => setFiltrar(e.target.value),
    placeholder: "Procurar",
    className: "block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
  })), /* @__PURE__ */ React.createElement(import_react28.NavLink, {
    className: " flex mr-4  focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300  rounded-lg text-sm px-5 py-2.5  mb-2 dark:focus:ring-yellow-900",
    to: "new"
  }, "Nova")), /* @__PURE__ */ React.createElement("div", {
    className: " flex justify-center "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/4 mt-4 text-sm text-left border-l-2 border-r-2 border-slate-100 text-gray-500 "
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-stone-100  "
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-10 py-3 text-left"
  }, "Nome"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Fun\xE7\xE3o"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left"
  }, "Modalidade"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-center"
  }, "Pago"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3"
  }))), /* @__PURE__ */ React.createElement("tbody", null, funcFilter.map((func) => /* @__PURE__ */ React.createElement("tr", {
    key: func.id,
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "px-6  whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " text-gray-800"
  }, func.nome), /* @__PURE__ */ React.createElement("div", {
    className: " flex items-center font-light text-xs text-blue-500"
  }, func.salarios.map((s) => s.valor).pop().toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }), /* @__PURE__ */ React.createElement(import_fa2.FaCaretRight, {
    className: "mr-1 ml-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-green-600"
  }, func.salarios.map((s) => s.valor + s.fgts + s.ferias + s.decimo).pop().toLocaleString("pt-br", {
    minimumFractionDigits: 2
  })), /* @__PURE__ */ React.createElement(import_fa2.FaCaretRight, {
    className: "mr-1 ml-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-600"
  }, func.conta)))), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, func.funcao), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 "
  }, func.modalidade), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-3 text-center "
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    readOnly: !0,
    checked: !!func.salarios.map((s) => s.pago).pop()
  })), /* @__PURE__ */ React.createElement("td", {
    className: "px-2 py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react28.NavLink, {
    to: `salario/${func.id}`,
    className: "font-medium text-green-600 dark:text-blue-500 hover:underline"
  }, /* @__PURE__ */ React.createElement(Money, null))), /* @__PURE__ */ React.createElement("td", {
    className: "px-4  py-3 text-right"
  }, /* @__PURE__ */ React.createElement(import_react28.NavLink, {
    to: `${func.id}`,
    className: "font-medium text-stone-500 "
  }, /* @__PURE__ */ React.createElement(Edit, null)))))))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/folha/new.tsx
var new_exports3 = {};
__export(new_exports3, {
  action: () => action9,
  default: () => New3
});
var import_node22 = require("@remix-run/node"), import_react30 = require("@remix-run/react");
var action9 = async ({ request }) => {
  let form = await request.formData(), values = Object.fromEntries(form);
  return await createFuncionario(values), (0, import_node22.redirect)("/folha");
};
function New3() {
  let navigate = (0, import_react30.useNavigate)(), transition = (0, import_react30.useTransition)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ React.createElement(Modal_default, {
    onClose: closeHandler
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full justify-center items-center flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-stone-700"
  }, "Cadastro de Funcion\xE1rios"), /* @__PURE__ */ React.createElement(import_react30.Form, {
    method: "post",
    className: "rounded-2xl bg-stone-200 p-6 w-96"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "nome",
    className: "text-blue-600 font-semibold"
  }, "Nome"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "nome",
    name: "nome",
    className: "w-full p-2 rounded-xl my-2"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "funcao",
    className: "text-blue-600 font-semibold"
  }, "Fun\xE7\xE3o"), /* @__PURE__ */ React.createElement("select", {
    className: "w-full p-2 rounded-xl my-2",
    name: "funcao",
    id: "funcao"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: !0
  }, "Selecione a Fun\xE7\xE3o"), /* @__PURE__ */ React.createElement("option", {
    value: "contrato"
  }, "Contrato"), /* @__PURE__ */ React.createElement("option", {
    value: "adm"
  }, "Administrativo"), /* @__PURE__ */ React.createElement("option", {
    value: "coordenador"
  }, "Coordenador"), /* @__PURE__ */ React.createElement("option", {
    value: "estagiario"
  }, "Estagi\xE1rio"), /* @__PURE__ */ React.createElement("option", {
    value: "professor"
  }, "Professor")), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "modalidade",
    className: "text-blue-600 font-semibold"
  }, "Modalidade"), /* @__PURE__ */ React.createElement("select", {
    className: "w-full p-2 rounded-xl my-2",
    name: "modalidade",
    id: "modalidade"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: !0
  }, "Selecione a Modalidade"), /* @__PURE__ */ React.createElement("option", {
    value: "judo"
  }, "Jud\xF4"), /* @__PURE__ */ React.createElement("option", {
    value: "musculacao"
  }, "Muscula\xE7\xE3o"), /* @__PURE__ */ React.createElement("option", {
    value: "pilates"
  }, "Pilates"), /* @__PURE__ */ React.createElement("option", {
    value: "natacao"
  }, "Nata\xE7\xE3o"), /* @__PURE__ */ React.createElement("option", {
    value: "ballet"
  }, "Ballet"), /* @__PURE__ */ React.createElement("option", {
    value: "aulas"
  }, "Aulas"), /* @__PURE__ */ React.createElement("option", {
    value: "geral"
  }, "Geral"), /* @__PURE__ */ React.createElement("option", {
    value: "boxe"
  }, "Boxe"), /* @__PURE__ */ React.createElement("option", {
    value: "muaithay"
  }, "Muaithay"), /* @__PURE__ */ React.createElement("option", {
    value: "prime"
  }, "Prime")), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "conta",
    className: "text-blue-600 font-semibold"
  }, "Conta"), /* @__PURE__ */ React.createElement("input", {
    placeholder: "PIX, CC, C. Salario",
    type: "string",
    id: "conta",
    name: "conta",
    className: "w-full p-2 rounded-xl my-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-center space-x-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
    value: "Cadastrar"
  }, transition.state === "submitting" ? "Cadastrando..." : "Cadastrar"), /* @__PURE__ */ React.createElement(import_react30.Link, {
    to: "..",
    className: "rounded-xl mt-2 bg-yellow-500  px-3 py-2 "
  }, "Cancelar")))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader13
});
var import_node23 = require("@remix-run/node");
var import_react31 = require("@remix-run/react");
var import_date_fns7 = require("date-fns"), import_locale7 = require("date-fns/locale");
var import_lodash5 = __toESM(require("lodash")), import_chart2 = require("chart.js"), import_react_chartjs_22 = require("react-chartjs-2");
var loader13 = async ({ request, params }) => {
  await requireUserSession(request), console.log(await requireUserSession(request));
  let dataAtual = (0, import_date_fns7.format)(new Date(), "MMM-yyyy", { locale: import_locale7.pt }), par = new URL(request.url).searchParams.get("rec"), parametro = par || dataAtual, totReceitas = await groupReceitasAgrupadas(String(parametro)), ReceitasM = await ReceitasMes(String(parametro)), DespesasM = await DespesasMes(String(parametro)), TotDespesas = await totDespesas(String(parametro)), TotSalarios = await groupSalario(), TotSalMes = import_lodash5.default.filter(TotSalarios, ["_id", parametro]), salAreas = await groupSalarioAreas(parametro), totTipoDesp = await totTipoDespesas(parametro), areas = await SalarioAreas();
  return (0, import_node23.json)({
    totReceitas,
    TotDespesas,
    ReceitasM,
    DespesasM,
    TotSalarios,
    TotSalMes,
    salAreas,
    totTipoDesp,
    areas
  });
};
function Index2() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let rec = (0, import_react31.useFetcher)(), {
    totReceitas,
    TotSalarios,
    ReceitasM,
    TotDespesas,
    DespesasM,
    TotSalMes,
    salAreas,
    areas
  } = (0, import_react31.useLoaderData)(), totalRec = ((_a = rec.data) == null ? void 0 : _a.totReceitas) ? rec.data.totReceitas : totReceitas, recMes = ((_b = rec.data) == null ? void 0 : _b.ReceitasM) ? rec.data.ReceitasM : ReceitasM, totalDesp = ((_c = rec.data) == null ? void 0 : _c.TotDespesas) ? rec.data.TotDespesas : TotDespesas, despMes = ((_d = rec.data) == null ? void 0 : _d.DespesasM) ? rec.data.DespesasM : DespesasM, TotSalarioMes = ((_e = rec.data) == null ? void 0 : _e.TotSalMes) ? rec.data.TotSalMes : TotSalMes, TotSalAreas = ((_f = rec.data) == null ? void 0 : _f.salAreas) ? rec.data.salAreas : salAreas, DespesasFixas = import_lodash5.default.filter(despMes, ["tipo", "fixa"]), DespesasVariaveis = import_lodash5.default.filter(despMes, ["tipo", "variavel"]), DespesasFixasTotal = import_lodash5.default.sumBy(import_lodash5.default.filter(despMes, ["tipo", "fixa"]), "valor"), DespesasVariavelTotal = import_lodash5.default.sumBy(import_lodash5.default.filter(despMes, ["tipo", "variavel"]), "valor"), SalDiretos = import_lodash5.default.sumBy(import_lodash5.default.filter(TotSalAreas, function(o) {
    return o.mod != "geral";
  }), "valor"), PercentFixa = ((SalDiretos + DespesasFixasTotal) / totalRec._sum.valor).toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2
  }), PercentVariavel = (DespesasVariavelTotal / totalRec._sum.valor).toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2
  }), Mensalidade = (SalDiretos + DespesasFixasTotal) / 1100, Mensalidade6 = Mensalidade * (1 + DespesasVariavelTotal / totalRec._sum.valor) * 1.06, previsao = Mensalidade * (1 + DespesasVariavelTotal / totalRec._sum.valor) * 1.06 * 1100, Lucro = previsao - previsao * (DespesasVariavelTotal / totalRec._sum.valor) - DespesasFixasTotal - SalDiretos, PontoEquilibrio = (DespesasFixasTotal + SalDiretos) / 1 - DespesasVariavelTotal / totalRec._sum.valor, PontoEquilibrioQtd = PontoEquilibrio / Mensalidade6, capitalize = (str) => typeof str != "string" ? "" : str.charAt(0).toUpperCase() + str.substr(1), TotalSalariosMes = TotSalarios.map((o) => Object.assign({}, o, o._id === "jan-2023" && { mes: 1 }, o._id === "fev-2023" && { mes: 2 }, o._id === "mar-2023" && { mes: 3 }, o._id === "abr-2023" && { mes: 4 }, o._id === "mai-2023" && { mes: 5 }, o._id === "jun-2023" && { mes: 6 }, o._id === "jul-2023" && { mes: 7 }, o._id === "ago-2023" && { mes: 8 }, o._id === "set-2023" && { mes: 9 }, o._id === "out-2023" && { mes: 10 }, o._id === "nov-2023" && { mes: 11 }, o._id === "dez-2023" && { mes: 12 }));
  import_chart2.Chart.register(import_chart2.CategoryScale, import_chart2.LinearScale, import_chart2.PointElement, import_chart2.BarElement, import_chart2.LineElement, import_chart2.Title, import_chart2.Tooltip, import_chart2.Legend);
  let optionsLine = {
    responsive: !0,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: !0,
        text: "Total de Sal\xE1rios"
      }
    }
  }, optionsBar = {
    plugins: {
      title: {
        display: !0,
        text: "Chart.js Bar Chart - Stacked"
      }
    },
    responsive: !0,
    interaction: {
      mode: "index",
      intersect: !1
    },
    scales: {
      x: {
        stacked: !0
      },
      y: {
        stacked: !0
      }
    }
  }, labels = import_lodash5.default.orderBy(TotalSalariosMes, "mes").map((dt) => dt._id), data = {
    labels,
    datasets: [
      {
        label: "Sal\xE1rios",
        data: import_lodash5.default.orderBy(TotalSalariosMes, "mes").map((sal) => sal.salario),
        borderColor: "rgb(240, 96, 57)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  }, dataBar = {
    labels,
    datasets: [
      {
        label: "Muscula\xE7\xE3o",
        data: import_lodash5.default.filter(areas, ["_id[1]", "musculacao"]).map((m) => m.salario),
        backgroundColor: "#293462",
        stack: "Stack 0"
      },
      {
        label: "Prime",
        data: import_lodash5.default.filter(areas, ["_id[1]", "prime"]).map((m) => m.salario),
        backgroundColor: "#1CD6CE",
        stack: "Stack 0"
      },
      {
        label: "Geral",
        data: import_lodash5.default.filter(areas, ["_id[1]", "geral"]).map((m) => m.salario),
        backgroundColor: "#FEDB39",
        stack: "Stack 0"
      },
      {
        label: "Jud\xF4",
        data: import_lodash5.default.filter(areas, ["_id[1]", "judo"]).map((m) => m.salario),
        backgroundColor: "#D61C4E",
        stack: "Stack 0"
      },
      {
        label: "Pilates",
        data: import_lodash5.default.filter(areas, ["_id[1]", "pilates"]).map((m) => m.salario),
        backgroundColor: "#781C68",
        stack: "Stack 0"
      },
      {
        label: "Nata\xE7\xE3o",
        data: import_lodash5.default.filter(areas, ["_id[1]", "natacao"]).map((m) => m.salario),
        backgroundColor: "#D36B00",
        stack: "Stack 0"
      },
      {
        label: "Boxe",
        data: import_lodash5.default.filter(areas, ["_id[1]", "boxe"]).map((m) => m.salario),
        backgroundColor: "#224B0C",
        stack: "Stack 0"
      },
      {
        label: "MuaiThay",
        data: import_lodash5.default.filter(areas, ["_id[1]", "muaithay"]).map((m) => m.salario),
        backgroundColor: "#EED180",
        stack: "Stack 0"
      },
      {
        label: "Ballet",
        data: import_lodash5.default.filter(areas, ["_id[1]", "ballet"]).map((m) => m.salario),
        backgroundColor: "#CA4E79",
        stack: "Stack 0"
      },
      {
        label: "Aulas",
        data: import_lodash5.default.filter(areas, ["_id[1]", "aulas"]).map((m) => m.salario),
        backgroundColor: "#F15412",
        stack: "Stack 0"
      }
    ]
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(rec.Form, {
    method: "get",
    action: "."
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "mr-4 font-light   text-sm ",
    htmlFor: "rec"
  }, "M\xCAS E ANO DE REFER\xCANCIA"), rec.state === "submitting" ? /* @__PURE__ */ React.createElement(Load, null) : null, /* @__PURE__ */ React.createElement(Arrow, null), /* @__PURE__ */ React.createElement("select", {
    className: "rounded text-blue-600 h-8  pl-5 pr-10 hover:border-gray-400 focus:outline-none ",
    name: "rec",
    defaultValue: (0, import_date_fns7.format)(new Date(), "MMM-yyyy", { locale: import_locale7.pt }),
    onChange: (event) => rec.submit(event.target.form)
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: !0,
    value: ""
  }, "Selecione m\xEAs e ano referencia"), /* @__PURE__ */ React.createElement("option", {
    value: "jan-2023"
  }, "Janeiro - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "fev-2023"
  }, "Fevereiro - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "mar-2023"
  }, "Mar\xE7o - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "abr-2023"
  }, "Abril - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "mai-2023"
  }, "Maio - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "jun-2023"
  }, "Junho - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "jul-2023"
  }, "Julho - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "ago-2023"
  }, "Agosto - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "set-2023"
  }, "Setembro - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "out-2023"
  }, "Outubro - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "nov-2023"
  }, "Novembro - 2023"), /* @__PURE__ */ React.createElement("option", {
    value: "dez-2023"
  }, "Dezembro - 2023")))), /* @__PURE__ */ React.createElement("div", {
    className: "container p-8 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " grid grid-cols-3 gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300 py-2 text-white bg-slate-600 flex justify-between px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Despesas Fixas"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono  "
  }, DespesasFixasTotal == null ? void 0 : DespesasFixasTotal.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-40 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, DespesasFixas == null ? void 0 : DespesasFixas.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300 py-2 text-white bg-slate-600  flex justify-between px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Despesas Vari\xE1veis"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono"
  }, DespesasVariavelTotal == null ? void 0 : DespesasVariavelTotal.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-56 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, DespesasVariaveis == null ? void 0 : DespesasVariaveis.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300 py-2 text-white bg-slate-600 flex justify-between px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Despesas"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono"
  }, (_g = totalDesp._sum.valor) == null ? void 0 : _g.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-40 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, despMes == null ? void 0 : despMes.map((desp) => /* @__PURE__ */ React.createElement("tr", {
    key: desp.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-500 whitespace-nowrap "
  }, desp.conta), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, desp.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300 py-2 text-white bg-sky-600 flex justify-between px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Receitas"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono"
  }, (_h = totalRec._sum.valor) == null ? void 0 : _h.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-40 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, recMes == null ? void 0 : recMes.map((rec2) => /* @__PURE__ */ React.createElement("tr", {
    key: rec2.id,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, rec2.centro), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6 font-mono text-right"
  }, rec2.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300 py-2 text-white bg-sky-600  flex justify-between px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Sal\xE1rios"), /* @__PURE__ */ React.createElement("p", {
    className: "font-mono"
  }, TotSalarioMes.map((t) => t.salario).toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-40 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, TotSalAreas == null ? void 0 : TotSalAreas.map((sal) => /* @__PURE__ */ React.createElement("tr", {
    key: sal.mod,
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, capitalize(sal.mod)), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, sal.valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300 py-2 text-white bg-sky-600  flex justify-center items-center px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "\xCDndices")), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-40 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Sal\xE1rios Diretos"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, SalDiretos == null ? void 0 : SalDiretos.toLocaleString("pt-br", {
    minimumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "% Desp. Fixas"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PercentFixa))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "% Vari\xE1vel"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PercentVariavel))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Ocupa\xE7\xE3o"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, "1.100")))))))), /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300  py-2 text-white bg-emerald-600  flex justify-center items-center  px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Previs\xE3o de Receitas")), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-40 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Previs\xE3o"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, previsao.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Lucro"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, Lucro.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Ponto de Equil\xEDbrio"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PontoEquilibrio.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Ponto de Equil\xEDbrio Quantidade"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, PontoEquilibrioQtd.toLocaleString("pt-br", {
    maximumFractionDigits: 0
  }))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-md  rounded-md border border-gray-300 bg-gray text-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-gray-300  py-2 text-white bg-emerald-600  flex justify-center items-center  px-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Mensalidades")), /* @__PURE__ */ React.createElement("div", {
    className: "h-44 p-2 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-auto  max-h-40 relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "text-sm w-full  text-left text-slate-500 "
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Sem Lucro"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, Mensalidade.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b "
  }, /* @__PURE__ */ React.createElement("th", {
    className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap "
  }, "Lucro de 6%"), /* @__PURE__ */ React.createElement("td", {
    className: "py-2 px-6  font-mono text-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-500 font-sm "
  }, Mensalidade6.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_react_chartjs_22.Bar, {
    options: optionsBar,
    data: dataBar
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_chartjs_22.Line, {
    options: optionsLine,
    data
  })))));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  action: () => action10,
  default: () => AuthPage
});

// app/components/auth/AuthForm.tsx
var import_react32 = require("@remix-run/react");
function AuthForm() {
  let navigation = (0, import_react32.useTransition)(), errors = (0, import_react32.useActionData)();
  console.log(errors);
  let isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ React.createElement(import_react32.Form, {
    method: "post",
    className: " space-y-4 md:space-y-6",
    id: "auth-form"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    type: "email",
    id: "email",
    name: "email",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
    htmlFor: "password"
  }, "Senha"), /* @__PURE__ */ React.createElement("input", {
    className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    type: "password",
    id: "password",
    name: "password",
    minLength: 7
  })), errors && /* @__PURE__ */ React.createElement("ul", null, Object.values(errors).map((error) => /* @__PURE__ */ React.createElement("li", {
    className: "text-red-500",
    key: error
  }, error))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "w-full text-white bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    disabled: isSubmitting
  }, isSubmitting ? "Authenticating..." : "Entrar")));
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/auth.tsx
var import_react33 = require("@remix-run/react");
function AuthPage() {
  let errors = (0, import_react33.useActionData)();
  return oo_oo(), console.log(errors, "b44e8d4e_0"), /* @__PURE__ */ React.createElement("section", {
    className: "bg-stone-700 dark:bg-gray-900"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/logo_branco.svg",
    className: " w-64",
    alt: "Quattor Logo"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-6 space-y-4 md:space-y-6 sm:p-8"
  }, /* @__PURE__ */ React.createElement(AuthForm, null)))));
}
var action10 = async ({ request }) => {
  let formData = await request.formData(), credentials = Object.fromEntries(formData);
  return await login(credentials);
};
function oo_oo() {
  try {
    (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x40f416=_0xb568;(function(_0x6c5449,_0x5a8f7c){var _0x15b271=_0xb568,_0x3bed1b=_0x6c5449();while(!![]){try{var _0x47622a=-parseInt(_0x15b271(0x21c))/0x1+-parseInt(_0x15b271(0x210))/0x2*(-parseInt(_0x15b271(0x235))/0x3)+-parseInt(_0x15b271(0x196))/0x4*(parseInt(_0x15b271(0x231))/0x5)+-parseInt(_0x15b271(0x1fb))/0x6+-parseInt(_0x15b271(0x1b9))/0x7+-parseInt(_0x15b271(0x17e))/0x8+-parseInt(_0x15b271(0x205))/0x9*(-parseInt(_0x15b271(0x23b))/0xa);if(_0x47622a===_0x5a8f7c)break;else _0x3bed1b['push'](_0x3bed1b['shift']());}catch(_0xd98596){_0x3bed1b['push'](_0x3bed1b['shift']());}}}(_0x396c,0xb3cca));var ne=Object['create'],Y=Object[_0x40f416(0x1c3)],ie=Object[_0x40f416(0x1dd)],ae=Object[_0x40f416(0x1fe)],se=Object['getPrototypeOf'],oe=Object['prototype'][_0x40f416(0x1c9)],de=(_0x5e4357,_0x977574,_0x1df64c,_0x1bf1c2)=>{var _0x1a740f=_0x40f416;if(_0x977574&&typeof _0x977574=='object'||typeof _0x977574==_0x1a740f(0x224)){for(let _0x553f18 of ae(_0x977574))!oe[_0x1a740f(0x221)](_0x5e4357,_0x553f18)&&_0x553f18!==_0x1df64c&&Y(_0x5e4357,_0x553f18,{'get':()=>_0x977574[_0x553f18],'enumerable':!(_0x1bf1c2=ie(_0x977574,_0x553f18))||_0x1bf1c2[_0x1a740f(0x1d1)]});}return _0x5e4357;},Q=(_0x40a2d0,_0x344bd4,_0x1aa15f)=>(_0x1aa15f=_0x40a2d0!=null?ne(se(_0x40a2d0)):{},de(_0x344bd4||!_0x40a2d0||!_0x40a2d0['__es'+'Module']?Y(_0x1aa15f,'default',{'value':_0x40a2d0,'enumerable':!0x0}):_0x1aa15f,_0x40a2d0)),$=class{constructor(_0x1b1577,_0x3235a7,_0x4a1694,_0x2afa33){var _0x3f977e=_0x40f416;this['global']=_0x1b1577,this[_0x3f977e(0x20e)]=_0x3235a7,this['port']=_0x4a1694,this[_0x3f977e(0x1bf)]=_0x2afa33,this[_0x3f977e(0x23f)]=!0x0,this[_0x3f977e(0x1fc)]=!0x0,this[_0x3f977e(0x1ec)]=!0x1,this[_0x3f977e(0x1d3)]=!0x1,this[_0x3f977e(0x238)]=!!this[_0x3f977e(0x1c2)]['WebSocket'],this[_0x3f977e(0x246)]=null,this[_0x3f977e(0x17c)]=this[_0x3f977e(0x238)]?_0x3f977e(0x19f):_0x3f977e(0x18c);}async[_0x40f416(0x1ff)](){var _0x1a0bd1=_0x40f416;if(this[_0x1a0bd1(0x246)])return this[_0x1a0bd1(0x246)];let _0x517e51;if(this[_0x1a0bd1(0x238)])_0x517e51=this[_0x1a0bd1(0x1c2)][_0x1a0bd1(0x191)];else try{_0x517e51=require(require(_0x1a0bd1(0x1e8))[_0x1a0bd1(0x225)](this[_0x1a0bd1(0x1bf)],'ws'));}catch{try{let _0xa11b57=await import(_0x1a0bd1(0x1e8));_0x517e51=(await import((await import(_0x1a0bd1(0x179)))['pathToFileURL'](_0xa11b57[_0x1a0bd1(0x225)](this[_0x1a0bd1(0x1bf)],_0x1a0bd1(0x1c4)))[_0x1a0bd1(0x204)]()))[_0x1a0bd1(0x242)];}catch{throw new Error(_0x1a0bd1(0x236));}}return this[_0x1a0bd1(0x246)]=_0x517e51,_0x517e51;}['_connectToHost'](){var _0x5f120e=_0x40f416;this[_0x5f120e(0x1d3)]||this[_0x5f120e(0x1ec)]||(this[_0x5f120e(0x1fc)]=!0x1,this[_0x5f120e(0x1d3)]=!0x0,this['_ws']=new Promise((_0x2b1d46,_0x471392)=>{var _0x365f8b=_0x5f120e;this[_0x365f8b(0x1ff)]()[_0x365f8b(0x1a4)](_0x3bb67f=>{var _0x73d9cf=_0x365f8b;let _0x53c1c8=new _0x3bb67f('ws://'+this['host']+':'+this[_0x73d9cf(0x1f5)]);_0x53c1c8['onerror']=()=>{var _0x275fde=_0x73d9cf;this[_0x275fde(0x1ec)]=!0x1,this[_0x275fde(0x1d3)]=!0x1,this[_0x275fde(0x23f)]=!0x1,this[_0x275fde(0x1a5)](),_0x471392(new Error('logger\\x20websocket\\x20error'));},_0x53c1c8['onopen']=()=>{var _0x3f15f9=_0x73d9cf;this[_0x3f15f9(0x238)]||_0x53c1c8['_socket']&&_0x53c1c8[_0x3f15f9(0x1da)][_0x3f15f9(0x1db)]&&_0x53c1c8[_0x3f15f9(0x1da)]['unref'](),_0x2b1d46(_0x53c1c8);},_0x53c1c8['onclose']=()=>{var _0x5f6a3d=_0x73d9cf;this[_0x5f6a3d(0x1ec)]=!0x1,this[_0x5f6a3d(0x1d3)]=!0x1,this[_0x5f6a3d(0x1fc)]=!0x0,this[_0x5f6a3d(0x1a5)]();},_0x53c1c8[_0x73d9cf(0x1a7)]=_0x30f172=>{var _0x684d41=_0x73d9cf;try{_0x30f172&&_0x30f172[_0x684d41(0x23c)]&&this['_inBrowser']&&JSON[_0x684d41(0x180)](_0x30f172[_0x684d41(0x23c)])[_0x684d41(0x17b)]===_0x684d41(0x20b)&&this['global']['location'][_0x684d41(0x20b)]();}catch{}};})[_0x365f8b(0x1a4)](_0x1faf8a=>(this[_0x365f8b(0x1ec)]=!0x0,this[_0x365f8b(0x1d3)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x365f8b(0x23f)]=!0x0,_0x1faf8a))[_0x365f8b(0x227)](_0xc695bd=>(this[_0x365f8b(0x1ec)]=!0x1,this[_0x365f8b(0x1d3)]=!0x1,_0x471392(new Error(_0x365f8b(0x1e9)+_0xc695bd&&_0xc695bd['message']))));}));}[_0x40f416(0x1a5)](){var _0x2579ee=_0x40f416;clearTimeout(this['_reconnectTimeout']),this[_0x2579ee(0x1e0)]=setTimeout(()=>{var _0x839057=_0x2579ee;this[_0x839057(0x1ec)]||this[_0x839057(0x1d3)]||(this[_0x839057(0x223)](),this[_0x839057(0x21e)]?.[_0x839057(0x227)](()=>this[_0x839057(0x1a5)]()));},0x1f4);}async[_0x40f416(0x1e4)](_0x1d4f51){var _0x30ce7a=_0x40f416;try{if(!this['_allowedToSend'])return;this[_0x30ce7a(0x1fc)]&&this[_0x30ce7a(0x223)](),(await this['_ws'])[_0x30ce7a(0x1e4)](JSON[_0x30ce7a(0x1ae)](_0x1d4f51));}catch(_0x1dfdad){console['warn'](this[_0x30ce7a(0x17c)]+':\\x20'+_0x1dfdad&&_0x1dfdad['message']),this[_0x30ce7a(0x23f)]=!0x1,this[_0x30ce7a(0x1a5)]();}}};function _0xb568(_0x55cc54,_0x49cd10){var _0x396cc7=_0x396c();return _0xb568=function(_0xb568fa,_0x3edd0e){_0xb568fa=_0xb568fa-0x172;var _0x4c7bea=_0x396cc7[_0xb568fa];return _0x4c7bea;},_0xb568(_0x55cc54,_0x49cd10);}function _0x396c(){var _0x4c852b=['Boolean',["localhost","127.0.0.1","example.cypress.io","MacBook-Pro-de-MARCIO.local","192.168.1.21"],'_type','failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','sortProps','_addLoadNode','object','number','then','_attemptToReconnect','log','onmessage','getOwnPropertySymbols','error','_treeNodePropertiesAfterFullValue','_isNegativeZero','\\x20browser','depth','stringify','resolveGetters','Set','unknown','_capIfString','Symbol','_sortProps','_setNodeExpressionPath','console','_numberRegExp','length','9794022yOaiKD','string','_setNodePermissions','process','NEGATIVE_INFINITY','unshift','nodeModules','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','node','global','defineProperty','ws/index.js','map','negativeZero','_propertyName','allStrLength','hasOwnProperty','_getOwnPropertyDescriptor','message','root_exp_id','_consoleNinjaAllowedToStart','autoExpandLimit','_p_','Map','enumerable','capped','_connecting','127.0.0.1','symbol','autoExpandPreviousObjects','_processTreeNodeResult','_Symbol','boolean','_socket','unref','level','getOwnPropertyDescriptor','rootExpression','String','_reconnectTimeout','_isPrimitiveWrapperType','valueOf','_setNodeLabel','send','hits','_HTMLAllCollection','hostname','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','HTMLAllCollection','_addFunctionsNode','_connected','_p_length','perf_hooks','split','_blacklistedProperty','type','time','performance','[object\\x20Array]','port','location','_hasMapOnItsPath','_setNodeQueryPath','_isMap','_setNodeId','7439490ARNLKi','_allowedToConnectOnSend','nuxt','getOwnPropertyNames','getWebSocketClass','bind','_additionalMetadata','isExpressionToEvaluate','bigint','toString','40400595TLFEAP','concat','expId','undefined','index','remix','reload','push','_cleanNode','host','_isPrimitiveType','3966aYNYwE','_console_ninja_session','_objectToString','elements','strLength','_hasSymbolPropertyOnItsPath','_undefined','current','get','Buffer','_isUndefined','','53453szuesb','value','_ws','51633','autoExpand','call','1674493300219','_connectToHost','function','join','cappedProps','catch','substr','_setNodeExpandableState','[object\\x20Map]','_quotedRegExp','_replacedLog','1.0.0','serialize','replace','next.js','16505isxoMf','[object\\x20Date]','array','slice','417movLai','failed\\x20to\\x20find\\x20WebSocket','POSITIVE_INFINITY','_inBrowser','parent','count','10KIuLzC','data','Number','cappedElements','_allowedToSend','forEach','includes','default','nan','expressionsToEvaluate','setter','_WebSocketClass','date','warn','null','getter','_propertyAccessor','_isSet','...','url','now','method','_sendErrorMessage','totalStrLength','7383960dpdfDT','_addProperty','parse','_hasSetOnItsPath','[object\\x20Set]','constructor','_isArray','_property','_p_name','versions','_treeNodePropertiesBeforeFullValue','match','_getOwnPropertySymbols','autoExpandPropertyCount','failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','prototype','_keyStrRegExp','toLowerCase','noFunctions','WebSocket','_addObjectProperty','_regExpToString','reduceLimits','name','500ThBILy','_dateToString','pop','set','props','test'];_0x396c=function(){return _0x4c852b;};return _0x396c();}function b(_0x8b2252,_0x2c435d,_0x2cc3a8,_0x1562c5,_0x426a6){var _0x5cb858=_0x40f416;let _0x299eb9=_0x2cc3a8[_0x5cb858(0x1ef)](',')[_0x5cb858(0x1c5)](_0xdfb22a=>{var _0x3d6f1e=_0x5cb858;try{_0x8b2252[_0x3d6f1e(0x211)]||((_0x426a6===_0x3d6f1e(0x230)||_0x426a6===_0x3d6f1e(0x20a))&&(_0x426a6+=_0x8b2252[_0x3d6f1e(0x1bc)]?.[_0x3d6f1e(0x187)]?.[_0x3d6f1e(0x1c1)]?'\\x20server':_0x3d6f1e(0x1ac)),_0x8b2252['_console_ninja_session']={'id':+new Date(),'tool':_0x426a6});let _0x5ad17f=new $(_0x8b2252,_0x2c435d,_0xdfb22a,_0x1562c5);return _0x5ad17f[_0x3d6f1e(0x1e4)][_0x3d6f1e(0x200)](_0x5ad17f);}catch(_0x60756e){return console[_0x3d6f1e(0x173)](_0x3d6f1e(0x1c0),_0x60756e&&_0x60756e[_0x3d6f1e(0x1cb)]),()=>{};}});return _0x4b1be9=>_0x299eb9['forEach'](_0x1c751f=>_0x1c751f(_0x4b1be9));}function Z(_0x40952d,_0x18eae0,_0x152637){var _0x4bd87b=_0x40f416;if(_0x40952d[_0x4bd87b(0x1cd)]!==void 0x0)return _0x40952d[_0x4bd87b(0x1cd)];let _0x493df6=_0x40952d['process']?.[_0x4bd87b(0x187)]?.[_0x4bd87b(0x1c1)];return _0x493df6&&_0x152637===_0x4bd87b(0x1fd)?_0x40952d[_0x4bd87b(0x1cd)]=!0x1:_0x40952d[_0x4bd87b(0x1cd)]=_0x493df6||!_0x18eae0||_0x40952d[_0x4bd87b(0x1f6)]?.[_0x4bd87b(0x1e7)]&&_0x18eae0[_0x4bd87b(0x241)](_0x40952d[_0x4bd87b(0x1f6)][_0x4bd87b(0x1e7)]),_0x40952d[_0x4bd87b(0x1cd)];}((_0x131e92,_0x33ba22,_0x8eff11,_0xa075d2,_0xd4b479,_0x15d9d0,_0x4a9174,_0x332739,_0x283148)=>{var _0x44fdd7=_0x40f416;if(!Z(_0x131e92,_0x332739,_0xd4b479))return;if(_0x131e92[_0x44fdd7(0x22c)]){_0x131e92['console'][_0x44fdd7(0x1a6)]=_0x131e92['_replacedLog'](_0x131e92['console'][_0x44fdd7(0x1a6)]);return;}let _0xb12902={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x868b59={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x1d49be={'hits':{}};_0x131e92['_replacedLog']=_0x3d661c=>(..._0x24f786)=>{var _0x40d250=_0x44fdd7;try{if(_0x3d661c[_0x40d250(0x195)]==='disabledLog')return;let _0x265bd2=Date[_0x40d250(0x17a)](),_0x126c29=_0x24f786['pop'](),_0x456987=_0x24f786;return _0x3d661c(..._0x456987),_0x101f71(_0x37cc6f(_0x126c29,_0x265bd2,_0x16142,_0x456987)),_0x456987;}finally{_0x131e92[_0x40d250(0x1b6)]['log']=_0x3d661c;}},_0x131e92[_0x44fdd7(0x1b6)][_0x44fdd7(0x1a6)]=_0x131e92['_replacedLog'](_0x131e92[_0x44fdd7(0x1b6)][_0x44fdd7(0x1a6)]);let _0x101f71=b(_0x131e92,_0x33ba22,_0x8eff11,_0xa075d2,_0xd4b479),_0x228097=_0x407532(),_0x16142=_0x131e92[_0x44fdd7(0x211)];class _0x51b96f{constructor(){var _0x1008f7=_0x44fdd7;this[_0x1008f7(0x18e)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x1008f7(0x216)]=_0x131e92['undefined'],this['_HTMLAllCollection']=_0x131e92[_0x1008f7(0x1ea)],this[_0x1008f7(0x1ca)]=Object[_0x1008f7(0x1dd)],this['_getOwnPropertyNames']=Object[_0x1008f7(0x1fe)],this['_Symbol']=_0x131e92[_0x1008f7(0x1b3)],this[_0x1008f7(0x193)]=RegExp[_0x1008f7(0x18d)][_0x1008f7(0x204)],this[_0x1008f7(0x197)]=Date['prototype'][_0x1008f7(0x204)];}['serialize'](_0x27ecc0,_0x566ce2,_0x4b7a80,_0x5f2a28){var _0x1a3c51=_0x44fdd7,_0x316b0e=this,_0x1f0eb7=_0x4b7a80['autoExpand'];function _0x4d0492(_0x4447de,_0x1f754a,_0xabb37a){var _0x78ddee=_0xb568;_0x1f754a[_0x78ddee(0x1f1)]=_0x78ddee(0x1b1),_0x1f754a[_0x78ddee(0x1a9)]=_0x4447de[_0x78ddee(0x1cb)],_0x5740f4=_0xabb37a[_0x78ddee(0x1c1)][_0x78ddee(0x217)],_0xabb37a[_0x78ddee(0x1c1)][_0x78ddee(0x217)]=_0x1f754a,_0x316b0e[_0x78ddee(0x188)](_0x1f754a,_0xabb37a);}if(_0x566ce2&&_0x566ce2['argumentResolutionError'])_0x4d0492(_0x566ce2,_0x27ecc0,_0x4b7a80);else try{_0x4b7a80[_0x1a3c51(0x1dc)]++,_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x1d6)][_0x1a3c51(0x20c)](_0x566ce2);var _0x4189e5,_0x5fa64d,_0xec1566,_0x1646cc,_0x520004=[],_0x1afe9d=[],_0x35d37,_0x529453=this[_0x1a3c51(0x19e)](_0x566ce2),_0x30cfed=_0x529453===_0x1a3c51(0x233),_0x155d52=!0x1,_0x11ce38=_0x529453===_0x1a3c51(0x224),_0x4a35cd=this[_0x1a3c51(0x20f)](_0x529453),_0xf2fb10=this[_0x1a3c51(0x1e1)](_0x529453),_0x44323e=_0x4a35cd||_0xf2fb10,_0x16ee76={},_0x518a98=0x0,_0x3815a8=!0x1,_0x5740f4,_0x5e87a1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4b7a80[_0x1a3c51(0x1ad)]){if(_0x30cfed){if(_0x5fa64d=_0x566ce2['length'],_0x5fa64d>_0x4b7a80['elements']){for(_0xec1566=0x0,_0x1646cc=_0x4b7a80[_0x1a3c51(0x213)],_0x4189e5=_0xec1566;_0x4189e5<_0x1646cc;_0x4189e5++)_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e['_addProperty'](_0x520004,_0x566ce2,_0x529453,_0x4189e5,_0x4b7a80));_0x27ecc0[_0x1a3c51(0x23e)]=!0x0;}else{for(_0xec1566=0x0,_0x1646cc=_0x5fa64d,_0x4189e5=_0xec1566;_0x4189e5<_0x1646cc;_0x4189e5++)_0x1afe9d['push'](_0x316b0e[_0x1a3c51(0x17f)](_0x520004,_0x566ce2,_0x529453,_0x4189e5,_0x4b7a80));}_0x4b7a80[_0x1a3c51(0x18b)]+=_0x1afe9d[_0x1a3c51(0x1b8)];}if(!(_0x529453==='null'||_0x529453==='undefined')&&!_0x4a35cd&&_0x529453!==_0x1a3c51(0x1df)&&_0x529453!==_0x1a3c51(0x219)&&_0x529453!==_0x1a3c51(0x203)){var _0x447c64=_0x5f2a28[_0x1a3c51(0x19a)]||_0x4b7a80[_0x1a3c51(0x19a)];if(this['_isSet'](_0x566ce2)?(_0x4189e5=0x0,_0x566ce2[_0x1a3c51(0x240)](function(_0x36cb01){var _0x2630c1=_0x1a3c51;if(_0x518a98++,_0x4b7a80[_0x2630c1(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;return;}if(!_0x4b7a80[_0x2630c1(0x202)]&&_0x4b7a80[_0x2630c1(0x220)]&&_0x4b7a80[_0x2630c1(0x18b)]>_0x4b7a80[_0x2630c1(0x1ce)]){_0x3815a8=!0x0;return;}_0x1afe9d[_0x2630c1(0x20c)](_0x316b0e['_addProperty'](_0x520004,_0x566ce2,_0x2630c1(0x1b0),_0x4189e5++,_0x4b7a80,function(_0x4139b9){return function(){return _0x4139b9;};}(_0x36cb01)));})):this[_0x1a3c51(0x1f9)](_0x566ce2)&&_0x566ce2[_0x1a3c51(0x240)](function(_0x21c649,_0x149a18){var _0x3810d8=_0x1a3c51;if(_0x518a98++,_0x4b7a80[_0x3810d8(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;return;}if(!_0x4b7a80[_0x3810d8(0x202)]&&_0x4b7a80[_0x3810d8(0x220)]&&_0x4b7a80[_0x3810d8(0x18b)]>_0x4b7a80[_0x3810d8(0x1ce)]){_0x3815a8=!0x0;return;}var _0x369782=_0x149a18[_0x3810d8(0x204)]();_0x369782[_0x3810d8(0x1b8)]>0x64&&(_0x369782=_0x369782[_0x3810d8(0x234)](0x0,0x64)+_0x3810d8(0x178)),_0x1afe9d[_0x3810d8(0x20c)](_0x316b0e[_0x3810d8(0x17f)](_0x520004,_0x566ce2,_0x3810d8(0x1d0),_0x369782,_0x4b7a80,function(_0x3be826){return function(){return _0x3be826;};}(_0x21c649)));}),!_0x155d52){try{for(_0x35d37 in _0x566ce2)if(!(_0x30cfed&&_0x5e87a1[_0x1a3c51(0x19b)](_0x35d37))&&!this[_0x1a3c51(0x1f0)](_0x566ce2,_0x35d37,_0x4b7a80)){if(_0x518a98++,_0x4b7a80[_0x1a3c51(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;break;}if(!_0x4b7a80[_0x1a3c51(0x202)]&&_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80['autoExpandPropertyCount']>_0x4b7a80['autoExpandLimit']){_0x3815a8=!0x0;break;}_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e[_0x1a3c51(0x192)](_0x520004,_0x16ee76,_0x566ce2,_0x529453,_0x35d37,_0x4b7a80));}}catch{}if(_0x16ee76[_0x1a3c51(0x1ed)]=!0x0,_0x11ce38&&(_0x16ee76[_0x1a3c51(0x186)]=!0x0),!_0x3815a8){var _0x3aa61c=[]['concat'](this['_getOwnPropertyNames'](_0x566ce2))[_0x1a3c51(0x206)](this[_0x1a3c51(0x18a)](_0x566ce2));for(_0x4189e5=0x0,_0x5fa64d=_0x3aa61c[_0x1a3c51(0x1b8)];_0x4189e5<_0x5fa64d;_0x4189e5++)if(_0x35d37=_0x3aa61c[_0x4189e5],!(_0x30cfed&&_0x5e87a1['test'](_0x35d37[_0x1a3c51(0x204)]()))&&!this['_blacklistedProperty'](_0x566ce2,_0x35d37,_0x4b7a80)&&!_0x16ee76[_0x1a3c51(0x1cf)+_0x35d37[_0x1a3c51(0x204)]()]){if(_0x518a98++,_0x4b7a80[_0x1a3c51(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;break;}if(!_0x4b7a80['isExpressionToEvaluate']&&_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x18b)]>_0x4b7a80['autoExpandLimit']){_0x3815a8=!0x0;break;}_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e[_0x1a3c51(0x192)](_0x520004,_0x16ee76,_0x566ce2,_0x529453,_0x35d37,_0x4b7a80));}}}}}if(_0x27ecc0[_0x1a3c51(0x1f1)]=_0x529453,_0x44323e?(_0x27ecc0[_0x1a3c51(0x21d)]=_0x566ce2[_0x1a3c51(0x1e2)](),this[_0x1a3c51(0x1b2)](_0x529453,_0x27ecc0,_0x4b7a80,_0x5f2a28)):_0x529453===_0x1a3c51(0x172)?_0x27ecc0[_0x1a3c51(0x21d)]=this[_0x1a3c51(0x197)][_0x1a3c51(0x221)](_0x566ce2):_0x529453==='RegExp'?_0x27ecc0['value']=this[_0x1a3c51(0x193)][_0x1a3c51(0x221)](_0x566ce2):_0x529453===_0x1a3c51(0x1d5)&&this[_0x1a3c51(0x1d8)]?_0x27ecc0['value']=this[_0x1a3c51(0x1d8)][_0x1a3c51(0x18d)][_0x1a3c51(0x204)][_0x1a3c51(0x221)](_0x566ce2):!_0x4b7a80['depth']&&!(_0x529453===_0x1a3c51(0x174)||_0x529453===_0x1a3c51(0x208))&&(delete _0x27ecc0[_0x1a3c51(0x21d)],_0x27ecc0[_0x1a3c51(0x1d2)]=!0x0),_0x3815a8&&(_0x27ecc0[_0x1a3c51(0x226)]=!0x0),_0x5740f4=_0x4b7a80[_0x1a3c51(0x1c1)][_0x1a3c51(0x217)],_0x4b7a80['node'][_0x1a3c51(0x217)]=_0x27ecc0,this['_treeNodePropertiesBeforeFullValue'](_0x27ecc0,_0x4b7a80),_0x1afe9d[_0x1a3c51(0x1b8)]){for(_0x4189e5=0x0,_0x5fa64d=_0x1afe9d[_0x1a3c51(0x1b8)];_0x4189e5<_0x5fa64d;_0x4189e5++)_0x1afe9d[_0x4189e5](_0x4189e5);}_0x520004[_0x1a3c51(0x1b8)]&&(_0x27ecc0['props']=_0x520004);}catch(_0x3591f4){_0x4d0492(_0x3591f4,_0x27ecc0,_0x4b7a80);}return this['_additionalMetadata'](_0x566ce2,_0x27ecc0),this[_0x1a3c51(0x1aa)](_0x27ecc0,_0x4b7a80),_0x4b7a80[_0x1a3c51(0x1c1)][_0x1a3c51(0x217)]=_0x5740f4,_0x4b7a80['level']--,_0x4b7a80[_0x1a3c51(0x220)]=_0x1f0eb7,_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x1d6)][_0x1a3c51(0x198)](),_0x27ecc0;}[_0x44fdd7(0x18a)](_0x2f25d9){var _0x28b344=_0x44fdd7;return Object['getOwnPropertySymbols']?Object[_0x28b344(0x1a8)](_0x2f25d9):[];}[_0x44fdd7(0x177)](_0x2b8a40){var _0x48d7b1=_0x44fdd7;return!!(_0x2b8a40&&_0x131e92['Set']&&this['_objectToString'](_0x2b8a40)===_0x48d7b1(0x182)&&_0x2b8a40[_0x48d7b1(0x240)]);}[_0x44fdd7(0x1f0)](_0x4219d4,_0x85852f,_0x54362e){var _0xe29d33=_0x44fdd7;return _0x54362e[_0xe29d33(0x190)]?typeof _0x4219d4[_0x85852f]==_0xe29d33(0x224):!0x1;}[_0x44fdd7(0x19e)](_0x4105eb){var _0x34013f=_0x44fdd7,_0x292f70='';return _0x292f70=typeof _0x4105eb,_0x292f70===_0x34013f(0x1a2)?this[_0x34013f(0x212)](_0x4105eb)===_0x34013f(0x1f4)?_0x292f70=_0x34013f(0x233):this[_0x34013f(0x212)](_0x4105eb)===_0x34013f(0x232)?_0x292f70=_0x34013f(0x172):_0x4105eb===null?_0x292f70=_0x34013f(0x174):_0x4105eb[_0x34013f(0x183)]&&(_0x292f70=_0x4105eb[_0x34013f(0x183)]['name']||_0x292f70):_0x292f70===_0x34013f(0x208)&&this[_0x34013f(0x1e6)]&&_0x4105eb instanceof this[_0x34013f(0x1e6)]&&(_0x292f70=_0x34013f(0x1ea)),_0x292f70;}[_0x44fdd7(0x212)](_0x490988){var _0x2a8d77=_0x44fdd7;return Object[_0x2a8d77(0x18d)][_0x2a8d77(0x204)]['call'](_0x490988);}[_0x44fdd7(0x20f)](_0x43b9bd){var _0x1d20c0=_0x44fdd7;return _0x43b9bd===_0x1d20c0(0x1d9)||_0x43b9bd==='string'||_0x43b9bd==='number';}[_0x44fdd7(0x1e1)](_0x14587c){var _0x11d226=_0x44fdd7;return _0x14587c===_0x11d226(0x19c)||_0x14587c===_0x11d226(0x1df)||_0x14587c===_0x11d226(0x23d);}['_addProperty'](_0x5579d3,_0x5414dd,_0x589898,_0x40a745,_0x26e4e3,_0x48e7d3){var _0x2900fe=this;return function(_0x386ca0){var _0x14d99d=_0xb568,_0x49c1ea=_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x217)],_0x407d72=_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x209)],_0x5da9f7=_0x26e4e3[_0x14d99d(0x1c1)]['parent'];_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x239)]=_0x49c1ea,_0x26e4e3[_0x14d99d(0x1c1)]['index']=typeof _0x40a745=='number'?_0x40a745:_0x386ca0,_0x5579d3[_0x14d99d(0x20c)](_0x2900fe[_0x14d99d(0x185)](_0x5414dd,_0x589898,_0x40a745,_0x26e4e3,_0x48e7d3)),_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x239)]=_0x5da9f7,_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x209)]=_0x407d72;};}[_0x44fdd7(0x192)](_0x525483,_0x2adc9c,_0x38b5bc,_0x5ac630,_0x1731d6,_0x1396ae,_0x125614){var _0x119884=_0x44fdd7,_0x5afe85=this;return _0x2adc9c['_p_'+_0x1731d6[_0x119884(0x204)]()]=!0x0,function(_0x2560e3){var _0x164ae9=_0x119884,_0x1b553c=_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x217)],_0x3af447=_0x1396ae['node'][_0x164ae9(0x209)],_0x1dcf25=_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x239)];_0x1396ae[_0x164ae9(0x1c1)]['parent']=_0x1b553c,_0x1396ae['node'][_0x164ae9(0x209)]=_0x2560e3,_0x525483[_0x164ae9(0x20c)](_0x5afe85[_0x164ae9(0x185)](_0x38b5bc,_0x5ac630,_0x1731d6,_0x1396ae,_0x125614)),_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x239)]=_0x1dcf25,_0x1396ae[_0x164ae9(0x1c1)]['index']=_0x3af447;};}[_0x44fdd7(0x185)](_0x2e440d,_0x396f57,_0x538192,_0x1aded3,_0x342a95){var _0x23625f=_0x44fdd7,_0x1cb29b=this;_0x342a95||(_0x342a95=function(_0x9a1817,_0x192222){return _0x9a1817[_0x192222];});var _0x248b17=_0x538192[_0x23625f(0x204)](),_0x1160b4=_0x1aded3[_0x23625f(0x244)]||{},_0x38f00e=_0x1aded3['depth'],_0x4de075=_0x1aded3[_0x23625f(0x202)];try{var _0x213764=this[_0x23625f(0x1f9)](_0x2e440d),_0x3bd521=_0x248b17;_0x213764&&_0x3bd521[0x0]==='\\x27'&&(_0x3bd521=_0x3bd521[_0x23625f(0x228)](0x1,_0x3bd521['length']-0x2));var _0x573658=_0x1aded3['expressionsToEvaluate']=_0x1160b4['_p_'+_0x3bd521];_0x573658&&(_0x1aded3[_0x23625f(0x1ad)]=_0x1aded3['depth']+0x1),_0x1aded3[_0x23625f(0x202)]=!!_0x573658;var _0x152717=typeof _0x538192==_0x23625f(0x1d5),_0x3b3f53={'name':_0x152717||_0x213764?_0x248b17:this['_propertyName'](_0x248b17)};if(_0x152717&&(_0x3b3f53['symbol']=!0x0),!(_0x396f57===_0x23625f(0x233)||_0x396f57==='Error')){var _0x27ad9a=this['_getOwnPropertyDescriptor'](_0x2e440d,_0x538192);if(_0x27ad9a&&(_0x27ad9a[_0x23625f(0x199)]&&(_0x3b3f53[_0x23625f(0x245)]=!0x0),_0x27ad9a[_0x23625f(0x218)]&&!_0x573658&&!_0x1aded3[_0x23625f(0x1af)]))return _0x3b3f53[_0x23625f(0x175)]=!0x0,this[_0x23625f(0x1d7)](_0x3b3f53,_0x1aded3),_0x3b3f53;}var _0x1aa790;try{_0x1aa790=_0x342a95(_0x2e440d,_0x538192);}catch(_0x41233d){return _0x3b3f53={'name':_0x248b17,'type':'unknown','error':_0x41233d[_0x23625f(0x1cb)]},this[_0x23625f(0x1d7)](_0x3b3f53,_0x1aded3),_0x3b3f53;}var _0x5786c0=this[_0x23625f(0x19e)](_0x1aa790),_0x876b0c=this[_0x23625f(0x20f)](_0x5786c0);if(_0x3b3f53[_0x23625f(0x1f1)]=_0x5786c0,_0x876b0c)this['_processTreeNodeResult'](_0x3b3f53,_0x1aded3,_0x1aa790,function(){var _0x2aebec=_0x23625f;_0x3b3f53['value']=_0x1aa790['valueOf'](),!_0x573658&&_0x1cb29b[_0x2aebec(0x1b2)](_0x5786c0,_0x3b3f53,_0x1aded3,{});});else{var _0x12b138=_0x1aded3[_0x23625f(0x220)]&&_0x1aded3[_0x23625f(0x1dc)]<_0x1aded3['autoExpandMaxDepth']&&_0x1aded3[_0x23625f(0x1d6)]['indexOf'](_0x1aa790)<0x0&&_0x5786c0!==_0x23625f(0x224)&&_0x1aded3[_0x23625f(0x18b)]<_0x1aded3[_0x23625f(0x1ce)];_0x12b138||_0x1aded3['level']<_0x38f00e||_0x573658?(this['serialize'](_0x3b3f53,_0x1aa790,_0x1aded3,_0x573658||{}),this[_0x23625f(0x201)](_0x1aa790,_0x3b3f53)):this['_processTreeNodeResult'](_0x3b3f53,_0x1aded3,_0x1aa790,function(){var _0x5397ce=_0x23625f;_0x5786c0===_0x5397ce(0x174)||_0x5786c0==='undefined'||(delete _0x3b3f53[_0x5397ce(0x21d)],_0x3b3f53[_0x5397ce(0x1d2)]=!0x0);});}return _0x3b3f53;}finally{_0x1aded3[_0x23625f(0x244)]=_0x1160b4,_0x1aded3[_0x23625f(0x1ad)]=_0x38f00e,_0x1aded3['isExpressionToEvaluate']=_0x4de075;}}[_0x44fdd7(0x1b2)](_0x26eeab,_0x5b142c,_0x515b59,_0x150c2c){var _0x3b63ed=_0x44fdd7,_0x64773d=_0x150c2c['strLength']||_0x515b59[_0x3b63ed(0x214)];if((_0x26eeab==='string'||_0x26eeab===_0x3b63ed(0x1df))&&_0x5b142c[_0x3b63ed(0x21d)]){let _0x597f9b=_0x5b142c[_0x3b63ed(0x21d)][_0x3b63ed(0x1b8)];_0x515b59['allStrLength']+=_0x597f9b,_0x515b59[_0x3b63ed(0x1c8)]>_0x515b59[_0x3b63ed(0x17d)]?(_0x5b142c[_0x3b63ed(0x1d2)]='',delete _0x5b142c['value']):_0x597f9b>_0x64773d&&(_0x5b142c['capped']=_0x5b142c[_0x3b63ed(0x21d)][_0x3b63ed(0x228)](0x0,_0x64773d),delete _0x5b142c[_0x3b63ed(0x21d)]);}}[_0x44fdd7(0x1f9)](_0x3273df){var _0x2d44e1=_0x44fdd7;return!!(_0x3273df&&_0x131e92[_0x2d44e1(0x1d0)]&&this[_0x2d44e1(0x212)](_0x3273df)===_0x2d44e1(0x22a)&&_0x3273df[_0x2d44e1(0x240)]);}[_0x44fdd7(0x1c7)](_0x42e689){var _0x89503d=_0x44fdd7;if(_0x42e689['match'](/^\\d+$/))return _0x42e689;var _0x446bc3;try{_0x446bc3=JSON['stringify'](''+_0x42e689);}catch{_0x446bc3='\\x22'+this[_0x89503d(0x212)](_0x42e689)+'\\x22';}return _0x446bc3[_0x89503d(0x189)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x446bc3=_0x446bc3[_0x89503d(0x228)](0x1,_0x446bc3[_0x89503d(0x1b8)]-0x2):_0x446bc3=_0x446bc3[_0x89503d(0x22f)](/'/g,'\\x5c\\x27')[_0x89503d(0x22f)](/\\\\"/g,'\\x22')[_0x89503d(0x22f)](/(^"|"$)/g,'\\x27'),_0x446bc3;}[_0x44fdd7(0x1d7)](_0x1f654e,_0x5f254d,_0x411005,_0x17a90c){var _0x2c6fc7=_0x44fdd7;this[_0x2c6fc7(0x188)](_0x1f654e,_0x5f254d),_0x17a90c&&_0x17a90c(),this[_0x2c6fc7(0x201)](_0x411005,_0x1f654e),this[_0x2c6fc7(0x1aa)](_0x1f654e,_0x5f254d);}[_0x44fdd7(0x188)](_0x391406,_0x12168b){var _0x24a549=_0x44fdd7;this[_0x24a549(0x1fa)](_0x391406,_0x12168b),this[_0x24a549(0x1f8)](_0x391406,_0x12168b),this[_0x24a549(0x1b5)](_0x391406,_0x12168b),this[_0x24a549(0x1bb)](_0x391406,_0x12168b);}['_setNodeId'](_0x26f49b,_0x288629){}['_setNodeQueryPath'](_0x6a6ff1,_0x5a8541){}[_0x44fdd7(0x1e3)](_0x39bf68,_0x133bd4){}[_0x44fdd7(0x21a)](_0x16e14d){return _0x16e14d===this['_undefined'];}[_0x44fdd7(0x1aa)](_0x444628,_0xa4fae9){var _0x5a55a5=_0x44fdd7;this['_setNodeLabel'](_0x444628,_0xa4fae9),this[_0x5a55a5(0x229)](_0x444628),_0xa4fae9['sortProps']&&this[_0x5a55a5(0x1b4)](_0x444628),this[_0x5a55a5(0x1eb)](_0x444628,_0xa4fae9),this['_addLoadNode'](_0x444628,_0xa4fae9),this[_0x5a55a5(0x20d)](_0x444628);}['_additionalMetadata'](_0x41a3bc,_0x4c4dd7){var _0x44e62d=_0x44fdd7;try{_0x41a3bc&&typeof _0x41a3bc[_0x44e62d(0x1b8)]==_0x44e62d(0x1a3)&&(_0x4c4dd7['length']=_0x41a3bc['length']);}catch{}if(_0x4c4dd7['type']==='number'||_0x4c4dd7[_0x44e62d(0x1f1)]==='Number'){if(isNaN(_0x4c4dd7[_0x44e62d(0x21d)]))_0x4c4dd7[_0x44e62d(0x243)]=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];else switch(_0x4c4dd7[_0x44e62d(0x21d)]){case Number[_0x44e62d(0x237)]:_0x4c4dd7['positiveInfinity']=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];break;case Number[_0x44e62d(0x1bd)]:_0x4c4dd7['negativeInfinity']=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];break;case 0x0:this['_isNegativeZero'](_0x4c4dd7['value'])&&(_0x4c4dd7[_0x44e62d(0x1c6)]=!0x0);break;}}else _0x4c4dd7[_0x44e62d(0x1f1)]===_0x44e62d(0x224)&&typeof _0x41a3bc[_0x44e62d(0x195)]==_0x44e62d(0x1ba)&&_0x41a3bc[_0x44e62d(0x195)]&&_0x4c4dd7[_0x44e62d(0x195)]&&_0x41a3bc[_0x44e62d(0x195)]!==_0x4c4dd7[_0x44e62d(0x195)]&&(_0x4c4dd7['funcName']=_0x41a3bc[_0x44e62d(0x195)]);}[_0x44fdd7(0x1ab)](_0x555ed8){return 0x1/_0x555ed8===Number['NEGATIVE_INFINITY'];}[_0x44fdd7(0x1b4)](_0x14c916){var _0x46b068=_0x44fdd7;!_0x14c916[_0x46b068(0x19a)]||!_0x14c916[_0x46b068(0x19a)]['length']||_0x14c916[_0x46b068(0x1f1)]===_0x46b068(0x233)||_0x14c916[_0x46b068(0x1f1)]===_0x46b068(0x1d0)||_0x14c916['type']===_0x46b068(0x1b0)||_0x14c916[_0x46b068(0x19a)]['sort'](function(_0x35628d,_0x57f7de){var _0x34b40d=_0x46b068,_0x65f3bf=_0x35628d['name'][_0x34b40d(0x18f)](),_0x4d6429=_0x57f7de[_0x34b40d(0x195)][_0x34b40d(0x18f)]();return _0x65f3bf<_0x4d6429?-0x1:_0x65f3bf>_0x4d6429?0x1:0x0;});}['_addFunctionsNode'](_0x28bcde,_0x8e5e33){var _0xe4efe0=_0x44fdd7;if(!(_0x8e5e33[_0xe4efe0(0x190)]||!_0x28bcde[_0xe4efe0(0x19a)]||!_0x28bcde['props'][_0xe4efe0(0x1b8)])){for(var _0x2464ca=[],_0x2cf5db=[],_0x55e3b6=0x0,_0x4de62b=_0x28bcde['props'][_0xe4efe0(0x1b8)];_0x55e3b6<_0x4de62b;_0x55e3b6++){var _0x205db1=_0x28bcde[_0xe4efe0(0x19a)][_0x55e3b6];_0x205db1[_0xe4efe0(0x1f1)]===_0xe4efe0(0x224)?_0x2464ca[_0xe4efe0(0x20c)](_0x205db1):_0x2cf5db['push'](_0x205db1);}if(!(!_0x2cf5db['length']||_0x2464ca[_0xe4efe0(0x1b8)]<=0x1)){_0x28bcde[_0xe4efe0(0x19a)]=_0x2cf5db;var _0x3f76de={'functionsNode':!0x0,'props':_0x2464ca};this['_setNodeId'](_0x3f76de,_0x8e5e33),this[_0xe4efe0(0x1e3)](_0x3f76de,_0x8e5e33),this['_setNodeExpandableState'](_0x3f76de),this[_0xe4efe0(0x1bb)](_0x3f76de,_0x8e5e33),_0x3f76de['id']+='\\x20f',_0x28bcde['props'][_0xe4efe0(0x1be)](_0x3f76de);}}}[_0x44fdd7(0x1a1)](_0x4b9b81,_0x266f41){}[_0x44fdd7(0x229)](_0x544951){}[_0x44fdd7(0x184)](_0x3633db){var _0x2b26c9=_0x44fdd7;return Array['isArray'](_0x3633db)||typeof _0x3633db==_0x2b26c9(0x1a2)&&this[_0x2b26c9(0x212)](_0x3633db)==='[object\\x20Array]';}[_0x44fdd7(0x1bb)](_0x5c802a,_0x5b72f9){}[_0x44fdd7(0x20d)](_0x58a6e4){var _0x5358d4=_0x44fdd7;delete _0x58a6e4[_0x5358d4(0x215)],delete _0x58a6e4[_0x5358d4(0x181)],delete _0x58a6e4[_0x5358d4(0x1f7)];}[_0x44fdd7(0x1b5)](_0x11e985,_0x9f134d){}[_0x44fdd7(0x176)](_0x3db316){var _0x402e1e=_0x44fdd7;return _0x3db316?_0x3db316[_0x402e1e(0x189)](this[_0x402e1e(0x1b7)])?'['+_0x3db316+']':_0x3db316[_0x402e1e(0x189)](this['_keyStrRegExp'])?'.'+_0x3db316:_0x3db316[_0x402e1e(0x189)](this[_0x402e1e(0x22b)])?'['+_0x3db316+']':'[\\x27'+_0x3db316+'\\x27]':'';}}let _0x39a9c0=new _0x51b96f();function _0x37cc6f(_0x38fd71,_0x1147cf,_0x173696,_0x2e3732){var _0x359a44=_0x44fdd7;let _0x5cbb4c,_0xd2de42;try{_0xd2de42=_0x228097(),_0x5cbb4c=_0x1d49be[_0x38fd71],!_0x5cbb4c||_0xd2de42-_0x5cbb4c['ts']>0x1f4&&_0x5cbb4c['count']&&_0x5cbb4c[_0x359a44(0x1f2)]/_0x5cbb4c[_0x359a44(0x23a)]<0x64?(_0x1d49be[_0x38fd71]=_0x5cbb4c={'count':0x0,'time':0x0,'ts':_0xd2de42},_0x1d49be['hits']={}):_0xd2de42-_0x1d49be[_0x359a44(0x1e5)]['ts']>0x32&&_0x1d49be[_0x359a44(0x1e5)]['count']&&_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x1f2)]/_0x1d49be[_0x359a44(0x1e5)]['count']<0x64&&(_0x1d49be['hits']={});let _0x45377a=[],_0x26be24=_0x5cbb4c[_0x359a44(0x194)]||_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x194)]?_0x868b59:_0xb12902;for(var _0x209818=0x0;_0x209818<_0x2e3732[_0x359a44(0x1b8)];_0x209818++){let _0x51e6a8={};_0x51e6a8[_0x359a44(0x19a)]=_0x26be24[_0x359a44(0x19a)],_0x51e6a8[_0x359a44(0x213)]=_0x26be24[_0x359a44(0x213)],_0x51e6a8[_0x359a44(0x214)]=_0x26be24['strLength'],_0x51e6a8['totalStrLength']=_0x26be24['totalStrLength'],_0x51e6a8[_0x359a44(0x1ce)]=_0x26be24[_0x359a44(0x1ce)],_0x51e6a8['autoExpandMaxDepth']=_0x26be24['autoExpandMaxDepth'],_0x51e6a8[_0x359a44(0x1a0)]=!0x1,_0x51e6a8['noFunctions']=!_0x283148,_0x51e6a8[_0x359a44(0x1ad)]=0x1,_0x51e6a8[_0x359a44(0x1dc)]=0x0,_0x51e6a8[_0x359a44(0x207)]=_0x359a44(0x1cc),_0x51e6a8[_0x359a44(0x1de)]='root_exp',_0x51e6a8[_0x359a44(0x220)]=!0x0,_0x51e6a8['autoExpandPreviousObjects']=[],_0x51e6a8['autoExpandPropertyCount']=0x0,_0x51e6a8[_0x359a44(0x1af)]=!0x0,_0x51e6a8[_0x359a44(0x1c8)]=0x0,_0x51e6a8[_0x359a44(0x1c1)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x45377a[_0x359a44(0x20c)](_0x39a9c0[_0x359a44(0x22e)]({},_0x2e3732[_0x209818],_0x51e6a8,{}));}return{'method':_0x359a44(0x1a6),'version':_0x15d9d0,'args':[{'id':_0x38fd71,'ts':_0x1147cf,'args':_0x45377a,'session':_0x173696}]};}catch(_0x5c4e81){return{'method':'log','version':_0x15d9d0,'args':[{'id':_0x38fd71,'ts':_0x1147cf,'args':[{'type':_0x359a44(0x1b1),'error':_0x5c4e81&&_0x5c4e81[_0x359a44(0x1cb)],'session':_0x173696}]}]};}finally{try{if(_0x5cbb4c&&_0xd2de42){let _0x2f7b69=_0x228097();_0x5cbb4c[_0x359a44(0x23a)]++,_0x5cbb4c[_0x359a44(0x1f2)]+=_0x2f7b69-_0xd2de42,_0x5cbb4c['ts']=_0x2f7b69,_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x23a)]++,_0x1d49be['hits'][_0x359a44(0x1f2)]+=_0x2f7b69-_0xd2de42,_0x1d49be['hits']['ts']=_0x2f7b69,(_0x5cbb4c[_0x359a44(0x23a)]>0x32||_0x5cbb4c[_0x359a44(0x1f2)]>0x64)&&(_0x5cbb4c[_0x359a44(0x194)]=!0x0),(_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x23a)]>0x3e8||_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x1f2)]>0x12c)&&(_0x1d49be[_0x359a44(0x1e5)]['reduceLimits']=!0x0);}}catch{}}}function _0x407532(){var _0x519286=_0x44fdd7;if(_0x131e92[_0x519286(0x1f3)])return()=>_0x131e92[_0x519286(0x1f3)][_0x519286(0x17a)]();try{let {performance:_0x30ef78}=require(_0x519286(0x1ee));return()=>_0x30ef78[_0x519286(0x17a)]();}catch{return()=>Date[_0x519286(0x17a)]();}}})(globalThis,_0x40f416(0x1d4),_0x40f416(0x21f),"/Users/marciocarneiro/.vscode/extensions/wallabyjs.console-ninja-0.0.70/node_modules",'remix',_0x40f416(0x22d),_0x40f416(0x222),_0x40f416(0x19d),_0x40f416(0x21b));`);
  } catch {
  }
}

// route:/Users/marciocarneiro/Documents/remix/quattor/app/routes/novo.tsx
var novo_exports = {};
__export(novo_exports, {
  action: () => action11,
  default: () => AuthPage2
});
function AuthPage2() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "bg-stone-700 dark:bg-gray-900"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/logo_branco.svg",
    className: " w-64",
    alt: "Quattor Logo"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-6 space-y-4 md:space-y-6 sm:p-8"
  }, /* @__PURE__ */ React.createElement(AuthForm, null)))));
}
var action11 = async ({ request }) => {
  let formData = await request.formData(), credentials = Object.fromEntries(formData);
  return await signup(credentials);
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "0f83b2d4", entry: { module: "/build/entry.client-DT6MVZ25.js", imports: ["/build/_shared/chunk-DI77NANL.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WGHCQMMS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-AOUSPX6H.js", imports: ["/build/_shared/chunk-M7LXGO6K.js", "/build/_shared/chunk-BGEXGPBQ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/despesas": { id: "routes/despesas", parentId: "root", path: "despesas", index: void 0, caseSensitive: void 0, module: "/build/routes/despesas-XDDPFIAH.js", imports: ["/build/_shared/chunk-BGEXGPBQ.js", "/build/_shared/chunk-KQIHS6HX.js", "/build/_shared/chunk-VL6BA35Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/despesas/$despesa": { id: "routes/despesas/$despesa", parentId: "routes/despesas", path: ":despesa", index: void 0, caseSensitive: void 0, module: "/build/routes/despesas/$despesa-KA5JJKUU.js", imports: ["/build/_shared/chunk-B24UO4P3.js", "/build/_shared/chunk-XGJUJJQZ.js", "/build/_shared/chunk-UQHHPPWX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/despesas/index_bak": { id: "routes/despesas/index_bak", parentId: "routes/despesas", path: "index_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/despesas/index_bak-VPOZMZL7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/despesas/new": { id: "routes/despesas/new", parentId: "routes/despesas", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/despesas/new-GPSRMTL2.js", imports: ["/build/_shared/chunk-DIGGYONK.js", "/build/_shared/chunk-UQHHPPWX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folha": { id: "routes/folha", parentId: "root", path: "folha", index: void 0, caseSensitive: void 0, module: "/build/routes/folha-QCOS6XAG.js", imports: ["/build/_shared/chunk-GWU4PKEL.js", "/build/_shared/chunk-N5WMD52G.js", "/build/_shared/chunk-PAC3O35W.js", "/build/_shared/chunk-BGEXGPBQ.js", "/build/_shared/chunk-KQIHS6HX.js", "/build/_shared/chunk-XGJUJJQZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folha.salario.$pagamento": { id: "routes/folha.salario.$pagamento", parentId: "root", path: "folha/salario/:pagamento", index: void 0, caseSensitive: void 0, module: "/build/routes/folha.salario.$pagamento-FPGU5FGS.js", imports: ["/build/_shared/chunk-5SMKQ4RT.js", "/build/_shared/chunk-N5WMD52G.js", "/build/_shared/chunk-PAC3O35W.js", "/build/_shared/chunk-KQIHS6HX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folha/$funcionario": { id: "routes/folha/$funcionario", parentId: "routes/folha", path: ":funcionario", index: void 0, caseSensitive: void 0, module: "/build/routes/folha/$funcionario-2FBFHZNL.js", imports: ["/build/_shared/chunk-B24UO4P3.js", "/build/_shared/chunk-UQHHPPWX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folha/index_bak": { id: "routes/folha/index_bak", parentId: "routes/folha", path: "index_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/folha/index_bak-KTZICS3J.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folha/new": { id: "routes/folha/new", parentId: "routes/folha", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/folha/new-BOKESVJK.js", imports: ["/build/_shared/chunk-UQHHPPWX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/folha/salario_bak/$pagamento_bak": { id: "routes/folha/salario_bak/$pagamento_bak", parentId: "routes/folha", path: "salario_bak/:pagamento_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/folha/salario_bak/$pagamento_bak-2PO4YZLT.js", imports: ["/build/_shared/chunk-5SMKQ4RT.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GCJEUS2D.js", imports: ["/build/_shared/chunk-ESQM4JQK.js", "/build/_shared/chunk-YYGD3IMG.js", "/build/_shared/chunk-5SMKQ4RT.js", "/build/_shared/chunk-N5WMD52G.js", "/build/_shared/chunk-PAC3O35W.js", "/build/_shared/chunk-BGEXGPBQ.js", "/build/_shared/chunk-KQIHS6HX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index_bak": { id: "routes/index_bak", parentId: "root", path: "index_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/index_bak-AR5J3TAQ.js", imports: ["/build/_shared/chunk-ESQM4JQK.js", "/build/_shared/chunk-YYGD3IMG.js", "/build/_shared/chunk-5SMKQ4RT.js", "/build/_shared/chunk-N5WMD52G.js", "/build/_shared/chunk-PAC3O35W.js", "/build/_shared/chunk-KQIHS6HX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-5WIDL4IR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/novo": { id: "routes/novo", parentId: "root", path: "novo", index: void 0, caseSensitive: void 0, module: "/build/routes/novo-JXRM7BP6.js", imports: ["/build/_shared/chunk-M7LXGO6K.js", "/build/_shared/chunk-BGEXGPBQ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/receitas": { id: "routes/receitas", parentId: "root", path: "receitas", index: void 0, caseSensitive: void 0, module: "/build/routes/receitas-USBAB7F2.js", imports: ["/build/_shared/chunk-YYGD3IMG.js", "/build/_shared/chunk-BGEXGPBQ.js", "/build/_shared/chunk-KQIHS6HX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/receitas/$receita": { id: "routes/receitas/$receita", parentId: "routes/receitas", path: ":receita", index: void 0, caseSensitive: void 0, module: "/build/routes/receitas/$receita-7EJIWM66.js", imports: ["/build/_shared/chunk-RIPL2UBZ.js", "/build/_shared/chunk-B24UO4P3.js", "/build/_shared/chunk-XGJUJJQZ.js", "/build/_shared/chunk-UQHHPPWX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/receitas/index_bak": { id: "routes/receitas/index_bak", parentId: "routes/receitas", path: "index_bak", index: void 0, caseSensitive: void 0, module: "/build/routes/receitas/index_bak-RF6BVM5G.js", imports: ["/build/_shared/chunk-RIPL2UBZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/receitas/new": { id: "routes/receitas/new", parentId: "routes/receitas", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/receitas/new-WZIQAQVC.js", imports: ["/build/_shared/chunk-DIGGYONK.js", "/build/_shared/chunk-UQHHPPWX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-0F83B2D4.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/folha.salario.$pagamento": {
    id: "routes/folha.salario.$pagamento",
    parentId: "root",
    path: "folha/salario/:pagamento",
    index: void 0,
    caseSensitive: void 0,
    module: folha_salario_pagamento_exports
  },
  "routes/index_bak": {
    id: "routes/index_bak",
    parentId: "root",
    path: "index_bak",
    index: void 0,
    caseSensitive: void 0,
    module: index_bak_exports
  },
  "routes/despesas": {
    id: "routes/despesas",
    parentId: "root",
    path: "despesas",
    index: void 0,
    caseSensitive: void 0,
    module: despesas_exports
  },
  "routes/despesas/index_bak": {
    id: "routes/despesas/index_bak",
    parentId: "routes/despesas",
    path: "index_bak",
    index: void 0,
    caseSensitive: void 0,
    module: index_bak_exports2
  },
  "routes/despesas/$despesa": {
    id: "routes/despesas/$despesa",
    parentId: "routes/despesas",
    path: ":despesa",
    index: void 0,
    caseSensitive: void 0,
    module: despesa_exports
  },
  "routes/despesas/new": {
    id: "routes/despesas/new",
    parentId: "routes/despesas",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/receitas": {
    id: "routes/receitas",
    parentId: "root",
    path: "receitas",
    index: void 0,
    caseSensitive: void 0,
    module: receitas_exports
  },
  "routes/receitas/index_bak": {
    id: "routes/receitas/index_bak",
    parentId: "routes/receitas",
    path: "index_bak",
    index: void 0,
    caseSensitive: void 0,
    module: index_bak_exports3
  },
  "routes/receitas/$receita": {
    id: "routes/receitas/$receita",
    parentId: "routes/receitas",
    path: ":receita",
    index: void 0,
    caseSensitive: void 0,
    module: receita_exports
  },
  "routes/receitas/new": {
    id: "routes/receitas/new",
    parentId: "routes/receitas",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/folha": {
    id: "routes/folha",
    parentId: "root",
    path: "folha",
    index: void 0,
    caseSensitive: void 0,
    module: folha_exports
  },
  "routes/folha/salario_bak/$pagamento_bak": {
    id: "routes/folha/salario_bak/$pagamento_bak",
    parentId: "routes/folha",
    path: "salario_bak/:pagamento_bak",
    index: void 0,
    caseSensitive: void 0,
    module: pagamento_bak_exports
  },
  "routes/folha/$funcionario": {
    id: "routes/folha/$funcionario",
    parentId: "routes/folha",
    path: ":funcionario",
    index: void 0,
    caseSensitive: void 0,
    module: funcionario_exports
  },
  "routes/folha/index_bak": {
    id: "routes/folha/index_bak",
    parentId: "routes/folha",
    path: "index_bak",
    index: void 0,
    caseSensitive: void 0,
    module: index_bak_exports4
  },
  "routes/folha/new": {
    id: "routes/folha/new",
    parentId: "routes/folha",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports3
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/novo": {
    id: "routes/novo",
    parentId: "root",
    path: "novo",
    index: void 0,
    caseSensitive: void 0,
    module: novo_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
