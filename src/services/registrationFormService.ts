import { RegistrationForm } from "../models/registrationForm";
import { DatabaseProvider } from "../database";


export class RegistrationFormService {
    public async findByClientHolderIdOrClientCoholderId(id: number): Promise<RegistrationForm[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(RegistrationForm).find({
            where: [
                { clientHolderId: id },
                { clientCoholderId: id }
            ]
        });
    }
}

export const registrationFormService = new RegistrationFormService();