
import DisplayEvent from "./DisplayEvent";
import UpdateEvent from "./UpdateEvent";

const EventPanel = ({ eventData }) => {
  return(
    <>
      <DisplayEvent data={eventData}/>
      <UpdateEvent data={eventData}/>
    </>
  );
}

export default EventPanel;