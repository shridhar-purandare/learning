const template = document.createElement("template");

template.innerHTML = `
<style>
    h3 {
        color: blue;
    }
</style>
<div class="hello-world">
    <h3>Hello World ! </h3>
</div>
`;

// Web component is class extended from HTMLElement
class HelloWorld extends HTMLElement {
  constructor() {
    super();

    // This creates shadow dom which restricts all style, events to this dom 
    // Outside styles won't affect elements in this dom
    // By calling attachShadow with mode: 'open', we are telling our element to save a reference to the shadow root on the element.shadowRoot property.
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("hello-world", HelloWorld);
