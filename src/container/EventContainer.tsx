import React from 'react';
import { useDrop } from 'react-dnd';
import { ConferenceDataType } from '../../graphql/servicers/conference';
import Location from "../../src/components/Location";
import Organizer from "../../src/components/Organizer";
import Schedules from "../../src/components/Schedules";
import Speakers from "../../src/components/Speakers";
import Sponsors from "../../src/components/Sponsors";

const EventContainer = ({data}:{data:ConferenceDataType}) => {

    const events: JSX.Element[]=[
       <Organizer organizerInfo={data.conference.organizer} key="first" />,
        <Speakers speakersInfo={data.conference.speakers}  key="second"/>,
        <Location locationInfo={data.conference.locations}  key="third"/>,
        <Schedules schedulesInfo={data.conference.schedules} key="fourth"/>,
        <Sponsors sponsorsInfo={data.conference.sponsors}  key="fivth"/>
    ]
    const [{isOver},drop]=useDrop({
        accept:"project",
        drop:(item)=>{
            console.log(item,"item")
        },
        collect: (monitor) =>  { 
            return {
            isOver: !!monitor.isOver()
            
          }}
       })

      
    return (
        <div>
            <div className=" mt-12 "  ref={drop}>
                {events.map((EventComp)=>{
                  return <React.Fragment key={EventComp.key}>
                    {EventComp}
                  </React.Fragment>
                })}
              </div>
        </div>
    );
};

export default EventContainer;

