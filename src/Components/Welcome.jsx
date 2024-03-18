const Welcome=({Welcomebtnclicked})=>{
  return <>
  <h1 className="Welcome">There are no Posts Here!! Create Your Post.</h1>
  <div className="welcome-btn"><button className="btn btn-primary " onClick={Welcomebtnclicked}>Get post from server</button></div>
  </>
}
export default Welcome