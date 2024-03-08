import axios from "axios";

const Form = ({ loading, ip, setLoading, setIpInfo, setIp}) => {

    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();
        axios.get(`http://ip-api.com/json/${ip}`)
          .then(response => response.data)
          .then(ipData => setIpInfo(ipData))
          .catch(err => console.log(err))
          .finally(setLoading(false))
      };
    
      const handleChange = (event) => setIp(event.target.value)

    return ( 
        <form onSubmit={handleSubmit}>
        <label>
          User IP:
          <input type="text" placeholder="Introduce here the IP" required onChange={handleChange}/>
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