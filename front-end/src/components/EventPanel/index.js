
import DeleteEvent from "./DeleteEvent";
import DisplayEvent from "./DisplayEvent";
import UpdateEvent from "./UpdateEvent";

const EventPanel = ({ eventData }) => {
  return(
    <div>
      <DisplayEvent data={eventData}/>
      <UpdateEvent data={eventData}/>
      <DeleteEvent eventId={eventData._id}/>
    </div>
  );
}

export default EventPanel;