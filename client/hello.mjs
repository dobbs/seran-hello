const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  display: block;
  width: 100%;
  font-weight: bold;
  font-size: 200%;
}
</style>
<slot></slot>`
export class Hello extends HTMLElement {
  constructor() {
    super()

    let shadow = this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  set json(json) {
    this.textContent = json.text;
  }
}
registerPlugin("hello", Hello);
