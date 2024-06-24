import { LitElement, html } from "lit";
import styles from "./proyecto-refuerzo-styles.js";
import  "./Components/ButtonComponent";
import "./Components/InputComponent";

export class ProyectoRefuerzo extends LitElement {
  constructor() {
    super();
    this.prop = "Lista de Tareas";
    this.label = "Guardar Tarea";
    this.input = "";
    this.list = [];
    console.log("constructor");
  }
  static get properties() {
    return {
      prop: { type: String },
      label: { type: String },
      input: { type: String },
      list: { type: Array },
    };
  }
  static get styles() {
    return [styles];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback");
  }
  firstUpdated() {
    console.log("firstUpdated");
  }
  update(changedProperties) {
    super.update(changedProperties);
    console.log("update");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    console.log("disconnectedCallback");
  }
  onButtonClick() {
    this.list.push(this.input);
    console.log(this.list);
    this.input = "";
    console.log(this.input);
  }
  onInput(e) {
    const { value, index } = e.detail;
    console.log(value);
    console.log(index);
    if (index !== undefined && index !== -1) {
      this.list = this.list.map((item, i) => i === index ? value : item);
    } else {
      this.input = value;
    }
  }
  removeItem(index) {
    this.list = this.list.filter((_, i) => i !== index);
  }
  render() {
    return html`  
      <div>
        <h1>Proyecto Refuerzo: ${this.prop}</h1>
        <input-component @ingreso-de-datos="${this.onInput}" .value="${this.input}"></input-component>
        <button-component .label="${this.label}" @botton-click="${this.onButtonClick}"></button-component>
        <div>
          ${this.list.map((item, index) => html`
            <input-component .value="${item}" .index="${index}" @ingreso-de-datos="${this.onInput}"></input-component>
            <button @click="${() => this.removeItem(index)}">Eliminar</button>
          `)}
        </div>
      </div>`
    ;
  }
}