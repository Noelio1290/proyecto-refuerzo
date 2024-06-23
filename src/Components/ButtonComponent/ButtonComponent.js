import { LitElement, html, css } from "lit";

export class ButtonComponent extends LitElement {
  constructor() {
    super();
    this.label = "ButtonComponent";
  }
  static get properties() {
    return {
      label: { type: String },
    };
  };
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  onclick(e) {
    this.dispatchEvent(
      new CustomEvent("botton-click", {
        detail: {
          label: this.label,
        },
        bubbles: true,
        composed: true,
      })
    )
  }
  
  render() {
    return html` 
      <button @click=${this.onclick}>${this.label}</button>
      `;
  }
}