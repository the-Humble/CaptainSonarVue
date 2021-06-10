
export default class Player
{
    constructor(name, roleNames, team)
    {
        this.name = name;
        this.roleNames = roleNames; 
        this.team = team;

        this.isReady = false;
    }

    GetRole(roleString){
        this.roles.forEach(element => {
            if(element.name == roleString){return element}
        });
    }


}