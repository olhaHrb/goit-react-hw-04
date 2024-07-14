import ReactModal from "react-modal";

const ImageModal = ({ data }) => {
  const handleAfterOpenFunc = () => {
    return <img src={data.src} alt={data.alt} />;
  };
  return (
    <>
      <ReactModal
        isOpen={true}
        onAfterOpen={handleAfterOpenFunc}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      ></ReactModal>
      {/* <p>It`s a modal</p>
      <p>{data.alt}</p>
      <p>{data.src}</p> */}
    </>
  );
};

export default ImageModal;
