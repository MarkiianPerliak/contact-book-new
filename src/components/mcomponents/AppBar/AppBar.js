import { StatusFilter } from '../StatusFilter/StatusFilter';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactForm } from '../ContactForm/ContactForm';

export const AppBar = () => {
  return (
    <div className="app-shell">
      <section>
        <h2 className="section-title">Contacts</h2>
        <ContactsList />
      </section>
      <section>
        <h2 className="section-title">Add Contact</h2>
        <ContactForm />
      </section>
      <section>
        <h2 className="section-title">Filter by status</h2>
        <StatusFilter />
      </section>
    </div>
  );
};
