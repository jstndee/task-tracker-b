import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import TaskHub from "./TaskHub";



import {Outlet} from "react-router-dom";
import NewTaskCard from "./NewTaskCard";
import MainTaskPageB from "./MainTaskPageB";
import LogInForm from "./LogInForm";


function App() {
    return (<div>
            <HeaderComponent/>
            <TaskHub/>
            <Outlet/>
            <FooterComponent/>


        </div>

    );
}

export default App;
