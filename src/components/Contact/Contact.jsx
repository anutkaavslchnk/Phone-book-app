

import s from "../ContactList/ContactList.module.css";
import { useDispatch } from "react-redux";

import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteContact } from "../../redux/contacts/contactsOps";
import Modal from "../Modal/Modal";
import { useState } from "react";


const Contact = ({ id, name, number }) => {
  const [isOpen, setIsOpen]=useState();
  const handleDel=()=>{
    setIsOpen(true);
  }
  const handleCancel=()=>{
    setIsOpen(false);
  }
  const dispatch = useDispatch();

  const handleDeleteCard=()=>{
    dispatch(deleteContact(id));
    setIsOpen(false);
  }
  return (
    <>

    <li className={s.itemcont}>
      <span className={s.name}> {name}</span>
      <span className={s.number}> {number}</span>
      <button className={s.btn} onClick={handleDel}><RiDeleteBin5Line /></button>
    </li>
    {isOpen && (
      <Modal confirm={handleDeleteCard} cancel={handleCancel}/>
    )}
    </>
  );
};

export default Contact;
