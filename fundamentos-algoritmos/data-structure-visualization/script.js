// Variables for data structures
let list = [];
let stack = [];
let queue = [];
let root = null;

// Binary Tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to show the buttons and inputs
function showStructure(type) {
  const actions = document.getElementById('actions');
  const display = document.getElementById('display');
  const inputContainer = document.getElementById('input-container');

  display.innerHTML = '';
  actions.innerHTML = '';
  inputContainer.innerHTML = '';

  inputContainer.innerHTML = `
    <input type="number" id="valueInput" placeholder="Enter a number">
  `;

  // Options for data structures
  if (type === 'list' || type === 'stack' || type === 'queue') {
    actions.innerHTML = `
      <button onclick="add('${type}')">Add</button>
      <button onclick="remove('${type}')">Remove</button>
    `;
    updateDisplay(type);
  } else if (type === 'tree') {
    actions.innerHTML = `
      <button onclick="addToTree()">Add Node</button>
      <button onclick="showTree()">Show Tree</button>
    `;
  }

  const input = document.getElementById('valueInput');
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      if (type === 'tree') addToTree();
      else add(type);
    }
  });
}

// Add the value to the selected data structure
function add(type) {
  const value = parseInt(document.getElementById('valueInput').value);
  if (isNaN(value)) {
    alert('Please enter a valid number.');
    return;
  }

  if (type === 'list') {
    list.push(value);
    updateDisplay('list');
  } else if (type === 'stack') {
    stack.push(value);
    updateDisplay('stack');
  } else if (type === 'queue') {
    queue.push(value);
    updateDisplay('queue');
  }

  document.getElementById('valueInput').value = '';
}

// Remove the last value from the selected data structure
function remove(type) {
  if (type === 'list') {
    list.pop();
    updateDisplay('list');
  } else if (type === 'stack') {
    stack.pop();
    updateDisplay('stack');
  } else if (type === 'queue') {
    queue.shift();
    updateDisplay('queue');
  }
}

// Update the display based on the selected data structure
function updateDisplay(type) {
  const display = document.getElementById('display');
  display.innerHTML = '';

  let data = [];
  if (type === 'list') data = list;
  else if (type === 'stack') data = stack;
  else if (type === 'queue') data = queue;

  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'item';

    if (type === 'stack' && index === data.length - 1) {
      div.innerHTML = `<strong>${item}</strong><br><small>TOP</small>`;
    } else if (type === 'list') {
      div.innerHTML = `<small>[${index}]</small><br>${item}`;
    } else if (type === 'queue' && index === 0) {
      div.innerHTML = `<strong>${item}</strong><br><small>FRONT</small>`;
    } else {
      div.textContent = item;
    }

    display.appendChild(div);
  });

  // Note to display on the screen
  const note = document.createElement('div');
  note.style.marginTop = '10px';
  note.style.fontSize = '14px';
  note.style.color = '#666';

  if (type === 'stack') note.innerHTML = '↑ Last-In, First-Out (LIFO)';
  if (type === 'queue') note.innerHTML = '→ First-In, First-Out (FIFO)';
  if (type === 'list') note.innerHTML = '↔ Random Access / Any Order';

  display.appendChild(note);
}

// Tree functions
function addToTree() {
  const value = parseInt(document.getElementById('valueInput').value);
  if (isNaN(value)) {
    alert('Please enter a valid number.');
    return;
  }
  root = insertTreeNode(root, value);
  showTree();
  document.getElementById('valueInput').value = '';
}

// Insert a new node into the binary tree
function insertTreeNode(node, value) {
  if (!node) return new TreeNode(value);
  if (value < node.value) node.left = insertTreeNode(node.left, value);
  else node.right = insertTreeNode(node.right, value);
  return node;
}

// Show the binary tree structure
function showTree() {
  const display = document.getElementById('display');
  display.innerHTML = '';
  const treeHTML = buildTreeHTML(root);
  display.appendChild(treeHTML);
}

// Build the HTML structure for the binary tree
function buildTreeHTML(node) {
  if (!node) return document.createElement('div');

  const nodeEl = document.createElement('div');
  nodeEl.className = 'node';
  nodeEl.textContent = node.value;

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';

  const children = document.createElement('div');
  children.className = 'tree-branch';

  if (node.left) children.appendChild(buildTreeHTML(node.left));
  if (node.right) children.appendChild(buildTreeHTML(node.right));

  container.appendChild(nodeEl);
  if (children.childNodes.length > 0) container.appendChild(children);

  return container;
}
