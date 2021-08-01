"use strict"
const team = {
  _players:[
    {
      firstName: 'Emily',
      lastName: 'Wong',
      age: 35}, 
    {
      firstName: 'Meo',
      lastName: 'Wong',
      age: 32 },
    {
      firstName: 'Anna',
      lastName: 'Wong',
      age: 32
    }],
  _games: [
    {
      opponent: 'Bad Guys',
      teamPoints: 15,
      opponentPoints: 0
    },
    {
      opponent: 'Good Guys',
      teamPoints: 20,
      opponentPoints: 20
    },
    {
      opponent: 'Unknown Guys',
      teamPoints: 40,
      opponentPoints: 80
    }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  AddPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    }
    return this.players.push(player)
  },
  addGames(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    return this.games.push(game)
  }
}
// add new players
team.AddPlayer('Steph', 'Curry', 28)
team.AddPlayer('Lisa', 'Leslie', 44)
team.AddPlayer('Bugs', 'Bunny', 76)

console.log(team.players)

// add new games
team.addGames('we won', 100, 0)
team.addGames('oppo won', 99, 100)
team.addGames('win-win', 100, 100)

console.log(team.games)