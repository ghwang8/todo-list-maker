import { useState } from "react";

const CreateNote = () => {
    const [tasks, setTasks] = useState([]);
    return (
        <div className="page-component-container" id="create-note-page">
             <div className="create-input-container">
                <input
                    className="create-input"
                    type="text"
                    placeholder="What needs to get done?"
                    // onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
            <div className="create-note-content-container">
                {tasks.length === 0 && (
                    <div>
                        <p className="placeholder-txt">No tasks yet...</p>
                    </div>
                )}
                <div className="create-task-container">
                    <ul className="task-list">
                    {tasks.map((item, index) => (
                        <li className="task-list-item" key={index}>
                        {/* {item.isVisible && (
                            <div className="task-text">
                            <p key={`text${index}`}>{item.task}</p>
                            </div>
                        )}
                        {item.isVisible && (
                            <span className="task-item-btn-container">
                            <img
                                className="image-icon"
                                style={{ width: "25px" }}
                                src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                                alt="trash button"
                                // onClick={() => deleteItem(index)}
                            />
                            <img
                                className="image-icon"
                                id={item.id}
                                style={{ width: "25px" }}
                                src="https://cdn-icons-png.flaticon.com/512/2740/2740651.png"
                                alt="trash button"
                                // onClick={(e) => editItem(e, true)}
                            />
                            </span>
                        )}
                        {item.popup === true && (
                            <div className="edit-task-container">
                            <input
                                className="edit-task-input"
                                type="text"
                                defaultValue={item.task}
                                // onChange={(e) => setEditText(e.target.value)}
                            />
                            <div className="edit-task-button-container">
                                <button
                                id="cancel-button"
                                className="edit-task-button"
                                //   onClick={() => closePopup()}
                                >
                                Cancel
                                </button>
                                <button
                                id="done-button"
                                className="edit-task-button"
                                //   onClick={(e) => handleEdit(e, index)}
                                >
                                Done
                                </button>
                                  
                            </div>
                                 
                            </div>
                        )} */}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="create-note-btn-container">
                <button 
                className="create-note-btn create-list" 
                // onClick={(e) => createTodoList(e)}
                >
                    Create List
                </button>
                <button
                className="create-note-btn go-to-noteboard" 
                // onClick={(e) => handleClick(e)}
                >
                    Notes Board
                </button>
            </div>
        </div>
    )
}

export default CreateNote;