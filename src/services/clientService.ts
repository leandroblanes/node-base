import { Client } from './../models/client';
import { DatabaseProvider } from "../database";


export class ClientService {
    public async findById(id: number): Promise<Client> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Client).findOne(id);
    }

    public async findByIds(ids: number[]): Promise<Client[]>{
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Client).findByIds(ids);
    }
}

export const clientService = new ClientService();