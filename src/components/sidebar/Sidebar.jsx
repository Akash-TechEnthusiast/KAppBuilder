// import React, { Component }  from 'react';
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import GiteIcon from "@mui/icons-material/Gite";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import LogoutIcon from "@mui/icons-material/Logout";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PaymentIcon from "@mui/icons-material/Payment";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          {/**  <span className="logo">Home</span> */}
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>HRMS</span>
          </li>

          <li>
            <GroupIcon className="icon" />
            <span>PAYROLL</span>
          </li>

          <li>
            <GroupIcon className="icon" />
            <span>PROCURMENT </span>
          </li>

          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>INVENTORY</span>
          </li>

          <li>
            <FeaturedPlayListIcon className="icon" />
            <span>FINANCE</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colourOption"></div>
        <div className="colourOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
