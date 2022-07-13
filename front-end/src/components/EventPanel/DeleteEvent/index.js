import { useContext } from 'react';

import { reqDelete } from '../../../api';
import { DateContext } from '../../../contexts/date';

const DeleteEvent = ({ eventId }) => {
  const { setUpdate } = useContext(DateContext);

  const deleteEvent = async (eventId) => {
    try {
      const response = await reqDelete(
        `http://localhost:3001/api/v1/events/${eventId}`,
      );
      setUpdate(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDelete = () => {
    const answer = window.confirm('Are you sure you want to delete this event?');
    
    if (answer) {
      deleteEvent(eventId);
    } return;
  };

  return(
    <button type="button" className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteEvent;