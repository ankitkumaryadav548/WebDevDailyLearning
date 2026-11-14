
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children} </body>
    </html>
  );
}


// What is layout.js?
// Imagine your application has 10 pages.

// Every page needs:
// - Navbar
// - Footer
// - Common page structure
// Do you want to write the same navbar and footer 10 times?

// No.

// We use layouts 
// so layouts.js basically content code of shared file which all files need 