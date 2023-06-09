import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
          <ListEmployeeComponent />
            <Routes>
              <Route path="/" component={ListEmployeeComponent}></Route>
              <Route
                path="/employees"
                component={ListEmployeeComponent}
              ></Route>

            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
