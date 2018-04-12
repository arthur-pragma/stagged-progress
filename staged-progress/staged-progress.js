(function () {

    const owner = document.currentScript.ownerDocument;

    class StagedProgress extends HTMLElement {

        constructor() {

            super();

            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = owner.querySelector('#staged-progress-template');
            const instance = template.content.cloneNode(true);

            shadowRoot.appendChild(instance);
        }

        static get observedAttributes() { return ["value"]; };

        get value() { return this.getAttribute('value'); };
        set value(value) { this.setAttribute('value', value); };

        connectedCallback() {
        }

        disconnectedCallback() {
        }

        attributeChangedCallback(name, oldValue, newValue) {

            this.updateProgress(newValue);
        }

        updateProgress(value) {
            let element = this.shadowRoot.querySelector('.progress');

            element.setAttribute('data-progress', value);
        }
    }

    customElements.define('staged-progress', StagedProgress);

}());