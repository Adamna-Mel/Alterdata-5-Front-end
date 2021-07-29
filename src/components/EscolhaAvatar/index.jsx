import React,{ useState } from "react";
import Avatar from "react-avatar-edit";

function EscolhaAvatar() {
  const [preview, setPreview] = useState(null);
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
      />
      {preview && <img src={preview} alt="Preview" />}
    </div>
  );
}
export default EscolhaAvatar;