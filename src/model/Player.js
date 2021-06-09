
export default class Player
{
    constructor(name, roles, roleNames, team)
    {
        this.name = name;
        this.roles = roles;
        this.roleNames = roleNames; 
        this.team = team;

        this.notes = "";
        this.isReady = false;
    }

    GetRole(roleString){
        this.roles.forEach(element => {
            if(element.name == roleString){return element}
        });
    }


}