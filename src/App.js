import Main from "./pages/Main";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoDetails from "./pages/TodoDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/details/:id" element={<TodoDetails />} />
    </Routes>
  );
};

export default App;
