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

        this.messageLog=""

        this.position={
            x,
            y
        }
    }

}