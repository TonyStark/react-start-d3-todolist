
import React from 'react';
function UI({arr,task,handleChange,handleClick}) {
  
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="title">
            <h3 className="">Todo List</h3>
          </div>
          <div className="row">
            <div className="col-8">
              <input type="text" onChange={handleChange} className="form-control" placeholder="Enter Task" autoComplete="off"/>
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={handleClick}>ADD</button>
            </div>
          </div>
          {
            arr.map((el)=>{
              return (
                <div className="row my-3">
                  <div className="col-8">
                    <input type="text" className="form-control" value={el.task} disabled/>
                  </div>
                  
                </div>
              )
            })
          }
          
        </div>
      </div>
    </main>
  );
}

export default UI;
