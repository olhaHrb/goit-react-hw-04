import css from "./ImageCard.module.css";

const ImageCard = ({ url }) => {
  return (
    <div className={css.card}>
      <img src={url.small} alt="" className={css.image} />
    </div>
  );
};

export default ImageCard;
