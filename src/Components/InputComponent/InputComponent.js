import { LitElement, html, css } from "lit";

export class InputComponent extends LitElement {
  constructor() {
    super();
    this.value = "";
    this.index = -1;
  } 
  static get properties() {
    return {
      value: { type: String },
      index: { type: Number },
    };
  };
  static get styles() {
    return css`
      input {
        padding: 0.5rem;
        font-size: 1rem;
      }
    `;
  } 

  _onInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("ingreso-de-datos", {
        detail: { value: this.value, index: this.index }
      })
    )
  }
  render() {
    return html` <input type="text" placeholder="Armando es gay" @input="${this._onInput}" .value="${this.value}" /> `;
  } 
} 