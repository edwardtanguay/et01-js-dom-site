import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Info Site</h2>
    Test
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)