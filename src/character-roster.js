import { LitElement, html, css } from 'lit';
import "./character-card.js"

export class CharacterRoster extends LitElement {
    static get tag(){
        return "character-roster";
    }
    
    static get properties() {
        return {
            characters: {type: Array},
            series: {type: String}
        }
    }

    constructor () {
        super();
        this.characters = [];
        this.series = "Mickey Mouse Clubhouse";
        this.updateRoster();
    }

    async updateRoster() {
        const address = new URL("../assets/roster.json", import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok){
                return response.json();
            }
            return [];
        })
        .then((data) => {
            this.characters = data;
        });
    }
    
    static get styles() {
        return css `
        :host {
            display: block;
        }
        .wrapper {
            display: flex;
            border: 1px solid black;
        }
        .item {
            display: inline-flex;
        }
        `;
    }
    
    render() {
        return html `
        <h2>${this.series}</h2>
        <div class="wrapper">
            ${this.characters.map(character => html `
            <div class="item">
                <character-card name=${character.name} description=${character.description} image=${character.image} voice=${character.voice}></character-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(CharacterRoster.tag, CharacterRoster);
