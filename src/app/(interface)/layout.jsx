import Footer from "./_components/Footer";
import Header from "./_components/Header";


export default  function AuthLayout({ children }) {

   return (
    <div >
      <div className="">
   
       <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}