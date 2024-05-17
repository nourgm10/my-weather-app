import React, { useState } from "react";

export default function Search() {
  return (
    <form class="search-form" id="search-form" autocomplete="off">
      <input
        type="search"
        placeholder="Enter a city"
        required
        class="search-input"
        id="search-input"
      />
      <input type="submit" value="Search" class="search-button" />
    </form>
  );
}
