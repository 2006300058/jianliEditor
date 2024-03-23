import { Template3 } from "./template-3"
import { Template4 } from "./template-4"
import { DeveloperConcise1Template } from "./template-1"
import { DeveloperConcise2Template } from "./template-2"
import { BaseTemplate } from "./template"

export {TemplateProvider, useTemplate} from './template'

export const templates: BaseTemplate[] = [
    new DeveloperConcise1Template(),
    new DeveloperConcise2Template(),
    new Template3(),
    new Template4()
]