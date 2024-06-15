import { useState } from "react"
import Form from "./components/Form"
import Result from "./components/Result"

function App() {

  const [data,setData] = useState([]);

  const [name,setName] = useState('');
  const [price,setPrice] = useState(0);

  function updateName(name) {
    setName(name);
  }

  function updatePrice(price) {
    setPrice(price);
  }

  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', gap:'5rem', height:'100vh'}}>
     <Form setData={setData} name={name} price={price} updateName={updateName} updatePrice={updatePrice}/>
     <Result data={data}/>
    </div>
  )
}

export default App
