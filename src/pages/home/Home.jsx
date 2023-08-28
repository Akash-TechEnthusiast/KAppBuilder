// import Sidebar from "../../components/sidebar/Sidebar";
import CircularProgress from "@mui/material/CircularProgress";

import "./home.scss";

import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Sidebar from "../../components/sidebar/Sidebar";
import Moduledescription from "../../components/moduledescription/Moduledescription";
import Processselection from "../../components/processselection/Processselection";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <Moduledescription />
        <Processselection />
        <div className="widgets"></div>
      </div>
    </div>
  );
};

export default Home;
