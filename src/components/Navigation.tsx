import Image from "next/image";
import Menu from "/public/assets/icons/menu.svg";
import Logo from "/public/assets/icons/react.svg";
const Navigation = () => {
    return (
         <div className="flex justify-between max-w-4xl mx-auto py-5 ">
          <Image className="clickable" src={Logo} alt=""/>
          <div className="flex">
          <h3 className="clickable mr-10 sm:hidden lg:block md:block text-primary ">About us</h3> 
          <h3 className=" mr-10 sm:hidden  lg:block md:block text-primary">What we do</h3> 
          <h3 className=" mr-10 sm:hidden  lg:block md:block text-primary">Our Work</h3> 
          </div>
          <Image className="clickable" src={Menu} alt=""/>
        </div>
    );
};

export default Navigation;