import SearchBar from "./components/SearchBar/SearchBar";
import css from "./App.module.css";

const App = () => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSubmit}></SearchBar>
    </div>
  );
};

export default App;
