
import { useDispatch } from "react-redux";
import { addContacts } from "../../../redux/operation";

export const ContactForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContacts({text: form.elements.text.value, number: form.elements.number.value}))
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
