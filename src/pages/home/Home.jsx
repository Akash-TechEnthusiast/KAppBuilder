// import Sidebar from "../../components/sidebar/Sidebar";
import CircularProgress from "@mui/material/CircularProgress";

import "./home.scss";

import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Sidebar from "../../components/sidebar/Sidebar";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets"></div>
      </div>
    </div>
  );
};

export default Home;
