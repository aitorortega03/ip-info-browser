import { IconContext } from "react-icons";
import { FaComputer } from "react-icons/fa6";

const App = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "100px", className: "global-class-name" }} >
        <div>
          <FaComputer />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default App;
