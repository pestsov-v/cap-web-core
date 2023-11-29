export interface IAuthService {
    readonly userAccessToken: string
    readonly organizationAccessToken: string


    setTokens(tokens: NAuthService.JwtTokens): void
    validateToken(token: NAuthService.AuthHeaders[keyof NAuthService.AuthHeaders]): boolean
}

export namespace NAuthService {
    export type JwtTokens = {
        user: {
            accessToken: string
            refreshToken: string
        },
        organization?: {
            accessToken: string
            refreshToken: string
        }
    }

    export type AuthHeaders = {
        X_USER_ACCESS_TOKEN: 'x-user-access-token',
        X_USER_REFRESH_TOKEN: 'x-user-refresh-token',
        X_ORGANIZATION_ACCESS_TOKEN: 'x-user-organization-token',
        X_ORGANIZATION_REFRESH_TOKEN: 'x-user-organization-token',
    }

}