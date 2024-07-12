import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.length > 0 && (
        <ul className={css.list}>
          {images.map(({ id, urls }) => (
            <li key={id} className={css.item}>
              <ImageCard url={urls}></ImageCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageGallery;
