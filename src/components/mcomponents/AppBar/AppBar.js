import { StatusFilter } from "../StatusFilter/StatusFilter"
import { ContactsList } from "../ContactsList/ContactsList"
import { ContactForm } from "../ContactForm/ContactForm"
export const AppBar = () => {
  return (
    <div className="AppBar">
        <section>
            <h2>Contacts</h2>
        </section>
        <section>
            <h2>Add Contact</h2>
            <ContactForm />
        </section>
        <section>
            <h2>Filter by status</h2>
            <StatusFilter />
        </section>
        <ContactsList />
    </div>
  )
}
