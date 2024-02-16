import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from './REDUX/ACTIONS/actionFunctions'
import { useState } from 'react';
type Item = {
  name : string,
  price : number
}

function Home() : JSX.Element {
    const data : Item[] | any = useSelector(state => {
        return state
      })
      
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
      
    const dispatch : any = useDispatch()
    return (
       <div>
        {
          data.map((e : Item) : string => {
            return e.name
          })
        }
        <button onClick={() => (dispatch(deleteProduct()))}>Delete</button>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='name'/>
        <input type="text" onChange={(e) => setPrice(parseInt(e.target.value))} placeholder='price'/>
        <button onClick={() => dispatch(addProduct({name, price}))}>ADD</button>
       </div>
    );
}

export default Home