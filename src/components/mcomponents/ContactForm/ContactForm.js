import { addContact } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export const ContactForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.text.value, form.elements.number.value))
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter contact name..."
      />
        <input
        type="text"
        name="number"
        placeholder="Enter contact number..."
      />
      <button type="submit">Add task</button>
    </form>
  )
}
