import { useContext } from 'react';

import { reqDelete } from '../../../api';
import { DateContext } from '../../../contexts/date';
import button from '../../StyleComponents/Buttons.module.css';

const DeleteEvent = ({ eventId, modalOpened }) => {
  const { setUpdate } = useContext(DateContext);

  const deleteEvent = async (eventId) => {
    try {
      const response = await reqDelete(
        `http://localhost:3001/api/v2/events/${eventId}`,
      );
      setUpdate(true);
      modalOpened(false);
      alert('Event updated successfully!');
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
    <button type="button" className={button.delete} onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteEvent;