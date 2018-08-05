import * as Express from 'express';
export interface ServerOptions {
}
export interface Server {
    app: Express.Application;
    /**
     * Handles the initial routines after the Express app instantiation.
     *
     * @param app The express application
     */
    onAppInstance(app: Express.Application): any;
    /**
     * Handles application common middlewares registrations.
     *
     * @param app The express application.
     */
    onAppRegister(app: Express.Application): any;
    /**
     * Handles pre-listen app routines, such as startup jobs.
     *
     * @param app The express application.
     */
    onAppReady(app: Express.Application): any;
}
