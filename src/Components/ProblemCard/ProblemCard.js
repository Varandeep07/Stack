// ProblemCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProblemCard.css';

const ProblemCard = ({ problemName, problemSetter, problemId, testers, difficulty, date, status }) => {
  let Navigate = useNavigate();
  const handleClick = () => {
    Navigate(`/problemview/${problemId}`);
  }
  return (
    <div className="problem-card">
      <div className="Problem-header">
        <span style={{Color: "black", margin: "0px", fontFamily: "Inter", fontWeight: '700', fontSize: '20px'}}>{problemName}</span>
        <span style={{margin: "0px"}}>&nbsp;|&nbsp;</span>
        {status==="Accepted" &&
          <button className='status-btn'><span>{status}</span></button>
        }
        {status==="Pending" &&
          <button className='status-btn' style={{backgroundColor: '#FFDD00', color: 'white'}}><span>{status}</span></button>
        }
        {status==="Rejected" &&
          <button className='status-btn' style={{backgroundColor: '#C31818', color: 'white'}}><span>{status}</span></button>
        }
      </div>
      <div className="setter">
        <span>Problem Setter - {problemSetter}</span>
        <span>Reviewer - {testers}</span>
      </div>
      <div className='ParentDifficulty'>
        <div className="difficulty">
          <span>Difficulty - {difficulty}</span>
          <span>Date - {date}</span>
        </div>
        <button className='open-btn' onClick={handleClick}>View</button>
      </div>
    </div>
  );
};

export default ProblemCard;
