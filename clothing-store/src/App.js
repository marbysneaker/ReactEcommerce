import { Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home.component";

import Navigation from './routes/navigation/navigation.component';

import SignIn from './routes/sign-in/sing-in.component';


const Shop = () => {
  return <h1>I am the shop page</h1>
}

const Cart = () => {
  return <h1>I am the cart page</h1>
}
const App = () => {



  return(
   
      <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route path = 'cart' element={<Cart/>}/>
            <Route index element={<Home />}/>
            <Route path='shop' element={<Shop/>} />  
            <Route path='sign-in' element={<SignIn/>} />

        </Route>
      
      </Routes>
    
    
    
  );
}

export default App;
