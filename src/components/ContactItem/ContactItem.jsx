import React from 'react';
import { deleteContact } from '../../redux/operation';
import { useDispatch } from 'react-redux';
import {
  ItemEl,
  ContactData,
  ContactName,
  ContactNumber,
  ContactDelete,
} from './ContactItem.styled';

// export const ContactItem = ({contact}) => {
  
//   const dispatch = useDispatch();
//   const { name, phone, id } = contact;
//   return (
//     <ItemEl>
//       <ContactData>
//         <ContactName>{name}</ContactName>
//         <ContactNumber>{phone}</ContactNumber>
//       </ContactData>
//       <ContactDelete type="button" onClick={() => dispatch(deleteContact(id))}>
//         &times;
//       </ContactDelete>
//     </ItemEl>
//   );
// };


export const ContactItem = ({contact: { name, phone, id }}) => {
  
  const dispatch = useDispatch();

  return (
    <ItemEl>
      <ContactData>
        <ContactName>{name}</ContactName>
        <ContactNumber>{phone}</ContactNumber>
      </ContactData>
      <ContactDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        &times;
      </ContactDelete>
    </ItemEl>
  );
};