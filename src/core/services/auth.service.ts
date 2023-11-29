import {inversify, jwtDecode} from '@Packages'
const {injectable, inject} = inversify
const {jwt} = jwtDecode
import {CoreSymbols} from "../ioc/ioc.core.symbols";

import type {IAuthService, ILocalStorageProvider, NAuthService} from "@Core/Types";
import {AuthHeaders} from "@Common";

@injectable()
export class AuthService implements IAuthService {
    constructor(
        @inject(CoreSymbols.LocalStorageProvider)
        private readonly _localStorage: ILocalStorageProvider
    ) {}

    public get userAccessToken(): string {
        const token =  this._localStorage.getString(AuthHeaders.X_USER_ACCESS_TOKEN)
        return token ?? null
    }

    public get organizationAccessToken(): string {
        const token =  this._localStorage.getString(AuthHeaders.X_ORGANIZATION_ACCESS_TOKEN)
        return token ?? null
    }

    public setTokens(tokens: NAuthService.JwtTokens): void {
        const {user} = tokens

        this._localStorage.setItem(AuthHeaders.X_USER_ACCESS_TOKEN, user.accessToken)
        this._localStorage.setItem(AuthHeaders.X_USER_REFRESH_TOKEN, user.refreshToken)

        if (tokens.organization) {
            const {organization} = tokens
            this._localStorage.setItem(AuthHeaders.X_ORGANIZATION_ACCESS_TOKEN, organization.accessToken)
            this._localStorage.setItem(AuthHeaders.X_ORGANIZATION_REFRESH_TOKEN, organization.refreshToken)
        }
    }

    public validateToken(token: NAuthService.AuthHeaders[keyof NAuthService.AuthHeaders]): boolean {
        const item = this._localStorage.getString(token)
        const jwtPayload = jwt.jwtDecode(item) as {exp: number, payload: {userId: string, sessionId: string}}
        return jwtPayload.exp >= Math.floor(Date.now() / 1000)
    }
}

