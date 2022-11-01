import Image from "next/image";
import { ConferenceTypes } from "../../graphql/servicers/conference";
import Arrow from "/public/assets/icons/upDownArrow.svg";


const Schedules = ({schedulesInfo}:{schedulesInfo:ConferenceTypes["schedules"]}) => {
    // const {day,description,location}= schedulesInfo;
    console.log(schedulesInfo[1])

    return (
      <div className="flex mt-5 "  draggable="true">
  { schedulesInfo&&<details className=" lg:contents w-full "> 
                <summary  className="cursor-pointer flex items-center  border rounded lg:w-[20%] h-[70px] ">
                    <div  className="bg-white m-2 p-2 rounded" >
                    <Image src={Arrow} alt="up down arrow"/>
                    </div>
                    <h3 className="text-primary font-bold">Schedules</h3>
               </summary>
                <article className="flex flex-wrap justify-center lg:ml-12 lg:w-[70%] lg:mt-0 md:mt-10 sm:mt-10 ">
             {schedulesInfo.map((sch,index)=>{
                const {day,description,location}= sch;
                return<div className="lg:w-[200px] text-primary p-2 bg-purple-200 rounded m-2 text-center" key={index} >
                     <h3 >Name: {location?.name}</h3>
                     <p>About: {location?.about}</p>
                     <h4>City: {location?.city}</h4>
                    <h4>Address: {location?.address}</h4>
                  <div className="flex justify-between">
                  <h5>{day}</h5>
                    <h5>{description}</h5>
                  </div>  
                </div>
             })}
                </article>
              </details>}
        </div>
    );
};

export default Schedules;