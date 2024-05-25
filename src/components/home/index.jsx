import Card from "../common/card"
import { availableGames } from "../data/data"


function Home() {
  return <div className="row">
    {
      availableGames.map((game, index) =>
        <Card cardDetails={game} />
      )
    }
  </div>
}

export default Home

