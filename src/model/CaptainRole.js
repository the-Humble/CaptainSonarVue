//Copyright (c) 2021. Jose Ignacio Ferrer. All Rights Reserved.
import Role from '@/model/Role.js'
import Map from '@/model/Map.js'

export default class CaptainRole extends Role
{
    constructor(roleName, player)
    {
        super(roleName, player)
        this.map = new Map();
    }
}