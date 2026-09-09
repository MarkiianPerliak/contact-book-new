import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectVisibleContacts } from '../../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  if (!contacts.length) {
    return (
      <div className="empty-state">
        No contacts yet. Add your first one above.
      </div>
    );
  }

  return (
    <ul className="contacts-list">
      {contacts.map(contact => (
        <li className="contact-item" key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
