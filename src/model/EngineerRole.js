
import Role from '@/model/Role.js'

export default class EngineerRole extends Role
{
    constructor(name)
    {
        super(name)
        //Can go in direction
        this.north = true,
        this.east = true,
        this.south = true,
        this.west = true,

        //directions arrays
        this.northSystems=[],
        this.eastSystems=[],
        this.southSystems=[],
        this.westSystems=[],

        //subsystem arrays
        this.subsystem1 = [],
        this.subsystem2=[],
        this.subsystem3=[],
        this.subreactor=[],

        //Actions arrays
        this.attack = [],
        this.radar = [],
        this.scenario=[]
    }
}