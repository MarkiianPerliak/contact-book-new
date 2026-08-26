import { deleteContacts, checkContact } from "../../../redux/operation";
import { useDispatch } from "react-redux";

export const Contact = ({contact}) => {
    const dispatch = useDispatch()
  return (
        <div>
      <p>{contact.text}</p>
      <p>Number: {contact.number}</p>
            <input onChange={() => dispatch(checkContact({id: contact.id, saved: contact.saved}))}
        type="checkbox"
        checked={contact.saved}
      />
      <button style={{ marginLeft: "20px" }} onClick={() => dispatch(deleteContacts(contact.id, contact))}>Remove Contact</button>
    </div>
  )
}
