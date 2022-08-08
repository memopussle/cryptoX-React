import React from "react";
import "./About.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
;

const About = () => {
  const info = [
    {
      person: "Ella",
      img: "https://images.pexels.com/photos/11801281/pexels-photo-11801281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        'Ella is the leader - she is also a querky cheerleader. She has been in the industry for almost 10 years so you can call her a "live dictionary"',
    },
    {
      person: "Mary",
      img: "https://images.pexels.com/photos/7830985/pexels-photo-7830985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "You can see Mary everywhere - she is a writer, a marketer, a techie of our group. "
    },
    {
      person: "Jack",
      img: "https://images.pexels.com/photos/7561911/pexels-photo-7561911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Jack is the fun guy - also he is the best consultant of the team. He is also a marathon runner and has won 2 medals in the last 3 years!",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container about">
        <h1 className="about__title">About Us</h1>

        <div className="about__wrapper component-margin">
          {info?.map((info, i) => (
            <div key={i} className="about__card flex">
              <img src={info.img} alt="avatar" className="about__avatar" />
              <h6 className="margin-standard">{info.person}</h6>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
