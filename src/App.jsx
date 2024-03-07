import { IconContext } from "react-icons";
import { FaComputer } from "react-icons/fa6";

const App = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submit IP: ", event.target[0].value)
  }

  return (
    <main className="container">
      <div style={{display: "grid", placeItems: "center"}}>
        <IconContext.Provider value={{ size: "100px", className: "global-class-name" }}>
          <div>
            <FaComputer />
          </div>
        </IconContext.Provider>
        <h1>IP Information Browser</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <label>
        User IP:
        <input type="text" placeholder="Introduce here the IP"/>
        <small>For example: 24.48.0.1</small>
        <button style={{width: "100%"}}>Search IP information</button>
      </label>
      </form>

      <div>
        <pre></pre>
      </div>
    </main>
  );
};

export default App;
