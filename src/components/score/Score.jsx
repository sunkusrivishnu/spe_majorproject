import "./score.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Numovers from "../../pages/numovers/Numovers";

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
    const [currP1Balls, setP1Balls] = useState(0);
    const [currP2Balls, setP2Balls] = useState(0);
    const [currP14Balls, setP14Balls] = useState(0);
    const [currP24Balls, setP24Balls] = useState(0);
    const [currP16Balls, setP16Balls] = useState(0);
    const [currP26Balls, setP26Balls] = useState(0);
    const [currInnings, setCurrInnings] = useState(1);
    const [secondBatting, setsecondBatting] = useState();
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [isPlayer1Editable, setIsPlayer1Editable] = useState(false);
    const [isPlayer2Editable, setIsPlayer2Editable] = useState(false);
    const [Bowler, setBowler] = useState('');
    const [isBowlerEditable, setIsBowlerEditable] = useState(false);
    const [isP1StrikeStatus, setIsP1StrikeStatus] = useState(true);
    const [numExtras, setNumExtras] = useState(0);
    const [numWides, setNumWides] = useState(0);
    const [numNoballs, setnumNoballs] = useState(0);
    const [isNoBall, setIsNoBall] = useState(false);
    const [totalBalls, setTotalBalls] = useState(0);
    const [eachBallScore, setEachBallScore] = useState([]);

    const handleInputChangePlayer1 = (event) => {
        setPlayer1(event.target.value);
    }

    const handleInputChangePlayer2 = (event) => {
        setPlayer2(event.target.value);
    }

    const handleButtonP1 = async() => {
        // alert("Working 1 ..!")
        if (player1 === '' || player1 === ' ')
        {
            alert("Please provide a player name ..!");
        }

        else 
        {
            setIsPlayer1Editable(true);
        }
    }

    const handleButtonP2 = async() => {
        // alert("Working 2 ..!")
        if (player2 === '' || player2 === ' ')
        {
            alert("Please provide a player name ..!");
        }

        else 
        {
            setIsPlayer2Editable(true);
        }
    }

    const handleInputChangeBowler = (event) => {
        setBowler(event.target.value);
    }

    const handleButtonBowler = async() => {
        // alert("Working 3 ..!");
        if (Bowler === '' || Bowler === ' ')
        {
            alert("Please provide a player name ..!");
        }

        else 
        {
            setIsBowlerEditable(true);
        }
    }

    const handleButtonRun0 = async() => {

        if(currBalls < 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setTotalBalls(totalBalls+1);
            setCurrBalls(currBalls+1);
            setEachBallScore([...eachBallScore, 0]);

            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
            }
            
        }

        else if (currBalls == 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setEachBallScore([...eachBallScore, 0]);
            // axios call to database to add score to bowler table
            alert("Over complete, please provide next bowler");
            setBowler('');
            setTotalBalls(totalBalls+1)
            setIsBowlerEditable(false);
            setCurrBalls(0);
            setEachBallScore([]);

            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
            }

            setIsP1StrikeStatus(!isP1StrikeStatus);
        }

        else if(Bowler === '' && totalBalls < (mdet.numovers * 6))
        {
            alert("Please provide bowler name");
        }

        else 
        {
            alert("Innings completed, please click end Innings button");
        }

    }

    const handleButtonRun1 = async() => {

        if(currBalls < 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setTotalBalls(totalBalls+1);
            setCurrBalls(currBalls+1);
            setCurrScore(currScore+1);
            setEachBallScore([...eachBallScore, 1]);

            
            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+1);
            }

            setIsP1StrikeStatus(!isP1StrikeStatus);
        }

        else if (currBalls == 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setEachBallScore([...eachBallScore, 1]);
            // axios call to database to add score to bowler table, add appropriate score 
            setBowler('');
            setTotalBalls(totalBalls+1)
            setCurrBalls(0);
            setCurrScore(currScore+1)
            setIsBowlerEditable(false);
            setEachBallScore([]);

            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+1);
            }

            alert("Over complete, please provide next bowler");

        }

        else if(Bowler === '' && totalBalls < (mdet.numovers * 6))
        {
            alert("Please provide bowler name");
        }

        else 
        {
            alert("Innings completed, please click end Innings button");
        }

    }

    const handleButtonRun2 = async() => {

        if(currBalls < 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setTotalBalls(totalBalls+1);
            setCurrBalls(currBalls+1);
            setCurrScore(currScore+2);
            setEachBallScore([...eachBallScore, 2]);

            
            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+2);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+2);
            }

            // setIsP1StrikeStatus(!isP1StrikeStatus);
        }

        else if (currBalls == 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setEachBallScore([...eachBallScore, 2]);
            // axios call to database to add score to bowler table, add appropriate score 
            setBowler('');
            setTotalBalls(totalBalls+1)
            setCurrBalls(0);
            setCurrScore(currScore+2)
            setIsBowlerEditable(false);
            setEachBallScore([]);

            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+2);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+2);
            }

            setIsP1StrikeStatus(!isP1StrikeStatus);
            alert("Over complete, please provide next bowler");

        }

        else if(Bowler === '' && totalBalls < (mdet.numovers * 6))
        {
            alert("Please provide bowler name");
        }

        else 
        {
            alert("Innings completed, please click end Innings button");
        }

    }

    function battingDecide()
    {
        if(mdet.firstbattingtID === team1det.teamID)
        {
            setsecondBatting(team2det);
            console.log(secondBatting);
        }

        else 
        {
            setsecondBatting(team1det);
            console.log(secondBatting);
        }
    }

    const handleButtonRun3 = async() => {

        if(currBalls < 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setTotalBalls(totalBalls+1);
            setCurrBalls(currBalls+1);
            setCurrScore(currScore+3);
            setEachBallScore([...eachBallScore, 3]);

            
            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+3);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+3);
            }

            setIsP1StrikeStatus(!isP1StrikeStatus);
        }

        else if (currBalls == 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setEachBallScore([...eachBallScore, 3]);
            // axios call to database to add score to bowler table, add appropriate score 
            setBowler('');
            setTotalBalls(totalBalls+1)
            setCurrBalls(0);
            setCurrScore(currScore+3)
            setIsBowlerEditable(false);
            setEachBallScore([]);

            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+3);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+3);
            }

            // setIsP1StrikeStatus(!isP1StrikeStatus);
            alert("Over complete, please provide next bowler");

        }

        else if(Bowler === '' && totalBalls < (mdet.numovers * 6))
        {
            alert("Please provide bowler name");
        }

        else 
        {
            alert("Innings completed, please click end Innings button");
        }

    }

    const handleButtonRun4 = async() => {

        if(currBalls < 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setTotalBalls(totalBalls+1);
            setCurrBalls(currBalls+1);
            setCurrScore(currScore+4);
            setEachBallScore([...eachBallScore, 4]);

            
            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+4);
                setP14Balls(currP14Balls+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+4);
                setP24Balls(currP24Balls+1);
            }

            // setIsP1StrikeStatus(!isP1StrikeStatus);
        }

        else if (currBalls == 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setEachBallScore([...eachBallScore, 4]);
            // axios call to database to add score to bowler table, add appropriate score 
            setBowler('');
            setTotalBalls(totalBalls+1)
            setCurrBalls(0);
            setCurrScore(currScore+4)
            setIsBowlerEditable(false);
            setEachBallScore([]);

            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+4);
                setP14Balls(currP14Balls+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+4);
                setP24Balls(currP24Balls+1);
            }

            setIsP1StrikeStatus(!isP1StrikeStatus);
            alert("Over complete, please provide next bowler");

        }

        else if(Bowler === '' && totalBalls < (mdet.numovers * 6))
        {
            alert("Please provide bowler name");
        }

        else 
        {
            alert("Innings completed, please click end Innings button");
        }

    }

    const handleButtonRun6 = async() => {

        if(currBalls < 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setTotalBalls(totalBalls+1);
            setCurrBalls(currBalls+1);
            setCurrScore(currScore+6);
            setEachBallScore([...eachBallScore, 6]);

            
            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+6);
                setP16Balls(currP16Balls+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+6);
                setP26Balls(currP26Balls+1);
            }

            // setIsP1StrikeStatus(!isP1StrikeStatus);
        }

        else if (currBalls == 5 && totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setEachBallScore([...eachBallScore, 6]);
            // axios call to database to add score to bowler table, add appropriate score 
            setBowler('');
            setTotalBalls(totalBalls+1)
            setCurrBalls(0);
            setCurrScore(currScore+6)
            setIsBowlerEditable(false);
            setEachBallScore([]);

            if(isP1StrikeStatus) 
            {
                setP1Balls(currP1Balls+1);
                setP1Score(currP1Score+6);
                setP16Balls(currP16Balls+1);
            }

            else 
            {
                setP2Balls(currP2Balls+1);
                setP2Score(currP2Score+6);
                setP26Balls(currP26Balls+1);
            }

            setIsP1StrikeStatus(!isP1StrikeStatus);
            alert("Over complete, please provide next bowler");

        }

        else if(Bowler === '' && totalBalls < (mdet.numovers * 6))
        {
            alert("Please provide bowler name");
        }

        else 
        {
            alert("Innings completed, please click end Innings button");
        }

    }

    const handleButtonWide = async() => {

        if(totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setNumExtras(numExtras+1);
            setNumWides(numWides+1);
            setCurrScore(currScore+1);
        }

        else if(Bowler === '' && totalBalls < (mdet.numovers * 6))
        {
            alert("Please provide bowler name");
        }

        else
        {
            alert("Innings completed, please click end Innings button");
        }

    }
    
    const handleButtonNoBall = async() => {

        if(totalBalls < (mdet.numovers * 6) && (Bowler !== ''))
        {
            setNumExtras(numExtras+1);
            setnumNoballs(numNoballs+1);
            setCurrScore(currScore+1);
            setCurrBalls(currBalls-1);
            
        }


    }

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
                    
                    {
                        currInnings === 1 && <span className="sfcurrentdet">
                           {mdet.firstbattingtname} : {currScore}/{currWickets} ({Math.floor(totalBalls/6)}.{totalBalls % 6})
                        </span>
                    }

                    {
                        currInnings === 2 && <span className="sfcurrentdet1">
                           {mdet.firstbattingtname} : {currScore}/{currWickets} ({Math.floor(totalBalls/6)}.{totalBalls % 6})
                           </span>    
                    }

                </div>

                <div className="scorefirstmaxovers">

                    <span className="sfovers">
                        (Maximum number of overs : {mdet.numovers})
                    </span>

                </div>

                <div className="scorefirsttarget">

                    {
                        currInnings === 1 && <span className="sftarget">
                            Target : NA
                        </span>
                    }

                    {
                        currInnings === 2 && <span className="sftarget1">
                           Target : {currScore+1} 
                        </span>    
                    }

                </div>

                <div className="scorefirstrrr">
                    
                    {
                        currInnings === 1 && <span className="sfrrr">
                            RRR : NA
                        </span>
                    }

                    {
                        currInnings === 2 && <span className="sfrrr1">
                           RRR : {currScore+1} 
                        </span>    
                    }


                </div>

                <div className="scorefirstcrr">

                    {
                        currInnings === 1 && <span className="sfcrr">
                            CRR : {(currScore/(totalBalls/6)).toFixed(2)}
                        </span>
                    }

                    {
                        currInnings === 2 && <span className="sfcrr1">
                           RRR : {currScore+1} 
                        </span>    
                    }

                </div>

                <div className="scorefirstbatting">

                        <span className="sfbattingtext">
                            Batting :
                        </span>

                        <span className="sfrb">
                            R(B) 
                        </span>

                        <span className="sf4s">
                            4s
                        </span>

                        <span className="sf6s">
                            6s 
                        </span>

                        <span className="sfstrikerate">
                            SRR 
                        </span>

                        <input
                            type="radio"
                            value="option1"
                            name="options"
                            checked={isP1StrikeStatus}
                            // onChange={handleOptionChange}
                            className="Radioinput3"
                        />

                        <input 
                            type="text"
                            value={player1}
                            onChange={handleInputChangePlayer1}
                            placeholder="Player-1's name"  
                            className="Rounded-inputplayer1"
                            readOnly={isPlayer1Editable}
                        />

                        <button className="sfconfirm1" onClick={handleButtonP1}>
                            confirm
                        </button>

                        <input
                            type="radio"
                            value="option2"
                            name="options"
                            checked={!isP1StrikeStatus}
                            // onChange={handleOptionChange}
                            className="Radioinput4"
                            // disabled
                        />

                        <input 
                            type="text"
                            value={player2}
                            onChange={handleInputChangePlayer2}
                            placeholder="Player-2's name"  
                            className="Rounded-inputplayer2"
                            readOnly={isPlayer2Editable}
                        />

                        <button className="sfconfirm2" onClick={handleButtonP2}>
                            confirm
                        </button>

                        <span className="sfplayer1rb">
                            {currP1Score}({currP1Balls})
                        </span>

                        <span className="sfplayer2rb">
                            {currP2Score}({currP2Balls})
                        </span>

                        <span className="sfplayer14balls">
                            {currP14Balls}
                        </span>

                        <span className="sfplayer24balls">
                            {currP24Balls}
                        </span>

                        <span className="sfplayer16balls">
                            {currP16Balls}
                        </span>

                        <span className="sfplayer26balls">
                            {currP26Balls}
                        </span>

                        <span className="sfplayer1srr">
                            {((currP1Score/currP1Balls) * 100).toFixed(2)}
                        </span>

                        <span className="sfplayer2srr">
                            {((currP2Score/currP2Balls) * 100 ).toFixed(2)}
                        </span>

                </div>

                <div className="scorefirstbowling">

                    <span className="sfbowlingtext">
                        Bowling :
                    </span>

                    <input 
                        type="text"
                        value={Bowler}
                        onChange={handleInputChangeBowler}
                        placeholder="Bowler's name"  
                        className="Rounded-inputbowler"
                        readOnly={isBowlerEditable}
                    />

                    <button className="sfconfirm3" onClick={handleButtonBowler}>
                        confirm
                    </button>

                    <span className="sfbextras">
                        Extras : {numExtras}
                    </span>

                    <span className="sfbwides">
                        Wides : {numWides}
                    </span>

                    <span className="sfbnoballs">
                        NBs : {numNoballs}
                    </span>

                </div>

                <div className="scorefirstscorebuttons">

                    <button className="sfscorebutton0" onClick={handleButtonRun0}>
                        0
                    </button>

                    <button className="sfscorebutton1" onClick={handleButtonRun1}>
                        1
                    </button>

                    <button className="sfscorebutton2" onClick={handleButtonRun2}>
                        2
                    </button>

                    <button className="sfscorebutton3" onClick={handleButtonRun3}>
                        3
                    </button>

                    <button className="sfscorebutton4" onClick={handleButtonRun4}>
                        4
                    </button>

                    <button className="sfscorebutton6" onClick={handleButtonRun6}>
                        6
                    </button>

                </div>

                <div className="scorefirstextrastype">

                    <button className="sfextrawide" onClick={handleButtonWide}>
                        wide
                    </button>

                    <button className="sfextranoball" onClick={handleButtonNoBall}>
                        No ball (nb)
                    </button>

                </div>

                <div className="scorefirstwicket">

                    <button className="sfcatch">
                        Catch out
                    </button>

                    <button className="sfstump">
                        Stump out
                    </button>

                    <button className="sfhitw">
                        Hit Wicket
                    </button>

                    <button className="sfbowled">
                        Bowled
                    </button>

                    <button className="sfroutp1">
                        Run out - P1
                    </button>

                    <button className="sfroutp2">
                        Run out - P2
                    </button>

                </div>

            </div>

            <div className="scorefirstscoreboard">
                    
            </div>

        </div>

    );
}