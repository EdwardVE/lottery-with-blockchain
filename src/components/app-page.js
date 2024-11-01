import './nav-bar.js';
import './login-button.js';

class AppPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          text-align: center;
          margin-top: 2rem;
        }
      </style>
      <nav-bar></nav-bar>
      <div class="container">
        <login-button></login-button>
      </div>
    `;
  }
}

customElements.define('app-page', AppPage);