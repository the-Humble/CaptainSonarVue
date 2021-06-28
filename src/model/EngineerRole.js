//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
import Role from '@/model/Role.js'
import buttonToggle from './ButtonToggle'

export default class EngineerRole extends Role
{
    constructor(roleName, player)
    {
        super(roleName, player);

        this.buttons = [];
        
        this.createButtons();

        //directions arrays
        this.westSystems =[0,1,2,3,4,5];
        this.northSystems=[6,7,8,9,10,11];
        this.southSystems=[12,13,14,15,16,17];
        this.eastSystems =[18,19,20,21,22,23];
        //this.fillDirections();        

        //subsystem arrays
        this.subsystem0 = [0,1,2,20];
        this.subsystem1 = [6,7,8,18];
        this.subsystem2 = [12,13,14,19];
        this.subreactor = [4,5,11,16,21,23];
        //this.fillSubSystems();

        //Actions arrays
        this.attackSystem = [0,7,10,14,15,20];
        this.radarSystem = [2,3,9,12,18,22];
        this.scenarioSystem=[1,6,8,13,17,19];
        //this.fillActionSystems();

        //Can go in direction
        this.north = true;
        this.east = true;
        this.south = true;
        this.west = true;
    }

    
    createButtons(){
        for(let i = 0; i< 24; i++){
            this.buttons.push(new buttonToggle(false));
        }

    }
        /*
        //Didn't think of a better way to do this, so it looks awful, but it should work

        //type
        //subsystem
        //direction

        //direction:west
        for(let i=0; i<6; i++){
            this.buttons[i].direction = "west";
        }
    
        this.buttons[0].type = "attack";
        this.buttons[0].subsystem = 0;

        this.buttons[1].type = "scenario";
        this.buttons[1].subsystem = 0;

        this.buttons[2].type = "radar";
        this.buttons[2].subsystem = 0;

        this.buttons[3].type = "radar";
        this.buttons[3].subsystem = -1;

        this.buttons[4].type = "reactor";
        this.buttons[4].subsystem = 3;

        this.buttons[5].type = "reactor";
        this.buttons[5].subsystem = 3;

        //direction:north
        for(let i=6; i<12; i++){
            this.buttons[i].direction = "north";
        }
        this.buttons[6].type = "scenario";
        this.buttons[6].subsystem = 1;

        this.buttons[7].type = "attack";
        this.buttons[7].subsystem = 1;

        this.buttons[8].type = "scenario";
        this.buttons[8].subsystem = 1;

        this.buttons[9].type = "radar";
        this.buttons[9].subsystem = -1;

        this.buttons[10].type = "attack";
        this.buttons[10].subsystem = -1;

        this.buttons[11].type = "reactor";
        this.buttons[11].subsystem = 3;

        //direction:south
        for(let i=12; i<18; i++){
            this.buttons[i].direction = "south";
        }
        this.buttons[12].type = "radar";
        this.buttons[12].subsystem = 2;

        this.buttons[13].type = "scenario";
        this.buttons[13].subsystem = 2;

        this.buttons[14].type = "attack";
        this.buttons[14].subsystem = 2;

        this.buttons[15].type = "attack";
        this.buttons[15].subsystem = -1;

        this.buttons[16].type = "reactor";
        this.buttons[16].subsystem = 3;

        this.buttons[17].type = "scenario";
        this.buttons[17].subsystem = -1;

        //direction:east
        for(let i=118; i<24; i++){
            this.buttons[i].direction = "east";
        }
        this.buttons[18].type = "radar";
        this.buttons[18].subsystem = 1;

        this.buttons[19].type = "scenario";
        this.buttons[19].subsystem = 2;

        this.buttons[20].type = "attack";
        this.buttons[20].subsystem = 0;

        this.buttons[21].type = "reactor";
        this.buttons[21].subsystem = 3;

        this.buttons[22].type = "radar";
        this.buttons[22].subsystem = -1;

        this.buttons[23].type = "reactor";
        this.buttons[23].subsystem = 3;


    }

    fillDirections(){
        this.buttons.forEach(element =>{
            switch(element.direction){
                case "west":
                    this.westSystems.push(element)
                    break;
                case "north":
                    this.northSystems.push(element)
                    break;
                case "south":
                    this.southSystems.push(element)
                    break;
                case "east":
                    this.eastSystems.push(element)
                    break;
            }
        })
    }

    fillSubSystems(){
        this.buttons.forEach(element =>{
            switch(element.subsystem){
                case 0:
                    this.subsystem0.push(element)
                    break;
                case 1:
                    this.subsystem1.push(element)
                    break;
                case 2:
                    this.subsystem2.push(element)
                    break;
                case 3:
                    this.subreactor.push(element)
                    break;
            }
        })
    }

    fillActionSystems(){
        this.buttons.forEach(element =>{
            switch(element.type){
                case "attack":
                    this.attackSystem.push(element)
                    break;
                case "radar":
                    this.radarSystem.push(element)
                    break;
                case "scenario":
                    this.scenarioSystem.push(element)
                    break;
            }
        })
    }
    */
}