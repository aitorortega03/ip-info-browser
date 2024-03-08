import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const [ip, setIp] = useState(null);
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  

  return (
    <main className="container">
      <Header />
      <Form loading={loading} ip={ip} setLoading={setLoading} setIpInfo={setIpInfo} setIp={setIp} />
      <div>{ipInfo && <pre>{JSON.stringify(ipInfo, null, 2)}</pre>}</div>
    </main>
  );
};

export default App;
