    import { LitElement, html, css } from 'lit';
    import "@lrnwebcomponents/meme-maker/meme-maker.js";

    class CharacterCard extends LitElement {
    static get properties() {
        return {
            name: {
                type: String,
                reflect: true
            },
            description: {
                type: String,
                reflect: true
            },
            voice: {
                type: String,
                reflect: true
            },
            accentColor: {
                type: String,
                reflect: true,
                attribute: "accent-color"
            },
            image: {
                type: String,
                reflect: true
            },

            openDetails: {
                type: Boolean,
                reflect: true
            }
        }
    }

    constructor() {
        super();
        this.header = 'My app';
        this.name = "Mickey Mouse";
        this.image = "https://di2ponv0v5otw.cloudfront.net/posts/2022/05/04/6272d95efdd4cd63f1180f24/m_wp_6272dadf4fd23afc4104b553.webp";
        this.description = "This is the man himself; Mickey the Mouse";
        this.voice = "Chris Diamantopoulos";
        this.accentColor = "coral";
        this.openDetails = false;
    }

    static styles = css`
        :host([accent-color="blue"]) .card {
            background-color: #bef0ff;
        }
        :host([accent-color="coral"]) .card {
            background-color: #ffbdbd;
        }
        :host([accent-color="green"]) .card {
            background-color: 	#01d086;
        }
        :host([accent-color="orange"]) .card {
            background-color:#f39b59;
        }
        .card {
            background-color: var(--main-bg-color);
            border-radius: 2%;
            width: 500px;
            display: inline-block;
            margin: 12px;   
        }
        .title {
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            text-align: center;
            padding: 8px;
        }
        .inside-card{
            background-color: white;
            margin: 8px;
            display: flex;
            border: thick double #32a1ce;
            border-radius: 10px;
        }
        meme-maker {
            width: 50%;
        }
        details {
            background-color: skyblue;
            display: inline-block;
            padding: 16px;
            font-family: Arial, Helvetica;
            font-weight: bold;
            box-shadow: 10px 5px 5px;
            margin: 12px;
        }
        details:hover {
            background-color: skyblue;
            display: inline-block;
            padding: 16px;
            font-family: Arial, Helvetica;
            font-weight: bold;
        }
        section {
            padding: 16px;
        }
        .duplicate:hover {
            background-color: black;
            color: white;
        }
        .hovered:hover {
            background-color: #456936;
        }


        @media screen and (max-width: 500px){
            .card {
                padding: 8px;
            }
            .inside-card {
                width: 100%;
                display: flex;
            }
        }
        @media screen and (min-width: 500px) and (max-width: 800px){
            .inside-card {
                background-color: white;
                width: 100%;
                display: flex;
                border: thick double #32a1ce;
                border-radius: 10px;
                padding: 16px;
            }
            
            .not-image{
                margin: 8px;
            }
            .image {
                margin: 16px;
            }
            .description {
                font-size: 12pt;
                font-family: Arial;
            }
        }
        @media screen and (min-width: 800px){
            .title {
                color: white;
                text-align: center;
                padding: 12px;
            }
            .description {
                font-size: 12pt;
                font-family: Arial;
            }
        }
    `;

    toggleEvent() {
        const state = this.shadowRoot.querySelector('details').getAttribute('open') === "";
        this.openDetails = state;
    }

    updated(changedProperties) { 
        changedProperties.forEach((oldValue, propName) => {
            if (propName === 'openDetails') {
                this.dispatchEvent(new CustomEvent('opened-changed',
                {
                    composed: true, 
                    bubbles: true,
                    cancelable: false,
                    detail: {
                    value: this[propName]}}))
                }
        });
    }

        render() {
        return html`
            <div class="card" accent-color=${this.accentColor}>
                <h1 class="title">${this.name}</h1>
            <section class="inside-card">
                <meme-maker image-url="${this.image}" top-text="${this.name}"></meme-maker>
                <div class="not-image">
                    <p class="description">${this.description}</p>
                    <slot name="desc"></slot> 
                <details class="details" .open="${this.openDetails}" @toggle="${this.toggleEvent}">
                    <summary>Details</summary>
                    Voiced by:  ${this.voice}
                </details>
                </div>
            </section>
            </div>
        `;
        }
    }

    customElements.define('character-card', CharacterCard);