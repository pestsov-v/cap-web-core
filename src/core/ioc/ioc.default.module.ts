import {inversify} from '@Packages'
import {IAuthService, IInitiator, ILocalStorageProvider} from "@Core/Types";
import {CoreSymbols} from "./ioc.core.symbols";
import {Initiator} from "../initiator";
import {AuthService} from "../services/auth.service";
import {LocalStorageProvider} from "../providers/local-storage.provider";
const {ContainerModule} = inversify

export const module = new ContainerModule((bind) => {
    // Services
    bind<IAuthService>(CoreSymbols.AuthService).to(AuthService).inSingletonScope()

    // Providers
    bind<ILocalStorageProvider>(CoreSymbols.LocalStorageProvider).to(LocalStorageProvider).inSingletonScope()

    // Initiator
    bind<IInitiator>(CoreSymbols.Initiator).to(Initiator).inSingletonScope()
})