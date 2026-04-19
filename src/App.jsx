import { useState } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Header from "./component/layout/Header";
import Main from "./component/layout/Main";

function App() {
  const [step, setStep] = useState(1);
  const [peserta, setPeserta] = useState([]);
  const [type, setType] = useState('mikrotik');
  const url = "https://mscore.pages.dev";
  const pImage = `${url}/preview.png`;

  return (
    <div className="relative min-h-dvh bg-base">
      <title>FIT Scoring System</title>
      <link rel="icon" type="image/svg+xml" href="/icon.png" />
      <meta
        name="description"
        content="FIT Competition Scoring System"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta property="og:title" content="Scoring System | FIT" />
      <meta
        property="og:description"
        content="FIT Competition Scoring System"
      />

      <meta property="og:image" content={pImage} />
      <Header />
      <Main
        setPeserta={setPeserta}
        setStep={setStep}
        step={step}
        peserta={peserta}
        type={type}
        setType={setType}
      />
      {step != 1 && <Navbar setStep={setStep} />}
    </div>
  );
}

export default App;
