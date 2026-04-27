import React from "react";
import Title from "../single/text/Title";
import Regular from "../single/text/Regular";
import writeXlsxFile from "write-excel-file/browser";
import Btn from "../single/Btn";

const Result = ({ finalResult, type }) => {
  const sortedResult = [...finalResult].sort(
    (a, b) => b.nilaiFinal - a.nilaiFinal,
  );

  let index = 1;

  const cat =
    type == "mikrotik"
      ? {
          crimping: {
            label: "Crimping & Internet",
          },
          hotspot: {
            label: "Hotspot & Custom Portal",
          },
          profile: {
            label: "User Profile & Limit",
          },
          walled: {
            label: "Walled Garden",
          },
          firewall: {
            label: "Firewall Block Ping",
          },
          presentasi: {
            label: "Presentasi (%)",
          },
          kebersihan: {
            label: "Kebersihan (%)",
          },
          pengurangan: {
            label: "Pengurangan Poin",
          },
          tambahan: {
            label: "Tambahan Poin",
          },
        }
      : type == "website"
        ? {
            design: {
              label: "Design UI/UX",
            },
            fungsi: {
              label: "Fungsional & Responsivitas",
            },
            konten: {
              label: "Kesesuaian Konten Tema",
            },
            presentasi: {
              label: "Presentasi Hasil Karya",
            },
            pengurangan: {
              label: "Pengurangan Poin",
            },
            tambahan: {
              label: "Tambahan Poin",
            },
          }
        : {
            tema: {
              label: "Kesesuaian Tema",
            },
            Typograpy: {
              label: "Kerapihan Typograpy",
            },
            ide: {
              label: "Ide/Kreativitas Desaign",
            },
            warna: {
              label: "Pemilihan Warna",
            },
            pengurangan: {
              label: "Pengurangan Poin",
            },
            tambahan: {
              label: "Tambahan Poin",
            },
          };

  const nKey = Object.keys(finalResult[0]?.nilai).map((k) => ({
    dKey : k,
    labels : cat[k].label
  }));

  const Schema = [
    {
      column: "No.",
      type: Number,
      value: (data) => index++,
      align: "center",
      fontSize: 12,
      borderColor: "#000000",
      borderStyle: "thin",
    },
    {
      column: "Nama Peserta",
      type: String,
      value: (data) => data.nama,
      width: 20,
      align: "left",
      fontSize: 12,
      borderColor: "#000000",
      borderStyle: "thin",
    },
    ...nKey.map((k) => ({
      column: k.labels,
      type: Number,
      value: (data) => data.nilai[k.dKey],
      width: 30,
      align: "center",
      fontSize: 12,
      borderColor: "#000000",
      borderStyle: "thin",
    })),
    {
      column: "Total",
      type: Number,
      value: (data) => data.nilaiFinal,
      align: "center",
      fontSize: 12,
      borderColor: "#000000",
      borderStyle: "thin",
    },
  ];

  const handleExport = async () => {
    try {
      await writeXlsxFile(sortedResult, {
        schema: Schema,
        getHeaderStyle: (cSchema) => ({
          backgroundColor: "#2F75B5",
          textColor: "#FFFFFF",
          fontWeight: "bold",
          fontSize: 14,
          align: cSchema.align,
          borderColor: "#000000",
          borderStyle: "thin",
        }),
        stickyRowsCount: 1,
        fileName: `${type.toUpperCase()} Final Result.xlsx`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="pb-10">
      <Title teks={"Hasil Penilaian"} />
      <Regular teks={"Hasil akhir semua penilaian peserta"} />
      <div className="py-4 w-full">
        <table className="w-full text-center overflow-hidden rounded-lg text-base">
          <thead>
            <tr className="bg-blue-400 text-lg">
              <th className="py-2 px-3 max-w-1 border-e border-base">No</th>
              <th className="py-2 px-3 ">Nama Peserta</th>
              <th className="py-2 px-3">Nilai</th>
            </tr>
          </thead>
          <tbody>
            {sortedResult.map((i, j) => (
              <tr
                key={i.id}
                className="even:bg-blue-400 odd:bg-blue-300 font-semibold"
              >
                <td className="py-2 px-3 border-e border-base text-center">
                  {j + 1}
                </td>
                <td className="text-left py-2 px-3">{i.nama}</td>
                <td className="py-2 px-3">{i.nilaiFinal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Btn click={handleExport} teks={"Export to XLSX"} />
    </section>
  );
};

export default Result;
