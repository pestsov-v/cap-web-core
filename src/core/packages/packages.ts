import {injectable, inject, Container, ContainerModule} from 'inversify'
import * as jwt from 'jwt-decode'

export const inversify = {
    inject, injectable, ContainerModule, Container
}

export const jwtDecode = {
    jwt
}