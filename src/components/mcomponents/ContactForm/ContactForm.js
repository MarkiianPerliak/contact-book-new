import { useDispatch } from 'react-redux';
import { addContacts } from '../../../redux/operation';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.text.value.trim();
    const number = form.elements.number.value.trim();

    if (!name || !number) {
      return;
    }

    dispatch(addContacts({ text: name, number }));
    form.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="form-field"
        type="text"
        name="text"
        placeholder="Enter contact name..."
      />
      <input
        className="form-field"
        type="text"
        name="number"
        placeholder="Enter contact number..."
      />
      <button className="primary-btn" type="submit">
        Add Contact
      </button>
    </form>
  );
};
