import {
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import PropTypes from "prop-types";

export default function ModalToAddNickName({
  modal,
  setModal,
  setNickName,
  pokemonCaught,
}) {
  return (
    <Modal
      show={modal}
      onHide={() => {
        setModal(false);
      }}
      close
    >
      <ModalHeader>Add NickName</ModalHeader>
      <ModalBody>
        <FormLabel>NickName:</FormLabel>
        <input onChange={(e) => setNickName(e.target.value)} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={pokemonCaught}>Save</Button>
      </ModalFooter>
    </Modal>
  );
}

ModalToAddNickName.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  setNickName: PropTypes.func.isRequired,
  pokemonCaught: PropTypes.func.isRequired,
};
