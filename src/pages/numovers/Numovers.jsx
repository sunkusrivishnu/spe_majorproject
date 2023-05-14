import "./numovers.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Novers from "../../components/novers/Novers";

export default function Numovers() {

    return(
        <>
            <Topbar />
            <Novers />
        </>
    );

}