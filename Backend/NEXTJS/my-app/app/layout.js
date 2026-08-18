// import "./globals.css";
import Footer from "./component/Footer";
import Navbar from "./component/navbar";

export default function RootLayout({children}) {
//RootLayout is function name,we can change it but for clear and conventional name we write
//  here children basically means:
// "Put the current page's content here."
    // console.log(props.children)
  // console.log(children)
  // console.log(children)
  return (    //Your function needs to return JSX.
              //This JSX describes the HTML structure that Next.js should render.
    <html lang="en">
     {/* //lang="en" tells the browser and accessibility tools:
                    //"The content of this website is primarily English." */}
    
      <body className="min-h-full flex flex-col">
        {/* <Navbar> </Navbar> //same   */}
        <Navbar/>  
        {/* React sees this as: "Render the component called Navbar." */}
        {children}
        {/* children is the current page content. it very*/}
        <Footer/>
        {/* React sees this as: "Render the component called Footer." */}
      </body>
    </html>
  );
}
