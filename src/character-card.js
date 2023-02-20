import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CharacterCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    .card {
        background-color: #44ab57;
        border-radius: 2%;
        width: 100%;
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
    .mickey {
        width: 50%;
    }
    .hax-button {
        background-color: skyblue;
        display: inline-block;
        padding: 16px;
        font-family: Arial, Helvetica;
        font-weight: bold;
        box-shadow: 10px 5px 5px;
    }
    .hax-button:hover {
        background-color: skyblue;
        display: inline-block;
        padding: 16px;
        font-family: Arial, Helvetica;
        font-weight: bold;
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
            width: 100%;
            padding: 8px;
        }
        .inside-card {
            margin: auto;
            width: 100%;
            display: flex;
        }
        .mickey{
            width: 50%;
            margin: 8px;
        }
        .alternate {
            background-color: #FCBA03;
        }   
    }
    @media screen and (min-width: 500px) and (max-width: 800px){
        .card {
            width: 100%;
        }
        .inside-card {
            background-color: white;
            width: 400px;
            display: flex;
            margin: 10px;
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
        .card {
            width: 800px;
        }
        .title {
            color: white;
            text-align: center;
            padding: 20px;
        }
        .mickey {
            margin: 20px 30px;
        }
        .description {
            font-size: 12pt;
            font-family: Arial;
        }
        .hax-button {
            display: none;
        }
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="card">
            <h1 class="title">${this.name}</h1>
        <section class="inside-card">
            <img class="mickey" src="${this.img}" alt="Mickey Mouse">
            <div class="not-image">
                <p class="description">${this.description}</p>
            <a class="hax-button" href="#">Details</a>
            </div>
        </section>
      </div>
    `;
  }
}

customElements.define('character-card', CharacterCard);