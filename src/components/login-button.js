class LoginButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          .login-button {
            width: 809px;
            height: 98px;
            background-color: #D98FFF;
            color: white;
            border-radius: 60px;
            border: none;
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 24px;




          }
        </style>
        <button class="login-button">INGRESAR CON PERA</button>
      `;
    }
  }
  
  customElements.define('login-button', LoginButton);