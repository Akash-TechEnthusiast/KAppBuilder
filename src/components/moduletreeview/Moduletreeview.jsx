import FolderTree, { testData } from "react-folder-tree";
import "react-folder-tree/dist/style.css";
import { useState } from "react";

const Moduletreeview = ({ onData }) => {
  const [childData, setChildData] = useState("");

  const onTreeStateChange = (state, event) => {
    console.log(state, event);
    setChildData(state);

    // Send data to the parent component whenever it changes
    onData(state);
  };

  return <FolderTree data={testData} onChange={onTreeStateChange} />;
};
export default Moduletreeview;
