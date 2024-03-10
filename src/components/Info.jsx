const Info = ({ipInfo}) => {
    return ( 
        <div>
        {ipInfo && <pre>{JSON.stringify(ipInfo, null, 2)}</pre>}
      </div>
     );
}
 
export default Info;