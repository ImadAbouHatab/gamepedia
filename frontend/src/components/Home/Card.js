
function Card({game}) {
  return (
    <div className="card" key={game.id}>
        <img className="card-img" src={game.background_image}></img>
        <p className="card-child">{game.name}</p>
        <p className="card-child">Rating: {game.rating}/5</p>
        <p className="card-child">Released: {game.released}</p>
    </div>
  )
}

export default Card