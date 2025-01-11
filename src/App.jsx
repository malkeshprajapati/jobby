import { Landing, Register, Error } from "./pages";
import "./assets/css/index.css";
import {
  Alljob,
  Profile,
  SharedLayout,
  Stats,
  Addjob,
} from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Profile />} />
          <Route path="all-job" element={<Alljob />} />
          <Route path="add-job" element={<Addjob />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
