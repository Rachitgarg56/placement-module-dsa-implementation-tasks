
const Form = ( { setData, name, price, updateName, updatePrice } ) => {

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '' || price === 0 || price === '') return;
    setData((prev) => {
      const arr = [...prev];
      arr.push( { name: name, price: price } );
      return arr;
    })
    updateName('');
    updatePrice(0);
  }

  return (
    <form>
      <label>Product Name*</label>
      <br/>
      <input required value={name} type="text" onChange={(e)=>updateName(e.target.value)} />

      <br/><br/>
      
      <label>Product Price*</label>
      <br/>
      <input required value={price} onChange={(e)=>updatePrice(e.target.value)} type="number" />

      <br/><br/>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form
