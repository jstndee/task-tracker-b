import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import TaskHub from "./TaskHub";



import {Outlet} from "react-router-dom";
import NewTaskCard from "./NewTaskCard";
import MainTaskPageB from "./MainTaskPageB";
import LogInForm from "./LogInForm";
import GroupNav from "./GroupNav";
import UpdatedTopNav from "./UpdatedTopNav";
import DaisyUiTopNav from "./DaisyUiTopNav";
import UpdatedFooter from "./UpdatedFooter";
import SimpleAltTaskCard from "./SimpleAltTaskCard";


function App() {
    return (<div>
            <DaisyUiTopNav/>
            <Outlet/>
            <UpdatedFooter/>


        </div>

    );
}

export default App;
