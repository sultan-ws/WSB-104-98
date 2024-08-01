import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addProduct } from './redux-cart/cartSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeValue } from './redux/slices/userSlice';

function App() {
  // const user = useSelector((state)=> state.user.value);
  // const dispatch = useDispatch();

  // console.log(user);

  const cart = useSelector((state)=> state.cart.value);
  const dispatch = useDispatch();

  console.log(cart);

  const newProduct = {
    name:'ravindra'
  }

  return (
   <> 
   <h1>
   {/* {
    user
   } */}
   </h1>

   <button onClick={()=>{dispatch(addProduct(newProduct))}}>add to cart</button>
    {/* <input type='text' onChange={(e)=>{dispatch(changeValue(e.target.value))}} value={user}/> */}
   </>
  );
}

export default App;
