import Image from "next/image";
import arrow from "/public/assets/icons/arrow.svg";
import heroGroup from "/public/assets/images/heroGroup.svg";
import heroSingle from "/public/assets/images/heroSingle.svg";
import ornament from "/public/assets/images/ornament.svg";
import star from "/public/assets/images/star.svg";

const Hero = () => {
    return (
        <div className='mx-auto lg:flex md:flex h-[130vh] lg:bg-heroStroke md:bg-heroStroke sm:bg-heroStrokeSm bg-no-repeat  bg-[right_top_3rem]  bg-auto'>
          <div className=" lg:w-3/5">
          <div className="">
          <h1 className="stroke text-primary sm:text-[50px]  md:text-[100px] lg:text-[140px] text-right font-bold leading-none mt-10">React</h1>
          </div>
          <h1 className="text-primary  sm:text-[50px]  md:text-[100px] lg:text-[140px] text-right font-bold leading-none mt-10"> Conference</h1>
        <div className="lg:flex lg:flex-row flex flex-col-reverse pl-10  ">
          <div className="md:mx-auto  md:mt-10 sm:flex-none relative" >
            <Image className="lg:w-[250px] md:w-[250px] sm:w-full"  src={heroSingle} alt=""/>
            <Image className="z-[-1] absolute -bottom-28 lg:left-40 sm:right-0" src={ornament} alt=""/>
            </div>
            <div className="mx-auto text-gray-500 max-w-md text-justify flex flex-col sm:mt-5">
                <p>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</p>
                <button className="bg-brightSun  mx-auto  rounded-[30px] py-2  w-fit px-5 sm:my-5">
                  <div className="flex item-center">
                    <h4 className="mr-2">Buy Tickets</h4>
                    <Image src={arrow} alt="arrow"/>
                  </div>
                </button>
            </div>
        </div>
         </div>  
      
        <div  className="w-[350px] sm:mt-10 flex items-center ">
      <div className="relative">
        <Image className="lg:w-[350px] md:w-[450px] sm:w-[200px] " src={heroGroup} alt=""/>
        <Image className="absolute lg:w-[100px] sm:w-[50px] bottom-0  right-[85%]  " src={star} alt=""/>
      </div>
        </div>  
        </div>
    );
};

export default Hero;