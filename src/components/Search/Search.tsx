import { useDarkMode } from 'hooks';
import './Search.css';

const Search = () => {
  const { isDark } = useDarkMode();
  return (
    <div className="search-container">
      {/* <div className={isDark ? 'dark-search-item search-item' : 'search-item'}>
        <i className="fas fa-search"></i>
        <input
          type="search"
          name="searchTerm"
          value={search.searchTerm}
          onChange={handleChange}
          className={isDark ? 'dark-search search' : 'search'}
          placeholder="Search for a country..."
        />
      </div>
      <div className="filter-group">
        <select
          name="filterTerm"
          value={search.filterTerm}
          onChange={handleChange}
          className={isDark ? 'dark-filter filter' : 'filter'}
        >
          <option className="option">Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
        {search.filterTerm && (
          <button
            onClick={resetRegionFilter}
            className={
              isDark
                ? 'clear-filter-btn dark-clear-filter-btn'
                : 'clear-filter-btn'
            }
          >
            Clear Region Filter
          </button>
        )}
      </div> */}
      search
    </div>
  );
};

export default Search;
