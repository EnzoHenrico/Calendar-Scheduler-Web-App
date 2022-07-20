
import DeleteEvent from "./DeleteEvent";
import DisplayEvent from "./DisplayEvent";
import UpdateEvent from "./UpdateEvent";

const EventPanel = ({ eventData, modalOpened }) => {
  return(
    <div>
      <DisplayEvent data={eventData} />
      <UpdateEvent data={eventData} modalOpened={modalOpened}/>
      <DeleteEvent eventId={eventData._id} modalOpened={modalOpened}/>
    </div>
  );
}

export default EventPanel;