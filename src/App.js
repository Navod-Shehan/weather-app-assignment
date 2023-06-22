import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WeatherCard from "./component/WeatherCard";
import CardDetail from "./pages/CardDetail/CardDetail";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherCard />} />
          <Route path="/cardDetails/:id" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
