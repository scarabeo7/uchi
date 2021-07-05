import React, { useState, useEffect } from "react";

const SearchBar = ({ setApprovedArtwork, backupData }) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const filteredArtWork = backupData.filter((artWork) => {
      if (artWork.country && artWork.city) {
        return (artWork.title.toLowerCase().includes(searchInput)) ||
          (artWork.artist_name.toLowerCase().includes(searchInput)) ||
          (artWork.country.toLowerCase().includes(searchInput)) ||
          (artWork.city.toLowerCase().includes(searchInput)) ||
          (artWork.content_text.toLowerCase().includes(searchInput));
      } else return (artWork.title.toLowerCase().includes(searchInput)) ||
        (artWork.artist_name.toLowerCase().includes(searchInput)) ||
        (artWork.content_text.toLowerCase().includes(searchInput));
    });
    setApprovedArtwork(filteredArtWork);
    if (searchInput === '') setApprovedArtwork(backupData);

  }, [searchInput]);

  return (
    <div key="searchbar" className="search-input-wrapper">
      <i className="fas fa-search"></i>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by title, name, country, city or text ..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SearchBar;