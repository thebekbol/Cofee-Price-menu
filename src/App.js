import './App.scss';
import MainMenu from "./components/MainMenu";
import {Route, Routes} from "react-router-dom";
import FoodCard from "./components/FoodCard";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainMenu/>}/>
            <Route path="/menu/:id" element={<FoodCard/>}/>
        </Routes>
    </div>
  );
}

export default App;
