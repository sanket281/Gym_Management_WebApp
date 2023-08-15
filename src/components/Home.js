import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();
    useEffect(() => {
      if(localStorage.getItem('token')){
        navigate("/");
      }
      else{
        navigate("/login");
      }

    }, [])
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Home
