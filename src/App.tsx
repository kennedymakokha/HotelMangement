import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Resturant from './resturant';
import Todo from './todo';

const App = () => {
  return (
    <Routes>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/" element={<Resturant />}></Route>
      {/* <Route path='/topics' element={<Topics/>} /> */}
      {/* <Route path="/todo" exact element={<Home />}></Route> */}
    </Routes>


  );
}

export default App;
