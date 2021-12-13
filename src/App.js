import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated, isAuthUndefined } = useMoralis();

  return (
    <Router>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <>{!isAuthUndefined && <Auth />}</>
      )}
    </Router>
  );
}

export default App;
