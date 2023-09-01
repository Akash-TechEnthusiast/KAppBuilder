// import Sidebar from "../../components/sidebar/Sidebar";
import CircularProgress from "@mui/material/CircularProgress";

import "./home.scss";

import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Sidebar from "../../components/sidebar/Sidebar";
import Moduledescription from "../../components/moduledescription/Moduledescription";
import Processselection from "../../components/processselection/Processselection";
import { useEffect } from "react";
const Home = (props) => {
  useEffect(() => {
    // This effect will run when the component is first mounted.
    console.log(
      "ChildComponent has mounted.",
      props.data,
      props.moduleId,
      props.verticalId
    );

    // You can perform any initial actions here.
  }, []);

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
