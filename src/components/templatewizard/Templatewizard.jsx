import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import HouseIcon from "@mui/icons-material/House";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LanIcon from "@mui/icons-material/Lan";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import logo from "../../images/logo.png";
import newtemplate from "../../images/newtemplate.png";
import oldtemplate from "../../images/oldtemplate.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./navbar.scss";
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import React, { useState } from "react";

import Widgets from "../../components/widgets/Widgets";

const Templatewizard = () => {
  const selectTemplate = {
    display: "flex",
    marginTop: "-7px",
  };

  const modalview = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const widgetview = {
    width: "100px",
    height: "100px",
    marginRight: "10px", // Apply margin-right inline
    flexDirection: "column",
  };

  const centeredimage = {
    maxWidth: "100%",
    maxHeight: "82%",
  };

  const textdisplay = {
    display: "flex",
    alignItems: "center", // Apply align-items inline
    justifyContent: "center",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="leftItems">
          <img src={logo} alt="Logo" className="logo" />
          <div className="search">
            <input type="search" placeholder="search..."></input>
            <SearchOutlinedIcon />
          </div>
        </div>

        <div className="items">
          <div className="item">
            <HouseIcon className="icon" />
            Home
          </div>

          <Modal
            style={modalview}
            //size="sm"
            isOpen={isModalOpen}
            toggle={() => setIsModalOpen(!isModalOpen)}
          >
            <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
              How would you like to create your new form?
            </ModalHeader>
            <ModalBody>
              {/**   <form>
                <Row>
                  <Col lg={12}>
                    <div>
                      <lable htmlFor="name">Select Industry</lable>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Industry"
                      ></input>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <lable htmlFor="name">Select Scale</lable>
                      <inp
                        type="text"
                        className="form-control"
                        placeholder="Enter scale"
                      ></input>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <lable htmlFor="name">Select Module</lable>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Module"
                      ></input>
                    </div>
                  </Col>
                </Row>
              </form> */}
              <div className="selectTemplate" style={selectTemplate}>
                {/**  <Widgets /> */}

                <div className="widget" style={widgetview}>
                  <img
                    style={centeredimage}
                    src={newtemplate}
                    alt="Image with Box Shadow"
                  />
                  <p style={textdisplay}>create from scratch</p>
                </div>
                <div className="widget" style={widgetview}>
                  <img
                    style={centeredimage}
                    src={oldtemplate}
                    alt="Image with Box Shadow"
                  />
                  <p style={textdisplay}>choose template</p>
                </div>
              </div>
            </ModalBody>
          </Modal>

          <div className="item">
            <DescriptionIcon className="icon" />
            Form
          </div>

          <div className="item">
            <LanIcon className="icon" />
            Role
          </div>

          <div className="item" onClick={() => setIsModalOpen(true)}>
            <AddCircleIcon className="icon" />
            Template Builder
          </div>

          <div className="item">
            <StorageIcon className="icon" />
            Master Data
          </div>

          <div className="item">
            <SettingsIcon className="icon" />
            Settings
          </div>

          <div className="item">
            <NotificationsNoneIcon className="icon" />

            <div className="center">1</div>
          </div>

          <div className="item">
            <AccountCircleIcon className="icon" />
          </div>

          <div className="item">
            <LogoutIcon className="icon" />
          </div>

          {/** 

         <div className="item">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"
              alt="GeeksforGeeks logo"
              className="avatar"
            ></img>
          </div> 

          */}
        </div>
      </div>
    </div>
  );
};

export default Templatewizard;
