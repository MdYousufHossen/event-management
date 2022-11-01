import React from 'react';
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
    const [eventsItems, setEventsItems] = React.useState(events)

    const dragItem = React.useRef<any>(null)
	  const dragOverItem = React.useRef<any>(null)

	//const handle drag sorting
	const handleSort = () => {
		//duplicate items
		let _eventsItems = [...eventsItems]

		//remove and save the dragged item content
		const draggedItemContent = _eventsItems.splice(dragItem.current, 1)[0]

		//switch the position
		_eventsItems.splice(dragOverItem.current, 0, draggedItemContent)

		//reset the position ref
		dragItem.current = null
		dragOverItem.current = null

		//update the actual array
		setEventsItems(_eventsItems)
	}

	

      
    return (
        <div>
            <div className=" my-12 ">
                {eventsItems.map((EventComp,index)=>{
                  return <div
                   key={EventComp.key}
                   className="mt-5"
                   draggable
                   onDragStart={(e)=>{dragItem.current=index}}
                   onDragEnter={(e)=>(dragOverItem.current=index)}
                   onDragEnd={handleSort}>
                    {EventComp}
                  </div>
                })}
              </div>
        </div>
    );
};

export default EventContainer;

