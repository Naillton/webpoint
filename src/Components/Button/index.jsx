import React from 'react';

import {
  Btn
} from './styles';

const Button = ({ func, text }) => {
  return(
    <Btn
      onClick={func}
    >
      {text}
    </Btn>
  );
}

export default Button;
