import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Request, Response } from 'restify';
import { registrationFormService } from "../services/registrationFormService";
import { clientService } from "../services/clientService";


export class RegistrationFormController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/registrationForm/clients/:id', this.getByClientId.bind(this));
    }
    
    private async getByClientId(req: Request, res: Response): Promise<void> {
        const registrationForms = await registrationFormService.findByClientHolderIdOrClientCoholderId(req.params.id)
        const clientIds = [... new Set(registrationForms.map(x => x.clientHolderId))]
        const clientHolders = await clientService.findByIds(clientIds)

        res.send(
            registrationForms.map(rf => ({
                ...rf,
                clientHolder: clientHolders.find(c => c.id == rf.clientHolderId)
            }))
        )
    }
}