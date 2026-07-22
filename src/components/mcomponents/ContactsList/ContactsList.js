import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectVisibleContacts } from "../../../redux/selectors";

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts)
  return (
        <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  )
}
