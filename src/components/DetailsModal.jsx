import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function DetailsModal(props) {
  // console.log(props);return;

  // let detail = props
  console.log(props);


  let navigate = useNavigate();
  let demo = () => {
    props.setPopUpInfo((curr) => ({ ...curr, show: false }));
    navigate(props.info.nav);
  };
  let seekerLogin = () =>{
  props.setPopUpInfo((curr) => ({ ...curr, show: false }));
  navigate(props.info.nav.seekerLogin)
}
  let ownerLogin = () =>{
  props.setPopUpInfo((curr) => ({ ...curr, show: false }));
  navigate(props.info.nav.ownerLogin)
}
  return (
    <>
      {localStorage.getItem("access-token") ? (
        <Modal show={props.info.show}>
          <Modal.Header>
            <Modal.Title>{props.info.title}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() =>
                props.setPopUpInfo((curr) => ({ ...curr, show: false }))
              }
              variant="secondary"
            >
              Close
            </Button>

            <Button onClick={demo} variant="primary" className="btn-custom">
              Contact
            </Button>
          </Modal.Footer>
        </Modal>
      ) : localStorage.getItem("owner-token") ? (
        <Modal show={props.info.show}>
          <Modal.Header>
            <Modal.Title>{props.info.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.info.msg}</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() =>
                props.setPopUpInfo((curr) => ({ ...curr, show: false }))
              }
              variant="secondary"
            >
              Close
            </Button>

            <Button onClick={demo} variant="primary" className="btn-custom">
              Contact
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={props.info.show}>
          <Modal.Header>
            <Modal.Title>{props.info.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.info.msg}</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() =>
                props.setPopUpInfo((curr) => ({ ...curr, show: false }))
              }
              variant="secondary"
            >
              Close
            </Button>

            <Button onClick={seekerLogin} variant="primary" className="btn-custom">
              Login as Seeker
            </Button>
            <Button onClick={ownerLogin} variant="primary" className="btn-custom">
              Login as Owner
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default DetailsModal;
