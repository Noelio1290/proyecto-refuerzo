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
    console.log(e.detail.value);
    this.input = e.detail.value;
    console.log(this.input);
  }
  render() {
    return html`  
      <div>
        <h1>Proyecto Refuerzo: ${this.prop}</h1>
        <input-component @ingreso-de-datos="${this.onInput}" .value="${this.input}"></input-component>
        <button-component .label="${this.label}" @botton-click="${this.onButtonClick}"></button-component>
        <p> La prop es: ${this.prop} y el label es: ${this.label} el input es: ${this.input} y la lista es: ${this.list} </p>
        <div>
          ${this.list.map(item => html`<p>${item}</p>`)}
        </div>
      </div>`
    ;
  }
}