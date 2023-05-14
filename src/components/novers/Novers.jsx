import "./novers.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { globallink } from "../global";


export default function Novers() {

    const [NumOvers, setNumOvers] = useState(0);
    const [isNumOversEditable, setIsNumOversEditable] = useState(false);
    const navigate = useNavigate();

    const handleInputChangeOvers = (event) => {
        setNumOvers(event.target.value);
    }

    const handleClickConfirm = async() => {
        setIsNumOversEditable(true);
        alert("Number of overs set successfully");
    }

    const handleNOversnextbutton = async() => {
        
        if (isNumOversEditable) 
        {
            const t1details = JSON.parse(localStorage.getItem("T1details"));
            const t2details = JSON.parse(localStorage.getItem("T2details"));
            console.log(t1details);
            console.log(t2details);
            const overres = await axios.post(globallink + "/api/addmatch", {"t1ID":t1details.teamID, "t2ID":t2details.teamID, "numovers":NumOvers});
            console.log(overres.data);
            localStorage.setItem("MDetails", JSON.stringify(overres.data));
            navigate("batting");
        }

        else
        {
            alert("Please provide number of overs properly ..!");
        }
    }

    return (

        <div className="Noversmaincontainer">

            <div className="Noversprogress">

                <div className="Noversnumber1">
                    <span className="Noverstick">
                        &#x2713;
                    </span>
                </div> 

                <div className="Noverstext1">
                    <span className="Noversteam">
                        Team
                    </span>
                </div>

                <div className="Noversline1">

                </div>

                <div className="Noversnumber2">
                    2
                </div>

                <div className="Noverstext2">
                    <span className="Noversovers">
                        Overs
                    </span>
                </div>

                <div className="Noversline2">

                </div>

                <div className="Noversnumber3">
                    3
                </div>

                <div className="Noverstext3">
                    <span className="NoversBatting">
                        Batting
                    </span>
                </div>

            </div>

            <div className="Noversboxforinput">

                <div className="Numoversq">

                    <span className="NumOversQues">
                        How many overs ?
                    </span>

                </div>

                <div className="Noversnumovers">

                    <input 
                        type="text"
                        value={NumOvers}
                        onChange={handleInputChangeOvers}
                        placeholder="Number of overs"  
                        className="Rounded-input3"
                        readOnly={isNumOversEditable}
                    />

                </div>

                <button className="Noversconfirmbutton" onClick={handleClickConfirm}>
                    Confirm num overs
                </button>

                <button className="Noversnextbutton" onClick={handleNOversnextbutton}>
                    Next
                </button>

            </div>

        </div>

    );

}