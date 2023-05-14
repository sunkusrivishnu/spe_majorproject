import "./tname.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { globallink } from "../../components/global";

export default function Tname() {

    const [Tname1, setTname1] = useState('');
    const [Tname2, setTname2] = useState('');
    const [isTname1Editable, setIsTname1Editable] = useState(false);
    const [isTname2Editable, setIsTname2Editable] = useState(false);
    const [t1det, sett1det] = useState([]);
    const [t2det, sett2det] = useState([]);

    const navigate = useNavigate();

    const handleInputChangeTname1 = (event) => {
        setTname1(event.target.value);
    }

    const handleInputChangeTname2 = (event) => {
        setTname2(event.target.value);
    }

    const handleButtont1 = async() => {
        const t1res = await axios.post(globallink + "/api/addteam", {"tname":Tname1});
        sett1det(t1res.data);
        console.log(t1res.data);
        localStorage.setItem("T1details", JSON.stringify(t1res.data));
        console.log(localStorage.getItem("T1details"));
        setIsTname1Editable(true);
        alert("team 1 added successfully");
    }

    const handleButtont2 = async() => {
        const t2res = await axios.post(globallink + "/api/addteam", {"tname":Tname2});
        sett2det(t2res.data);
        console.log(t2res.data);
        localStorage.setItem("T2details", JSON.stringify(t2res.data));
        console.log(localStorage.getItem("T2details"));
        setIsTname2Editable(true);
        alert("team 2 added successfully");
    }

    const handleConfirm = async() => {
        
        if(isTname1Editable && isTname2Editable)
        {
            navigate('numovers');
        }

        else
        {
            alert("Please provide team names properly ..!")
        }
    }

    return (
        <>
            <div className="Tnamemaincontainer">

            
                <div className="progress">

                    <div className="number1">
                        1
                    <i class="fa fa-check" aria-hidden="true"></i>

                    </div>

                    <div className="text1">
                        <span className="team">
                            Team
                        </span>
                    </div>

                    <div className="line1">

                    </div>

                    <div className="number2">
                        2
                    </div>

                    <div className="text2">
                        <span className="overs">
                            Overs
                        </span>
                    </div>

                    <div className="line2">

                    </div>

                    <div className="number3">
                        3
                    </div>

                    <div className="text3">
                        <span className="Batting">
                            Batting
                        </span>
                    </div>


                </div>

                <div className="boxforinput">
                    
                    <div className="teamname1">

                        <input 
                            type="text"
                            value={Tname1}
                            onChange={handleInputChangeTname1}
                            placeholder="Team-1's name"  
                            className="Rounded-input1"
                            readOnly={isTname1Editable}
                        />

                    </div>
                    
                    <button className="confirmbutton1" onClick={handleButtont1}>
                        Confirm team 1
                    </button>

                    <div className="vslogo">

                        <span className="vstext">
                            VS
                        </span>

                    </div>

                    <div className="teamname2">

                        <input 
                            type="text"
                            value={Tname2}
                            onChange={handleInputChangeTname2}
                            placeholder="Team-2's name"  
                            className="Rounded-input2"
                            readOnly={isTname2Editable}
                        />

                    </div>

                    <button className="confirmbutton2" onClick={handleButtont2}>
                        Confirm team 2
                    </button>

                    <button className="nextbutton" onClick={handleConfirm}>
                        Next
                    </button>


                </div>

            </div>
        </>
    );

}