import Product from "./assets/Product";
function App() {
  const a = 10;
  let toggle = true;
  let prodt;
  if(toggle){   // conditional rendering 
        prodt = 
        <>
          <Product name="HP laptop" price={60}/>
          <Product name="acer laptop" price={10}/>
          <Product name="lenavo laptop" price={20}/>
        </>
      }
      else{
        prodt = <>
        <Product name="Nothing laptop" price={30}/>
        <Product name="Mac laptop" price={40}/>
        </>
      }

  return (
    <>

      <h1>Hello React.js</h1>
      <p>Hii everyone</p>
      <p>Value of a is {a}</p>
      <h1>Product Page</h1>
      {prodt}
      
    </>
  )
}

export default App


// reconcilation => 
// comparing virtual1(old) and virtual2(new) => 2 typw od virtual dom 
// using deffing algorithm

//if a = 10;
// then after we have to update Value of a to 11 then 
//1stly compare between virtual1(old) and virtual2(new) dom 
// then after we will compare virtual with real dom 

// main.jsx is entry point of react App
//app.jsx is a component

//component name should be written in captital lettel

// two way to export 
// 1. by default
// 2. by naming under {}

//entry is main.jsx ok so if i have to render any component globally then only we have to render in main.jsx file other wise we have to render particular page or component to App.jsx file  only 

//return only stemenet(output) not expression 
// statement => output of any expression
// expression => calculation 

