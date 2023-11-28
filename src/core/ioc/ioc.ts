import 'reflect-metadata'
import {inversify} from '@Packages'
const {Container} = inversify
import {module} from './ioc.default.module'

const CoreContainer = new Container()
CoreContainer.load(module)

export {CoreContainer}