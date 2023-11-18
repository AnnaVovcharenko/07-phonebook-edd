import { ContactItem } from '../ContactItem/ContactItem';
import { ListUl, ListDiv } from './ContactList.styled';
import {  useSelector } from 'react-redux';
import Loading  from "../Loading/Loading";
import { Error } from "../EMesseage/EMesseage";
// import { getContacts} from "../../redux/selectors";
import { selectVisibleContacts, selectError, selectIsLoading } from "../../redux/selectors";

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError);
 
  return (
    <ListDiv>
      <ListUl>
        {isLoading && <Loading/>}
        {error && <Error/>}
        {contacts.map(contact  => {
          return (<ContactItem key={contact.id}
          contact={contact}
          /> )
         
        })}
      </ListUl>
    </ListDiv>
  );
};
export default ContactList;

