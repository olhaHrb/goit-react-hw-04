import SearchBar from "./components/SearchBar/SearchBar";
import css from "./App.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const apiKey = "6f8nJhVlihGqobcqR-0goLK_NhA2mMBT08K4p0xc8Qw";
  let page = 2;
  let searchValue = "car";
  const onSubmit = (value) => {
    console.log(value);
  };

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&per_page=9&query=${searchValue}`
        );
        setImages(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <Loader state={loading}></Loader>
      <ErrorMessage error={error}></ErrorMessage>
      <ImageGallery images={images}></ImageGallery>
    </div>
  );
};

export default App;
