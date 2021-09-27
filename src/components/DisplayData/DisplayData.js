import React, { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import Cart from "../Cart/Cart";
import "./DisplayData.css";

const DisplayData = () => {
  const [motivators, setMotivators] = useState([]);
  const [selectedMotivator, setSelectedMotivator] = useState([])

  const url = "./fakeData.JSON";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMotivators(data));
  }, []);

  const handleHireMe = (data)=>{
      const concatArray = [...selectedMotivator, data];
      setSelectedMotivator(concatArray);
  }

  return (
    <>
      <div className="row">
        <div className="col col-9">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {motivators.map((motivator, ind) => (
              <Cart handleHireMe={handleHireMe} key={motivator._id} data={motivator}></Cart>
            ))}
          </div>
        </div>
        <div className="col col-3">
            <Aside data={selectedMotivator}></Aside>
        </div>
      </div>
    </>
  );
};

export default DisplayData;
