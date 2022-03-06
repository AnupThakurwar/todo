import React,{useState} from "react";
import TodoMain from "./TodoMain";

const ViewList = () => {
  const [goHome, setGoHome] = useState(false);
 
 
  const GoBack = () => {
    console.log("yes")
    window.location.reload();
  };
  return (
    <div>
      <div className="row d-flex">
        <div className="col-2 d-flex justify-content-center align-items-center ">
          <i
            className="fa fa-circle-arrow-left text-light fs-4"
            onClick={
                GoBack
            }
          ></i>
        </div>
        <div className="col-10 ">
          <h2 className="font1 text-light d-flex justify-content-center">
            Completed Tasks
          </h2>
        </div>
      </div>
      {/* {goHome && <TodoMain/>} */}
    </div> 
  );
};
export default ViewList;
