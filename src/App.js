import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="*" element={<div>Something Went Wrong!</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
