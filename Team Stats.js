const team = {
  _players:[
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Pete',
      lastName: 'Maravich',
      age:13
    },
    {
      firstName: 'Tim',
      lastName: 'Duncan',
      age: 12
    }
    ],
  _games:[
    {
      opponet: 'Warriors',
      teamPoints: 72,
      opponetPoints: 71
    },
    {
      opponet: 'Kings',
      teamPoints: 69,
      opponetPoints: 84
    },
    {
      opponet: 'Raptors',
      teamPoints: 94,
      opponetPoints: 86
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
   addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponet, teamPoints, opponetPoints) {
    let game = {
      opponet: opponet,
      teamPoints: teamPoints,
      opponetPoints: opponetPoints
    }
    return this.games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa','Leslie', 44);
team.addPlayer('Bugs','Bunny', 76);

console.log(team.players);

team.addGame('Heat', 95, 80);
team.addGame('Hornets', 99, 96);
team.addGame('Nets', 91, 87);

console.log(team.games);