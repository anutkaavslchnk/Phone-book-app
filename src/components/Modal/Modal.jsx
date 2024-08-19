
import s from './Modal.module.css'
const Modal = ({confirm, cancel}) => {
  return (
    <>
    <div className={s.count}> 

        <div className={s.modal}>
            <h2>Are you sure? Do you want delete this contact?</h2>
            <button type='button' onClick={confirm}>Confirm</button>
            <button type='button' onClick={cancel}>Cancel</button>
         
        </div>
    </div>
    </>
  )
};

export default Modal;
