import "./App.css";
import List from "./pages/List";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <List /> */}
      <Routes>
        <Route path="/react" element={<List />} />
        <Route path="*" element={<h1>Route Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
