const SearchBar = function () {
  return (
    <div className="navSearchBar">
      <input
        type="text"
        id="filterByLCE"
        placeholder="Filter by title, companies, expertise..."
      />
      <input
        type="text"
        id="filterByLocation"
        placeholder="Filter by location"
      />
      <div className="filterByFTandSubmit">
        <div className="filterByFT">
          <input type="checkbox" id="filterByFullTime" />
          <label htmlFor="filterByFullTime">Full Time Only</label>
        </div>
        <button className="searchBtn">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
