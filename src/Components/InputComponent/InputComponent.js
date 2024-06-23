import { LitElement, html, css } from "lit";

export class InputComponent extends LitElement {
  constructor() {
    super();
    this.value = "";
  } 
  static get properties() {
    return {
      value: { type: String },
    };
  };
  static get styles() {
    return css`
      :host {   
        display: block;
      }
    `;
  } 

  onInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("ingreso-de-datos", {
        detail: {
          value: this.value,
        },
        bubbles: true,
        composed: true,
      })
    )
  }
  render() {
    return html` <input type="text" placeholder="Armando es gay" @input="${this.onInput}" .value="${this.value}" /> `;
  } 
} 