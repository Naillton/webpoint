import React, { useState } from "react";
import { 
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineMail,
  AiOutlineUser,
  AiTwotonePhone,
  AiFillEdit,
} from "react-icons/ai";

import {
  Cont,
  InputCont,
  ErrorLabel,
} from './styles';

const Inputs = ({
    type = String,
    error = undefined,
    ...rest
}) => {
  const [visible, setVisible] = useState('');
  return (
    <Cont>
      {
        type === 'password' && (
          visible === '' || visible === 'password' ? ( <AiFillEye size={18} color='black' onClick={() => setVisible('text')} />)
          : (<AiFillEyeInvisible size={18} color='black' onClick={() => setVisible('password')} />)
        )
      } 
      {
        type === 'email' && (<AiOutlineMail size={18} color='black' />)
      }
      {
        type === 'text' && (<AiOutlineUser size={18} color='black' />)
      }
      {
        type === 'numeric' && (<AiTwotonePhone size={18} color='black' />)
      }
      {
        type === 'number' && (<AiFillEdit size={18} color='black' />)
      }
      <InputCont
        type={visible}
        {...rest}
      />
      {error && <ErrorLabel>{error.message}</ErrorLabel>}
    </Cont>
  )
}

export default Inputs;
