//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
export default class Map
{
    constructor(){
        this.mapState = [
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
        ]

        this.mapLayout = [
            [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
            [true,true,false,true,true,true,false,true,true,true,true,true,false,false,true],
            [true,true,false,true,true,true,true,true,false,true,true,true,false,true,true],
            [true,true,true,true,true,true,true,true,false,true,true,true,true,true,true],
            [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
            [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
            [true,false,true,false,true,true,false,true,false,true,true,true,true,true,true],
            [true,false,true,false,true,true,false,true,true,true,true,true,true,true,true],
            [true,true,true,false,true,true,true,false,true,true,true,false,false,false,true],
            [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
            [true,true,true,false,true,true,true,true,true,true,true,true,true,true,true],
            [true,true,false,true,true,true,true,false,true,true,true,false,true,true,true],
            [false,true,true,true,true,true,true,true,true,true,true,true,false,true,true],
            [true,true,false,true,true,true,false,true,false,true,true,true,true,false,true],
            [true,true,true,false,true,true,true,true,true,true,true,true,true,true,true]
        ]
    }

    ResetMap(){
        this.mapState = [
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
        ]
        
    }



    UpdateMap(x, y, active){
        this.mapState[x][y] = active;
        this.mapToggles[x][y].active = active
    }

}
