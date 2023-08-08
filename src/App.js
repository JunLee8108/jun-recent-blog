import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="*" element={<div>Something Went Wrong!</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
library.add(fab, fas, far);
