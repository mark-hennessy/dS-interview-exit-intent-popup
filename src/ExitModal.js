import { Modal, Button, Image, Header, Input } from "semantic-ui-react";

const ExitModal = ({ shouldShowModal, closeModal }) => {
  return (
    <Modal
      open={shouldShowModal}
      size="small"
      closeOnEscape={true}
      closeIcon
      onClose={closeModal}
    >
      <Modal.Content>
        <Image src={"https://via.placeholder.com/200x300"} />
        <Header>Sicher dir jetzt das Paket für dein Studium</Header>
        <p>Lorem ipsum</p>
        <Input placeholder={"Deine Email"} />
        <Button>Jetzt eintragen</Button>
      </Modal.Content>
    </Modal>
  );
};

export default ExitModal;
