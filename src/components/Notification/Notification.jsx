import React from 'react';
import PropTypes from 'prop-types';
import { TfiFaceSad } from 'react-icons/tfi';
import { Text, Wrapper } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <Wrapper>
      <Text>{message}</Text>
      <TfiFaceSad />
    </Wrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};


