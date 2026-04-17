import React from "react";
import Title from "../single/text/Title";
import Regular from "../single/text/Regular";

const Result = ({ finalResult }) => {
  const sortedResult = [...finalResult].sort(
    (a, b) => b.nilaiFinal - a.nilaiFinal,
  );

  console.log(sortedResult);

  return (
    <section className="pb-10">
      <Title teks={"Hasil Penilaian"} />
      <Regular teks={"Hasil akhir semua penilaian peserta"} />
      <div className="py-4 w-full">
        <table className="w-full text-center  overflow-hidden rounded-lg text-white text-shadow-md">
          <thead>
            <tr className="bg-primary/80 text-lg">
              <th className="py-2 px-3 border-e-2 border-black max-w-fit lg:max-w-1">No</th>
              <th className="py-2 px-3">Nama</th>
              <th className="py-2 px-3">Nilai</th>
            </tr>
          </thead>
          <tbody>
            {sortedResult.map((i, j) => (
              <tr key={i.id} className="even:bg-primary/80 odd:bg-primary/50 font-semibold">
                <td className="py-2 border-e-2 border-black max-w-fit lg:max-w-1">{j+1}</td>
                <td className="text-left py-2 px-3">{i.nama}</td>
                <td className="py-2 px-3">{i.nilaiFinal}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Result;
