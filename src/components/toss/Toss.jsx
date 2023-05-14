import "./toss.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { globallink } from "../global";

export default function Toss() {

    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const team1details = JSON.parse(localStorage.getItem("T1details"));
    const team2details = JSON.parse(localStorage.getItem("T2details"));
    const matchdetails = JSON.parse(localStorage.getItem("MDetails"));

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleTossNextClick = async() => {
        // alert(selectedOption);
        if(selectedOption === '')
        {
            alert("Please select a team");
        }

        else if (selectedOption === "option1") 
        {
            const mupres = await axios.put(globallink + "/api/updatemdet", {"matchid": matchdetails.matchID, "firstbattingtid": team1details.teamID, "firstbattingtname": team1details.tname}); 
            
            if(mupres.data)
            {
                const mdetails1 = await axios.get(globallink + "/api/getmdetails", {params: {matchid: matchdetails.matchID}});
                localStorage.setItem("MDetails", JSON.stringify(mdetails1.data));
                navigate("scorecard");
            }

            else 
            {
                alert("Not updated successfully ..!");
            }
        }

        else if( selectedOption === "option2")
        {
            const mupres1 = await axios.put(globallink + "/api/updatemdet", {"matchid": matchdetails.matchID, "firstbattingtid": team2details.teamID, "firstbattingtname": team2details.tname}); 
            
            if(mupres1.data)
            {
                const mdetails = await axios.get(globallink + "/api/getmdetails", {params: {matchid: matchdetails.matchID}});
                localStorage.setItem("MDetails", JSON.stringify(mdetails.data));
                navigate("scorecard");
            }

            else 
            {
                alert("Not updated successfully ..!");
            }
        }
    }

    return(

        <div className="Tossmaincontainer">

            <div className="Tossprogress">

                <div className="Tossnumber1">
                    <span className="Tossstick">
                        &#x2713;
                    </span>
                </div> 

                <div className="Tosstext1">
                    <span className="Tossteam">
                        Team
                    </span>
                </div>

                <div className="Tossline1">

                </div>

                <div className="Tossnumber2">

                    <span className="Tossstick2">
                        &#x2713;
                    </span>

                </div>

                <div className="Tosstext2">
                    <span className="Tossovers">
                        Overs
                    </span>
                </div>

                <div className="Tossline2">

                </div>

                <div className="Tossnumber3">
                    3
                </div>

                <div className="Tosstext3">
                    <span className="TossBatting">
                        Batting
                    </span>
                </div>


            </div>

            <div className="Tossboxforinput">

                <div className="whoisbattingq">

                    <span className="WhoisbattingQues">
                        Who is batting ?
                    </span>

                </div>

                <div className="Tossradiobutton">


                        <input
                            type="radio"
                            value="option1"
                            name="options"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            className="Radioinput1"
                        />

                        <span className="Tosstname1">
                            {team1details.tname}
                        </span>

                        <input
                            type="radio"
                            value="option2"
                            name="options"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            className="Radioinput2"
                        />

                        <span className="Tosstname2">
                            {team2details.tname}
                        </span>

                </div>

                <button className="Tossnextbutton" onClick={handleTossNextClick}>
                    Start game
                </button>

            </div>

        </div>

    );
}