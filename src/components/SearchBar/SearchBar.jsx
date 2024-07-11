import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchValue = form.elements.searchValue.value;
    if (form.elements.searchValue.value.trim() === "") {
      toast("Please enter search term!");
      return;
    }

    onSubmit(searchValue);
    form.reset();
  };
  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchValue"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster></Toaster>
    </header>
  );
};

export default SearchBar;
