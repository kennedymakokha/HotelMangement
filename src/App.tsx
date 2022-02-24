import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './home';
import Resturant from './resturant';
import Table from './Table';
import Todo from './todo';
import User from './User';

const App = () => {
  return (
    <Routes>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/reserve" element={<Resturant />}></Route>
      <Route path="/tables" element={<Table />}></Route>
      <Route path="/employees" element={<User />}></Route>
      {/* <Route path='/topics' element={<Topics/>} /> */}
      {/* <Route path="/todo" exact element={<Home />}></Route> */}
    </Routes>


  );
}

export default App;
