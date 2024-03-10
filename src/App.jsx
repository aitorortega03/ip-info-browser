import axios from "axios";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaComputer } from "react-icons/fa6";

const App = () => {
  const [ip, setIp] = useState("");
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ip) {
      axios
      .get(`http://ip-api.com/json/${ip}`)
      .then(response => setIpInfo(response.data))
      .catch(err => console.log(err))
      .finally(setLoading(false));
    }
  },[ip]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let ipInputValue = event.target[0].value;
    ipInputValue ? setIp(ipInputValue) : setIpInfo(null)
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
