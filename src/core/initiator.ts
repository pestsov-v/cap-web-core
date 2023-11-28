import {inversify} from '@Packages'
const {injectable} = inversify

import type {IInitiator} from "@Core/Types";

@injectable()
export class Initiator implements IInitiator {
    public async start(): Promise<void> {
        console.log('BOOM')
    }
    public async stop(): Promise<void> {}
}