import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const PopDelete = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="left" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>d</PopoverHeader>
      </Popover>
    </div>
  );
}

export default PopDelete;