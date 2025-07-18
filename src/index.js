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
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import UpcomingEvents from "./components/UpcomingEvents";
import Performances from "./components/Performances";
import Terra2023 from "./components/performances/Terra2023";
import UNS2023 from "./components/performances/UNS2023";
import Cinderella2024 from "./components/performances/Cinderella2024";
import Dracula2024 from "./components/performances/Dracula2024";
import SwanLake2025 from "./components/performances/SwanLake2025";
import SleepingBeauty2025 from "./components/performances/SleepingBeauty2025";
import TheLittleMermaid2025 from "./components/performances/TheLittleMermaid2025";
import Scholarships from "./components/Scholarships";
import SummerIntensives from "./components/SummerIntensives";
import CompanyDancers from "./components/NBC/CompanyDancers";
import QuickLinks from "./components/quicklinks/QuickLinks";
import NBC from "./components/NBC";
import NBYC from "./components/NBYC";
import NotFound from "./components/PageNotFound.js";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="classes" element={<Classes />} />
          <Route path="tuition" element={<Tuition />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="team" element={<Team />} />
          <Route path="calendar" element={<UpcomingEvents />} />
          <Route path="performances" element={<Performances />} />
          <Route path="performances/terra2023" element={<Terra2023 />} />{" "}
          <Route
            path="performances/unanottesilenziosa2023"
            element={<UNS2023 />}
          />
          <Route
            path="performances/cinderella2024"
            element={<Cinderella2024 />}
          />
          <Route path="performances/dracula2024" element={<Dracula2024 />} />
          <Route path="performances/swanlake2025" element={<SwanLake2025 />} />
          <Route
            path="performances/sleepingbeauty2025"
            element={<SleepingBeauty2025 />}
          />
          <Route
            path="performances/thelittlemermaid2025"
            element={<TheLittleMermaid2025 />}
          />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="nyliaballetcompany" element={<NBC />} />
          <Route path="nyliaballetyouthcompany" element={<NBYC />} />
          <Route path="companydancers" element={<CompanyDancers />} />
          <Route path="summerintensives" element={<SummerIntensives />} />
          <Route path="quicklinks" element={<QuickLinks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
