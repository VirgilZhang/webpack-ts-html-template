import { showHelloWorld } from './common'
import './css/common.css'
import './css/common.less'

let val: string = 'abc'
document.querySelector('.main-text').innerHTML = val

showHelloWorld('jony')
