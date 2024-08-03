import React, { useState } from 'react';

function SearchBox({ data, renderItem }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = products.filter((item) => {
    // Implement your filtering logic here based on item properties and searchTerm
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
 
    </div>
  );
}

export default SearchBox;
