import { useState } from "react";
import "./App.css";
import List from "./pages/List";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Header />
      <Routes>       
        <Route path="/" element={<List />}></Route>
      </Routes>   
      <Footer />  
    </>
  );
}

export default App;
