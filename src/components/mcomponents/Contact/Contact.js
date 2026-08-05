import { removeContact, saveContact } from "../../../redux/reducer";
import { useDispatch } from "react-redux";

export const Contact = ({contact}) => {
    const dispatch = useDispatch()
  return (
        <div>
      <p>{contact.text}</p>
      <p>Number: {contact.number}</p>
            <input onChange={() => dispatch(saveContact(contact.id))}
        type="checkbox"
        checked={contact.saved}
      />
      <button style={{ marginLeft: "20px" }} onClick={() => dispatch(removeContact(contact.id))}>Remove Contact</button>
    </div>
  )
}
