import {
  require_lodash
} from "/build/_shared/chunk-2FZQQZH4.js";
import {
  require_folha
} from "/build/_shared/chunk-3V4LHCFL.js";
import {
  require_receitas
} from "/build/_shared/chunk-HLCOEEE4.js";
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

// app/routes/fluxo.tsx
var import_receitas = __toESM(require_receitas());
var import_lodash = __toESM(require_lodash());
var import_despesas = __toESM(require_despesas());
var import_folha = __toESM(require_folha());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Fluxo() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const {
    ReceitasCentro5,
    ReceitasCentro6,
    ReceitasCentro7,
    ReceitasCentro8,
    ReceitasCentro9,
    ReceitasCentro10,
    ReceitasCentro11,
    ReceitasCentro12,
    recMes5,
    recMes6,
    recMes7,
    recMes8,
    recMes9,
    recMes10,
    recMes11,
    recMes12,
    despMes5,
    despMes6,
    despMes7,
    despMes8,
    despMes9,
    despMes10,
    despMes11,
    despMes12,
    DespFixas5,
    DespFixas6,
    DespFixas7,
    DespFixas8,
    DespFixas9,
    DespFixas10,
    DespFixas11,
    DespFixas12,
    TotSalMes5,
    TotSalMes6,
    TotSalMes7,
    TotSalMes8,
    TotSalMes9,
    TotSalMes10,
    TotSalMes11,
    TotSalMes12,
    salAreas5,
    salAreas6,
    salAreas7,
    salAreas8,
    salAreas9,
    salAreas10,
    salAreas11,
    salAreas12
  } = useLoaderData();
  let TotSal5 = 0;
  Number.isNaN(parseFloat(TotSalMes5.map((t) => t.salario))) ? TotSal5 = 55e3 : TotSal5 = parseFloat(TotSalMes5.map((t) => t.salario));
  let TotSal6 = 0;
  Number.isNaN(parseFloat(TotSalMes6.map((t) => t.salario))) ? TotSal6 = 55e3 : TotSal6 = parseFloat(TotSalMes6.map((t) => t.salario));
  let TotSal7 = 0;
  Number.isNaN(parseFloat(TotSalMes7.map((t) => t.salario))) ? TotSal7 = 55e3 : TotSal7 = parseFloat(TotSalMes7.map((t) => t.salario));
  let TotSal8 = 0;
  Number.isNaN(parseFloat(TotSalMes8.map((t) => t.salario))) ? TotSal8 = 55e3 : TotSal8 = parseFloat(TotSalMes8.map((t) => t.salario));
  let TotSal9 = 0;
  Number.isNaN(parseFloat(TotSalMes9.map((t) => t.salario))) ? TotSal9 = 55e3 : TotSal9 = parseFloat(TotSalMes9.map((t) => t.salario));
  let TotSal10 = 0;
  Number.isNaN(parseFloat(TotSalMes10.map((t) => t.salario))) ? TotSal10 = 55e3 : TotSal10 = parseFloat(TotSalMes10.map((t) => t.salario));
  let TotSal11 = 0;
  Number.isNaN(parseFloat(TotSalMes11.map((t) => t.salario))) ? TotSal11 = 55e3 : TotSal11 = parseFloat(TotSalMes11.map((t) => t.salario));
  let TotSal12 = 0;
  Number.isNaN(parseFloat(TotSalMes12.map((t) => t.salario))) ? TotSal12 = 55e3 : TotSal12 = parseFloat(TotSalMes12.map((t) => t.salario));
  function DespesasVariavelTotalf(desp) {
    return import_lodash.default.sumBy(import_lodash.default.filter(desp, ["tipo", "variavel"]), "valor");
  }
  function DespesasFixasTotal(mes, totmes) {
    return import_lodash.default.sumBy(import_lodash.default.filter(mes, ["tipo", "fixa"]), "valor") + Number(totmes);
  }
  function DespesasVariaveisf(mes) {
    return import_lodash.default.filter(mes, ["tipo", "variavel"]);
  }
  function PontoEquilibriof(DespesasFixasTotal2, DespesasVariavelTotalf2, recMes) {
    return DespesasFixasTotal2 / 1 - DespesasVariavelTotalf2 / recMes._sum.valor;
  }
  function MargemDeContribuicaof(recMes, DespesasVariavelTotal) {
    return recMes._sum.valor - DespesasVariavelTotalf(DespesasVariavelTotal);
  }
  function LucroOpf(recMes, despmes, totmes) {
    return MargemDeContribuicaof(recMes, despmes) - DespesasFixasTotal(despmes, totmes);
  }
  function totalReceitas(recMes) {
    return recMes._sum.valor;
  }
  const inicial = 64339.85;
  const saldoInicial5 = inicial;
  const saldoInicial6 = SaldoFinal(saldoInicial5, recMes5, despMes5, TotSal5);
  const saldoInicial7 = SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6);
  const saldoInicial8 = SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7);
  const saldoInicial9 = SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8);
  const saldoInicial10 = SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9);
  const saldoInicial11 = SaldoFinal(
    saldoInicial10,
    recMes10,
    despMes10,
    TotSal10
  );
  const saldoInicial12 = SaldoFinal(
    saldoInicial11,
    recMes11,
    despMes11,
    TotSal11
  );
  function SaldoFinal(inicial2, recMes, despmes, Totalsalmes) {
    return inicial2 + LucroOpf(recMes, despmes, Totalsalmes);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/fluxo.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  justify-center min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mx-auto grid w-full grid-cols-8 gap-x-1 px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "maio",
            name: "answer",
            id: "maio",
            defaultChecked: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 321,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out",
            htmlFor: "maio",
            children: "Maio"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 329,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute w-full  bg-stone-200   p-2 mt-2 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4 border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "MAIO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 339,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 343,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 346,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 349,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 338,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 337,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 356,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes5).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 359,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes5) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 364,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: "100%" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 371,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 355,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 376,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes5).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 379,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes5) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 384,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: "100%" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 391,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 375,
              columnNumber: 19
            }, this),
            ReceitasCentro5 == null ? void 0 : ReceitasCentro5.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 397,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 400,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes5)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 406,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 411,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 396,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 416,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_a = DespesasVariavelTotalf(despMes5)) == null ? void 0 : _a.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 419,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes5) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 427,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 435,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 415,
              columnNumber: 19
            }, this),
            (_b = DespesasVariaveisf(despMes5)) == null ? void 0 : _b.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 440,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 443,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes5)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 448,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 453,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 439,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 457,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(recMes5, despMes5).toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 460,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes5, despMes5) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 469,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 477,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 456,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 480,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_c = DespesasFixasTotal(despMes5, TotSal5)) == null ? void 0 : _c.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 483,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes5, TotSal5) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 491,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 499,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 479,
              columnNumber: 19
            }, this),
            DespFixas5 == null ? void 0 : DespFixas5.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b bg-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 503,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 506,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes5)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 511,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 516,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 502,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 520,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal5.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 523,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal5 / totalReceitas(recMes5)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 528,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 533,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 519,
              columnNumber: 19
            }, this),
            salAreas5 == null ? void 0 : salAreas5.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 537,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 540,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes5)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 546,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 551,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 536,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes5, despMes5, TotSal5) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 560,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes5, despMes5, TotSal5).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 563,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes5, despMes5, TotSal5) / totalReceitas(recMes5)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 572,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 580,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 554,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 583,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes5, TotSal5),
                DespesasVariavelTotalf(despMes5),
                recMes5
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 586,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes5, TotSal5),
                  DespesasVariavelTotalf(despMes5),
                  recMes5
                ) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 596,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 607,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 582,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 610,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial5.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 613,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial5 / totalReceitas(recMes5)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 619,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 624,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 609,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 627,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial5,
                recMes5,
                despMes5,
                TotSal5
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 630,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (saldoInicial5 + LucroOpf(recMes5, despMes5, TotSal5)) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 641,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 649,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 626,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 354,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 336,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 335,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 320,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "junho",
            name: "answer",
            id: "junho"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 656,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out",
            htmlFor: "junho",
            children: "Junho"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 663,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute w-full bg-stone-200 left-3 p-6  mt-2 rounded-lg mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "JUNHO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 673,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 677,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 680,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 683,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 672,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 671,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 690,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes6).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 693,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes6) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 698,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes6) - totalReceitas(recMes5)) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 705,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 689,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 715,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes6).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 718,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes6) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 723,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes6) - totalReceitas(recMes5)) / totalReceitas(recMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 730,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 714,
              columnNumber: 19
            }, this),
            ReceitasCentro6 == null ? void 0 : ReceitasCentro6.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 741,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 744,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes6)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 750,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 755,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 740,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 760,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_d = DespesasVariavelTotalf(despMes6)) == null ? void 0 : _d.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 763,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes6) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 771,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasVariavelTotalf(despMes6) - DespesasVariavelTotalf(despMes5)) / DespesasVariavelTotalf(despMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 780,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 759,
              columnNumber: 19
            }, this),
            (_e = DespesasVariaveisf(despMes6)) == null ? void 0 : _e.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 793,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 796,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes6)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 801,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 792,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 809,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(recMes6, despMes6).toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 812,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes6, despMes6) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 821,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (MargemDeContribuicaof(recMes6, despMes6) - MargemDeContribuicaof(recMes5, despMes5)) / MargemDeContribuicaof(recMes5, despMes5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 830,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 808,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 841,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_f = DespesasFixasTotal(despMes6, TotSal6)) == null ? void 0 : _f.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 844,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes6, TotSal6) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 852,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasFixasTotal(despMes6, TotSal6) - DespesasFixasTotal(despMes5, TotSal5)) / DespesasFixasTotal(despMes5, TotSal5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 860,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 840,
              columnNumber: 19
            }, this),
            DespFixas6 == null ? void 0 : DespFixas6.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 872,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 875,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes6)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 880,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 885,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 871,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 889,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal6.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 892,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal6 / totalReceitas(recMes6)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 897,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format((TotSal6 - TotSal5) / TotSal5) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 903,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 888,
              columnNumber: 19
            }, this),
            salAreas6 == null ? void 0 : salAreas6.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 911,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 914,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes6)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 920,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 910,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes6, despMes6, TotSal6) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 933,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes6, despMes6, TotSal6).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 936,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes6, despMes6, TotSal6) / totalReceitas(recMes6)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 945,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                    style: "percent"
                  }).format(
                    (LucroOpf(recMes6, despMes6, TotSal6) - LucroOpf(recMes5, despMes5, TotSal5)) / LucroOpf(recMes5, despMes5, TotSal5)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 953,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 927,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 964,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes6, TotSal6),
                DespesasVariavelTotalf(despMes6),
                recMes6
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 967,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes6, TotSal6),
                  DespesasVariavelTotalf(despMes6),
                  recMes6
                ) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 977,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (PontoEquilibriof(
                  DespesasFixasTotal(despMes6, TotSal6),
                  DespesasVariavelTotalf(despMes6),
                  recMes6
                ) - PontoEquilibriof(
                  DespesasFixasTotal(despMes5, TotSal5),
                  DespesasVariavelTotalf(despMes5),
                  recMes5
                )) / PontoEquilibriof(
                  DespesasFixasTotal(despMes5, TotSal5),
                  DespesasVariavelTotalf(despMes5),
                  recMes5
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 988,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 963,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1011,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial6.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1014,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial6 / totalReceitas(recMes6)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1020,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (saldoInicial6 - saldoInicial5) / saldoInicial5
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1025,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1010,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1034,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial6,
                recMes6,
                despMes6,
                TotSal6
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1037,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6) + LucroOpf(recMes6, despMes6, TotSal6)) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1049,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6) - SaldoFinal(
                  saldoInicial5,
                  recMes5,
                  despMes5,
                  TotSal5
                )) / SaldoFinal(saldoInicial5, recMes5, despMes5, TotSal5)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1058,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1033,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 688,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 670,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 669,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 655,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "julho",
            name: "answer",
            id: "julho"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1079,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out",
            htmlFor: "julho",
            children: "Julho"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1086,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "JULHO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1096,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1100,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1103,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1106,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1095,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1094,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1113,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes7).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1116,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes7) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1121,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes7) - totalReceitas(recMes6)) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1128,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1112,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1138,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes7).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1141,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes7) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1146,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes7) - totalReceitas(recMes6)) / totalReceitas(recMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1153,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1137,
              columnNumber: 19
            }, this),
            ReceitasCentro7 == null ? void 0 : ReceitasCentro7.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1164,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1167,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes7)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1173,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1178,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1163,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1183,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_g = DespesasVariavelTotalf(despMes7)) == null ? void 0 : _g.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1186,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes7) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1194,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasVariavelTotalf(despMes7) - DespesasVariavelTotalf(despMes6)) / DespesasVariavelTotalf(despMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1202,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1182,
              columnNumber: 19
            }, this),
            (_h = DespesasVariaveisf(despMes7)) == null ? void 0 : _h.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1215,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1218,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes7)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1223,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1214,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1231,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(recMes7, despMes7).toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1234,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes7, despMes7) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1243,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (MargemDeContribuicaof(recMes7, despMes7) - MargemDeContribuicaof(recMes6, despMes6)) / MargemDeContribuicaof(recMes6, despMes6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1251,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1230,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1262,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_i = DespesasFixasTotal(despMes7, TotSal7)) == null ? void 0 : _i.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1265,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes7, TotSal7) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1273,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasFixasTotal(despMes7, TotSal7) - DespesasFixasTotal(despMes6, TotSal6)) / DespesasFixasTotal(despMes6, TotSal6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1281,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1261,
              columnNumber: 19
            }, this),
            DespFixas7 == null ? void 0 : DespFixas7.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b bg-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1293,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1296,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes7)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1301,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1306,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1292,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1310,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal7.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1313,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal7 / totalReceitas(recMes7)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1318,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format((TotSal7 - TotSal6) / TotSal6) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1323,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1309,
              columnNumber: 19
            }, this),
            salAreas7 == null ? void 0 : salAreas7.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1331,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1334,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes7)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1340,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1330,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes7, despMes7, TotSal7) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1353,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes7, despMes7, TotSal7).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1356,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes7, despMes7, TotSal7) / totalReceitas(recMes7)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1365,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                    style: "percent"
                  }).format(
                    (LucroOpf(recMes7, despMes7, TotSal7) - LucroOpf(recMes6, despMes6, TotSal6)) / LucroOpf(recMes6, despMes6, TotSal6)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1373,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1347,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1384,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes7, TotSal7),
                DespesasVariavelTotalf(despMes7),
                recMes7
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1387,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes7, TotSal7),
                  DespesasVariavelTotalf(despMes7),
                  recMes7
                ) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1397,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (PontoEquilibriof(
                  DespesasFixasTotal(despMes7, TotSal7),
                  DespesasVariavelTotalf(despMes7),
                  recMes7
                ) - PontoEquilibriof(
                  DespesasFixasTotal(despMes6, TotSal6),
                  DespesasVariavelTotalf(despMes6),
                  recMes6
                )) / PontoEquilibriof(
                  DespesasFixasTotal(despMes6, TotSal6),
                  DespesasVariavelTotalf(despMes6),
                  recMes6
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1408,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1383,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1431,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial7.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1434,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial7 / totalReceitas(recMes7)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1440,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (saldoInicial7 - saldoInicial6) / saldoInicial6
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1445,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1430,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1454,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial7,
                recMes7,
                despMes7,
                TotSal7
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1457,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7) + LucroOpf(recMes7, despMes7, TotSal7)) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1468,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7) - SaldoFinal(
                  saldoInicial6,
                  recMes6,
                  despMes6,
                  TotSal6
                )) / SaldoFinal(saldoInicial6, recMes6, despMes6, TotSal6)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1477,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1453,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1111,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 1093,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 1092,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 1078,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "agosto",
            name: "answer",
            id: "agosto"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1498,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out",
            htmlFor: "agosto",
            children: "Agosto"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1505,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bg-stone-200  left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "AGOSTO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1515,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1519,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1522,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1525,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1514,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1513,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1532,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes8).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1535,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes8) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1540,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes8) - totalReceitas(recMes7)) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1547,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1531,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1557,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes8).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1560,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes8) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1565,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes8) - totalReceitas(recMes7)) / totalReceitas(recMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1572,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1556,
              columnNumber: 19
            }, this),
            ReceitasCentro8 == null ? void 0 : ReceitasCentro8.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1583,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1586,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes8)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1592,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1597,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1582,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1602,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_j = DespesasVariavelTotalf(despMes8)) == null ? void 0 : _j.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1605,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes8) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1613,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasVariavelTotalf(despMes8) - DespesasVariavelTotalf(despMes7)) / DespesasVariavelTotalf(despMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1621,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1601,
              columnNumber: 19
            }, this),
            (_k = DespesasVariaveisf(despMes8)) == null ? void 0 : _k.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1634,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1637,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes8)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1642,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1633,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1650,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(recMes8, despMes8).toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1653,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes8, despMes8) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1662,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (MargemDeContribuicaof(recMes8, despMes8) - MargemDeContribuicaof(recMes7, despMes7)) / MargemDeContribuicaof(recMes7, despMes7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1670,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1649,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1681,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_l = DespesasFixasTotal(despMes8, TotSal8)) == null ? void 0 : _l.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1684,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes8, TotSal8) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1692,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasFixasTotal(despMes8, TotSal8) - DespesasFixasTotal(despMes7, TotSal7)) / DespesasFixasTotal(despMes7, TotSal7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1700,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1680,
              columnNumber: 19
            }, this),
            DespFixas8 == null ? void 0 : DespFixas8.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1712,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1715,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes8)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1720,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center" }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 1725,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1711,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1729,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal8.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1732,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal8 / totalReceitas(recMes8)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1737,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format((TotSal8 - TotSal7) / TotSal7) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1742,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1728,
              columnNumber: 19
            }, this),
            salAreas8 == null ? void 0 : salAreas8.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1750,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1753,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes8)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1759,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1749,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes8, despMes8, TotSal8) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1772,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes8, despMes8, TotSal8).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1775,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes8, despMes8, TotSal8) / totalReceitas(recMes8)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1784,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                    style: "percent"
                  }).format(
                    (LucroOpf(recMes8, despMes8, TotSal8) - LucroOpf(recMes7, despMes7, TotSal7)) / LucroOpf(recMes7, despMes7, TotSal7)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 1792,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1766,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1803,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes8, TotSal8),
                DespesasVariavelTotalf(despMes8),
                recMes8
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1806,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes8, TotSal8),
                  DespesasVariavelTotalf(despMes8),
                  recMes8
                ) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1816,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (PontoEquilibriof(
                  DespesasFixasTotal(despMes8, TotSal8),
                  DespesasVariavelTotalf(despMes8),
                  recMes8
                ) - PontoEquilibriof(
                  DespesasFixasTotal(despMes7, TotSal7),
                  DespesasVariavelTotalf(despMes7),
                  recMes7
                )) / PontoEquilibriof(
                  DespesasFixasTotal(despMes7, TotSal7),
                  DespesasVariavelTotalf(despMes7),
                  recMes7
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1827,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1802,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1850,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial8.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1853,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial8 / totalReceitas(recMes8)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1859,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (saldoInicial8 - saldoInicial7) / saldoInicial7
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1864,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1849,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1873,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial8,
                recMes8,
                despMes8,
                TotSal8
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1876,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8) + LucroOpf(recMes8, despMes8, TotSal8)) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1887,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8) - SaldoFinal(
                  saldoInicial7,
                  recMes7,
                  despMes7,
                  TotSal7
                )) / SaldoFinal(saldoInicial7, recMes7, despMes7, TotSal7)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1896,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1872,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1530,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 1512,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 1511,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 1497,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "setembro",
            name: "answer",
            id: "setembro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1916,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:ring-slate-400 peer-checked:bg-slate-300 transition-all duration-500 ease-in-out",
            htmlFor: "setembro",
            children: "Setembro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1923,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "SETEMBRO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1933,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1937,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1940,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1943,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1932,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1931,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1950,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes9).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1953,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes9) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1958,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes9) - totalReceitas(recMes8)) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1965,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1949,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1975,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes9).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1978,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes9) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1983,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes9) - totalReceitas(recMes8)) / totalReceitas(recMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 1990,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 1974,
              columnNumber: 19
            }, this),
            ReceitasCentro9 == null ? void 0 : ReceitasCentro9.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2001,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2004,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes9)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2010,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2015,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2e3,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2020,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_m = DespesasVariavelTotalf(despMes9)) == null ? void 0 : _m.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2023,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes9) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2031,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasVariavelTotalf(despMes9) - DespesasVariavelTotalf(despMes8)) / DespesasVariavelTotalf(despMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2039,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2019,
              columnNumber: 19
            }, this),
            (_n = DespesasVariaveisf(despMes9)) == null ? void 0 : _n.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2052,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2055,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes9)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2060,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2051,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2068,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(recMes9, despMes9).toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2071,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes9, despMes9) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2080,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (MargemDeContribuicaof(recMes9, despMes9) - MargemDeContribuicaof(recMes8, despMes8)) / MargemDeContribuicaof(recMes8, despMes8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2088,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2067,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2099,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_o = DespesasFixasTotal(despMes9, TotSal9)) == null ? void 0 : _o.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2102,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes9, TotSal9) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2110,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasFixasTotal(despMes9, TotSal9) - DespesasFixasTotal(despMes8, TotSal8)) / DespesasFixasTotal(despMes8, TotSal8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2118,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2098,
              columnNumber: 19
            }, this),
            DespFixas9 == null ? void 0 : DespFixas9.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2130,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2133,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes9)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2138,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2143,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2129,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2147,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal9.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2150,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal9 / totalReceitas(recMes9)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2155,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format((TotSal9 - TotSal8) / TotSal8) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2160,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2146,
              columnNumber: 19
            }, this),
            salAreas9 == null ? void 0 : salAreas9.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2168,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2171,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes9)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2177,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2167,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes9, despMes9, TotSal9) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2190,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes9, despMes9, TotSal9).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2193,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes9, despMes9, TotSal9) / totalReceitas(recMes9)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2202,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                    style: "percent"
                  }).format(
                    (LucroOpf(recMes9, despMes9, TotSal9) - LucroOpf(recMes8, despMes8, TotSal8)) / LucroOpf(recMes8, despMes8, TotSal8)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2210,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2184,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2221,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes9, TotSal9),
                DespesasVariavelTotalf(despMes9),
                recMes9
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2224,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes9, TotSal9),
                  DespesasVariavelTotalf(despMes9),
                  recMes9
                ) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2234,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (PontoEquilibriof(
                  DespesasFixasTotal(despMes9, TotSal9),
                  DespesasVariavelTotalf(despMes9),
                  recMes9
                ) - PontoEquilibriof(
                  DespesasFixasTotal(despMes8, TotSal8),
                  DespesasVariavelTotalf(despMes8),
                  recMes8
                )) / PontoEquilibriof(
                  DespesasFixasTotal(despMes8, TotSal8),
                  DespesasVariavelTotalf(despMes8),
                  recMes8
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2245,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2220,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2268,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial9.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2271,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial9 / totalReceitas(recMes9)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2277,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (saldoInicial9 - saldoInicial8) / saldoInicial8
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2282,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2267,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2291,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial9,
                recMes9,
                despMes9,
                TotSal9
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2294,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9) + LucroOpf(recMes9, despMes9, TotSal9)) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2305,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9) - SaldoFinal(
                  saldoInicial8,
                  recMes8,
                  despMes8,
                  TotSal8
                )) / SaldoFinal(saldoInicial8, recMes8, despMes8, TotSal8)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2314,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2290,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 1948,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 1930,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 1929,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 1915,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "outubro",
            name: "answer",
            id: "outubro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2334,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:bg-slate-300 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out",
            htmlFor: "outubro",
            children: "Outubro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2341,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100  peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "OUTUBRO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2351,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2355,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2358,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2361,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2350,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2349,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2368,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes10).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2371,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes10) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2376,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes10) - totalReceitas(recMes9)) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2383,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2367,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2393,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes10).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2396,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes10) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2401,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes10) - totalReceitas(recMes9)) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2408,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2392,
              columnNumber: 19
            }, this),
            ReceitasCentro10 == null ? void 0 : ReceitasCentro10.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2419,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2422,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes10)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2428,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2433,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2418,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2438,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_p = DespesasVariavelTotalf(despMes10)) == null ? void 0 : _p.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2441,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes10) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2449,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasVariavelTotalf(despMes10) - DespesasVariavelTotalf(despMes9)) / DespesasVariavelTotalf(despMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2457,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2437,
              columnNumber: 19
            }, this),
            (_q = DespesasVariaveisf(despMes10)) == null ? void 0 : _q.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2470,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2473,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes10)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2478,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2469,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2486,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(
                recMes10,
                despMes10
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2489,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes10, despMes10) / totalReceitas(recMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2498,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (MargemDeContribuicaof(recMes10, despMes10) - MargemDeContribuicaof(recMes9, despMes9)) / MargemDeContribuicaof(recMes9, despMes9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2506,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2485,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2517,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_r = DespesasFixasTotal(despMes10, TotSal10)) == null ? void 0 : _r.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2520,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes10, TotSal10) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2528,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasFixasTotal(despMes10, TotSal10) - DespesasFixasTotal(despMes9, TotSal9)) / DespesasFixasTotal(despMes9, TotSal9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2536,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2516,
              columnNumber: 19
            }, this),
            DespFixas10 == null ? void 0 : DespFixas10.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2548,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2551,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes10)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2556,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2561,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2547,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2565,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal10.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2568,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal10 / totalReceitas(recMes10)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2573,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format((TotSal10 - TotSal9) / TotSal9) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2578,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2564,
              columnNumber: 19
            }, this),
            salAreas10 == null ? void 0 : salAreas10.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2586,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2589,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes10)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2595,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2585,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes10, despMes10, TotSal10) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2608,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes10, despMes10, TotSal10).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2611,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes10, despMes10, TotSal10) / totalReceitas(recMes10)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2620,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                    style: "percent"
                  }).format(
                    (LucroOpf(recMes10, despMes10, TotSal10) - LucroOpf(recMes9, despMes9, TotSal9)) / LucroOpf(recMes9, despMes9, TotSal9)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 2628,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2602,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2639,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes10, TotSal10),
                DespesasVariavelTotalf(despMes10),
                recMes10
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2642,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes10, TotSal10),
                  DespesasVariavelTotalf(despMes10),
                  recMes10
                ) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2652,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (PontoEquilibriof(
                  DespesasFixasTotal(despMes10, TotSal10),
                  DespesasVariavelTotalf(despMes10),
                  recMes10
                ) - PontoEquilibriof(
                  DespesasFixasTotal(despMes9, TotSal9),
                  DespesasVariavelTotalf(despMes9),
                  recMes9
                )) / PontoEquilibriof(
                  DespesasFixasTotal(despMes9, TotSal9),
                  DespesasVariavelTotalf(despMes9),
                  recMes9
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2663,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2638,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2686,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial10.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2689,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial10 / totalReceitas(recMes10)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2695,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (saldoInicial10 - saldoInicial9) / saldoInicial9
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2700,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2685,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2709,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial10,
                recMes10,
                despMes10,
                TotSal10
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2712,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (SaldoFinal(
                  saldoInicial10,
                  recMes10,
                  despMes10,
                  TotSal10
                ) + LucroOpf(recMes10, despMes10, TotSal10)) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2723,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (SaldoFinal(
                  saldoInicial10,
                  recMes10,
                  despMes10,
                  TotSal10
                ) - SaldoFinal(
                  saldoInicial9,
                  recMes9,
                  despMes9,
                  TotSal9
                )) / SaldoFinal(saldoInicial9, recMes9, despMes9, TotSal9)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2737,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2708,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2366,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 2348,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 2347,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 2333,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "novembro",
            name: "answer",
            id: "novembro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2762,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:bg-slate-300 peer-checked:ring-1 peer-checked:ring-slate-400 transition-all duration-500 ease-in-out",
            htmlFor: "novembro",
            children: "Novembro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2769,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "NOVEMBRO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2779,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2783,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2786,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2789,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2778,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2777,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2796,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes11).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2799,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes11) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2804,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes11) - totalReceitas(recMes10)) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2811,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2795,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2821,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes11).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2824,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes11) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2829,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes11) - totalReceitas(recMes10)) / totalReceitas(recMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2836,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2820,
              columnNumber: 19
            }, this),
            ReceitasCentro11 == null ? void 0 : ReceitasCentro11.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2847,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2850,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes11)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2856,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2861,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2846,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2866,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_s = DespesasVariavelTotalf(despMes11)) == null ? void 0 : _s.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2869,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes11) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2877,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasVariavelTotalf(despMes11) - DespesasVariavelTotalf(despMes10)) / DespesasVariavelTotalf(despMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2885,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2865,
              columnNumber: 19
            }, this),
            (_t = DespesasVariaveisf(despMes11)) == null ? void 0 : _t.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2898,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2901,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes11)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2906,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2897,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2914,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(
                recMes11,
                despMes11
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2917,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes11, despMes11) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2926,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (MargemDeContribuicaof(recMes11, despMes11) - MargemDeContribuicaof(recMes10, despMes10)) / MargemDeContribuicaof(recMes10, despMes10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2934,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2913,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2945,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_u = DespesasFixasTotal(despMes11, TotSal11)) == null ? void 0 : _u.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2948,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes11, TotSal11) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2956,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasFixasTotal(despMes11, TotSal11) - DespesasFixasTotal(despMes10, TotSal10)) / DespesasFixasTotal(despMes10, TotSal10)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2964,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2944,
              columnNumber: 19
            }, this),
            DespFixas11 == null ? void 0 : DespFixas11.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2976,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2979,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes11)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2984,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 2989,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2975,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2993,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal11.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 2996,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal11 / totalReceitas(recMes11)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3001,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format((TotSal11 - TotSal10) / TotSal10) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3006,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 2992,
              columnNumber: 19
            }, this),
            salAreas11 == null ? void 0 : salAreas11.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3014,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3017,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes11)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3023,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3013,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes11, despMes11, TotSal11) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3036,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes11, despMes11, TotSal11).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3039,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes11, despMes11, TotSal11) / totalReceitas(recMes11)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3048,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                    style: "percent"
                  }).format(
                    (LucroOpf(recMes11, despMes11, TotSal11) - LucroOpf(recMes10, despMes10, TotSal10)) / LucroOpf(recMes10, despMes10, TotSal10)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3056,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3030,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3067,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes11, TotSal11),
                DespesasVariavelTotalf(despMes11),
                recMes11
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3070,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes11, TotSal11),
                  DespesasVariavelTotalf(despMes11),
                  recMes11
                ) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3080,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (PontoEquilibriof(
                  DespesasFixasTotal(despMes11, TotSal11),
                  DespesasVariavelTotalf(despMes11),
                  recMes11
                ) - PontoEquilibriof(
                  DespesasFixasTotal(despMes10, TotSal10),
                  DespesasVariavelTotalf(despMes10),
                  recMes10
                )) / PontoEquilibriof(
                  DespesasFixasTotal(despMes10, TotSal10),
                  DespesasVariavelTotalf(despMes10),
                  recMes10
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3091,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3066,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3114,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial11.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3117,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial11 / totalReceitas(recMes11)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3123,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (saldoInicial11 - saldoInicial10) / saldoInicial10
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3128,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3113,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3137,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial11,
                recMes11,
                despMes11,
                TotSal11
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (SaldoFinal(
                  saldoInicial11,
                  recMes11,
                  despMes11,
                  TotSal11
                ) + LucroOpf(recMes11, despMes11, TotSal11)) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3151,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (SaldoFinal(
                  saldoInicial11,
                  recMes11,
                  despMes11,
                  TotSal11
                ) - SaldoFinal(
                  saldoInicial10,
                  recMes10,
                  despMes10,
                  TotSal10
                )) / SaldoFinal(
                  saldoInicial10,
                  recMes10,
                  despMes10,
                  TotSal10
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3165,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3136,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 2794,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 2776,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 2775,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 2761,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "peer sr-only",
            type: "radio",
            value: "dezembro",
            name: "answer",
            id: "dezembro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 3196,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "label",
          {
            className: "flex justify-center cursor-pointer  rounded-lg  border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-1 peer-checked:ring-slate-400 peer-checked:bg-slate-300 transition-all duration-500 ease-in-out",
            htmlFor: "dezembro",
            children: "Dezembro"
          },
          void 0,
          false,
          {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 3203,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bg-stone-200 left-1 p-6  mt-2 rounded-lg w-full mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm w-3/4  border-l border-r rounded-b-lg mx-auto   text-left text-slate-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 text-center w-2/5 py-3", children: "DEZEMBRO 2023" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3213,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-right", children: "Valor" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3217,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AV" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3220,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-6 w-1/5 py-3 text-center", children: "AH" }, void 0, false, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3223,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 3212,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 3211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: " border-b bg-emerald-300 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium  text-lg text-slate-900 whitespace-nowrap ", children: "Receita / Faturamento" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3230,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 font-mono text-right", children: totalReceitas(recMes12).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3233,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes12) / totalReceitas(recMes12)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3238,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes12) - totalReceitas(recMes11)) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3245,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3229,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Receitas com servi\xE7os" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3255,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: totalReceitas(recMes12).toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3258,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                totalReceitas(recMes12) / totalReceitas(recMes12)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3263,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (totalReceitas(recMes12) - totalReceitas(recMes11)) / totalReceitas(recMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3270,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3254,
              columnNumber: 19
            }, this),
            ReceitasCentro12 == null ? void 0 : ReceitasCentro12.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b  ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: rec.centro }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3281,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec._sum.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3284,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(rec._sum.valor / totalReceitas(recMes12)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3290,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3295,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3280,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-orange-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Custos Vari\xE1veis" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3300,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  text-black font-mono text-right", children: (_v = DespesasVariavelTotalf(despMes12)) == null ? void 0 : _v.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3303,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasVariavelTotalf(despMes12) / totalReceitas(recMes12)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3311,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasVariavelTotalf(despMes12) - DespesasVariavelTotalf(despMes11)) / DespesasVariavelTotalf(despMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3319,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3299,
              columnNumber: 19
            }, this),
            (_w = DespesasVariaveisf(despMes12)) == null ? void 0 : _w.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: desp.conta }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3332,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2  px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3335,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(desp.valor / totalReceitas(recMes12)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3340,
                columnNumber: 23
              }, this)
            ] }, desp.id, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3331,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Margem de Contribui\xE7\xE3o" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3348,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: MargemDeContribuicaof(
                recMes12,
                despMes12
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3351,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                MargemDeContribuicaof(recMes12, despMes12) / totalReceitas(recMes12)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3360,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (MargemDeContribuicaof(recMes12, despMes12) - MargemDeContribuicaof(recMes11, despMes11)) / MargemDeContribuicaof(recMes11, despMes11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3368,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3347,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-100 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Despesas Fixas" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3379,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: (_x = DespesasFixasTotal(despMes12, TotSal12)) == null ? void 0 : _x.toLocaleString(
                "pt-br",
                {
                  minimumFractionDigits: 2
                }
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3382,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                DespesasFixasTotal(despMes12, TotSal12) / totalReceitas(recMes12)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3390,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (DespesasFixasTotal(despMes12, TotSal12) - DespesasFixasTotal(despMes11, TotSal11)) / DespesasFixasTotal(despMes11, TotSal11)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3398,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3378,
              columnNumber: 19
            }, this),
            DespFixas12 == null ? void 0 : DespFixas12.map((fixa, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: fixa.conta }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 3410,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: (_a2 = fixa._sum.valor) == null ? void 0 : _a2.toLocaleString("pt-br", {
                  minimumFractionDigits: 2
                }) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 3413,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                  style: "percent"
                }).format(fixa._sum.valor / totalReceitas(recMes12)) }, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 3418,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {}, void 0, false, {
                  fileName: "app/routes/fluxo.tsx",
                  lineNumber: 3423,
                  columnNumber: 23
                }, this)
              ] }, index, true, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3409,
                columnNumber: 21
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-amber-200 border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40   font-semibold   text-lg text text-slate-900 whitespace-nowrap ", children: "Sal\xE1rios" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3427,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-black font-mono text-right", children: TotSal12.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3430,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(TotSal12 / totalReceitas(recMes12)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3435,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format((TotSal12 - TotSal11) / TotSal11) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3440,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3426,
              columnNumber: 19
            }, this),
            salAreas12 == null ? void 0 : salAreas12.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-6 w-40  font-light text-slate-600 whitespace-nowrap ", children: (0, import_lodash.capitalize)(sal.mod) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3448,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3451,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(sal.valor / totalReceitas(recMes12)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3457,
                columnNumber: 23
              }, this)
            ] }, sal.mod, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3447,
              columnNumber: 21
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "tr",
              {
                className: `${LucroOpf(recMes12, despMes12, TotSal12) > 0 ? "bg-teal-300" : "bg-red-300"} border-b`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Lucro Operacional" }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3470,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: LucroOpf(recMes12, despMes12, TotSal12).toLocaleString(
                    "pt-br",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3473,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                    style: "percent"
                  }).format(
                    LucroOpf(recMes12, despMes12, TotSal12) / totalReceitas(recMes12)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3482,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                    style: "percent"
                  }).format(
                    (LucroOpf(recMes12, despMes12, TotSal12) - LucroOpf(recMes11, despMes11, TotSal11)) / LucroOpf(recMes11, despMes11, TotSal11)
                  ) }, void 0, false, {
                    fileName: "app/routes/fluxo.tsx",
                    lineNumber: 3490,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3464,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3501,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: PontoEquilibriof(
                DespesasFixasTotal(despMes12, TotSal12),
                DespesasVariavelTotalf(despMes12),
                recMes12
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3504,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                PontoEquilibriof(
                  DespesasFixasTotal(despMes12, TotSal12),
                  DespesasVariavelTotalf(despMes12),
                  recMes12
                ) / totalReceitas(recMes12)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3514,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (PontoEquilibriof(
                  DespesasFixasTotal(despMes12, TotSal12),
                  DespesasVariavelTotalf(despMes12),
                  recMes12
                ) - PontoEquilibriof(
                  DespesasFixasTotal(despMes11, TotSal11),
                  DespesasVariavelTotalf(despMes11),
                  recMes11
                )) / PontoEquilibriof(
                  DespesasFixasTotal(despMes11, TotSal11),
                  DespesasVariavelTotalf(despMes11),
                  recMes11
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3525,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3500,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Inicial" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3548,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: saldoInicial12.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3551,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(saldoInicial12 / totalReceitas(recMes12)) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3557,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (saldoInicial12 - saldoInicial11) / saldoInicial11
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3562,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3547,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-green-300", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40 font-semibold text-lg text text-slate-900 whitespace-nowrap ", children: "Saldo Final" }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3571,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 text-black px-6 font-mono text-right", children: SaldoFinal(
                saldoInicial12,
                recMes12,
                despMes12,
                TotSal12
              ).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3574,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("de-DE", {
                style: "percent"
              }).format(
                (SaldoFinal(
                  saldoInicial12,
                  recMes12,
                  despMes12,
                  TotSal12
                ) + LucroOpf(recMes12, despMes12, TotSal12)) / totalReceitas(recMes12)
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3585,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 text-slate-900 text-center", children: new Intl.NumberFormat("pt-BR", {
                style: "percent"
              }).format(
                (SaldoFinal(
                  saldoInicial12,
                  recMes12,
                  despMes12,
                  TotSal12
                ) - SaldoFinal(
                  saldoInicial11,
                  recMes11,
                  despMes11,
                  TotSal11
                )) / SaldoFinal(
                  saldoInicial11,
                  recMes11,
                  despMes11,
                  TotSal11
                )
              ) }, void 0, false, {
                fileName: "app/routes/fluxo.tsx",
                lineNumber: 3599,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/fluxo.tsx",
              lineNumber: 3570,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/fluxo.tsx",
            lineNumber: 3228,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 3210,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/fluxo.tsx",
          lineNumber: 3209,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fluxo.tsx",
        lineNumber: 3195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fluxo.tsx",
      lineNumber: 319,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/fluxo.tsx",
      lineNumber: 318,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fluxo.tsx",
    lineNumber: 316,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "ERRO" }, void 0, false, {
      fileName: "app/routes/fluxo.tsx",
      lineNumber: 3637,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
    fileName: "app/routes/fluxo.tsx",
    lineNumber: 3639,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  Fluxo as default
};
//# sourceMappingURL=/build/routes/fluxo-LD4KMCTF.js.map
