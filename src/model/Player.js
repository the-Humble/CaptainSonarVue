//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
export default class Player
{
    constructor(name, roleNames, team, gameID)
    {
        this.gameID = gameID;
        this.name = name;
        this.roleNames = roleNames; 
        this.team = team;

        this.isReady = false;
    }

    populate(object)
    {
        this.gameID = object.gameID;
        this.name = object.name;
        this.roleNames = object.roleNames; 
        this.team = object.team;

        this.isReady = object.isReady;
    }


}