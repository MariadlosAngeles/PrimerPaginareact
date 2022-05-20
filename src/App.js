import { Home } from "./components/Pages/Home/Home";
import {ContactUS} from "./components/Pages/ContactUS/ContactUS";
import {AboutUS} from "./components/Pages/AboutUS/AboutUS";
import {NotFound} from "./components/Pages/NotFound/NotFound"
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Layouts/Footer/Footer";
import { Header } from "./components/Layouts/Header/Header";
import { ContadorUS } from "./components/Pages/ContadorUS/ContadorUS";



function App() {
  return (
    <div className="App">
      <Header>
      </Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/aboutUS" element={<AboutUS></AboutUS>}></Route>
          <Route path="/contactUS" element={<ContactUS></ContactUS>}></Route>
          <Route path="/contadorUS" element={<ContadorUS></ContadorUS>}></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
