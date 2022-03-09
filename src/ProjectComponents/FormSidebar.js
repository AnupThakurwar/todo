import React from "react";

const FormSidebar = (props) => {
  return (
    <>
      <div className="sidebar">
        <br />
        <button onClick={props.add}  className="bg-transparent border-0">
        <div className="bg-transparent">
          <i className="fa fa-pen fs-2 bg-transparent text-warning" ></i>
          <label className="text-light fs-4 bg-transparent">Add</label>
        </div>
        </button>
        <br />
       
        <button onClick={props.view} className="bg-transparent border-0 ">
        <div className="bg-transparent" >
          <i className="fa fa-desktop fs-2 bg-transparent text-success" ></i>
          <label className="text-light fs-4 bg-transparent">view</label>
        </div>
        </button>
      </div>
    </>
  );
};
export default FormSidebar;
