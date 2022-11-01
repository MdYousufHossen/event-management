import Image from "next/image";
import { ConferenceTypes } from "../../graphql/servicers/conference";
import Arrow from "/public/assets/icons/upDownArrow.svg";


const Location = ({locationInfo}:{locationInfo:ConferenceTypes["locations"]}) => {
    const {name,about,image}= locationInfo;
    
    const myLoader=()=>{
      return `${image?.url}`;
    }
    return (
      <div className="flex mt-5 "  draggable="true">
  {locationInfo&&<details  className=" lg:contents w-full"> 
                <summary  className="cursor-pointer flex items-center  border rounded lg:w-[20%] h-[70px]">
                    <div  className="bg-white m-2 p-2 rounded" >
                    <Image src={Arrow} alt="up down arrow"/>
                    </div>
                    <h3 className="text-primary font-bold">Locations</h3>
               </summary>
                <article className=" bg-purple-100 p-2 rounded lg:ml-12 lg:w-[70%] lg:mt-0 md:mt-10 sm:mt-10 ">
              <div className="flex  ">
                    <Image 
                      className=" rounded"
                      loader={myLoader}
                        src={image?.url.toString()} width={150} height={50} alt={name?name?.toString():"Image is not available"}/>
                <div className="lg:flex items-center justify-between w-full ml-6">
                <h4 className="font-bold ">{name?name:"Name is not available"}</h4>
                 <h4 className="text-primary">{"compayn name is not available"}</h4>
                </div>
              </div>
               <p className="mt-5">{about?about:"about is not available"}</p>
                </article>
              </details>}
        </div>
    );
};

export default Location;