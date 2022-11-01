import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FadeLoader } from "react-spinners";
import GET_CONFERENCES, { ConferencesTypes } from "../../graphql/servicers/conferences";
import Error from "./Error";
import TitleSection from "./TitleSection";

const Event = () => {
    const router=useRouter()
    const { loading, error, data } = useQuery<ConferencesTypes>(GET_CONFERENCES);
    const week=["Tue","Wed","Thu","Fri","Sat","Sun"]
    let content=null
    if(loading){
        content=<FadeLoader cssOverride={{margin:"auto"}} color="#36d7b7" />
    }else if(!loading && error){
        content=<Error message={error.message}/>
    }
    else if(!loading && !error &&!data?.conferences){
        content=<Error message="Conference is not found!" />
    }else if(!loading&&!error&& data?.conferences){
      content=  <div className="w-9/12 mx-auto mt-12" >


    <TitleSection/>

      {/* table calender  */}
<div className="snap-mandatory snap-x w-full overflow-auto my-12">
<table className=" table-fixed   w-[1000px] border-collapse border border-slate-400 ">
      <thead className="">
          <tr className="border-collapse border border-slate-400 h-[50px]">
          <th className="border-collapse border border-slate-400 "> </th>
          {week.map((day,index)=>{
            return <th key={index} className="text-primary font-bold">{day}</th>
          })}
          </tr>
      </thead>
      <tbody>
          <tr className="border-collapse border border-slate-400 ">
          <td className="border-collapse border border-slate-400 h-[150px] w-[150px]  text-primary font-bold text-center">9:00 </td>
          <td className="border-collapse border border-slate-400 h-[150px] w-[150px] "></td>
        {data?.conferences?.slice(0,5).map((conf)=>{
           return<td  key={conf.id} onClick={()=> router.push(`/event/${conf.id}`)} className="border-collapse border border-slate-400 h-[150px] w-[150px] cursor-pointer  ">
               <h4 className=" font-bold text-center mb-2 text-brightSun text-[12px]">{conf.startDate}</h4>
             <div className="border border-brightSun rounded w-[120px] h-[100px] m-auto p-5">
             <h4 className="font-bold text-rawUmber text-[12px]  mb-2">{conf.name}</h4>
             <h5 className=" text-brightSun text-[12px]">09:00-11:00</h5>
             </div>
           </td>
          })}
       
          </tr>
          <tr className="border-collapse border border-slate-400 ">
          <td className="border-collapse border border-slate-400 h-[150px] w-[150px] text-primary font-bold text-center">9:00 </td>
          <td className="border-collapse border border-slate-400 h-[150px] w-[150px] "></td>  <td className="border-collapse border border-slate-400 h-[150px] w-[150px] "></td>
          {data?.conferences?.slice(6,8).map((conf)=>{
           return<td  key={conf.id} onClick={()=> router.push(`/event/${conf.id}`)} className="border-collapse border border-slate-400 h-[150px] w-[150px] cursor-pointer  ">
                <h4 className=" font-bold text-center mb-2 text-brightSun text-[12px]">{conf.startDate}</h4>
             <div className="border border-brightSun rounded w-[120px] h-[100px] m-auto p-5">
             <h4 className="font-bold text-rawUmber text-[12px]  mb-2">{conf.name}</h4>
             <h5 className=" text-brightSun text-[12px]">09:00-11:00</h5>
             </div>
           </td>
          })}
          <td className="border-collapse border border-slate-400 h-[150px] w-[150px] "></td>
          </tr>
          <tr className="border-collapse border border-slate-400 ">
          <td className="border-collapse border border-slate-400 h-[150px] w-[150px] text-primary font-bold text-center">9:00 </td>
          <td className="border-collapse border border-slate-400 h-[150px] w-[150px] "> </td>
          {data?.conferences?.slice(9,12).map((conf)=>{
           return<td  key={conf.id} onClick={()=> router.push(`/event/${conf.id}`)} className="border-collapse border border-slate-400 h-[150px] w-[150px] cursor-pointer ">
               <h4 className=" font-bold text-center mb-2 text-blueZodiac text-[12px]">{conf.startDate}</h4>
             <div className="border border-blueZodiac rounded w-[120px] h-[100px] m-auto p-5">
             <h4 className="font-bold text-blueZodiac text-[12px] mb-2">{conf.name}</h4>
             <h5 className=" text-blueZodiac text-[12px]">09:00-11:00</h5>
             </div>
           </td>
          })}
            <td className="border-collapse border border-slate-400 h-[150px] w-[150px] "></td>
          </tr>
      </tbody>
      </table>
</div>
  </div>
    }
    return content
};

export default Event;