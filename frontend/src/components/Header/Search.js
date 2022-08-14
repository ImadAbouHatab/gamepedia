function searchForGame (e) {
    e.preventDefault();
    console.log("search");
}

function Search() {
  return (
    <form className="search-bar" onSubmit={searchForGame}>
        <img src="/search.svg" alt="Icon" className="search-icon"/>
        <input type="text" name="search-query" placeholder="Find a game..." />
        <input type="submit" name="submit" value="Search" />
    </form>
  )
}

export default Search