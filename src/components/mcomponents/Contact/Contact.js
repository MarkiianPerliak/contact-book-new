import { deleteContacts, checkContact } from '../../../redux/operation';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className="contact-card">
      <p className="contact-name">{contact.text}</p>
      <p className="contact-number">Number: {contact.number}</p>

      <div className="contact-meta">
        <label className="contact-toggle">
          <input
            onChange={() =>
              dispatch(checkContact({ id: contact.id, saved: contact.saved }))
            }
            type="checkbox"
            checked={contact.saved}
          />
          Saved
        </label>

        <button
          className="delete-btn"
          onClick={() => dispatch(deleteContacts(contact.id, contact))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
