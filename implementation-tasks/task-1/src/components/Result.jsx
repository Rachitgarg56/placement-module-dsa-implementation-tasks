import { useEffect, useState } from "react"

const Result = ( props ) => {
  const {data} = props;
  const [totalPrice,setTotalPrice] = useState(0); 

  useEffect(() => {
    const total = data.reduce((acc,obj) => {
      const price = parseInt(obj.price);
      return acc+price;
    },0)
    setTotalPrice(total);
  }, [data])

  return (
    <div>
      <h2>OUTPUT Result:</h2>
      <h3>Sale Price</h3>
      <ul>
        {
          data.map((product, index) => {
            return <li key={index}>{product.name} - {product.price}</li>
          })
        }
      </ul>
      
      
      <h3>Total Price</h3>
      <span>{totalPrice}</span>
    </div>
  )
}

export default Result
