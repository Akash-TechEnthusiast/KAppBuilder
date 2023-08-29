import React from 'react';

const TreeViewNode = ({ node, onCheck, onToggle }) => {
  const handleCheck = () => {
    onCheck(node.id);
  };

  const handleToggle = () => {
    onToggle(node.id);
  };

  return (
    <div>
      <input type="checkbox" checked={node.checked} onChange={handleCheck} />
      <button onClick={handleToggle}>
        {node.expanded ? '-' : '+'}
      </button>
      <span>{node.label}</span>
      {node.expanded && node.children && node.children.map((childNode) => (
        <TreeViewNode key={childNode.id} node={childNode} onCheck={onCheck} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TreeViewNode;
