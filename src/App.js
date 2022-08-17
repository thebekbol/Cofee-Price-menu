import './App.scss';
import MainMenu from "./components/MainMenu";
import {Route, Routes} from "react-router-dom";
import FoodCard from "./components/FoodCard";


function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<MainMenu/>}/>
            <Route path="/menu/:nameId" element={<FoodCard/>}/>
        </Routes>
    </div>
  );
}

export default App;


// #150000
// #F5E9E1

// text #F5E9E1