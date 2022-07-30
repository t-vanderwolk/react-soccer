import { 
    addNewPlayer,
     getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer
    } from "../controllers/playerControllers";


const routes = (app) => {
app.route("/player")
//GET PLAYERS
.get(getPlayers)
.put(updatePlayer)
// //POST ENDPOINT
.post(addNewPlayer);

app.route('/player/:PlayerId')
//GET SPECIFIC PLAYER
    .get(getPlayerWithID)
//UPDATE SPECIFIC PLAYER
    .put(updatePlayer)

    .delete(deletePlayer)
}

export default routes;
