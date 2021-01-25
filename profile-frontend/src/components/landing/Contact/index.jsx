import React from 'react';
import { Container } from 'components/common';
import mailbox from 'assets/illustrations/undraw_Mailbox_re_dvds.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import {ContactForm} from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={mailbox} alt="Crio.Do" />
    </Thumbnail>
  </Wrapper>
);
