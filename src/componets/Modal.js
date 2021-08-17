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
      <Button color="danger" onClick={toggle}>
      <img  className = 'cover'src ={props.rice.img} /> </Button>
      <Modal isOpen={modal} toggle={toggle} className='ricey'>
        <ModalHeader toggle={toggle}>{props.rice.name}
        </ModalHeader>
        <ModalBody className = 'riceonrice'>
          Desciption: {props.rice.description} 
          <br />
          Uses: {props.rice.uses}
        </ModalBody>
             </Modal>
    </div>
  );
}

export default Modalrice