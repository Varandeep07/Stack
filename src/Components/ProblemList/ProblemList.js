import findAll from '../Table/DATA';
import { useContext, useEffect, useState } from 'react';
import '../Table/table.css';
import Button from '@material-ui/core/Button';
import { Link, useNavigate } from "react-router-dom";
import ProblemCard from '../ProblemCard/ProblemCard';
import { AppContext } from '../../App';

export default function ProblemList() {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const {isAllow, isUserLoggedIn} = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const result = await findAll();
      setData(result);
    };
    fetchData();
    setLoading(false);
  }, []);

  const navigate = useNavigate();
  if(!isAllow){
    return <h2 style={{ textAlign: 'center' }}>Not Allowed to view this content. Ask Admin for access.</h2>
  }
  if(Loading){
    return <h3 style={{textAlign: 'center'}}>Loading...</h3>
  }
  if(!isUserLoggedIn){
    return <h3 style={{textAlign: 'center'}}>Please <Link to='/login'>Login</Link> to access!</h3>
  }
  return (
    <>
      <div className='problem-list'>
        <h2>Problem List</h2>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#136f63', color: 'white', margin: '10px' }}
          onClick={() => navigate("/add")}
        >
          + Add
        </Button>
      </div>
      {data.length > 0 &&
        data.map((problem) =>
          <ProblemCard
            problemName={problem.problemName}
            problemSetter={problem.problemSetter}
            testers={problem.Reviewer}
            difficulty={problem.difficulty}
            date={problem.date}
            problemId={problem.problemId}
            status = {problem.status}
            key = {problem.problemId}
          />
        )}
    </>
  );
}
