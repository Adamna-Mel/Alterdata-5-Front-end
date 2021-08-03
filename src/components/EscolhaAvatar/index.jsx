import React,{ useState } from "react";
import Avatar from "react-avatar-edit";
import Modal from '@material-ui/core/Modal';

function EscolhaAvatar() {
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("Arquivo é grande demais!");
      elem.target.value = "";
    }
  }
  return (
    <div>
      <Avatar
        width={180}
        height={100}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={null}
        label={'Escolha o avatar'}
        onClick={handleOpen}
      />
       <Modal
        open={open}
        onClose={handleClose}
      >
        <img src={preview} alt="Preview" />
      </Modal>
    </div>
  );
}
export default EscolhaAvatar;