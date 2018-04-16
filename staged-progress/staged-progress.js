(function () {

    // 1. ES6 modules

    const owner = document.currentScript.ownerDocument; // 
    
    class StagedProgress extends HTMLElement {

        
        constructor() {

            super();

            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = owner.querySelector('#staged-progress-template'); // move to connected callback
            const instance = template.content.cloneNode(true);

            shadowRoot.appendChild(instance);
        }

        static get observedAttributes() { return ["value"]; };

        get value() { return this.getAttribute('value'); };
        set value(value) { this.setAttribute('value', value); };

        connectedCallback() {

            // connect here 
        }

        disconnectedCallback() {
            // dispose here
        }

        attributeChangedCallback(name, oldValue, newValue) {

            this.updateProgress(newValue);
        }

        updateProgress(value) {
            const element = this.shadowRoot.querySelector('.progress');
            const span = this.shadowRoot.querySelector('.progress > span');

            element.setAttribute('data-progress', value);            
            span.style.width = value + "%"; // css variable for this, width is expansive (transform is less expensive)
        }
    }

    customElements.define('staged-progress', StagedProgress);

}());