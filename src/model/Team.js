export default class Team
{
    constructor(color)
    {
        this.color = color
        this.players = []
        this.health = 4;

        this.captain={}
        this.officer={}
        this.engineer={}
        this.radar={}
    }

    GetCaptain(){
        return this.captain;
    }

    GetOfficer(){
        return this.officer;
    }

    GetEngineer(){
        return this.engineer;
    }

    GetRadar(){
        return this.radar;
    }

}