import ContactList from "../ContactList/ContactLIst";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import { selectLoading, selectError } from "../../redux/contactsSlice.js";

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Now is loading....</p>}
      {error !== null && <p>Whoops, something goes wrong.</p>}
      <ContactList />
    </div>
  );
}
