import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { Navbar } from "~/components/Navbar";
import {
  groupReceitasAgrupadas,
  receitasPorCentroData,
  receitasPorData,
} from "~/utils/receitas.server";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import _ from "lodash";
import { despesasPorData } from "~/utils/despesas.server";

export const loader = async ({ request }: LoaderArgs) => {
  const dataAtual = format(new Date(), "MMM-yyyy", { locale: pt });
  const url = new URL(request.url);
  const par = url.searchParams.get("rec");
  let parametro = par ? par : dataAtual;
  const totReceitas = await groupReceitasAgrupadas(String(parametro));
  const ReceitasM = await receitasPorCentroData(String(parametro));
  const ReceitasMJun = await receitasPorCentroData(String("jun-2023"));
  const recDataun = await receitasPorData();
  const desData = await despesasPorData();

  const paseDate = (s: any) => {
    let [d, m, y] = s.split(/\D/);
    return new Date(Date.UTC(y, m - 1, d));
  };

  const recData = recDataun.sort(function (a, b) {
    var titleA = a.data.split("/").reverse().join(""),
      titleB = b.data.split("/").reverse().join("");
    return titleA > titleB ? 1 : titleA < titleB ? -1 : 0;
  });

  return { totReceitas, ReceitasM, ReceitasMJun, recDataun, desData };
};

export const action = async ({ request }: ActionArgs) => {
  return null;
};

export default function Fluxo() {
  const { totReceitas, ReceitasM, ReceitasMJun, recDataun, desData } =
    useLoaderData<typeof loader>();

  function invert(d: any) {
    const a = d.toString().slice(0, 10).replace(/-/g, "/");
    return a.substr(8, 2) + "/" + a.substr(5, 2) + "/" + a.substr(0, 4);
  }

  // const teste = desData.map((m) =>
  //   m.data.toString().slice(0, 10).replace(/-/g, "/")
  // );

  const dias = [
    "01/05/2023",
    "02/05/2023",
    "03/05/2023",
    "04/05/2023",
    "05/05/2023",
    "06/05/2023",
    "07/05/2023",
    "08/05/2023",
    "09/05/2023",
    "10/05/2023",
    "11/05/2023",
    "12/05/2023",
    "13/05/2023",
    "14/05/2023",
    "15/05/2023",
    "16/05/2023",
    "17/05/2023",
    "18/05/2023",
    "19/05/2023",
    "20/05/2023",
    "21/05/2023",
    "22/05/2023",
    "23/05/2023",
    "24/05/2023",
    "25/05/2023",
    "26/05/2023",
    "27/05/2023",
    "28/05/2023",
    "29/05/2023",
    "30/05/2023",
    "31/05/2023",
  ];

  return (
    <>
      <Navbar />

      <div className="flex container mx-auto flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th className="text-center">Receitas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {dias.map((d: any, index: number) => (
                      <td
                        key={index}
                        scope="col"
                        className="px-3 font-normal text-gray-500 text-center py-4 ">
                        {d.substr(0, 5)}

                        <div className="mt-2 text-base font-semibold divide-y divide-dashed divide-gray-600">
                          {recDataun
                            .filter((r: any) => r.data === d)
                            .map((data) =>
                              data._sum.valor?.toLocaleString("pt-br", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            )}
                        </div>
                        <div className="mt-2 text-red-500 text-base font-semibold divide-y divide-dashed divide-gray-600">
                          {desData
                            .filter((r: any) => invert(r.data) === d)
                            .map((data) =>
                              (data._sum.valor * -1).toLocaleString("pt-br", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            )}
                          {/* {desData
                            .filter((r: any) => invert(r.data) === d)
                            .map((data) => data._sum.valor * -1)} */}
                        </div>

                        {/* recDataun
                            .filter((r: any) => r.data === d)
                            .map((data) => data._sum.valor) +
                            (d.substr(0, 2) - 1 < 10
                              ? "0" + (d.substr(0, 2) - 1)
                              : d.substr(0, 2) - 1) +
                            d.substr(2, 10)} */}

                        <div>
                          {recDataun
                            .filter((r: any) => r.data === d)
                            .map((data) => data._sum.valor) +
                            recDataun
                              .filter(
                                (r: any) =>
                                  r.data ===
                                  (d.substr(0, 2) - 1 < 10
                                    ? "0" + (d.substr(0, 2) - 1)
                                    : d.substr(0, 2) - 1) +
                                    d.substr(2, 10)
                              )
                              .map((data) => data._sum.valor)}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center ">
        <table className=" w-32 text-sm text-left mt-4 text-gray-500 border-l-2 border-r-2 border-slate-100">
          <tbody>
            {recData.map((rec: any, index: number) => (
              <td
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  scope="row"
                  className="px-6 py-2  font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {rec.data}
                </td>
                <tr className="px-6 font-mono  text-right ">
                  {rec._sum.valor.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </tr>
              </td>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div>ERRO</div>;
  }
  return <div />;
}
