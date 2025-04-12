import { components } from './components'
import { createInstaller } from './utils/installer'

export * from './components'
export * from './resolver'

export const install = createInstaller(components)

export default install
