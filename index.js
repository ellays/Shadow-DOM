// We create a closed shadow root, that is not accessible
let element = document.createElement('div')
element.attachShadow({ mode: 'closed' })
element.shadowRoot // null as the shadow root is closed
document.body.appendChild(element)

// We create an open shadow root, that is accessible
let element2 = document.createElement('div')
element2.attachShadow({ mode: 'open' })
console.log(`The shadow is ${element2.shadowRoot.mode}`) // logs "The shadow is open"

if (element2.shadowRoot.mode === 'open') {
    element2.shadowRoot.textContent = 'Shadow is open by JavaScript'
}

document.body.appendChild(element2)

console.log(`${element2.shadowRoot.textContent}`) // Shadow is open
