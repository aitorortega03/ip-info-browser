import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Info from "./components/Info";

const App = () => {
  const [ip, setIp] = useState("");
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ip) {
      axios
      .get(`http://ip-api.com/json/${ip}?fields=query,continent,continentCode,country,countryCode,region,regionName,city,lat,lon,timezone,offset,currency,isp,org,mobile,proxy`)
      .then(response => setIpInfo(response.data))
      .catch(err => console.log(err))
      .finally(setLoading(false));
    }
  },[ip]);

  return (
    <main className="container">
      <Header />
      <Form loading={loading} setIp={setIp} setIpInfo={setIpInfo} />
      <Info ipInfo={ipInfo} />
    </main>
  );
};

export default App;
