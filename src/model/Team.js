export default class Team
{
    constructor(color)
    {
        this.color = color
        this.players = []
        this.health = 4;

        this.captain=null;
        this.officer=null;
        this.engineer=null;
        this.radar=null;

        this.messageLog=""

        this.position={
            x : Number,
            y : Number
        }
    }

}