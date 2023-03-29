import React, {useEffect, useState} from "react";
import "./index.css"

import LeetcodeIcon from "./imgs/leetcode.webp"

import { getApiData } from "../../services/Api";

const leetApi = "https://leetcode-stats-api.herokuapp.com/kryerzz"

const corsConfig = {mode: "no-cors"}

const LeetCode = () => {

    const [leetData, setLeetData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [leetError, setLeetError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getApiData(leetApi, corsConfig)
        .then(response => {
            setLeetData(response.data)
            setLoading(false)
            
        })
        .catch(error => {
            setLeetError(true)
            setLoading(false)
        })
    }, [])

    function setProgresWidth(currentProgress, totalProgress) {
        let percent = (currentProgress / totalProgress) * 100
        let progressTotalWidht = 500
        let currentProgressWidth = (percent * progressTotalWidht) / 100
        return currentProgressWidth + "px"
    }

    function setTotalProgressDeg() {
        let percent = leetData?.totalSolved / leetData?.totalQuestions * 100
        let totalProgress = 360
        let currentProgressPercent = percent * totalProgress / 100
        return currentProgressPercent + 2 + "deg"
    }

    return(
        <div id="leetcode" className="leetcode">
            <div className={`leetcode_content scroll_effect_left`}>
                <div className="leetcode_header theme">
                    <div className="header_icon">
                        <img src={LeetcodeIcon} width="30" alt="" />
                        <h3>LeetCode</h3>
                    </div>
                </div>
                {leetError && 
                    <div className="loading_error theme">
                        <p>The API is currently unavailable, please, go to <a target="_blank" href="https://leetcode.com/kryerzz/" rel="noreferrer">LeetCode.com/kryerzz</a> to see my profile.</p>
                    </div>
                }
                {loading && 
                    <div className="loading theme">
                        <div className="loading_circle"></div>
                        <div className="loading_text">Loading...</div>
                    </div>
                }
                {leetData &&
                    <div className="leetcode_body theme">
                    <div className="leetcode_user_info theme_two">
                        <div className="leetcode_user_status">
                            <p><b>kryerzz</b></p>
                            <p><b>Rank</b> {Intl.NumberFormat("en-US").format(leetData?.ranking)}</p>
                            <p><b>AceptanceRate</b> {leetData?.acceptanceRate}%</p>
                        </div>
                        <div className="leetcode_total_solved">
                            <div className="total_progress_bar " style={{background: `conic-gradient(orange ${setTotalProgressDeg()} , rgb(213, 213, 213) 0deg)`}}>
                                <div className="total_progress_info " >
                                    <p><b>{leetData?.totalSolved}</b></p>
                                    <p style={{fontSize: 15, fontWeight: 300}}>Solved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="solved_graph theme_two">
                        <div className="leet_code_solved easy_solved">
                            <div className="graph_text easy_text">
                                <p>Easy</p>
                                <p><b>{leetData?.easySolved}</b> / {leetData?.totalEasy}</p>
                            </div>
                            <div className="progress_bar easy_progress_bar">
                                <div className="current_progress easy_current_progress" style={{width: setProgresWidth(leetData?.easySolved, leetData?.totalEasy)}}></div>
                            </div>
                        </div>
                        <div className="leet_code_solved medium_solved">
                            <div className="graph_text medium_text">
                                <p>Medium</p>
                                <p><b>{leetData?.mediumSolved}</b> / {leetData?.totalMedium}</p>
                            </div>
                            <div className="progress_bar medium_progress_bar">
                                <div className="current_progress medium_current_progress" style={{width: setProgresWidth(leetData?.mediumSolved, leetData?.totalMedium)}}></div>
                            </div>
                        </div>
                        <div className="leet_code_solved hard_solved">
                            <div className="graph_text hard_text">
                                <p>Hard</p>
                                <p><b>{leetData?.hardSolved}</b> / {leetData?.totalHard}</p>
                            </div>
                            <div className="progress_bar hard_progress_bar">
                                <div className="current_progress hard_current_progress" style={{width: setProgresWidth(leetData?.hardSolved, leetData?.totalHard)}}></div>
                            </div>
                        </div>
                        <div className="medium_solved"></div>
                        <div className="hard_solved"></div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default LeetCode;