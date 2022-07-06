import { reqDelete } from "../../api";

const DeleteEvent = ({data}) => {

  const deleteEvent = async (eventId) => {
    try {
      const response = await reqDelete(`http://localhost:3001/api/v1/events/${eventId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEvent(data._id)
  }

  return(
    <form onSubmit={handleSubmit}>
      <button type='submit'>
      Delete
      </button>
    </form>
  )
}

export default DeleteEvent;