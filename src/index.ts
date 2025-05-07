import { components } from './components'
import { createInstaller } from './utils/installer'

export * from './components'
export * from './resolver'

const installer = createInstaller(components)

export const install = installer.install

export default installer
