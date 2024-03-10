const Form = ({ loading, setIp, setIpInfo }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        let ipInputValue = event.target[0].value;
        ipInputValue ? setIp(ipInputValue) : setIpInfo(null)
      };

    return ( 
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
     );
}
 
export default Form;