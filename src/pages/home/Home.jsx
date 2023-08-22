// import Sidebar from "../../components/sidebar/Sidebar";
import CircularProgress from "@mui/material/CircularProgress";

import "./home.scss";

import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";

const Home = () => {
  return (
    <div className="home">
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Home;
