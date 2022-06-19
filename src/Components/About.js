import React from "react";
import Card from "./Card";
import Data from "./Apidata";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4 d-flex align-items-center">
          <div className="col-xs-12 col-md-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis distinctio omnis, blanditiis sapiente sed rem ipsam
              laudantium quo expedita. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dolores debitis distinctio omnis, blanditiis
              sapiente sed rem ipsam laudantium quo expedita.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis distinctio omnis, blanditiis sapiente sed rem ipsam
              laudantium quo expedita. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dolores debitis distinctio omnis, blanditiis
              sapiente sed rem ipsam laudantium quo expedita.
            </p>
          </div>

          <div className="col-xs-12 col-md-6">
            <img src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=540&h=327&dpr=1" />
          </div>
        </div>
      </div>



      {/* Meet Our Team Section */}

      <h2 className="text-center text-info">Meet Our Team</h2>

      <div className="container">
          <div className="row">
                          {Data.map((values) => {
                return (
                  <>
                    <Card title={values.title} images={values.image} />
                  </>
                );
              })}
            
          </div>
        </div>
   
    </>
  );
};

export default About;
