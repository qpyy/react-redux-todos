import Main from "./pages/Main";
import { Navigate, Route, Routes } from "react-router-dom";
import TodoDetails from "./pages/TodoDetails";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/details/:id" element={<TodoDetails />} />
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
};

export default App;
