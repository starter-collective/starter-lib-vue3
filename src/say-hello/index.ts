import { installWithSFC } from '../utils'
import SayHello from './SayHello.vue'

export type SayHelloInstance = InstanceType<typeof SayHello>

export const StSayHello = installWithSFC(SayHello)

export default StSayHello
