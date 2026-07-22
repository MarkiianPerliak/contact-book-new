import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";

export const ContactsList = () => {
  const contacts = useSelector(state => state.filteredContacts)
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
