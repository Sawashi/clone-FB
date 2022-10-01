import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
function App() {
  return (
    <>
      <Routes>
        <Route path="cloneFB/home" element={<Homepage />} default />
        <Route path="*" element={<Navigate to="cloneFB/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
