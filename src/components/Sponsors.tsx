import Image from "next/image";
import { ConferenceTypes } from "../../graphql/servicers/conference";
import Arrow from "/public/assets/icons/upDownArrow.svg";


const Sponsors = ({sponsorsInfo}:{sponsorsInfo:ConferenceTypes["sponsors"]}) => {
  
    return (
      <div className="flex">
  { sponsorsInfo&&<details className=" lg:contents w-full "> 
                <summary  className="cursor-pointer flex items-center  border rounded lg:w-[20%] h-[70px] ">
                    <div  className="bg-white m-2 p-2 rounded" >
                    <Image src={Arrow} alt="up down arrow"/>
                    </div>
                    <h3 className="text-primary font-bold">Sponsors</h3>
               </summary>
                <article className="lg:ml-12 lg:w-[70%] lg:mt-0 md:mt-10 sm:mt-10 ">
         {sponsorsInfo.map((sponsor,index)=>{
              const {name,about,company, image}= sponsor;
    
    const myLoader=()=>{
      return `${image?.url}`;
    }
            return   <div key={index} className="mt-12 bg-purple-100 p-2 rounded">
            <div className="flex  ">
                    <Image 
                      className=" rounded"
                      loader={myLoader}
                        src={image?.url.toString()} width={150} height={50} alt={name?.toString()}/>
                <div className="lg:flex items-center justify-between w-full ml-6">
                <h4 className="font-bold ">{name}</h4>
                 <h4 className="text-primary">{"compayn name is not available"}</h4>
                </div>
              </div>
               <p className="mt-5">{about}</p>
            </div>
         })}
                </article>
              </details>}
        </div>
    );
};

export default Sponsors;