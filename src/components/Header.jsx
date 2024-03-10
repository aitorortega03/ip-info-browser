import { IconContext } from "react-icons";
import { FaComputer } from "react-icons/fa6";

const Header = () => {
    return ( 
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
     );
}
 
export default Header;