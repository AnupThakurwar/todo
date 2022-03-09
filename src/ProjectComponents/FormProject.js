import React, { useState } from "react";
import FormHeader from "./formHeader";
import FormFooter from "./FormFooter";
import FormSidebar from "./FormSidebar";

const FormProject = () => {
  const [InputHandler, setInputHandler] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Question: "",
    Gender: "",
    Interested: "",
  });

  const [Addtoggle, setAddToggle] = useState(false);
  const [view, setView] = useState(false);
  const [JSonData, setJSonData] = useState([]);

  // const GenderHandler = (e) => {
  //   const checkboxM = document.getElementById("checkmale");
  //   const checkboxF = document.getElementById("checkfemale");
  //   if (checkboxM.checked) {
  //     console.log("male");
  //     setInputHandler({...InputHandler, Gender: e.target.value });
  //     return checkboxF.checked == false;
  //   } else if (checkboxF.checked) {
  //     console.log("female");
  //     setInputHandler({...InputHandler, Gender: e.target.value });
  //     return checkboxM.checked == false;
  //   }
  // };

  const submit = () => {
    console.log(InputHandler);
    sessionStorage.setItem("formVal", JSON.stringify(InputHandler));
  };

  const Add = () => {
    console.log(Addtoggle);
    setAddToggle(true);
  };

  const View = () => {
    const data = sessionStorage.getItem("formVal");
    var JsonData = JSON.parse(data);
    setJSonData(JsonData);
    setAddToggle(false);
   
   
  };

  return (
    <>
      <FormHeader />
      <div className="col-12 d-flex justify-centent-center">
        <div className="col-2">
          <FormSidebar 
            add = {Add}
            view = {View}
          />
        </div>
        <div className="col-10 ">
          {/* <button
            className=" btn-lg  bg-success border-radius-2 "
            onClick={Add}
          >
            Add
          </button>

          <button
            className=" btn-lg  bg-success border-radius-2 "
            onClick={View}
          >
            View
          </button> */}
          {Addtoggle ? (
            <div className="body container p-4">
              <div className="container d-flex justify-content-center ">
                <div className="row">
                
                    <div className="form p-4">
                   
                      <label className="text-light fs-4">Name</label>
                      <input
                        className="form-control text-dark bg-light fs-3"
                        placeholder="please enter the name"
                        value={InputHandler.Name}
                        onChange={(e) => {
                          setInputHandler({
                            ...InputHandler,
                            Name: e.target.value,
                          });
                        }}
                      />
               
                      <label className="text-light fs-4">Email</label>
                      <input
                        className="form-control text-dark bg-light fs-3"
                        placeholder="please enter the email"
                        value={InputHandler.Email}
                        onChange={(e) => {
                          setInputHandler({
                            ...InputHandler,
                            Email: e.target.value,
                          });
                        }}
                      />
                      <label className="text-light fs-4">Phone</label>
                      <input
                        className="form-control text-dark bg-light fs-3"
                        placeholder="please enter the number"
                        value={InputHandler.Phone}
                        onChange={(e) => {
                          setInputHandler({
                            ...InputHandler,
                            Phone: e.target.value,
                          });
                        }}
                      />
                      <label className="text-light fs-4">Question</label>
                      <input
                        className="form-control text-dark bg-light fs-3"
                        placeholder="please enter the Question"
                        value={InputHandler.Question}
                        onChange={(e) => {
                          setInputHandler({
                            ...InputHandler,
                            Question: e.target.value,
                          });
                        }}
                      />
                        <br />
                    <h4 className="text-light fs-2">What is Your Gender?</h4>
                    <div className="">
                      <input
                        id="checkmale"
                        type="checkbox"
                        value="male"
                        onChange={(e) =>
                          setInputHandler({
                            ...InputHandler,
                            Gender: e.target.value,
                          })
                        }
                      />
                      <label className="text-light fs-4">Male</label>
                      <input
                        id="checkfemale"
                        type="checkbox"
                        value="female"
                        onChange={(e) =>
                          setInputHandler({
                            ...InputHandler,
                            Gender: e.target.value,
                          })
                        }
                      />{" "}
                      <label className="text-light fs-4">Female</label>
                    </div>
                    <br />
                    <label className="text-light fs-3">
                      Are You Interested in Our Website?
                    </label>
                    <select
                      className="form-select text-dark"
                      placeholder="select the options"
                      value={InputHandler.Interested}
                      onChange={(e) => {
                        setInputHandler({
                          ...InputHandler,
                          Interested: e.target.value,
                        });
                      }}
                    >
                      <option className="text-light bg-light">
                        Select a option
                      </option>
                      <option
                        value="Interested"
                        className="text-light bg-light"
                      >
                        Interested
                      </option>
                      <option
                        value="NotInterested"
                        className="text-light bg-light"
                      >
                        Not-Interested
                      </option>
                    </select>
                    <br />
                    <button
                      className=" btn-lg  bg-success border-radius-2"
                      onClick={submit}
                    >
                      Submit
                    </button>
                  </div>
                    </div>
                  
              
              </div>
            </div>
          ):  <>

        <h1 className="text-light">data</h1>
      
            {JSonData &&
            <table className="text-light border-1 border-light">
              <tr>
                <th className="fs-3 m-2 p-2">Name</th>
                <th className="fs-3 m-2 p-2">Email</th>
                <th className="fs-3 m-2 p-2">Phone</th>
                <th className="fs-3 m-2 p-2">Question</th>
                <th className="fs-3 m-2 p-2">Gender</th>
              </tr>
              <tbody>
                <td className="fs-3 m-2 p-2">{JSonData.Name?JSonData.Name: null}</td>
                <td className="fs-3 m-2 p-2">{JSonData.Email?JSonData.Email:null}</td>
                <td className="fs-3 m-2 p-2">{JSonData.Phone?JSonData.Phone:null}</td>
                <td className="fs-3 m-2 p-2">{JSonData.Question?JSonData.Phone:null}</td>
                <td className="fs-3 m-2 p-2">{JSonData.Gender?JSonData.Gender:null}</td>
              </tbody>
            </table>
          }       
              
      </>}
        </div>
      </div>

      <FormFooter />
    </>
  );
};
export default FormProject;
