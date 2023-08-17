import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/man4.jpg";
import image2 from "../images/group_gym.jpg";
import image3 from "../images/nutrition_gym.jpg";
import image4 from "../images/trainer_gym.jpg";


const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="headerTop">
        <div className="title" style={{ marginTop: "1rem" }}>
          <center>
            <h1 style={{ fontSize: "4rem" }}>GEDU FITNESS HUB</h1>
          </center>
        </div>
        <div>
          <center>
            <img
              src={image}
              alt=""
              style={{ height: "30rem", width: "60rem", marginRight: "3rem" }}
            />
          </center>
        </div>
        <div>
          <center>
            <h4>Unlock Your Full Potential with GEDU FITNESS</h4>
          </center>
          <center>
            <h4>Start Your Fitness Journey Now!</h4>
          </center>
          <center>
            <button className="btn btn-dark">ENROLL NOW</button>
          </center>
        </div>
      </div>
      <div className="middle">
        <center><h2>OUR SERVICES</h2></center>
        <center><hr style={{"color":"white", "width":"70%"}} /></center>
        <div className="middle1">
          <img src={image4} alt=""  />
          <div>
            <center><h3>Personalized Training Programs</h3></center>
            <center><p>Achieve your fitness goals with our personalized training programs tailored to your unique needs. Our experienced trainers will assess your fitness level, discuss your objectives, and create a customized workout plan that maximizes results. Whether you're looking to build muscle, lose weight, or improve overall fitness, our personalized training ensures you're on the right track. Get ready to transform your body and embrace a healthier lifestyle</p></center>
          </div>
          </div>
        <div className="middle1">
        <div>
            <center><h3>Group Fitness Classes</h3></center>
            <center><p>Energize your fitness routine with our dynamic group fitness classes designed to inspire and challenge you. From high-intensity interval training (HIIT) to yoga and everything in between, our diverse range of classes caters to various fitness preferences and skill levels. Join our vibrant community as you work out in a supportive and motivating group setting. With expert instructors and a fun atmosphere, you'll stay engaged while achieving your fitness goals</p></center>
          </div>
        <img src={image2} alt="" />
        </div>
        <div className="middle1">
        <img src={image3} alt="" />
        <div>
            <center><h3>Nutrition Guidance and Meal Plans</h3></center>
            <center><p>Fuel your workouts and enhance your progress with our comprehensive nutrition guidance and meal plans. Achieving fitness milestones requires more than just exercise – proper nutrition plays a crucial role. Our team of nutrition experts will provide you with personalized dietary recommendations and meal plans that align with your fitness objectives. Whether you're looking to gain muscle, shed pounds, or maintain optimal health, our guidance will empower you to make informed nutritional choices.</p></center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
