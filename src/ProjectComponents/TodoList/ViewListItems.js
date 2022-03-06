import React from "react";

const ViewListItems = ({ viewList }) => {
  return (
    <div>
      {viewList?.map((items) => {
        return (
          <>
            <div className="row">
              <div className="col">
                <ol>
                  <li className="text-dark " key={items.id}>
                    <div className="col-6 d-flex justify-content-center align-items-center text-dark content_font">
                      {items.date}
                    </div>
                    <div className="col-6 text-dark content_font">
                      {items.name}
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default ViewListItems;
