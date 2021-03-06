'use strict';

// IN ORDER: left, root, right
const inOrderTraversal = (rootNode, array) => {
  if (!rootNode) return undefined;
  inOrderTraversal(rootNode.left, array);
  array.push(rootNode.value);
  inOrderTraversal(rootNode.right, array);
  return array.join(',');
};

export default inOrderTraversal;
