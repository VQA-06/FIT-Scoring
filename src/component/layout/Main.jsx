import React, { useState } from "react";
import Tambah from "./Tambah";
import Hitung from "./Hitung";
import Result from "./Result";

const Main = ({ setPeserta, setStep, step, peserta, type, setType }) => {
  const [finalResult, setFinalResult] = useState([]); 

  return (
    <main className="px-4 md:px-12 min-h-full">
      {step == 1 && <Tambah setPeserta={setPeserta} setStep={setStep} setType={setType} type={type} />}
      {step == 2 && <Hitung peserta={peserta} setPeserta={setPeserta} setStep={setStep} setFinalResult={setFinalResult} type={type} />}
      {step == 3 && <Result finalResult={finalResult} type={type}/>}
    </main>
  );
};

export default Main;
