import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './Styles/ParagraphStyles';

const Notification = ({ message }) => {
  return <Paragraph>{message}</Paragraph>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
