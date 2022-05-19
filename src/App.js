import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Login from "./components/Login";
import app from "./firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} auth={auth} />
      </Routes>
    </main>
  );
}

export default App;
