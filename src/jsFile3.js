var render = (header, node) => {
    node.innerHTML = header;
};

var header = `<h1>Hello world!</h1><h2>Test</h2>`;
render(header, document.querySelector('#main'));