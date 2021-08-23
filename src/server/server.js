/*
Node Express Server (MEVN Stack)
Copyright (c) 2021. Jose Ignacio Ferrer Vera
*/
'use strict';

const Express = require('express')

const CORS = require('cors')
const Path = require('path')
const HTTP = require('http')
const FileSystem = require('fs')

const Result = require('../lib/result')

const player = require('./model/Player')
const team = require('./model/Team')
const game = require('./model/Game')

const PORT = 3000;

class Server {

    constructor( api, port = PORT ) {

        // this.api = (this.api === undefined ? api : Express());

        this.api = Express();
        this.router = Express.Router();

        this.port = port;

        let corsOptions = {
            'allowedHeaders':['Content-Type'],
            'allowedMethods':['GET, POST, OPTIONS'],
            'origin':'*',
            'preflightContinue': true,
        }

        this.api
            .use( Express.json() )
            .use( Express.urlencoded({ extended: false }))
            .use( Express.static( Path.join(__dirname, '../../public') ))
            .use( CORS( corsOptions )).options('/*', this.corsHandler )
            .use('/api/player', player)
            .use('/api/team', team )
            .use('/api/game', game );

        this.run();
    }

    corsHandler( request, response ) {
        // CORS Requests send and options request first, this is the response
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        response.sendStatus( 200 );
    }

    _dataPath( userid ) {
        return `${Path.dirname( FileSystem.realpathSync(__filename))}/data/${userid}`
    }

    _handleListenerError( error ) {
        /**
         * Listen on provided port, on all network interfaces.
        */
        if (error.syscall !== 'listen')
            throw error;

        // handle specific listen errors with friendly messages
        let bind = typeof this.port === `string`?`Pipe ${this.port}`:`Port ${this.port}`;
        switch (error.code) {

            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit (1 );
                break;

            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;

            default:
                throw error;
        }
    }

    _handleListenerListening() {

        let addr = this.listener.address();
        let bind = typeof addr === `string`?`pipe ${addr}`:`port ${addr.port}`;
        console.log(`Listening on ${bind}`);
    }

    run() {
        // Create HTTP server.
        this.api.set('port', this.port );

        this.listener = HTTP.createServer( this.api );
        this.listener.listen( PORT );

        this.listener.on('error', error => { this._handleListenerError( error ) });
        this.listener.on('listening', () => { this._handleListenerListening() });
    }
}

const server = new Server();
module.exports = server;