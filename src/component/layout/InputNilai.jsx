import React, { useState } from "react";
import Subtitle from "../single/text/Subtitle";
import Regular from "../single/text/Regular";
import Question from "../single/text/Question";

const InputNilai = ({ peserta, setPeserta, type }) => {
  const cat =
    type == "mikrotik"
      ? {
          crimping: {
            label: "Crimping & Internet",
            type: "chi",
            default: 10,
          },
          hotspot: {
            label: "Hotspot & Custom Portal",
            type: "chi",
            default: 25,
          },
          profile: {
            label: "User Profile & Limit",
            type: "chi",
            default: 20,
          },
          walled: {
            label: "Walled Garden",
            type: "chi",
            default: 10,
          },
          firewall: {
            label: "Firewall Block Ping",
            type: "chi",
            default: 15,
          },
          presentasi: {
            label: "Presentasi",
            type: "in",
            max: 100,
          },
          kebersihan: {
            label: "Kebersihan",
            type: "in",
            max: 100,
          },
          pengurangan: {
            label: "Pengurangan Poin",
            type: "in",
            max: 100,
          },
          tambahan: {
            label: "Tambahan Poin",
            type: "in",
            max: 100,
          },
        }
      : type == "website"
        ? {
            design: {
              label: "Design UI/UX",
              type: "chi",
              default: 35,
            },
            fungsi: {
              label: "Fungsional & Responsivitas",
              type: "chi",
              default: 30,
            },
            konten: {
              label: "Kesesuaian Konten Tema",
              type: "chi",
              default: 25,
            },
            presentasi: {
              label: "Presentasi Hasil Karya",
              type: "chi",
              default: 10,
            },
            pengurangan: {
              label: "Pengurangan Poin",
              type: "in",
              max: 100,
            },
            tambahan: {
              label: "Tambahan Poin",
              type: "in",
              max: 100,
            },
          }
        : {
            tema: {
              label: "Kesesuaian Tema",
              type: "chi",
              default: 35,
            },
            Typograpy: {
              label: "Kerapihan Typograpy",
              type: "chi",
              default: 25,
            },
            ide: {
              label: "Ide/Kreativitas Desaign",
              type: "chi",
              default: 30,
            },
            warna: {
              label: "Pemilihan Warna",
              type: "chi",
              default: 10,
            },
            pengurangan: {
              label: "Pengurangan Poin",
              type: "in",
              max: 100,
            },
            tambahan: {
              label: "Tambahan Poin",
              type: "in",
              max: 100,
            },
          };

  const handleInput = (idPeserta, keyCat, value) => {
    setPeserta((prev) =>
      prev.map((p) => {
        if (p.id == idPeserta) {
          return {
            ...p,
            nilai: {
              ...p.nilai,
              [keyCat]: Number(value),
            },
          };
        }
        return p;
      }),
    );
  };

  return (
    <>
      {peserta.map((p, i) => (
        <div
          className="p-5 flex flex-col bg-slate-800 rounded-xl mb-3 [&>div]:py-1 [&>div]:even:bg-slate-900 [&>div]:px-1 [&>div]:odd:bg-base"
          key={p.id}
        >
          <Subtitle teks={p.nama} />
          <Regular teks={`ID: ${p.id}`} color={"text-white"} mb={4} />

          {Object.keys(p.nilai).map((n, m) => {
            const dataNilai = p.nilai[n];

            if (cat[n].type == "chi")
              return (
                <div
                  className="w-full first-of-type:rounded-t-lg flex justify-between items-center"
                  key={m}
                >
                  <div>
                    <input
                      type="checkbox"
                      className="mr-1.5"
                      onChange={(e) => {
                        e.target.checked
                          ? handleInput(p.id, n, cat[n].default)
                          : handleInput(p.id, n, 0);
                      }}
                      checked={dataNilai > 0}
                    />
                    <Question teks={cat[n].label} />
                  </div>
                  <input
                    type="number"
                    className="bg-slate-700 focus:outline-none rounded py-1 px-2 text-neutral text-center w-14"
                    value={dataNilai > 0 ? dataNilai : ""}
                    max={cat[n].default}
                    onChange={(e) =>
                      e.target.value > cat[n].default
                        ? handleInput(p.id, n, cat[n].default)
                        : handleInput(p.id, n, e.target.value)
                    }
                  />
                </div>
              );

            if (cat[n].type == "in")
              return (
                <div
                  className="w-full last-of-type:rounded-b-lg flex justify-between items-center"
                  key={m}
                >
                  <Question teks={cat[n].label} />
                  <input
                    type="number"
                    className="bg-slate-700 focus:outline-none rounded py-1 px-2 text-neutral text-center w-14"
                    value={dataNilai > 0 ? dataNilai : ""}
                    onChange={(e) =>
                      e.target.value > cat[n].max
                        ? handleInput(p.id, n, cat[n].max)
                        : handleInput(p.id, n, e.target.value)
                    }
                  />
                </div>
              );
          })}
        </div>
      ))}
    </>
  );
};

export default InputNilai;
