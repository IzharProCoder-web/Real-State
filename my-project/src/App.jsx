import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
// import Home from "./Pages/Home";



function App() {

    
  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>
    
  );
}

export default App;
