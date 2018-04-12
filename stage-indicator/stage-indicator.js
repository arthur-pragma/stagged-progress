(function() {

    const owner = document.currentScript.ownerDocument;

    class StageIndicator extends HTMLElement {

        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: 'open'});
            const template = owner.querySelector('#stage-indicator-template');
            const instance = template.content.cloneNode(true);

            shadowRoot.appendChild(instance);
        }

        static get observeredAttributes() {
            return ["type", "value"];
        }

        get type() { return this.getAttribute("type"); };
        set type(value) { this.setAttribute("type", value); };

        get value() { return this.getAttribute("value"); };
        set value(value) { this.setAttribute("value", value); };

        connectedCallback() {
        }

        disconnectedCallback() {
        }
    }

    customElements.define('stage-indicator', StageIndicator);

}());