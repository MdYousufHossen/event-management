import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GET_CONFERENCES, { ConferencesTypes } from "../../graphql/servicers/conferences";

const Event = () => {
    const { loading, error, data } = useQuery<ConferencesTypes>(GET_CONFERENCES);
   
    const router=useRouter()
    return (
        <div className="w-9/12 mx-auto mt-12" >
            <h2 className="font-bold text-primary">Event Schedule</h2>
            <p className="text-gray-500">Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum. </p>

            {/* table calender  */}
     <div className="snap-mandatory snap-x w-full overflow-auto my-12">
     <table className=" table-fixed   w-[1000px] border-collapse border border-slate-400 ">
            <thead className="">
                <tr className="border-collapse border border-slate-400 h-[50px]">
                <th className="border-collapse border border-slate-400 "> </th>
                <th className="text-primary font-bold">Tue</th>
                <th className="text-primary font-bold">Wed</th>
                <th className="text-primary font-bold">Thu</th>
                <th className="text-primary font-bold">Fri</th>
                <th className="text-primary font-bold">Sat</th>
                <th className="text-primary font-bold">Sun</th>
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
    );
};

export default Event;