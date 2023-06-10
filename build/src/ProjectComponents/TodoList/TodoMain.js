import React, {  useEffect, useState } from "react";
import "../../ProjectComponents/TodoList.css";
import Swal from "sweetalert2";
import Taskcomponent from "./component/TaskComponent";


const TodoMain = () => {
  const [ItemsName, setItemsName] = useState();
  const [upadteItemsId, setUpadteItemsId] = useState();
  const [AllItems, setAllItems] = useState([]);
  const [AllCheckValue, setAllCheckValue] = useState([]);
  const [AllUncheckCheckValue, setAllUncheckCheckValue] = useState(AllItems);
  const [toggleButton, setToggleButton] = useState(true);
  const [viewList, setViewList] = useState([]);
  const[toggleViewList, settoggleViewList] = useState(false);






  const AddItems = () => {
     if(validation()){
      const ItemsData = {
        id: new Date().getTime().toString(),
        name: ItemsName,
        date: new Date().getDate().toString()+ "/" + new Date().getMonth().toString() +"/" + new Date().getFullYear().toString(),
      };
  
      if (toggleButton) {
        setAllItems((preinventory) => {
          return [...preinventory, ItemsData];
        });
        setItemsName("");
        
      } else if (ItemsName && !toggleButton) {
        // console.log("hello");
        setAllItems(
          AllItems.map((item) => {
            if (item.id == upadteItemsId) {
              return { ...item, name: ItemsName };
            }
            return item;
          })
        );
        setToggleButton(true);
        setItemsName("");
       
      } else if (!ItemsName) {
        Swal.fire('please fill the input')
      }
    
     }else{
      console.log("validation cancelled")
     }
   
  };

  const DeleteItems = (items) => {
    let deleteIndex = items.id;
    // console.log("deleteIndex", deleteIndex);
    setAllItems((inventory) => {
      return inventory.filter((ele) => {
        return ele.id !== deleteIndex;
      });
    });

   
  };

  const UpdateItems = (updateitem) => {
    // console.log("updateIndex", updateitem);
    setToggleButton(false);
    const updatedItem = AllItems.filter((item) => {
      return item.id == updateitem.id;
    });
    console.log(updatedItem);
    setItemsName(updatedItem[0].name);
    setUpadteItemsId(updatedItem[0].id);
  };

  const ResetList = () =>{
  //  setAllItems([])
  //  setAllUncheckCheckValue([])
  //  localStorage.removeItem("AllcheckedData")
    
  Swal.fire({
    title: 'Do you want to Reset the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'reset',
    denyButtonText: `Don't Reset`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const checkbox = document.getElementsByName("element")
      for(let i=0; i<AllItems.length;i++){
          if(checkbox[i].checked == true ){
            checkbox[i].checked = false;
      }
   };
      Swal.fire('Reset suceessfully!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  
  }

  const DeleteList = () =>{

      Swal.fire({
        title: 'Do you want to delete the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'delete',
        denyButtonText: `Don't delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            localStorage.clear("AllcheckedData")
            window.location.reload();
          Swal.fire('deleted suceessfully!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
   
  }

  const SaveList = ()=>{
   
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
         
            localStorage.setItem("AllcheckedData",JSON.stringify(AllCheckValue));
          Swal.fire('saved suceessfully!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  

  }



//   console.log(viewListToggle);
  const GetCheckValue = (items,e)=>{
 // all the checked values

    e.target.checked ? (
    
      
    setAllCheckValue((checkedValue)=>{
      items.isChecked = 1  
      const data = [...checkedValue,items]
       
        return [...new Set(data)]
    })) : 
     setAllCheckValue((uncheckitems) => {
      items.isChecked = 0
        return uncheckitems.filter((ele) => {
          return ele.id !== items.id;
        });
      });

    
}


useEffect(()=>{
  console.log("hello")
  const alluncheckeditems = AllItems.filter((item)=>{
    if(item.isChecked !== 1){
      return item
    }
  })
  
  setAllUncheckCheckValue(alluncheckeditems)
},[AllCheckValue])

useEffect(()=>{
  localStorage.setItem("AllItem",JSON.stringify(AllItems));
  setAllUncheckCheckValue(AllItems)
},[AllItems])


const handleClickViewList = () => {
    const data = localStorage.getItem("AllcheckedData")
    const JsonData = JSON.parse(data);
    setViewList(JsonData);
    settoggleViewList(true)
}

const GoBack=(e)=>{
  settoggleViewList(false)         
  setAllItems(AllUncheckCheckValue)
}

const handleAllCheckbox = (e) => {
    
      const data = localStorage.getItem("AllcheckedData")
      const JsonData = JSON.parse(data);
      setViewList(JsonData);
      settoggleViewList(true)      
}

function validation(){
  console.log("hello")
  const x = document.getElementById("inputbox")
  if (x.value == "") {
    Swal.fire('please put any task')
    return false;
  }else{
    return true;
  }
}


  return (
    <div>
      <div className="containers ">
        <div className="row bg-light gx-0">
          <div className="content_back col-12 ">
          {toggleViewList ? (
              <>
                <div className="row d-flex">
                  <div className="col-2 d-flex justify-content-center align-items-center ">
              
                    <input type="checkbox" className="text-light " value="pendingTask" onClick={(e)=>GoBack(e)}/>
                    <span><label className="text-light font2 ">Go to Pending Task</label></span>
                  </div>
                  <div className="col-10 ">
                    <h2 className="font1 text-light d-flex justify-content-center">
                      Completed Tasks
                    </h2>
                  </div>
                </div>
              </>
            ) : (
              <>
               <div className="row d-flex">
               <div className="col-2 d-flex justify-content-center align-items-center ">
           
               <input type="checkbox" className="text-light " value="completeTask" onClick={(e)=>handleAllCheckbox(e)}/>
                    <span><label className="text-light font2">Go to complete Task</label></span>
                  </div>
                  <div className="col-10 ">
                <h1 className="text-light font1">TodoList</h1>
                </div>
                </div>
                <div className="d-flex">
                  <div className="col-2 content_font">
                  </div>
                  <div className="col-8 content_font">
                    <input
                     id="inputbox"
                      className="bg-transparent border border-0"
                      onChange={(e) => {
                        setItemsName(e.target.value);
                      }}
                      value={ItemsName}
                      placeholder="Add Your Task"
                      
                    />
                  </div>
                  <div className="col-2 content_font">
                    <button
                      className="bg-transparent btn_Add"
                      type="button"
                  
                      onClick={AddItems}
                    >
                      {toggleButton ? (
                        <i class="fa fa-circle-plus text-warning bg-transparent fs-1 "></i>
                      ) : (
                        <i class="fa fa-highlighter text-warning bg-transparent fs-1 "></i>
                      )}
                    </button>
                  </div>
                </div>
                <hr />
              </>
            )} 

     
         <Taskcomponent
           toggleViewList={toggleViewList}
           viewList = {viewList}
           list = {  AllItems  }
           GetCheckValue = {GetCheckValue}
           UpdateItems = {UpdateItems}
           DeleteItems = {DeleteItems}
           name = "element"
           /> 
        

          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <button
            className="bg-success btn btn-success content_font px-2 "
            onClick={ResetList}
          >
            Reset
            <br /> List
          </button>
          <button
            className="bg-success btn btn-success content_font"
            onClick={DeleteList}
          >
            Delete
            <br />
            List
          </button>
          <button
            className="bg-success btn btn-success content_font"
            onClick={SaveList}
          >
            Save as
            <br />
            Completed
          </button>
          <button
            className="bg-success btn btn-success content_font"
            onClick={handleClickViewList}
          >
            view
            <br />
            List
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoMain;
