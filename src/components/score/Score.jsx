import "./score.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Score() {

    const navigate = useNavigate(); 
    const team1det = JSON.parse(localStorage.getItem("T1details"));
    const team2det = JSON.parse(localStorage.getItem("T2details"));
    const mdet = JSON.parse(localStorage.getItem("MDetails"));
    const [currScore, setCurrScore] = useState(0);
    const [currBalls, setCurrBalls] = useState(0);
    const [currWickets, setCurrWickets] = useState(0);
    const [currP1Score, setP1Score] = useState(0);
    const [currP2Score, setP2Score] = useState(0);
    const [currInnings, setCurrInnings] = useState(1);
    const [firstt1batting, setfirstt1batting] = useState(false);

    return (

        <div className="Scorefirstmaincontainer">

            <div className="scorefirstvstopbar">

                <span className="scorefirstvstext">
                    {team1det.tname} vs {team2det.tname}, First Inning
                </span>

            </div>

            <div className="Scorefirstcomponentcontainer">

                <div className="Scorefirstwelcometext">
                    
                    <span className="sfwelcometext">
                        Welcome to cricket score card ..!
                    </span>
                
                </div>

                <div className="scorefirstcurrentdet">
                    
                    <span className="sfcurrentdet">
                        {/* {currScore}/{} */}
                    </span>
                
                </div>

            </div>


        </div>

    );
}