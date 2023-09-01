import React from "react";
// Import your Widget component
import Wizard from "../../components/wizard/Wizard";
import "./verticalist.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import Moduletreeview from "../../components/moduletreeview/Moduletreeview";
import ModulesList from "../../components/modules/ModulesList";
import Home from "../../pages/home/Home";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";


const VerticalList = () => {
  const handleClick = () => {
    window.alert(`You clicked on Widget`);
    //onClick(); // Call the parent's onClick handler if needed
  };

  const [selectedWidgetId, setSelectedWidgetId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleWidgetClick = (widgetId) => {
    console.log(widgetId);
    setSelectedWidgetId(widgetId);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(false);
  };

  const modalview = {
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const [showChild, setShowChild] = useState(true);
  const [childData, setChildData] = useState("");

  const scrollablemodalbody = {
    maxHeight: "500px", // Set your desired max height here
    overflowY: "auto", // Enable vertical scrollbar if content overflows
    padding: "20px", // Add any other styling properties as needed
    backgroundColor: "#f0f0f0",
  };

  const widgets = [
    { id: 1, title: "XX" },
    { id: 2, title: "YY" },
    { id: 3, title: "ZZ" },
    { id: 4, title: "AA" },
    { id: 5, title: "BB" },
    { id: 6, title: "CC" },
    { id: 7, title: "DD" },
    { id: 8, title: "EE" },
    { id: 9, title: "FF" },
    { id: 10, title: "GG" },
    { id: 11, title: "XX" },
    { id: 12, title: "YY" },
    { id: 13, title: "ZZ" },
    { id: 14, title: "AA" },
    { id: 15, title: "BB" },
    { id: 16, title: "CC" },
    { id: 17, title: "DD" },
    { id: 18, title: "EE" },
    { id: 19, title: "FF" },

    { title: "+" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your form submission logic here
    console.log("Form submitted");
    toggleModal(); // Close the modal after submission
    setShowNewComponent(true);
    setShowChild(!showChild);
  };

  const dataFromParent = "test";

  return (
    <div>
      {showChild ? (
        <div className="template-container">
          <div className="template-wrapper">
            <div className="template">
              <div className="left">
                <div className="widget-list">
                  {widgets.map((widget, index) => (
                    <Wizard
                      key={widget.id}
                      title={widget.title}
                      content={widget.content}
                      data={widget}
                      isSelected={widget.id === selectedWidgetId}
                      onClick={() => handleWidgetClick(widget.id)}
                    />
                  ))}

                  <Modal
                    style={modalview}
                    //size="sm"
                    isOpen={isModalOpen}
                    toggle={() => setIsModalOpen(!isModalOpen)}
                  >
                    <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
                      Pls select submodules and processes
                    </ModalHeader>
                    <ModalBody style={scrollablemodalbody}>
                      <div className="selectTemplate">
                        <Moduletreeview onData={(data) => setChildData(data)} />
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={toggleModal}>
                        Cancel
                      </Button>
                      <Button color="primary" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </ModalFooter>
                  </Modal>

                  <Link
                    to="/industry/vertical/modules"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="arrow">
                      <span></span>
                      <span></span>
                    </div>
                  </Link>
                  <Link to="/industry" style={{ textDecoration: "none" }}>
                    <div class="arrowleft">
                      <span></span>
                      <span></span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="right"></div>
            </div>
          </div>
        </div>
      ) : null}
      {showNewComponent && <Home data={childData} />}
    </div>
  );
};

export default VerticalList;
