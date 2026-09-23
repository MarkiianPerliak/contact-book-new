import { deleteContacts, checkContact } from '../../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectById } from "../../../redux/selectors";
export const Contact = ({ contactid }) => {
  const dispatch = useDispatch();
  const contactInfo = useSelector(state => selectById(state, contactid))
  return (
    <div className="contact-card">
      <p className="contact-name">{contactInfo.text}</p>
      <p className="contact-number">Number: {contactInfo.number}</p>

      <div className="contact-meta">
        <label className="contact-toggle">
          <input
            onChange={() =>
              dispatch(checkContact(contactInfo))
            }
            type="checkbox"
            checked={contactInfo.saved}
          />
          Saved
        </label>

        <button
          className="delete-btn"
          onClick={() => dispatch(deleteContacts(contactInfo.id, contactInfo))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
