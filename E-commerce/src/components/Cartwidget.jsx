import React from 'react';
import { CartFill } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap';

export const Cartwidget =  () => {
  return (
    <div>
      <CartFill size={24} color="white" />
      <Badge bg="danger">0</Badge>
    </div>
  );
}