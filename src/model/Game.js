//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
import Team from './Team'

export default class Game
{
    constructor()
    {
        this.id=Math.floor(Math.random() * (Number.MAX_VALUE));
        this.redTeam = new Team("Red");
        this.blueTeam = new Team("Blue");
        this.currentTurn = 0;
    }

}