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
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="search..."></input>
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item">
            <HouseIcon className="icon" />
            Home
          </div>

          <div className="item">
            <DescriptionIcon className="icon" />
            Form
          </div>

          <div className="item">
            <LanIcon className="icon" />
            Role
          </div>

          <div className="item">
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
            <LogoutIcon className="icon" />
          </div>

          <div className="item">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"
              alt="GeeksforGeeks logo"
              className="avatar"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
