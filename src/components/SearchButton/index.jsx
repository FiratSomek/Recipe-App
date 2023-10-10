import "./styles.css";

export const SearchButton = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const deleteInput = () => {
    if (searchQuery !== "") {
      setSearchQuery("");
    }
  };

  return (
    <form action="#" className="form">
      <div className="searchContainer">
        <input
          className="text-input"
          type="text"
          placeholder="Search Recipes..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <input
          type="submit"
          value="Search"
          className="search-input"
          onClick={handleSearch}
        />
      </div>
    </form>
  );
};
