import React, { useEffect, useState } from "react";
import Title from "../single/text/Title";
import Regular from "../single/text/Regular";
import Btn from "../single/Btn";
import InputNilai from "./InputNilai";

const Hitung = ({ peserta, setPeserta, setStep, setFinalResult, type }) => {

  useEffect(() => {
    const p = [0.15, 0.05];

    const hitung = peserta.map((i) => {
      let h = 0;
      Object.values(i.nilai).forEach((j, k) => {
        type == 'mikrotik' ? (k >= 5 && k <= 6 ? (h += j * p[k - 5]) : k == 7 ? (h -= j) : (h += j)) : k == 4 ? h -= j : h += j
      });
      return {
        ...i,
        nilaiFinal: Number(h.toFixed(2)),
      };
    });

    setFinalResult(hitung);
  }, [peserta]);

  const handleLanjut = () => {
    setStep(3);
  };

  return (
    <section className="py-4 flex flex-col gap-3 pb-10">
      <Title teks={"Penilaian Keseluruhan"} />
      <Regular teks={"Input seluruh nilai dari peserta yang terdaftar."} />
      <div className="w-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        <InputNilai peserta={peserta} setPeserta={setPeserta} type={type}/>
      </div>
      <Btn teks={"Hitung & Lihat Hasil"} click={handleLanjut} />
    </section>
  );
};

export default Hitung;
