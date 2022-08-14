import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "./Card";

function Featured() {

    const [games, setGames] = useState(null);

    useEffect (() => {
        const fetchGames = async () => {
            const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&ordering=released,metacritic,rating&page=1&page_size=9`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
            }});
            
            if (response.ok){
                const res = await response.json();
                const gamesList = res.results;
                setGames(gamesList);
            } 
        }
        fetchGames();
    }, [])

  return(
    <section className="featured-games">
        <div className="section-text-container">
            <p className="section-text">Featured Games</p>
            <Link to="/featured">See All</Link>
        </div>
        <div className="cards-container">
            {games && games.map((game)=>(
                <Card game={game}/>
            ))}
        </div>
    </section>
  );
}

export default Featured;
