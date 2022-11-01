import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FadeLoader } from 'react-spinners';
import GET_CONFERENCE, { ConferenceDataType } from "../../graphql/servicers/conference";
import Error from "../../src/components/Error";
import Navigation from "../../src/components/Navigation";

import TitleSection from "../../src/components/TitleSection";
import EventContainer from "../../src/container/EventContainer";

const Event = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const { loading, error, data } = useQuery<ConferenceDataType>(GET_CONFERENCE,{
    variables:{confId:slug.toString()},
  });
  
  let content=null
    if(loading){
        content=<FadeLoader cssOverride={{margin:"auto"}} color="#36d7b7" />
    }else if(!loading && error){
        content=<Error message={error.message}/>
    }
    else if(!loading && !error &&!data?.conference){
        content=<Error message="Conference is not found!" />
    }else if(!loading&&!error&& data?.conference){
      content= <>
      <Navigation/>
      <div className="w-[70%] mx-auto mt-12">
      <TitleSection/>
      {data&& <EventContainer data={data}/>}
      </div>
      </>
    }
      

  return content
};

export default Event;
