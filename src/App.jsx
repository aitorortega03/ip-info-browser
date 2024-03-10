import axios from "axios";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaComputer } from "react-icons/fa6";

const App = () => {
  const [ip, setIp] = useState("");
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  //TODO: view why need to click 2 times to do the request
  //TODO: refactor all to components

  const handleSubmit = (event) => {
    let ipInputValue = event.target[0].value;
    setIp(ipInputValue);
    setLoading(true);
    event.preventDefault();
    axios.get(`http://ip-api.com/json/${ip}`)
      .then(response => response.data)
      .then(ipData => setIpInfo(ipData))
      .catch(err => console.log(err))
      .finally(setLoading(false))
  };

  return (
    <main className="container">
      <div style={{ display: "grid", placeItems: "center" }}>
        <IconContext.Provider
          value={{ size: "100px", className: "global-class-name" }}
        >
          <div>
            <FaComputer />
          </div>
        </IconContext.Provider>
        <h1>IP Information Browser</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          User IP:
          <input type="text" placeholder="Introduce here the IP" />
          <small>For example: 24.48.0.1</small>
          <button type="submit"
            style={{ width: "100%" }}
            disabled={loading}
            aria-busy={loading}
          >
            Search IP information
          </button>
        </label>
      </form>

      <div>{ipInfo && <pre>{JSON.stringify(ipInfo, null, 2)}</pre>}</div>
    </main>
  );
};

export default App;
