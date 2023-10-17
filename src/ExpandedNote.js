import { useState } from 'react';

const ExpandedNote = () => {

    return (
        <div
            className="page-component-container"
            id="expanded-note-page"
            // onClick={() => handleModalClick()}
        >
    
     
          <div className="header expanded-note">
            <div className='header-img-container expanded-note'>
                <img
                    className="back-button expanded-note"
                    style={{ width: "45px" }}
                    src="https://img.icons8.com/ios-filled/256/left.png"
                    alt="back button"
                    //   onClick={() => goBack()}
                />
            </div>
          
            <p 
                className="header-btn expanded-note" 
                // onClick={() => handleClick()}
            >
              New List
            </p>
          </div>
        
        <div
          className="expanded-list-container"
          id="expanded-list"
          style={{ backgroundColor: "pink", width: "100%", height: "200px" }}
        >
          {/* {newTask && <input type="text" onKeyDown={() => handleKeyDown()} />}
          {todoList[index] && (
            <ul className="expanded-list">
              {todoList[index].map((item, index) => (
                <>
                  {item.date && (
                    <div className="list-date-container">{item.date}</div>
                  )}
                  {!item.date && (
                    <li key={index}>
                      <div onClick={() => slashItem(item.id)}>
                        {item.isVisible && item.task}
                        {item.isDone && <del>{item.task}</del>}
                      </div>
                    </li>
                  )}
                </>
              ))}
            </ul>
          )} */}
          <div
            className="expanded-btm-container"
            style={{ background: "pink" }}
          >
            <p 
                className="expanded-list-btn" 
                // onClick={() => renderInput()}
            >
              Add task
            </p>
            <img
              // id={item.id}
              className="expanded-icon"
              src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
              alt="trash button"
            //   onClick={() => handlePopup()}
            />
          </div>
        </div>
        {/* {deletePopup} */}
      </div>
    )
}

export default ExpandedNote;