import SearchBar from "./components/SearchBar/SearchBar";
import css from "./App.module.css";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchImagesWithTopic } from "./images-api";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadBtn, setLoadBtn] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");

  const handleSearch = async (newTopic) => {
    setImages([]);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages() {
      try {
        setError(false);
        setLoading(true);
        setLoadBtn(false);

        const data = await fetchImagesWithTopic(topic, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
        setLoadBtn(true);
      } catch (error) {
        setError(true);

        setLoadBtn(false);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [topic, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {loading && <Loader></Loader>}
      {error && <ErrorMessage></ErrorMessage>}
      <ImageGallery images={images}></ImageGallery>
      {loadBtn && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
    </div>
  );
};

export default App;
