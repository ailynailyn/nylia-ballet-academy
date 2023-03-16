import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Enroll from "./components/Enroll";
import Classes from "./components/Classes";
import Tuition from "./components/Tuition";
import Contact from "./components/Contact";
import Team from "./components/Team";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="classes" element={<Classes />} />
          <Route path="tuition" element={<Tuition />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
