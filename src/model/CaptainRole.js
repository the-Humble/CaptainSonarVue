//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
import Role from '@/model/Role.js'
import GameMap from '@/model/GameMap.js'

export default class CaptainRole extends Role
{
    constructor(roleName, player)
    {
        super(roleName, player)
        this.map = new GameMap();
    }
}