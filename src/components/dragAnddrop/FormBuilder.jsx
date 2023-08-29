import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Droppable, Draggable } from "react-beautiful-dnd";

const FormBuilder = () => {
  const [controls, setControls] = useState([]);

  useEffect(() => {
    const items = [
      {
        type: "text",
        label: "Text Input",
      },
      {
        type: "number",
        label: "Number Input",
      },
    ];
    setControls(items);
  }, []);

  const handleDragStart = (item) => {
    item.isDragging = true;
  };

  const handleDragOver = () => {
    // Do nothing
  };

  const handleDrop = (item) => {
    item.isDragging = false;
  };

  const handleDragEnter = (draggedItem) => {
    const dataId = draggedItem.dataTransfer.getData("data-id");
    if (dataId) {
      setControls([...controls, { ...draggedItem, isDragging: false }]);
    }
  };

  return (
    <div>
      <Droppable droppableId="controls">
        {(provided) => (
          <div
            {...provided.droppableProps}
            style={{
              width: "100%",
              height: "200px",
              border: "1px solid black",
            }}
          >
            {controls.map((control) => (
              <Draggable
                key={control.id}
                isDragging={control.isDragging}
                data-id={control.id}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {({ dragHandleProps }) => (
                  <div
                    {...dragHandleProps}
                    style={{
                      width: "100px",
                      height: "50px",
                      border: "1px solid black",
                    }}
                  >
                    <h3>{control.label}</h3>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>

      <div style={{ width: "200px" }}>
        <Droppable droppableId="controls">
          {(provided) => (
            <div
              {...provided.droppableProps}
              style={{
                width: "100%",
                height: "200px",
                border: "1px solid black",
              }}
            >
              {controls.map((control) => (
                <Draggable
                  key={control.id}
                  isDragging={control.isDragging}
                  droppableId="controls"
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onDragEnter={handleDragEnter}
                >
                  {({ dragHandleProps }) => (
                    <div
                      {...dragHandleProps}
                      style={{
                        width: "100px",
                        height: "50px",
                        border: "1px solid black",
                      }}
                    >
                      <h3>{control.label}</h3>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default FormBuilder;
