// // import Product from "./assets/Product";

// import Card from "./Card";

// function App() {
//   // const a = 10;
//   // let toggle = true;
//   // let prodt;
//   // if(toggle){   // conditional rendering 
//   //       prodt = 
//   //       <>
//   //         <Product name="HP laptop" price={60}/>
//   //         <Product name="acer laptop" price={10}/>
//   //         <Product name="lenavo laptop" price={20}/>
//   //       </>
//   //     }
//   //     else{
//   //       prodt = <>
//   //       <Product name="Nothing laptop" price={30}/>
//   //       <Product name="Mac laptop" price={40}/>
//   //       </>
//   //     }

//   return (
//     <>
//     <Card/>
    
//     {/* <section>drftty</section> */}
   

//       {/* <h1>Hello React.js</h1>
//       <p>Hii everyone</p>
//       <p>Value of a is {a}</p>
//       <h1>Product Page</h1>
//       {prodt} */}


      
//     </>
//   )
// }

// export default App


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




//import Product from './Product';
import Card from './Card';
import  Events  from './Events';
const App = () => {
  // const a = 10;
  // let toggle = true;
  const arr = [
    {
      title: "Chess Board",
      img: "https://cdn.exoticindia.com/images/products/original/homeandliving/dde948-6inch.jpg",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore in, magnam earum, minima natus quaerat officiis nobis temporibus iste veniam, eos sint delectus quo! Eaque accusantium quod fugit",
    },
    {
      title: "Chess Board",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCteLbIbkMjbeOUbNcIoNlnv67d4wA5E1DwMFGANSAkQ&s=10",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore in, magnam earum, minima natus quaerat officiis nobis temporibus iste veniam, eos sint delectus quo! Eaque accusantium quod fugit"
    },
    {
      title: "Chess Board",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Sion8aXqgKle-QJ72QQIVAcPhCKA7QuZzKKA3d6K8QIF5k8Oh40ke7uZ&s=10",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore in, magnam earum, minima natus quaerat officiis nobis temporibus iste veniam, eos sint delectus quo! Eaque accusantium quod fugit"
    }
  ];

  return (
    <div>
    {/* <div className='Main'> */}
    {/* //   <Card title={arr[0].title} img={arr[0].img} desc={arr[0].desc} />
    //   <Card  title={arr[1].title} img={arr[1].img} desc={arr[1].desc} />
    //   <Card  title={arr[2].title} img={arr[2].img} desc={arr[2].desc} /> */}
      {/* <h1>Hello World</h1>
      <h2>Hi, Everyone</h2>
      <h3>{a}</h3>

      <h1>Product Page</h1>

      {toggle ? (
        <>
          <Product name="HP" price={60} />
          <Product name="Vivo" price={30} />
          <Product name="Acer" price={50} />
        </>
      ) : (
        <>
          <Product name="Lenovo" price={75} />
          <Product name="Macbook" price={130} />
        </>
      )}

    <h3>Vivo</h3> */}
    <Events/>
    {/* </div> */}
    </div>
  );
};

export default App;