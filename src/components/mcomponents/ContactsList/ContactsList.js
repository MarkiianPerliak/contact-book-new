import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectVisibleContacts, selectIds } from '../../../redux/selectors';

export const ContactsList = () => {
  console.log("boutto")
  const contactsIds = useSelector(selectIds)
  console.log(contactsIds)
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
      {contactsIds.map(contactid => (
        <li className="contact-item" key={contactid}>
          <Contact contactid={contactid} />
        </li>
      ))}
    </ul>
  );
};
