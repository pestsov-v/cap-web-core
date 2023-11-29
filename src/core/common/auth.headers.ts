import {NAuthService} from "@Core/Types";

export const AuthHeaders: NAuthService.AuthHeaders = {
    X_USER_ACCESS_TOKEN: 'x-user-access-token',
    X_USER_REFRESH_TOKEN: 'x-user-refresh-token',
    X_ORGANIZATION_ACCESS_TOKEN: 'x-user-organization-token',
    X_ORGANIZATION_REFRESH_TOKEN: 'x-user-organization-token',
} as const