import React from 'react';
import PropTypes from 'prop-types';
import { TfiFaceSad } from 'react-icons/tfi';
import { Text, Wrapper } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <Wrapper>
      <Text>{message}</Text>
      <TfiFaceSad size='14px' />
    </Wrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};


