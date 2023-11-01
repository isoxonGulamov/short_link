import './App.css';
import { Routes,Route } from 'react-router-dom';
import { MainLayout } from './layout/main-layout';
import {HomePage} from "./pages/home/home.jsx"
function App() {
  return (

    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
