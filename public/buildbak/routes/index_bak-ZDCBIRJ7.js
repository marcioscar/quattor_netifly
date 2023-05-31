import {
  Bar,
  BarElement,
  CategoryScale,
  Chart,
  Line,
  LineElement,
  LinearScale,
  PointElement,
  plugin_legend,
  plugin_title,
  plugin_tooltip,
  require_despesas
} from "/build/_shared/chunk-HOSSHB4K.js";
import {
  require_lodash
} from "/build/_shared/chunk-2FZQQZH4.js";
import {
  Arrow,
  Load
} from "/build/_shared/chunk-FQZ62RZM.js";
import {
  require_folha
} from "/build/_shared/chunk-3V4LHCFL.js";
import {
  require_receitas
} from "/build/_shared/chunk-HLCOEEE4.js";
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
  require_jsx_dev_runtime,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/index_bak.tsx
var import_receitas = __toESM(require_receitas());
var import_despesas = __toESM(require_despesas());
var import_folha = __toESM(require_folha());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const rec = useFetcher();
  const {
    totReceitas,
    TotSalarios,
    ReceitasM,
    TotDespesas,
    DespesasM,
    TotSalMes,
    salAreas,
    areas
  } = useLoaderData();
  const totalRec = ((_a = rec.data) == null ? void 0 : _a.totReceitas) ? rec.data.totReceitas : totReceitas;
  const recMes = ((_b = rec.data) == null ? void 0 : _b.ReceitasM) ? rec.data.ReceitasM : ReceitasM;
  const totalDesp = ((_c = rec.data) == null ? void 0 : _c.TotDespesas) ? rec.data.TotDespesas : TotDespesas;
  const despMes = ((_d = rec.data) == null ? void 0 : _d.DespesasM) ? rec.data.DespesasM : DespesasM;
  const TotSalarioMes = ((_e = rec.data) == null ? void 0 : _e.TotSalMes) ? rec.data.TotSalMes : TotSalMes;
  const TotSalAreas = ((_f = rec.data) == null ? void 0 : _f.salAreas) ? rec.data.salAreas : salAreas;
  const DespesasFixas = import_lodash.default.filter(despMes, ["tipo", "fixa"]);
  const DespesasVariaveis = import_lodash.default.filter(despMes, ["tipo", "variavel"]);
  const DespesasFixasTotal = import_lodash.default.sumBy(
    import_lodash.default.filter(despMes, ["tipo", "fixa"]),
    "valor"
  );
  const DespesasVariavelTotal = import_lodash.default.sumBy(
    import_lodash.default.filter(despMes, ["tipo", "variavel"]),
    "valor"
  );
  const SalDiretos = import_lodash.default.sumBy(
    import_lodash.default.filter(TotSalAreas, function(o) {
      return o.mod != "geral";
    }),
    "valor"
  );
  const PercentFixa = ((SalDiretos + DespesasFixasTotal) / totalRec._sum.valor).toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2
  });
  const PercentVariavel = (DespesasVariavelTotal / totalRec._sum.valor).toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2
  });
  const Mensalidade = (SalDiretos + DespesasFixasTotal) / 1100;
  const Mensalidade6 = Mensalidade * (1 + DespesasVariavelTotal / totalRec._sum.valor) * 1.06;
  const previsao = Mensalidade * (1 + DespesasVariavelTotal / totalRec._sum.valor) * 1.06 * 1100;
  const Lucro = previsao - previsao * (DespesasVariavelTotal / totalRec._sum.valor) - DespesasFixasTotal - SalDiretos;
  const PontoEquilibrio = (DespesasFixasTotal + SalDiretos) / 1 - DespesasVariavelTotal / totalRec._sum.valor;
  const PontoEquilibrioQtd = PontoEquilibrio / Mensalidade6;
  const capitalize = (str) => {
    if (typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };
  const TotalSalariosMes = TotSalarios.map(
    (o) => Object.assign(
      {},
      o,
      o._id === "jan-2022" && { mes: 1 },
      o._id === "fev-2022" && { mes: 2 },
      o._id === "mar-2022" && { mes: 3 },
      o._id === "abr-2022" && { mes: 4 },
      o._id === "mai-2022" && { mes: 5 },
      o._id === "jun-2022" && { mes: 6 },
      o._id === "jul-2022" && { mes: 7 },
      o._id === "ago-2022" && { mes: 8 },
      o._id === "set-2022" && { mes: 9 },
      o._id === "out-2022" && { mes: 10 },
      o._id === "nov-2022" && { mes: 11 },
      o._id === "dez-2022" && { mes: 12 }
    )
  );
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    plugin_title,
    plugin_tooltip,
    plugin_legend
  );
  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Total de Sal\xE1rios"
      }
    }
  };
  const optionsBar = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked"
      }
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };
  const labels = import_lodash.default.orderBy(TotalSalariosMes, "mes").map((dt) => dt._id);
  console.log(
    ...oo_oo(`864893e0_0`, import_lodash.default.filter(areas, ["_id[1]", "geral"]).map((m) => [m.salario, m.mes]))
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Sal\xE1rios",
        data: import_lodash.default.orderBy(TotalSalariosMes, "mes").map((sal) => sal.salario),
        borderColor: "rgb(240, 96, 57)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };
  const dataBar = {
    labels,
    datasets: [
      {
        label: "Muscula\xE7\xE3o",
        data: import_lodash.default.filter(areas, ["_id[1]", "musculacao"]).map(
          (m) => m.salario
        ),
        backgroundColor: "#293462",
        stack: "Stack 0"
      },
      {
        label: "Prime",
        data: import_lodash.default.filter(areas, ["_id[1]", "prime"]).map((m) => m.salario),
        backgroundColor: "#1CD6CE",
        stack: "Stack 0"
      },
      {
        label: "Geral",
        data: import_lodash.default.filter(areas, ["_id[1]", "geral"]).map((m) => m.salario),
        backgroundColor: "#FEDB39",
        stack: "Stack 0"
      },
      {
        label: "Jud\xF4",
        data: import_lodash.default.filter(areas, ["_id[1]", "judo"]).map((m) => m.salario),
        backgroundColor: "#D61C4E",
        stack: "Stack 0"
      },
      {
        label: "Pilates",
        data: import_lodash.default.filter(areas, ["_id[1]", "pilates"]).map((m) => m.salario),
        backgroundColor: "#781C68",
        stack: "Stack 0"
      },
      {
        label: "Nata\xE7\xE3o",
        data: import_lodash.default.filter(areas, ["_id[1]", "natacao"]).map((m) => m.salario),
        backgroundColor: "#D36B00",
        stack: "Stack 0"
      },
      {
        label: "Boxe",
        data: import_lodash.default.filter(areas, ["_id[1]", "boxe"]).map((m) => m.salario),
        backgroundColor: "#224B0C",
        stack: "Stack 0"
      },
      {
        label: "MuaiThay",
        data: import_lodash.default.filter(areas, ["_id[1]", "muaithay"]).map(
          (m) => m.salario
        ),
        backgroundColor: "#EED180",
        stack: "Stack 0"
      },
      {
        label: "Ballet",
        data: import_lodash.default.filter(areas, ["_id[1]", "ballet"]).map((m) => m.salario),
        backgroundColor: "#CA4E79",
        stack: "Stack 0"
      },
      {
        label: "Aulas",
        data: import_lodash.default.filter(areas, ["_id[1]", "aulas"]).map((m) => m.salario),
        backgroundColor: "#F15412",
        stack: "Stack 0"
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 304,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rec.Form, { method: "get", action: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mr-4 font-light   text-sm ", htmlFor: "rec", children: "M\xCAS E ANO DE REFER\xCANCIA" }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 308,
        columnNumber: 11
      }, this),
      rec.state === "submitting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Load, {}, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 311,
        columnNumber: 41
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 312,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          className: "rounded text-blue-600 h-8  pl-5 pr-10 hover:border-gray-400 focus:outline-none ",
          name: "rec",
          defaultValue: format(new Date(), "MMM-yyyy", { locale: pt_default }),
          onChange: (event) => rec.submit(event.target.form),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { hidden: true, value: "", children: "Selecione m\xEAs e ano referencia" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 319,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "jan-2023", children: "Janeiro - 2023" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 322,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "fev-2023", children: "Fevereiro - 2023" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 323,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "mar-2023", children: "Mar\xE7o - 2023" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 324,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "abr-2023", children: "Abril - 2023" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 325,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "mai-2023", children: "Maio - 2023" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 326,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "jun-2023", children: "Junho - 2023" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 327,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "jul-2022", children: "Julho - 2022" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 328,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "ago-2022", children: "Agosto - 2022" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 329,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "set-2022", children: "Setembro - 2022" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 330,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out-2022", children: "Outubro - 2022" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 331,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "nov-2022", children: "Novembro - 2022" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 332,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "dez-2022", children: "Dezembro - 2022" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 333,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 313,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 307,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 306,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-10 m-4 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, { options: optionsBar, data: dataBar }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 340,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Line, { options: optionsLine, data }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 342,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 341,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "Despesas Fixas" }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 346,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: DespesasFixasTotal == null ? void 0 : DespesasFixasTotal.toLocaleString("pt-br", {
              minimumFractionDigits: 2
            }) }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 350,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 345,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto  max-h-56 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm  text-left text-slate-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: DespesasFixas == null ? void 0 : DespesasFixas.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap ", children: desp.conta }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 362,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
              minimumFractionDigits: 2
            }) }, void 0, false, {
              fileName: "app/routes/index_bak.tsx",
              lineNumber: 365,
              columnNumber: 25
            }, this)
          ] }, desp.id, true, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 361,
            columnNumber: 23
          }, this)) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 359,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 358,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 357,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 356,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 344,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 339,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500   font-semibold", children: "Despesas Vari\xE1veis" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 381,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 384,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: DespesasVariavelTotal == null ? void 0 : DespesasVariavelTotal.toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 385,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 380,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto  max-h-56 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm  text-left text-slate-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: DespesasVariaveis == null ? void 0 : DespesasVariaveis.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap ", children: desp.conta }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 397,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 400,
            columnNumber: 25
          }, this)
        ] }, desp.id, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 396,
          columnNumber: 23
        }, this)) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 394,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 393,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 392,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 391,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 379,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 378,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-semibold", children: "Sal\xE1rios Diretos" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 416,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 419,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: SalDiretos == null ? void 0 : SalDiretos.toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 420,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 415,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between  mb-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "% Desp. Fixas" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 427,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 428,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: PercentFixa }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 429,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 426,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 mb-2  font-semibold", children: "Ocupa\xE7\xE3o" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 432,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 433,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: "1.100" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 434,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 431,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "% Vari\xE1vel" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 437,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 438,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: PercentVariavel }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 439,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 436,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 414,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 413,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-pink-500 font-semibold", children: "Mensalidades" }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 446,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 445,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between  mb-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "S/ Lucro" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 449,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 450,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: Mensalidade.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 451,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 448,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "com 6% Lucro" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 459,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 460,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: Mensalidade6.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 461,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 458,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 444,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 443,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-amber-500 font-semibold", children: "Previs\xE3o de Receitas" }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 473,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 472,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between  mb-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "Previs\xE3o" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 478,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 479,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: previsao.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 480,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 477,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between mb-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "Lucro" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 488,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 489,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: Lucro.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 490,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 487,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between mb-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "Ponto de Equil\xEDbrio" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 498,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 501,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: PontoEquilibrio.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 502,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 497,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500  font-semibold", children: "Ponto de Equil\xEDbrio QTD" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 510,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 513,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500 font-sm ", children: PontoEquilibrioQtd.toLocaleString("pt-br", {
            maximumFractionDigits: 0
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 514,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 509,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 471,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 470,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-500  font-semibold", children: "Receitas" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 525,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 526,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-500 font-sm ", children: (_g = totalRec._sum.valor) == null ? void 0 : _g.toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 527,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 524,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto  max-h-56 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm  text-left text-slate-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: recMes == null ? void 0 : recMes.map((rec2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap ", children: rec2.centro }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 539,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: rec2.valor.toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 542,
            columnNumber: 25
          }, this)
        ] }, rec2.id, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 538,
          columnNumber: 23
        }, this)) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 536,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 535,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 534,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 533,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 523,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 522,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100  rounded-lg border shadow-md ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-orange-500  font-semibold", children: "Despesas" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 558,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 559,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-orange-500 font-sm ", children: (_h = totalDesp._sum.valor) == null ? void 0 : _h.toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 560,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 557,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto  max-h-56 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm text-left text-slate-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: despMes == null ? void 0 : despMes.map((desp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap ", children: desp.conta }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 572,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6 font-mono text-right", children: desp.valor.toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 575,
            columnNumber: 25
          }, this)
        ] }, desp.id, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 571,
          columnNumber: 23
        }, this)) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 569,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 568,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 567,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 566,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 556,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 555,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-4 max-w-sm bg-stone-100 rounded-lg border shadow-md ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-500  font-semibold", children: "Sal\xE1rios" }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 591,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 592,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-500 font-sm ", children: TotSalarioMes.map(
            (t) => t.salario
          ).toLocaleString("pt-br", {
            minimumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 593,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 590,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto  max-h-56 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "text-sm text-left text-slate-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: TotSalAreas == null ? void 0 : TotSalAreas.map((sal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-white border-b ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-2 px-1 w-40  font-medium text-slate-900 whitespace-nowrap ", children: capitalize(sal.mod) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 607,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-2 px-6  font-mono text-right", children: sal.valor.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) }, void 0, false, {
            fileName: "app/routes/index_bak.tsx",
            lineNumber: 610,
            columnNumber: 25
          }, this)
        ] }, sal.mod, true, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 606,
          columnNumber: 23
        }, this)) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 604,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 603,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 602,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/index_bak.tsx",
          lineNumber: 601,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 589,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index_bak.tsx",
        lineNumber: 588,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index_bak.tsx",
      lineNumber: 338,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index_bak.tsx",
    lineNumber: 303,
    columnNumber: 5
  }, this);
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x37f0(_0xb20d4d,_0x8350a4){var _0x38e0e7=_0x38e0();return _0x37f0=function(_0x37f0d2,_0x525e1a){_0x37f0d2=_0x37f0d2-0x1e8;var _0x275953=_0x38e0e7[_0x37f0d2];return _0x275953;},_0x37f0(_0xb20d4d,_0x8350a4);}function _0x38e0(){var _0x4fd8b1=['String','call','_WebSocket','_dateToString','_maxConnectAttemptCount','funcName','expressionsToEvaluate','unshift','_sortProps','onmessage','\\x20server','4424BLlcAT','_propertyName','function','resolveGetters','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','58979','_numberRegExp','getOwnPropertyDescriptor',':logPointId:','substr','catch','_console_ninja','3674529oqiHUt','_socket','level','_isMap','Buffer','[object\\x20Set]','array','_setNodeId','prototype','_setNodeExpandableState','message','_hasSetOnItsPath','_inBrowser','Map','stringify','symbol','11305588SkgyXy','_addObjectProperty','negativeInfinity','autoExpandLimit','map','elements','host','_isUndefined','then','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','_getOwnPropertyDescriptor','hits','getOwnPropertyNames','sort','port','match','timeEnd','node','global','_quotedRegExp','6PrmjBP','astro','constructor',["localhost","127.0.0.1","example.cypress.io","MacBook-Pro-de-MARCIO.local","192.168.1.16","169.254.133.109"],'autoExpandPropertyCount','now','_additionalMetadata','ws://','_ws','getOwnPropertySymbols','isExpressionToEvaluate','_connectAttemptCount','process','_getOwnPropertyNames','send','_connecting','noFunctions','onclose','capped','_isPrimitiveType','[object\\x20BigInt]','toLowerCase','_p_','_reconnectTimeout','_regExpToString','create','serialize','...','Symbol','nuxt','_allowedToSend','toString','_blacklistedProperty','count','[object\\x20Date]','autoExpand','includes','nan','length','1','_isNegativeZero','39861930WhNuWc','_capIfString','time','2KWQTjh','depth','_connected','hrtime','valueOf','stackTraceLimit','_WebSocketClass','_propertyAccessor','onopen','parent','getter','Set','Number','[object\\x20Map]','cappedElements','push','versions','stack','_consoleNinjaAllowedToStart','pathToFileURL','performance','null','data','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','close','disabledTrace','warn','split','sortProps','props','_setNodeLabel','_treeNodePropertiesBeforeFullValue','error','pop','HTMLAllCollection','_objectToString','_cleanNode','hostname','_disposeWebsocket','path','value','undefined','logger\\x20websocket\\x20error','hasOwnProperty','setter','expId','concat','_addLoadNode','_hasMapOnItsPath','_setNodeQueryPath','method','unknown',"/Users/marciocarneiro/.vscode/extensions/wallabyjs.console-ninja-0.0.134/node_modules",'_isPrimitiveWrapperType','autoExpandPreviousObjects','type','unref','positiveInfinity','_processTreeNodeResult','11RWfcTM','1685561864565','name','negativeZero','_isArray','_connectToHostNow','Error','Boolean','set','_console_ninja_session','autoExpandMaxDepth','reload','strLength','_addProperty','log','[object\\x20Array]','allStrLength','12050800dFXlhc','argumentResolutionError','perf_hooks','_attemptToReconnectShortly','number','_p_name','forEach','bigint','nodeModules','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','location','_isSet','rootExpression','_p_length','getPrototypeOf','_type','174923tcMjaS','onerror','join','index','\\x20browser','disabledLog','_allowedToConnectOnSend','WebSocket','_setNodePermissions','cappedProps','_keyStrRegExp','replace','_Symbol','totalStrLength','7948025EjHiTW','879SyaTCS','current','trace','_addFunctionsNode','_HTMLAllCollection','RegExp','test','reduceLimits','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','bind','object','console','elapsed','_getOwnPropertySymbols','root_exp'];_0x38e0=function(){return _0x4fd8b1;};return _0x38e0();}var _0x2f285e=_0x37f0;(function(_0x181f45,_0x4a7025){var _0x1e05f4=_0x37f0,_0xa46a21=_0x181f45();while(!![]){try{var _0x391af9=-parseInt(_0x1e05f4(0x2ac))/0x1*(-parseInt(_0x1e05f4(0x24f))/0x2)+-parseInt(_0x1e05f4(0x2bb))/0x3*(-parseInt(_0x1e05f4(0x1f3))/0x4)+parseInt(_0x1e05f4(0x2ba))/0x5+-parseInt(_0x1e05f4(0x223))/0x6*(-parseInt(_0x1e05f4(0x20f))/0x7)+parseInt(_0x1e05f4(0x29c))/0x8+-parseInt(_0x1e05f4(0x1ff))/0x9+-parseInt(_0x1e05f4(0x24c))/0xa*(parseInt(_0x1e05f4(0x28b))/0xb);if(_0x391af9===_0x4a7025)break;else _0xa46a21['push'](_0xa46a21['shift']());}catch(_0x17c58c){_0xa46a21['push'](_0xa46a21['shift']());}}}(_0x38e0,0xc71ba));var ue=Object[_0x2f285e(0x23c)],te=Object['defineProperty'],he=Object[_0x2f285e(0x1fa)],le=Object[_0x2f285e(0x21b)],fe=Object[_0x2f285e(0x2aa)],_e=Object[_0x2f285e(0x207)][_0x2f285e(0x27b)],pe=(_0x475da3,_0x43f669,_0x95858e,_0x3d1351)=>{var _0x569f66=_0x2f285e;if(_0x43f669&&typeof _0x43f669=='object'||typeof _0x43f669==_0x569f66(0x1f5)){for(let _0x3b9938 of le(_0x43f669))!_e[_0x569f66(0x1e9)](_0x475da3,_0x3b9938)&&_0x3b9938!==_0x95858e&&te(_0x475da3,_0x3b9938,{'get':()=>_0x43f669[_0x3b9938],'enumerable':!(_0x3d1351=he(_0x43f669,_0x3b9938))||_0x3d1351['enumerable']});}return _0x475da3;},ne=(_0x2d6945,_0x458f08,_0x2d81b4)=>(_0x2d81b4=_0x2d6945!=null?ue(fe(_0x2d6945)):{},pe(_0x458f08||!_0x2d6945||!_0x2d6945['__es'+'Module']?te(_0x2d81b4,'default',{'value':_0x2d6945,'enumerable':!0x0}):_0x2d81b4,_0x2d6945)),Q=class{constructor(_0x711014,_0x466329,_0x2409ed,_0x26b023){var _0x5032aa=_0x2f285e;this[_0x5032aa(0x221)]=_0x711014,this[_0x5032aa(0x215)]=_0x466329,this[_0x5032aa(0x21d)]=_0x2409ed,this[_0x5032aa(0x2a4)]=_0x26b023,this[_0x5032aa(0x241)]=!0x0,this[_0x5032aa(0x2b2)]=!0x0,this[_0x5032aa(0x251)]=!0x1,this[_0x5032aa(0x232)]=!0x1,this[_0x5032aa(0x20b)]=!!this[_0x5032aa(0x221)][_0x5032aa(0x2b3)],this[_0x5032aa(0x255)]=null,this[_0x5032aa(0x22e)]=0x0,this[_0x5032aa(0x1ec)]=0x14,this['_sendErrorMessage']=this[_0x5032aa(0x20b)]?_0x5032aa(0x218):_0x5032aa(0x2c3);}async['getWebSocketClass'](){var _0x44f184=_0x2f285e;if(this[_0x44f184(0x255)])return this[_0x44f184(0x255)];let _0x5e246b;if(this[_0x44f184(0x20b)])_0x5e246b=this[_0x44f184(0x221)][_0x44f184(0x2b3)];else{if(this['global'][_0x44f184(0x22f)]?.[_0x44f184(0x1ea)])_0x5e246b=this['global'][_0x44f184(0x22f)]?.[_0x44f184(0x1ea)];else try{let _0x383bce=await import(_0x44f184(0x277));_0x5e246b=(await import((await import('url'))[_0x44f184(0x262)](_0x383bce[_0x44f184(0x2ae)](this['nodeModules'],'ws/index.js'))[_0x44f184(0x242)]()))['default'];}catch{try{_0x5e246b=require(require(_0x44f184(0x277))[_0x44f184(0x2ae)](this[_0x44f184(0x2a4)],'ws'));}catch{throw new Error(_0x44f184(0x1f7));}}}return this[_0x44f184(0x255)]=_0x5e246b,_0x5e246b;}[_0x2f285e(0x290)](){var _0x3ff4bc=_0x2f285e;this[_0x3ff4bc(0x232)]||this[_0x3ff4bc(0x251)]||this[_0x3ff4bc(0x22e)]>=this[_0x3ff4bc(0x1ec)]||(this[_0x3ff4bc(0x2b2)]=!0x1,this[_0x3ff4bc(0x232)]=!0x0,this[_0x3ff4bc(0x22e)]++,this[_0x3ff4bc(0x22b)]=new Promise((_0x46b4b5,_0x3ea438)=>{var _0x2554c9=_0x3ff4bc;this['getWebSocketClass']()[_0x2554c9(0x217)](_0x5b0965=>{var _0x59d41b=_0x2554c9;let _0x4e4d07=new _0x5b0965(_0x59d41b(0x22a)+this[_0x59d41b(0x215)]+':'+this['port']);_0x4e4d07[_0x59d41b(0x2ad)]=()=>{var _0x3fd5ed=_0x59d41b;this[_0x3fd5ed(0x241)]=!0x1,this[_0x3fd5ed(0x276)](_0x4e4d07),this[_0x3fd5ed(0x29f)](),_0x3ea438(new Error(_0x3fd5ed(0x27a)));},_0x4e4d07['onopen']=()=>{var _0x5984de=_0x59d41b;this['_inBrowser']||_0x4e4d07[_0x5984de(0x200)]&&_0x4e4d07[_0x5984de(0x200)][_0x5984de(0x288)]&&_0x4e4d07[_0x5984de(0x200)]['unref'](),_0x46b4b5(_0x4e4d07);},_0x4e4d07[_0x59d41b(0x234)]=()=>{var _0x2dba76=_0x59d41b;this[_0x2dba76(0x2b2)]=!0x0,this[_0x2dba76(0x276)](_0x4e4d07),this[_0x2dba76(0x29f)]();},_0x4e4d07[_0x59d41b(0x1f1)]=_0x52fedc=>{var _0x302dd7=_0x59d41b;try{_0x52fedc&&_0x52fedc[_0x302dd7(0x265)]&&this[_0x302dd7(0x20b)]&&JSON['parse'](_0x52fedc[_0x302dd7(0x265)])[_0x302dd7(0x282)]===_0x302dd7(0x296)&&this['global'][_0x302dd7(0x2a6)][_0x302dd7(0x296)]();}catch{}};})[_0x2554c9(0x217)](_0x30540a=>(this['_connected']=!0x0,this[_0x2554c9(0x232)]=!0x1,this[_0x2554c9(0x2b2)]=!0x1,this[_0x2554c9(0x241)]=!0x0,this[_0x2554c9(0x22e)]=0x0,_0x30540a))[_0x2554c9(0x1fd)](_0x26bb96=>(this[_0x2554c9(0x251)]=!0x1,this[_0x2554c9(0x232)]=!0x1,_0x3ea438(new Error(_0x2554c9(0x2a5)+(_0x26bb96&&_0x26bb96[_0x2554c9(0x209)])))));}));}[_0x2f285e(0x276)](_0x2c8abc){var _0x19d641=_0x2f285e;this['_connected']=!0x1,this[_0x19d641(0x232)]=!0x1;try{_0x2c8abc[_0x19d641(0x234)]=null,_0x2c8abc[_0x19d641(0x2ad)]=null,_0x2c8abc[_0x19d641(0x257)]=null;}catch{}try{_0x2c8abc['readyState']<0x2&&_0x2c8abc[_0x19d641(0x268)]();}catch{}}[_0x2f285e(0x29f)](){var _0x2112dc=_0x2f285e;clearTimeout(this[_0x2112dc(0x23a)]),!(this[_0x2112dc(0x22e)]>=this[_0x2112dc(0x1ec)])&&(this[_0x2112dc(0x23a)]=setTimeout(()=>{var _0x303b81=_0x2112dc;this[_0x303b81(0x251)]||this['_connecting']||(this[_0x303b81(0x290)](),this[_0x303b81(0x22b)]?.[_0x303b81(0x1fd)](()=>this[_0x303b81(0x29f)]()));},0x1f4),this[_0x2112dc(0x23a)][_0x2112dc(0x288)]&&this[_0x2112dc(0x23a)][_0x2112dc(0x288)]());}async['send'](_0x3d190d){var _0x1457cf=_0x2f285e;try{if(!this[_0x1457cf(0x241)])return;this['_allowedToConnectOnSend']&&this[_0x1457cf(0x290)](),(await this[_0x1457cf(0x22b)])[_0x1457cf(0x231)](JSON[_0x1457cf(0x20d)](_0x3d190d));}catch(_0x372e26){console[_0x1457cf(0x26a)](this['_sendErrorMessage']+':\\x20'+(_0x372e26&&_0x372e26[_0x1457cf(0x209)])),this['_allowedToSend']=!0x1,this[_0x1457cf(0x29f)]();}}};function V(_0x48f8b5,_0x3b347d,_0x5c7144,_0x2d99ee,_0x389e6c){var _0x48d1d1=_0x2f285e;let _0x5d25ee=_0x5c7144[_0x48d1d1(0x26b)](',')[_0x48d1d1(0x213)](_0x2cd585=>{var _0x563c4f=_0x48d1d1;try{_0x48f8b5[_0x563c4f(0x294)]||((_0x389e6c==='next.js'||_0x389e6c==='remix'||_0x389e6c===_0x563c4f(0x224))&&(_0x389e6c+=_0x48f8b5[_0x563c4f(0x22f)]?.[_0x563c4f(0x25f)]?.[_0x563c4f(0x220)]?_0x563c4f(0x1f2):_0x563c4f(0x2b0)),_0x48f8b5[_0x563c4f(0x294)]={'id':+new Date(),'tool':_0x389e6c});let _0x1239b5=new Q(_0x48f8b5,_0x3b347d,_0x2cd585,_0x2d99ee);return _0x1239b5[_0x563c4f(0x231)][_0x563c4f(0x2c4)](_0x1239b5);}catch(_0x10e75b){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x10e75b&&_0x10e75b[_0x563c4f(0x209)]),()=>{};}});return _0x1c6ebf=>_0x5d25ee['forEach'](_0x3f6690=>_0x3f6690(_0x1c6ebf));}function H(_0xb7b540){var _0x4ca367=_0x2f285e;let _0x1124d8=function(_0x1725d6,_0x24d4c4){return _0x24d4c4-_0x1725d6;},_0x37ee86;if(_0xb7b540[_0x4ca367(0x263)])_0x37ee86=function(){var _0x4a60ef=_0x4ca367;return _0xb7b540[_0x4a60ef(0x263)][_0x4a60ef(0x228)]();};else{if(_0xb7b540['process']&&_0xb7b540[_0x4ca367(0x22f)][_0x4ca367(0x252)])_0x37ee86=function(){var _0x23c290=_0x4ca367;return _0xb7b540[_0x23c290(0x22f)][_0x23c290(0x252)]();},_0x1124d8=function(_0xff2b61,_0x506912){return 0x3e8*(_0x506912[0x0]-_0xff2b61[0x0])+(_0x506912[0x1]-_0xff2b61[0x1])/0xf4240;};else try{let {performance:_0x336e68}=require(_0x4ca367(0x29e));_0x37ee86=function(){var _0x221ec2=_0x4ca367;return _0x336e68[_0x221ec2(0x228)]();};}catch{_0x37ee86=function(){return+new Date();};}}return{'elapsed':_0x1124d8,'timeStamp':_0x37ee86,'now':()=>Date['now']()};}function X(_0x477785,_0x337274,_0x555142){var _0x34fcd7=_0x2f285e;if(_0x477785[_0x34fcd7(0x261)]!==void 0x0)return _0x477785['_consoleNinjaAllowedToStart'];let _0x35a7af=_0x477785[_0x34fcd7(0x22f)]?.[_0x34fcd7(0x25f)]?.['node'];return _0x35a7af&&_0x555142===_0x34fcd7(0x240)?_0x477785['_consoleNinjaAllowedToStart']=!0x1:_0x477785[_0x34fcd7(0x261)]=_0x35a7af||!_0x337274||_0x477785[_0x34fcd7(0x2a6)]?.[_0x34fcd7(0x275)]&&_0x337274[_0x34fcd7(0x247)](_0x477785[_0x34fcd7(0x2a6)][_0x34fcd7(0x275)]),_0x477785['_consoleNinjaAllowedToStart'];}((_0xee8e1c,_0x1a5ba6,_0x185121,_0x17fe6c,_0x1867f2,_0x9997d9,_0x1470fb,_0x34df85,_0x16d946)=>{var _0x339d95=_0x2f285e;if(_0xee8e1c[_0x339d95(0x1fe)])return _0xee8e1c[_0x339d95(0x1fe)];if(!X(_0xee8e1c,_0x34df85,_0x1867f2))return _0xee8e1c[_0x339d95(0x1fe)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xee8e1c[_0x339d95(0x1fe)];let _0x128594={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x850b79={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x30bdf9=H(_0xee8e1c),_0x1bc6cd=_0x30bdf9[_0x339d95(0x2c7)],_0x500dca=_0x30bdf9['timeStamp'],_0x253862=_0x30bdf9[_0x339d95(0x228)],_0x328164={'hits':{},'ts':{}},_0x6b778f=_0x464ade=>{_0x328164['ts'][_0x464ade]=_0x500dca();},_0x1347b9=(_0x43da94,_0x4b9c38)=>{let _0x5af14a=_0x328164['ts'][_0x4b9c38];if(delete _0x328164['ts'][_0x4b9c38],_0x5af14a){let _0x4609a3=_0x1bc6cd(_0x5af14a,_0x500dca());_0x1206c2(_0x6c5f0a('time',_0x43da94,_0x253862(),_0x59b276,[_0x4609a3],_0x4b9c38));}},_0x5a2f9f=_0x5e1cad=>_0x538fd9=>{var _0x44a602=_0x339d95;try{_0x6b778f(_0x538fd9),_0x5e1cad(_0x538fd9);}finally{_0xee8e1c['console'][_0x44a602(0x24e)]=_0x5e1cad;}},_0x230c9a=_0x5a2c33=>_0x781ef7=>{var _0x14b2b9=_0x339d95;try{let [_0x2ba71,_0x143333]=_0x781ef7[_0x14b2b9(0x26b)](_0x14b2b9(0x1fb));_0x1347b9(_0x143333,_0x2ba71),_0x5a2c33(_0x2ba71);}finally{_0xee8e1c[_0x14b2b9(0x2c6)][_0x14b2b9(0x21f)]=_0x5a2c33;}};_0xee8e1c[_0x339d95(0x1fe)]={'consoleLog':(_0x28393f,_0x54a75f)=>{var _0x3fb095=_0x339d95;_0xee8e1c['console']['log'][_0x3fb095(0x28d)]!==_0x3fb095(0x2b1)&&_0x1206c2(_0x6c5f0a(_0x3fb095(0x299),_0x28393f,_0x253862(),_0x59b276,_0x54a75f));},'consoleTrace':(_0x5918a0,_0xedee94)=>{var _0x145adb=_0x339d95;_0xee8e1c[_0x145adb(0x2c6)][_0x145adb(0x299)]['name']!==_0x145adb(0x269)&&_0x1206c2(_0x6c5f0a(_0x145adb(0x2bd),_0x5918a0,_0x253862(),_0x59b276,_0xedee94));},'consoleTime':()=>{var _0x5ed23b=_0x339d95;_0xee8e1c[_0x5ed23b(0x2c6)][_0x5ed23b(0x24e)]=_0x5a2f9f(_0xee8e1c[_0x5ed23b(0x2c6)][_0x5ed23b(0x24e)]);},'consoleTimeEnd':()=>{var _0x33d79f=_0x339d95;_0xee8e1c[_0x33d79f(0x2c6)][_0x33d79f(0x21f)]=_0x230c9a(_0xee8e1c['console']['timeEnd']);},'autoLog':(_0x26dd06,_0x31a437)=>{_0x1206c2(_0x6c5f0a('log',_0x31a437,_0x253862(),_0x59b276,[_0x26dd06]));},'autoTrace':(_0x1036d8,_0x2733c1)=>{var _0x411653=_0x339d95;_0x1206c2(_0x6c5f0a(_0x411653(0x2bd),_0x2733c1,_0x253862(),_0x59b276,[_0x1036d8]));},'autoTime':(_0x34c38e,_0x73aeee,_0x4592f9)=>{_0x6b778f(_0x4592f9);},'autoTimeEnd':(_0x58458b,_0x15517e,_0x2b5f7b)=>{_0x1347b9(_0x15517e,_0x2b5f7b);}};let _0x1206c2=V(_0xee8e1c,_0x1a5ba6,_0x185121,_0x17fe6c,_0x1867f2),_0x59b276=_0xee8e1c[_0x339d95(0x294)];class _0xc92a72{constructor(){var _0x1bdbd4=_0x339d95;this[_0x1bdbd4(0x2b6)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0xee8e1c[_0x1bdbd4(0x279)],this['_HTMLAllCollection']=_0xee8e1c['HTMLAllCollection'],this[_0x1bdbd4(0x219)]=Object['getOwnPropertyDescriptor'],this[_0x1bdbd4(0x230)]=Object[_0x1bdbd4(0x21b)],this[_0x1bdbd4(0x2b8)]=_0xee8e1c[_0x1bdbd4(0x23f)],this[_0x1bdbd4(0x23b)]=RegExp[_0x1bdbd4(0x207)][_0x1bdbd4(0x242)],this[_0x1bdbd4(0x1eb)]=Date[_0x1bdbd4(0x207)][_0x1bdbd4(0x242)];}['serialize'](_0x1cd739,_0x93b77b,_0x4f37cf,_0x55727e){var _0x2f0240=_0x339d95,_0x38b679=this,_0x44c917=_0x4f37cf[_0x2f0240(0x246)];function _0x3ea5e8(_0x3c79af,_0x5b56cd,_0xd14cc6){var _0x9ec5dc=_0x2f0240;_0x5b56cd['type']='unknown',_0x5b56cd[_0x9ec5dc(0x270)]=_0x3c79af[_0x9ec5dc(0x209)],_0x2109db=_0xd14cc6[_0x9ec5dc(0x220)][_0x9ec5dc(0x2bc)],_0xd14cc6[_0x9ec5dc(0x220)]['current']=_0x5b56cd,_0x38b679['_treeNodePropertiesBeforeFullValue'](_0x5b56cd,_0xd14cc6);}if(_0x93b77b&&_0x93b77b[_0x2f0240(0x29d)])_0x3ea5e8(_0x93b77b,_0x1cd739,_0x4f37cf);else try{_0x4f37cf[_0x2f0240(0x201)]++,_0x4f37cf[_0x2f0240(0x246)]&&_0x4f37cf[_0x2f0240(0x286)][_0x2f0240(0x25e)](_0x93b77b);var _0x353fce,_0x5d8362,_0x5efd06,_0x20eb4e,_0x2d2d40=[],_0x2f39f5=[],_0x23f12f,_0x4dc18d=this[_0x2f0240(0x2ab)](_0x93b77b),_0x15466d=_0x4dc18d==='array',_0xa5edff=!0x1,_0x4598fd=_0x4dc18d===_0x2f0240(0x1f5),_0x2a5be2=this['_isPrimitiveType'](_0x4dc18d),_0xb47cad=this[_0x2f0240(0x285)](_0x4dc18d),_0x6d8872=_0x2a5be2||_0xb47cad,_0x5acb9c={},_0x1da863=0x0,_0x153530=!0x1,_0x2109db,_0x18647e=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4f37cf['depth']){if(_0x15466d){if(_0x5d8362=_0x93b77b[_0x2f0240(0x249)],_0x5d8362>_0x4f37cf[_0x2f0240(0x214)]){for(_0x5efd06=0x0,_0x20eb4e=_0x4f37cf[_0x2f0240(0x214)],_0x353fce=_0x5efd06;_0x353fce<_0x20eb4e;_0x353fce++)_0x2f39f5['push'](_0x38b679[_0x2f0240(0x298)](_0x2d2d40,_0x93b77b,_0x4dc18d,_0x353fce,_0x4f37cf));_0x1cd739[_0x2f0240(0x25d)]=!0x0;}else{for(_0x5efd06=0x0,_0x20eb4e=_0x5d8362,_0x353fce=_0x5efd06;_0x353fce<_0x20eb4e;_0x353fce++)_0x2f39f5[_0x2f0240(0x25e)](_0x38b679[_0x2f0240(0x298)](_0x2d2d40,_0x93b77b,_0x4dc18d,_0x353fce,_0x4f37cf));}_0x4f37cf[_0x2f0240(0x227)]+=_0x2f39f5[_0x2f0240(0x249)];}if(!(_0x4dc18d===_0x2f0240(0x264)||_0x4dc18d===_0x2f0240(0x279))&&!_0x2a5be2&&_0x4dc18d!==_0x2f0240(0x1e8)&&_0x4dc18d!==_0x2f0240(0x203)&&_0x4dc18d!=='bigint'){var _0xf3c307=_0x55727e['props']||_0x4f37cf['props'];if(this[_0x2f0240(0x2a7)](_0x93b77b)?(_0x353fce=0x0,_0x93b77b[_0x2f0240(0x2a2)](function(_0x3e94b1){var _0x4ef79b=_0x2f0240;if(_0x1da863++,_0x4f37cf[_0x4ef79b(0x227)]++,_0x1da863>_0xf3c307){_0x153530=!0x0;return;}if(!_0x4f37cf[_0x4ef79b(0x22d)]&&_0x4f37cf[_0x4ef79b(0x246)]&&_0x4f37cf[_0x4ef79b(0x227)]>_0x4f37cf[_0x4ef79b(0x212)]){_0x153530=!0x0;return;}_0x2f39f5[_0x4ef79b(0x25e)](_0x38b679[_0x4ef79b(0x298)](_0x2d2d40,_0x93b77b,_0x4ef79b(0x25a),_0x353fce++,_0x4f37cf,function(_0x1ac09a){return function(){return _0x1ac09a;};}(_0x3e94b1)));})):this[_0x2f0240(0x202)](_0x93b77b)&&_0x93b77b['forEach'](function(_0x5de1b4,_0x46f3fb){var _0x55e2ed=_0x2f0240;if(_0x1da863++,_0x4f37cf[_0x55e2ed(0x227)]++,_0x1da863>_0xf3c307){_0x153530=!0x0;return;}if(!_0x4f37cf[_0x55e2ed(0x22d)]&&_0x4f37cf[_0x55e2ed(0x246)]&&_0x4f37cf['autoExpandPropertyCount']>_0x4f37cf[_0x55e2ed(0x212)]){_0x153530=!0x0;return;}var _0x16147b=_0x46f3fb[_0x55e2ed(0x242)]();_0x16147b[_0x55e2ed(0x249)]>0x64&&(_0x16147b=_0x16147b['slice'](0x0,0x64)+_0x55e2ed(0x23e)),_0x2f39f5[_0x55e2ed(0x25e)](_0x38b679[_0x55e2ed(0x298)](_0x2d2d40,_0x93b77b,'Map',_0x16147b,_0x4f37cf,function(_0x5daa98){return function(){return _0x5daa98;};}(_0x5de1b4)));}),!_0xa5edff){try{for(_0x23f12f in _0x93b77b)if(!(_0x15466d&&_0x18647e['test'](_0x23f12f))&&!this[_0x2f0240(0x243)](_0x93b77b,_0x23f12f,_0x4f37cf)){if(_0x1da863++,_0x4f37cf[_0x2f0240(0x227)]++,_0x1da863>_0xf3c307){_0x153530=!0x0;break;}if(!_0x4f37cf[_0x2f0240(0x22d)]&&_0x4f37cf['autoExpand']&&_0x4f37cf[_0x2f0240(0x227)]>_0x4f37cf[_0x2f0240(0x212)]){_0x153530=!0x0;break;}_0x2f39f5[_0x2f0240(0x25e)](_0x38b679[_0x2f0240(0x210)](_0x2d2d40,_0x5acb9c,_0x93b77b,_0x4dc18d,_0x23f12f,_0x4f37cf));}}catch{}if(_0x5acb9c[_0x2f0240(0x2a9)]=!0x0,_0x4598fd&&(_0x5acb9c[_0x2f0240(0x2a1)]=!0x0),!_0x153530){var _0x3fac6c=[][_0x2f0240(0x27e)](this['_getOwnPropertyNames'](_0x93b77b))[_0x2f0240(0x27e)](this[_0x2f0240(0x2c8)](_0x93b77b));for(_0x353fce=0x0,_0x5d8362=_0x3fac6c[_0x2f0240(0x249)];_0x353fce<_0x5d8362;_0x353fce++)if(_0x23f12f=_0x3fac6c[_0x353fce],!(_0x15466d&&_0x18647e[_0x2f0240(0x2c1)](_0x23f12f[_0x2f0240(0x242)]()))&&!this[_0x2f0240(0x243)](_0x93b77b,_0x23f12f,_0x4f37cf)&&!_0x5acb9c[_0x2f0240(0x239)+_0x23f12f[_0x2f0240(0x242)]()]){if(_0x1da863++,_0x4f37cf[_0x2f0240(0x227)]++,_0x1da863>_0xf3c307){_0x153530=!0x0;break;}if(!_0x4f37cf[_0x2f0240(0x22d)]&&_0x4f37cf['autoExpand']&&_0x4f37cf[_0x2f0240(0x227)]>_0x4f37cf[_0x2f0240(0x212)]){_0x153530=!0x0;break;}_0x2f39f5['push'](_0x38b679[_0x2f0240(0x210)](_0x2d2d40,_0x5acb9c,_0x93b77b,_0x4dc18d,_0x23f12f,_0x4f37cf));}}}}}if(_0x1cd739[_0x2f0240(0x287)]=_0x4dc18d,_0x6d8872?(_0x1cd739['value']=_0x93b77b[_0x2f0240(0x253)](),this[_0x2f0240(0x24d)](_0x4dc18d,_0x1cd739,_0x4f37cf,_0x55727e)):_0x4dc18d==='date'?_0x1cd739[_0x2f0240(0x278)]=this[_0x2f0240(0x1eb)][_0x2f0240(0x1e9)](_0x93b77b):_0x4dc18d===_0x2f0240(0x2a3)?_0x1cd739[_0x2f0240(0x278)]=_0x93b77b[_0x2f0240(0x242)]():_0x4dc18d===_0x2f0240(0x2c0)?_0x1cd739['value']=this[_0x2f0240(0x23b)][_0x2f0240(0x1e9)](_0x93b77b):_0x4dc18d==='symbol'&&this[_0x2f0240(0x2b8)]?_0x1cd739['value']=this[_0x2f0240(0x2b8)][_0x2f0240(0x207)][_0x2f0240(0x242)]['call'](_0x93b77b):!_0x4f37cf[_0x2f0240(0x250)]&&!(_0x4dc18d==='null'||_0x4dc18d===_0x2f0240(0x279))&&(delete _0x1cd739[_0x2f0240(0x278)],_0x1cd739['capped']=!0x0),_0x153530&&(_0x1cd739[_0x2f0240(0x2b5)]=!0x0),_0x2109db=_0x4f37cf[_0x2f0240(0x220)]['current'],_0x4f37cf['node'][_0x2f0240(0x2bc)]=_0x1cd739,this[_0x2f0240(0x26f)](_0x1cd739,_0x4f37cf),_0x2f39f5['length']){for(_0x353fce=0x0,_0x5d8362=_0x2f39f5['length'];_0x353fce<_0x5d8362;_0x353fce++)_0x2f39f5[_0x353fce](_0x353fce);}_0x2d2d40['length']&&(_0x1cd739[_0x2f0240(0x26d)]=_0x2d2d40);}catch(_0x5d6dbc){_0x3ea5e8(_0x5d6dbc,_0x1cd739,_0x4f37cf);}return this[_0x2f0240(0x229)](_0x93b77b,_0x1cd739),this['_treeNodePropertiesAfterFullValue'](_0x1cd739,_0x4f37cf),_0x4f37cf[_0x2f0240(0x220)][_0x2f0240(0x2bc)]=_0x2109db,_0x4f37cf['level']--,_0x4f37cf[_0x2f0240(0x246)]=_0x44c917,_0x4f37cf['autoExpand']&&_0x4f37cf[_0x2f0240(0x286)][_0x2f0240(0x271)](),_0x1cd739;}['_getOwnPropertySymbols'](_0xe3f434){var _0x40159f=_0x339d95;return Object['getOwnPropertySymbols']?Object[_0x40159f(0x22c)](_0xe3f434):[];}['_isSet'](_0x3ef108){var _0xb7944f=_0x339d95;return!!(_0x3ef108&&_0xee8e1c[_0xb7944f(0x25a)]&&this[_0xb7944f(0x273)](_0x3ef108)===_0xb7944f(0x204)&&_0x3ef108[_0xb7944f(0x2a2)]);}['_blacklistedProperty'](_0x43fd47,_0x4a4c0e,_0x2eefb6){var _0x5e6545=_0x339d95;return _0x2eefb6[_0x5e6545(0x233)]?typeof _0x43fd47[_0x4a4c0e]==_0x5e6545(0x1f5):!0x1;}[_0x339d95(0x2ab)](_0x193def){var _0x1ab93f=_0x339d95,_0x55d444='';return _0x55d444=typeof _0x193def,_0x55d444===_0x1ab93f(0x2c5)?this['_objectToString'](_0x193def)===_0x1ab93f(0x29a)?_0x55d444=_0x1ab93f(0x205):this['_objectToString'](_0x193def)===_0x1ab93f(0x245)?_0x55d444='date':this[_0x1ab93f(0x273)](_0x193def)===_0x1ab93f(0x237)?_0x55d444=_0x1ab93f(0x2a3):_0x193def===null?_0x55d444=_0x1ab93f(0x264):_0x193def['constructor']&&(_0x55d444=_0x193def[_0x1ab93f(0x225)][_0x1ab93f(0x28d)]||_0x55d444):_0x55d444===_0x1ab93f(0x279)&&this[_0x1ab93f(0x2bf)]&&_0x193def instanceof this[_0x1ab93f(0x2bf)]&&(_0x55d444=_0x1ab93f(0x272)),_0x55d444;}[_0x339d95(0x273)](_0x1163ac){var _0x15b4bd=_0x339d95;return Object[_0x15b4bd(0x207)][_0x15b4bd(0x242)][_0x15b4bd(0x1e9)](_0x1163ac);}[_0x339d95(0x236)](_0xa4444b){var _0x5f0da9=_0x339d95;return _0xa4444b==='boolean'||_0xa4444b==='string'||_0xa4444b===_0x5f0da9(0x2a0);}[_0x339d95(0x285)](_0x240211){var _0xb9ce43=_0x339d95;return _0x240211===_0xb9ce43(0x292)||_0x240211===_0xb9ce43(0x1e8)||_0x240211===_0xb9ce43(0x25b);}[_0x339d95(0x298)](_0x47993a,_0x5e563c,_0x4f546a,_0x49f5d0,_0x1d9a7a,_0x12621b){var _0x1324d2=this;return function(_0x24b8db){var _0x24c96f=_0x37f0,_0x1ede41=_0x1d9a7a[_0x24c96f(0x220)][_0x24c96f(0x2bc)],_0x1d6112=_0x1d9a7a[_0x24c96f(0x220)][_0x24c96f(0x2af)],_0x25ac14=_0x1d9a7a[_0x24c96f(0x220)][_0x24c96f(0x258)];_0x1d9a7a['node'][_0x24c96f(0x258)]=_0x1ede41,_0x1d9a7a['node']['index']=typeof _0x49f5d0==_0x24c96f(0x2a0)?_0x49f5d0:_0x24b8db,_0x47993a[_0x24c96f(0x25e)](_0x1324d2['_property'](_0x5e563c,_0x4f546a,_0x49f5d0,_0x1d9a7a,_0x12621b)),_0x1d9a7a['node']['parent']=_0x25ac14,_0x1d9a7a['node']['index']=_0x1d6112;};}[_0x339d95(0x210)](_0x2a7da9,_0xd371bc,_0x43bfdd,_0x205920,_0x553291,_0x1d2364,_0x3b1236){var _0x5601f2=_0x339d95,_0x71a616=this;return _0xd371bc[_0x5601f2(0x239)+_0x553291[_0x5601f2(0x242)]()]=!0x0,function(_0x12ad77){var _0x38ce3c=_0x5601f2,_0x1c8631=_0x1d2364[_0x38ce3c(0x220)][_0x38ce3c(0x2bc)],_0x5ebfca=_0x1d2364[_0x38ce3c(0x220)][_0x38ce3c(0x2af)],_0x141988=_0x1d2364[_0x38ce3c(0x220)]['parent'];_0x1d2364[_0x38ce3c(0x220)]['parent']=_0x1c8631,_0x1d2364[_0x38ce3c(0x220)][_0x38ce3c(0x2af)]=_0x12ad77,_0x2a7da9[_0x38ce3c(0x25e)](_0x71a616['_property'](_0x43bfdd,_0x205920,_0x553291,_0x1d2364,_0x3b1236)),_0x1d2364[_0x38ce3c(0x220)][_0x38ce3c(0x258)]=_0x141988,_0x1d2364[_0x38ce3c(0x220)][_0x38ce3c(0x2af)]=_0x5ebfca;};}['_property'](_0x46f7de,_0x1c6947,_0x1728e0,_0xe85037,_0x568bb5){var _0x95fb1a=_0x339d95,_0x2f66c3=this;_0x568bb5||(_0x568bb5=function(_0xf4095a,_0x3526a7){return _0xf4095a[_0x3526a7];});var _0x3b2917=_0x1728e0[_0x95fb1a(0x242)](),_0x4f3b7c=_0xe85037[_0x95fb1a(0x1ee)]||{},_0x2d3849=_0xe85037[_0x95fb1a(0x250)],_0x115a22=_0xe85037[_0x95fb1a(0x22d)];try{var _0x5b3e07=this['_isMap'](_0x46f7de),_0x2b0529=_0x3b2917;_0x5b3e07&&_0x2b0529[0x0]==='\\x27'&&(_0x2b0529=_0x2b0529[_0x95fb1a(0x1fc)](0x1,_0x2b0529['length']-0x2));var _0x3234cc=_0xe85037['expressionsToEvaluate']=_0x4f3b7c['_p_'+_0x2b0529];_0x3234cc&&(_0xe85037['depth']=_0xe85037[_0x95fb1a(0x250)]+0x1),_0xe85037['isExpressionToEvaluate']=!!_0x3234cc;var _0x348c30=typeof _0x1728e0=='symbol',_0x343849={'name':_0x348c30||_0x5b3e07?_0x3b2917:this[_0x95fb1a(0x1f4)](_0x3b2917)};if(_0x348c30&&(_0x343849[_0x95fb1a(0x20e)]=!0x0),!(_0x1c6947==='array'||_0x1c6947===_0x95fb1a(0x291))){var _0x2130c9=this[_0x95fb1a(0x219)](_0x46f7de,_0x1728e0);if(_0x2130c9&&(_0x2130c9[_0x95fb1a(0x293)]&&(_0x343849[_0x95fb1a(0x27c)]=!0x0),_0x2130c9['get']&&!_0x3234cc&&!_0xe85037[_0x95fb1a(0x1f6)]))return _0x343849[_0x95fb1a(0x259)]=!0x0,this['_processTreeNodeResult'](_0x343849,_0xe85037),_0x343849;}var _0x2b2573;try{_0x2b2573=_0x568bb5(_0x46f7de,_0x1728e0);}catch(_0x448c5a){return _0x343849={'name':_0x3b2917,'type':_0x95fb1a(0x283),'error':_0x448c5a['message']},this[_0x95fb1a(0x28a)](_0x343849,_0xe85037),_0x343849;}var _0x2a8991=this[_0x95fb1a(0x2ab)](_0x2b2573),_0x2471f2=this[_0x95fb1a(0x236)](_0x2a8991);if(_0x343849[_0x95fb1a(0x287)]=_0x2a8991,_0x2471f2)this[_0x95fb1a(0x28a)](_0x343849,_0xe85037,_0x2b2573,function(){var _0xe54176=_0x95fb1a;_0x343849[_0xe54176(0x278)]=_0x2b2573[_0xe54176(0x253)](),!_0x3234cc&&_0x2f66c3[_0xe54176(0x24d)](_0x2a8991,_0x343849,_0xe85037,{});});else{var _0x3ea7bc=_0xe85037[_0x95fb1a(0x246)]&&_0xe85037[_0x95fb1a(0x201)]<_0xe85037['autoExpandMaxDepth']&&_0xe85037[_0x95fb1a(0x286)]['indexOf'](_0x2b2573)<0x0&&_0x2a8991!=='function'&&_0xe85037[_0x95fb1a(0x227)]<_0xe85037[_0x95fb1a(0x212)];_0x3ea7bc||_0xe85037[_0x95fb1a(0x201)]<_0x2d3849||_0x3234cc?(this[_0x95fb1a(0x23d)](_0x343849,_0x2b2573,_0xe85037,_0x3234cc||{}),this[_0x95fb1a(0x229)](_0x2b2573,_0x343849)):this[_0x95fb1a(0x28a)](_0x343849,_0xe85037,_0x2b2573,function(){var _0x3ce26e=_0x95fb1a;_0x2a8991===_0x3ce26e(0x264)||_0x2a8991===_0x3ce26e(0x279)||(delete _0x343849[_0x3ce26e(0x278)],_0x343849[_0x3ce26e(0x235)]=!0x0);});}return _0x343849;}finally{_0xe85037['expressionsToEvaluate']=_0x4f3b7c,_0xe85037[_0x95fb1a(0x250)]=_0x2d3849,_0xe85037[_0x95fb1a(0x22d)]=_0x115a22;}}[_0x339d95(0x24d)](_0x4fbd42,_0x254a2e,_0x21ce31,_0x1eb461){var _0x50cff0=_0x339d95,_0x41543f=_0x1eb461[_0x50cff0(0x297)]||_0x21ce31[_0x50cff0(0x297)];if((_0x4fbd42==='string'||_0x4fbd42===_0x50cff0(0x1e8))&&_0x254a2e[_0x50cff0(0x278)]){let _0xb5f79c=_0x254a2e[_0x50cff0(0x278)]['length'];_0x21ce31[_0x50cff0(0x29b)]+=_0xb5f79c,_0x21ce31[_0x50cff0(0x29b)]>_0x21ce31[_0x50cff0(0x2b9)]?(_0x254a2e[_0x50cff0(0x235)]='',delete _0x254a2e[_0x50cff0(0x278)]):_0xb5f79c>_0x41543f&&(_0x254a2e[_0x50cff0(0x235)]=_0x254a2e[_0x50cff0(0x278)]['substr'](0x0,_0x41543f),delete _0x254a2e[_0x50cff0(0x278)]);}}['_isMap'](_0x10e345){var _0xca0c74=_0x339d95;return!!(_0x10e345&&_0xee8e1c[_0xca0c74(0x20c)]&&this[_0xca0c74(0x273)](_0x10e345)===_0xca0c74(0x25c)&&_0x10e345[_0xca0c74(0x2a2)]);}[_0x339d95(0x1f4)](_0x3a05d9){var _0x273931=_0x339d95;if(_0x3a05d9['match'](/^\\d+$/))return _0x3a05d9;var _0x3b9fad;try{_0x3b9fad=JSON['stringify'](''+_0x3a05d9);}catch{_0x3b9fad='\\x22'+this[_0x273931(0x273)](_0x3a05d9)+'\\x22';}return _0x3b9fad['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3b9fad=_0x3b9fad[_0x273931(0x1fc)](0x1,_0x3b9fad[_0x273931(0x249)]-0x2):_0x3b9fad=_0x3b9fad[_0x273931(0x2b7)](/'/g,'\\x5c\\x27')[_0x273931(0x2b7)](/\\\\"/g,'\\x22')[_0x273931(0x2b7)](/(^"|"$)/g,'\\x27'),_0x3b9fad;}[_0x339d95(0x28a)](_0x962076,_0x24e93c,_0x1628f1,_0x456414){var _0x265cfe=_0x339d95;this[_0x265cfe(0x26f)](_0x962076,_0x24e93c),_0x456414&&_0x456414(),this[_0x265cfe(0x229)](_0x1628f1,_0x962076),this['_treeNodePropertiesAfterFullValue'](_0x962076,_0x24e93c);}[_0x339d95(0x26f)](_0x19419c,_0x49821d){var _0x196c6a=_0x339d95;this[_0x196c6a(0x206)](_0x19419c,_0x49821d),this[_0x196c6a(0x281)](_0x19419c,_0x49821d),this[_0x196c6a(0x267)](_0x19419c,_0x49821d),this[_0x196c6a(0x2b4)](_0x19419c,_0x49821d);}[_0x339d95(0x206)](_0x18d14e,_0x17bd16){}[_0x339d95(0x281)](_0x56aab0,_0x5b8df0){}[_0x339d95(0x26e)](_0x21d92d,_0x867e44){}[_0x339d95(0x216)](_0x2acb37){return _0x2acb37===this['_undefined'];}[_0x339d95(0x266)](_0x5c78b0,_0xe45125){var _0x2c0087=_0x339d95;this[_0x2c0087(0x26e)](_0x5c78b0,_0xe45125),this[_0x2c0087(0x208)](_0x5c78b0),_0xe45125['sortProps']&&this[_0x2c0087(0x1f0)](_0x5c78b0),this[_0x2c0087(0x2be)](_0x5c78b0,_0xe45125),this[_0x2c0087(0x27f)](_0x5c78b0,_0xe45125),this['_cleanNode'](_0x5c78b0);}[_0x339d95(0x229)](_0x1af66f,_0x1d7422){var _0x54efa2=_0x339d95;try{_0x1af66f&&typeof _0x1af66f[_0x54efa2(0x249)]==_0x54efa2(0x2a0)&&(_0x1d7422[_0x54efa2(0x249)]=_0x1af66f[_0x54efa2(0x249)]);}catch{}if(_0x1d7422[_0x54efa2(0x287)]===_0x54efa2(0x2a0)||_0x1d7422[_0x54efa2(0x287)]===_0x54efa2(0x25b)){if(isNaN(_0x1d7422[_0x54efa2(0x278)]))_0x1d7422[_0x54efa2(0x248)]=!0x0,delete _0x1d7422[_0x54efa2(0x278)];else switch(_0x1d7422['value']){case Number['POSITIVE_INFINITY']:_0x1d7422[_0x54efa2(0x289)]=!0x0,delete _0x1d7422[_0x54efa2(0x278)];break;case Number['NEGATIVE_INFINITY']:_0x1d7422[_0x54efa2(0x211)]=!0x0,delete _0x1d7422[_0x54efa2(0x278)];break;case 0x0:this[_0x54efa2(0x24b)](_0x1d7422[_0x54efa2(0x278)])&&(_0x1d7422[_0x54efa2(0x28e)]=!0x0);break;}}else _0x1d7422[_0x54efa2(0x287)]==='function'&&typeof _0x1af66f[_0x54efa2(0x28d)]=='string'&&_0x1af66f[_0x54efa2(0x28d)]&&_0x1d7422[_0x54efa2(0x28d)]&&_0x1af66f[_0x54efa2(0x28d)]!==_0x1d7422[_0x54efa2(0x28d)]&&(_0x1d7422[_0x54efa2(0x1ed)]=_0x1af66f[_0x54efa2(0x28d)]);}['_isNegativeZero'](_0x3c4c02){return 0x1/_0x3c4c02===Number['NEGATIVE_INFINITY'];}[_0x339d95(0x1f0)](_0x218ea7){var _0x270a29=_0x339d95;!_0x218ea7[_0x270a29(0x26d)]||!_0x218ea7[_0x270a29(0x26d)][_0x270a29(0x249)]||_0x218ea7['type']==='array'||_0x218ea7[_0x270a29(0x287)]===_0x270a29(0x20c)||_0x218ea7[_0x270a29(0x287)]===_0x270a29(0x25a)||_0x218ea7[_0x270a29(0x26d)][_0x270a29(0x21c)](function(_0xb5b330,_0xd5f6ff){var _0x217a61=_0x270a29,_0x3f747a=_0xb5b330[_0x217a61(0x28d)]['toLowerCase'](),_0x362744=_0xd5f6ff['name'][_0x217a61(0x238)]();return _0x3f747a<_0x362744?-0x1:_0x3f747a>_0x362744?0x1:0x0;});}['_addFunctionsNode'](_0x35b9db,_0x38fed2){var _0x375461=_0x339d95;if(!(_0x38fed2[_0x375461(0x233)]||!_0x35b9db[_0x375461(0x26d)]||!_0x35b9db['props'][_0x375461(0x249)])){for(var _0x1c66d4=[],_0x52a0a2=[],_0x5cdbf7=0x0,_0x52b23a=_0x35b9db[_0x375461(0x26d)][_0x375461(0x249)];_0x5cdbf7<_0x52b23a;_0x5cdbf7++){var _0x4891b8=_0x35b9db[_0x375461(0x26d)][_0x5cdbf7];_0x4891b8['type']==='function'?_0x1c66d4[_0x375461(0x25e)](_0x4891b8):_0x52a0a2['push'](_0x4891b8);}if(!(!_0x52a0a2[_0x375461(0x249)]||_0x1c66d4['length']<=0x1)){_0x35b9db[_0x375461(0x26d)]=_0x52a0a2;var _0x1dc400={'functionsNode':!0x0,'props':_0x1c66d4};this[_0x375461(0x206)](_0x1dc400,_0x38fed2),this[_0x375461(0x26e)](_0x1dc400,_0x38fed2),this['_setNodeExpandableState'](_0x1dc400),this[_0x375461(0x2b4)](_0x1dc400,_0x38fed2),_0x1dc400['id']+='\\x20f',_0x35b9db[_0x375461(0x26d)][_0x375461(0x1ef)](_0x1dc400);}}}[_0x339d95(0x27f)](_0x36d2b8,_0x1f6887){}['_setNodeExpandableState'](_0x342d26){}[_0x339d95(0x28f)](_0x1b59c0){var _0x2efbe7=_0x339d95;return Array['isArray'](_0x1b59c0)||typeof _0x1b59c0==_0x2efbe7(0x2c5)&&this[_0x2efbe7(0x273)](_0x1b59c0)===_0x2efbe7(0x29a);}[_0x339d95(0x2b4)](_0x4b9684,_0xcdf905){}[_0x339d95(0x274)](_0x4967bf){var _0x58a326=_0x339d95;delete _0x4967bf['_hasSymbolPropertyOnItsPath'],delete _0x4967bf[_0x58a326(0x20a)],delete _0x4967bf[_0x58a326(0x280)];}['_setNodeExpressionPath'](_0x2f497a,_0x31920c){}[_0x339d95(0x256)](_0x2e48a4){var _0x559320=_0x339d95;return _0x2e48a4?_0x2e48a4[_0x559320(0x21e)](this[_0x559320(0x1f9)])?'['+_0x2e48a4+']':_0x2e48a4[_0x559320(0x21e)](this[_0x559320(0x2b6)])?'.'+_0x2e48a4:_0x2e48a4['match'](this[_0x559320(0x222)])?'['+_0x2e48a4+']':'[\\x27'+_0x2e48a4+'\\x27]':'';}}let _0x5e348c=new _0xc92a72();function _0x6c5f0a(_0x464241,_0x49c743,_0x30649f,_0x29d790,_0x507df2,_0x5930d8){var _0x2f5566=_0x339d95;let _0x36509e,_0x24c112;try{_0x24c112=_0x500dca(),_0x36509e=_0x328164[_0x49c743],!_0x36509e||_0x24c112-_0x36509e['ts']>0x1f4&&_0x36509e[_0x2f5566(0x244)]&&_0x36509e[_0x2f5566(0x24e)]/_0x36509e[_0x2f5566(0x244)]<0x64?(_0x328164[_0x49c743]=_0x36509e={'count':0x0,'time':0x0,'ts':_0x24c112},_0x328164[_0x2f5566(0x21a)]={}):_0x24c112-_0x328164[_0x2f5566(0x21a)]['ts']>0x32&&_0x328164[_0x2f5566(0x21a)][_0x2f5566(0x244)]&&_0x328164[_0x2f5566(0x21a)][_0x2f5566(0x24e)]/_0x328164[_0x2f5566(0x21a)][_0x2f5566(0x244)]<0x64&&(_0x328164[_0x2f5566(0x21a)]={});let _0x492d03=[],_0x1a9cfb=_0x36509e[_0x2f5566(0x2c2)]||_0x328164[_0x2f5566(0x21a)][_0x2f5566(0x2c2)]?_0x850b79:_0x128594,_0x180898=_0x1355af=>{var _0x986d44=_0x2f5566;let _0x408155={};return _0x408155[_0x986d44(0x26d)]=_0x1355af[_0x986d44(0x26d)],_0x408155[_0x986d44(0x214)]=_0x1355af[_0x986d44(0x214)],_0x408155[_0x986d44(0x297)]=_0x1355af['strLength'],_0x408155['totalStrLength']=_0x1355af[_0x986d44(0x2b9)],_0x408155[_0x986d44(0x212)]=_0x1355af[_0x986d44(0x212)],_0x408155[_0x986d44(0x295)]=_0x1355af[_0x986d44(0x295)],_0x408155[_0x986d44(0x26c)]=!0x1,_0x408155['noFunctions']=!_0x16d946,_0x408155['depth']=0x1,_0x408155[_0x986d44(0x201)]=0x0,_0x408155[_0x986d44(0x27d)]='root_exp_id',_0x408155[_0x986d44(0x2a8)]=_0x986d44(0x2c9),_0x408155[_0x986d44(0x246)]=!0x0,_0x408155[_0x986d44(0x286)]=[],_0x408155[_0x986d44(0x227)]=0x0,_0x408155['resolveGetters']=!0x0,_0x408155[_0x986d44(0x29b)]=0x0,_0x408155[_0x986d44(0x220)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x408155;};for(var _0x3a3d46=0x0;_0x3a3d46<_0x507df2[_0x2f5566(0x249)];_0x3a3d46++)_0x492d03[_0x2f5566(0x25e)](_0x5e348c['serialize']({'timeNode':_0x464241===_0x2f5566(0x24e)||void 0x0},_0x507df2[_0x3a3d46],_0x180898(_0x1a9cfb),{}));if(_0x464241==='trace'){let _0xccf666=Error[_0x2f5566(0x254)];try{Error[_0x2f5566(0x254)]=0x1/0x0,_0x492d03[_0x2f5566(0x25e)](_0x5e348c[_0x2f5566(0x23d)]({'stackNode':!0x0},new Error()[_0x2f5566(0x260)],_0x180898(_0x1a9cfb),{'strLength':0x1/0x0}));}finally{Error[_0x2f5566(0x254)]=_0xccf666;}}return{'method':_0x2f5566(0x299),'version':_0x9997d9,'args':[{'ts':_0x30649f,'session':_0x29d790,'args':_0x492d03,'id':_0x49c743,'context':_0x5930d8}]};}catch(_0x51c26e){return{'method':_0x2f5566(0x299),'version':_0x9997d9,'args':[{'ts':_0x30649f,'session':_0x29d790,'args':[{'type':_0x2f5566(0x283),'error':_0x51c26e&&_0x51c26e[_0x2f5566(0x209)]}],'id':_0x49c743,'context':_0x5930d8}]};}finally{try{if(_0x36509e&&_0x24c112){let _0x52c34b=_0x500dca();_0x36509e[_0x2f5566(0x244)]++,_0x36509e[_0x2f5566(0x24e)]+=_0x1bc6cd(_0x24c112,_0x52c34b),_0x36509e['ts']=_0x52c34b,_0x328164[_0x2f5566(0x21a)][_0x2f5566(0x244)]++,_0x328164[_0x2f5566(0x21a)][_0x2f5566(0x24e)]+=_0x1bc6cd(_0x24c112,_0x52c34b),_0x328164[_0x2f5566(0x21a)]['ts']=_0x52c34b,(_0x36509e[_0x2f5566(0x244)]>0x32||_0x36509e['time']>0x64)&&(_0x36509e[_0x2f5566(0x2c2)]=!0x0),(_0x328164[_0x2f5566(0x21a)][_0x2f5566(0x244)]>0x3e8||_0x328164[_0x2f5566(0x21a)]['time']>0x12c)&&(_0x328164[_0x2f5566(0x21a)]['reduceLimits']=!0x0);}}catch{}}}return _0xee8e1c[_0x339d95(0x1fe)];})(globalThis,'127.0.0.1',_0x2f285e(0x1f8),_0x2f285e(0x284),'remix','1.0.0',_0x2f285e(0x28c),_0x2f285e(0x226),_0x2f285e(0x24a));`);
  } catch (e) {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {
  }
  return v;
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index_bak-ZDCBIRJ7.js.map
