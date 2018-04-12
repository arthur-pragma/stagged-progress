(function () {

    const owner = document.currentScript.ownerDocument;

    class StageIndicator extends HTMLElement {

        static get observedAttributes() {
            return ["type", "value"];
        };

        constructor() {
            super();

            const shadowRoot = this.attachShadow({
                mode: 'open'
            });
            const template = owner.querySelector('#stage-indicator-template');
            const instance = template.content.cloneNode(true);

            shadowRoot.appendChild(instance);
        }

        get type() {
            return this.getAttribute("type");
        };
        set type(value) {
            this.setAttribute("type", value);
        };

        get value() {
            return this.getAttribute("value");
        };
        set value(value) {
            this.setAttribute("value", value);
        };

        connectedCallback() {}

        disconnectedCallback() {}

        attributeChangedCallback(name, oldValue, newValue) {

            switch (name) {

                case 'type':
                    return this.setStageType(newValue);
                case 'value':
                    return this.setStagePosition(newValue);
            }
        }

        setStageType(type) {
            let element = this.shadowRoot.querySelector('.stage-indicator');
            let types = ["major", "minor"];

            element.classList.remove(...types);
            element.classList.add(type);
        }

        setStagePosition() {

        }

    }

    customElements.define('stage-indicator', StageIndicator);

}());