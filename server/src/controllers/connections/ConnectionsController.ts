import { Request, Response } from 'express';
import db from '../../database/connection';
import CreateNewConnection from './CreateNewConnection';
import ListConnections from './ListConnections';


export default class ConnectionsController {
  createNewConnection: CreateNewConnection;
  listConnections: ListConnections;

  constructor() {
    this.createNewConnection = new CreateNewConnection();
    this.listConnections = new ListConnections();

    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
  }

  async index(request: Request, response: Response) {
    const total = await this.listConnections.list();
    return response.send(total)
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;
    await this.createNewConnection.create(user_id);
    return response.status(201).send();
  }
}