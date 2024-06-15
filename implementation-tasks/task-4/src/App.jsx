import CounterShow from "./components/CounterShow"

function App() {

  function handleClick() {
    updateCount(count+1);
  }
  
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <div style={{display:'flex', flexDirection:'column', gap:'4rem', alignItems:'center'}}>
        <CounterShow updateCount={updateCount}/>
        <button onClick={handleClick} style={{padding:'0.5rem 1rem', background:'blue', color:'white', fontWeight:'bold', fontSize:'large', border:'none'}}>Increase</button>
      </div>
    </div>
  )
}

export default App
