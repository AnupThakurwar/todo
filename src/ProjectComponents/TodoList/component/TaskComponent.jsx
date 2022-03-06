import React from "react";
import ViewListItems from "../ViewListItems";

const Taskcomponent = ({viewList,list,GetCheckValue,UpdateItems,DeleteItems,toggleViewList,name}) => {

    return (
        <>
          <ol>
              {!toggleViewList ? (
                list.map((items) => {
                  return (
                    <>
                      <div className="d-flex justify-content-start">
                        <div className="col-2 content_font">
                          <input
                            type="checkbox" 
                            name= {name}
                            onClick={(e) => {
                              GetCheckValue(items, e);
                            }}
                          />
                        </div>
                        <div className="col-8 content_font">
                       
                          <li className="text-dark h5 text-break align-items-center " key={items.id}>
                            {items.name} 
                          </li>
                         <li  className="text-dark h5  " >
                         {new Date().getDate().toString()+ "/" + new Date().getMonth().toString() +"/" + new Date().getFullYear().toString()}
                         </li>
                        </div>
                        <div className="col-2 content_font align-items-center">
                          <i
                            className="fa fa-highlighter text-warning bg-transparent"
                            onClick={() => {
                              UpdateItems(items);
                            }}
                          ></i>
                          &nbsp;
                          <i
                            className="fa fa-trash text-danger bg-transparent"
                            onClick={() => {
                              DeleteItems(items);
                            }}
                          ></i>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <ViewListItems viewList={viewList} />
              )}
            </ol>
        
        </>
    );


}

export default Taskcomponent