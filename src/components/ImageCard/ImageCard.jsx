import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt }) => {
  return (
    <div className={css.card}>
      <a href={urls.regular} target="_blank">
        <img src={urls.small} alt={alt} className={css.image} />
      </a>
    </div>
  );
};

export default ImageCard;
