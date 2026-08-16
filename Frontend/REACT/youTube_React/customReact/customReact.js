// This project is the foundation of how React works internally. You're building a mini version of React's renderer that converts a JavaScript object into a real HTML element.

//jsx => javascript xml => writing html inside js file 

// Normally, React lets you write:
// <a href="https://google.com" target="_blank">
//   Click me
// </a>
// But browsers do not understand JSX. React first converts it into a JavaScript object, then React DOM creates the actual HTML element.

// In one sentence: this project is teaching you how a React element (JavaScript object) is transformed into a real HTML element in the browser.

//Method 1
// function customRender(reactElement , container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.Children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
// }

//Method 2
function customRender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue ;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


// const reactElement = {
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target : '_blank',
//         children : 'click me to visit to google'
//     },
// }

const reactElement = {
    type : 'p',
    children : 'this is a para tag'
}

const mainContainer =  document.querySelector('#root')

customRender(reactElement,mainContainer)
