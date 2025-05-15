import type { InstallWithSFC } from '../utils'
import { installWithSFC } from '../utils'
import SayHello from './SayHello.vue'

export const StSayHello: InstallWithSFC<typeof SayHello> = installWithSFC(SayHello)

export default StSayHello
