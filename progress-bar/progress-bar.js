(function() {

    const owner = document.currentScript.ownerDocument;

    class ProgressBar extends HTMLElement {

        constructor() {
            super();

            const shadow = this.attachShadow({ mode: 'open'});
            const template = owner.querySelector('#progress-bar-template');
            const instance = template.content.cloneNode(true);

            shadow.appendChild(instance);
        }

        connectedCallback() {}
        disconnectedCallback() {};
    }

    customElements.define('progress-bar', ProgressBar);

}());