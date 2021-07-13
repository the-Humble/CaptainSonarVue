//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
import Team from './model/Team'

export default class Game
{
    constructor()
    {
        this.id=null;
        this.redTeam = new Team("Red");
        this.blueTeam = new Team("Blue");
        this.currentTurn = 0;
    }

}