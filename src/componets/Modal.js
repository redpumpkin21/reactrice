import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

const Modalrice = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  onClick={toggle} id = 'riceb'>
      <img  className = 'cover'src ={props.rice.img} /> </Button>
      <Modal isOpen={modal} toggle={toggle} className='ricey'>
        <ModalHeader toggle={toggle}>{props.rice.name}
        </ModalHeader>
        <ModalBody className = 'riceonrice'>
        Type of Grain: {props.rice.type}
        <br/>
          Desciption: {props.rice.description} 
          <br />
          Uses: {props.rice.uses}
        </ModalBody>
             </Modal>
    </div>
  );
}

export default Modalrice