import {inversify} from '@Packages'
import {IInitiator} from "@Core/Types";
import {CoreSymbols} from "./ioc.core.symbols";
import {Initiator} from "../initiator";
const {ContainerModule} = inversify

export const module = new ContainerModule((bind) => {
    bind<IInitiator>(CoreSymbols.Initiator).to(Initiator).inSingletonScope()
})