import React, { useState } from "react";
import TreeViewNode from "./TreeViewNode";
//import TreeView1 from "react-bootstrap-treeview";
import TreeView from "@material-ui/core/TreeView";
import TreeItem from "@material-ui/core/TreeItem";

const initialTreeData = [
  {
    id: 1,
    label: "Node 1",
    checked: false,
    expanded: false, // New property to manage expand/collapse state
    children: [
      {
        id: 2,
        label: "Node 1.1",
        checked: false,
      },
      {
        id: 3,
        label: "Node 1.2",
        checked: false,
      },
    ],
  },
  // ... more tree nodes
];

const data1 = [
  {
    key: "node1",
    label: "Node 1",
    children: [
      {
        key: "node1-1",
        label: "Node 1-1",
      },
      {
        key: "node1-2",
        label: "Node 1-2",
      },
    ],
  },
  {
    key: "node2",
    label: "Node 2",
  },
];

const data = [
  {
    key: "node1",
    label: "Node 1",
    children: [
      {
        key: "node1-1",
        label: "Node 1-1",
      },
      {
        key: "node1-2",
        label: "Node 1-2",
      },
    ],
  },
  {
    key: "node2",
    label: "Node 2",
  },
];

const Moduletreeview = () => {
  const [expandedNodes, setExpandedNodes] = useState(["node1"]);

  const handleExpand = (key) => {
    setExpandedNodes([...expandedNodes, key]);
  };

  const handleCollapse = (key) => {
    setExpandedNodes(expandedNodes.filter((node) => node !== key));
  };

  const [treeData, setTreeData] = useState(initialTreeData);

  const handleNodeCheck = (id) => {
    // ... (same as before)
  };

  const handleNodeToggle = (id) => {
    const updatedTreeData = treeData.map((node) => {
      if (node.id === id) {
        return { ...node, expanded: !node.expanded };
      } else if (node.children) {
        return {
          ...node,
          children: node.children.map((childNode) =>
            childNode.id === id
              ? { ...childNode, expanded: !childNode.expanded }
              : childNode
          ),
        };
      }
      return node;
    });
    setTreeData(updatedTreeData);
  };

  return (
    <div>
      <TreeView
        items={data}
        expandedNodes={expandedNodes}
        onExpand={(node) => setExpandedNodes([...expandedNodes, node.key])}
        onCollapse={(node) =>
          setExpandedNodes(expandedNodes.filter((n) => n !== node.key))
        }
      >
        {data.map((item) => (
          <TreeItem key={item.key} label={item.label} />
        ))}
      </TreeView>
    </div>
  );
};

export default Moduletreeview;
