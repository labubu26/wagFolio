

export default class modalPass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    // const dataPass = this.getAttribute(data-pass) || "oka";

    
  }
  render(){
    const style = `<link rel="stylesheet" href="js/module/modal.css" > `
    const template = 
    ` 
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span id="closeBtn">&times;</span>

        <slot name="info"></slot>
        <slot></slot>
      </div>
    
    </div>
    `
    this.shadowRoot.innerHTML = ` ${style} ${template} `
  }


  connectedCallback() {
    // this. open();
    this.closeown()
  }




  open(){
    const modal = this.shadowRoot.getElementById("myModal");
    modal.classList.add('active');
  }

  close(){
    const modal = this.shadowRoot.getElementById("myModal");
    
    modal.classList.remove('active');
  }

  closeown(){
    const modal = this.shadowRoot.getElementById("myModal");
     this.shadowRoot.querySelector("#closeBtn").addEventListener('click', () => {
      modal.classList.remove('active');
    });

    this.shadowRoot.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.classList.remove('active');

      }
    });
  }


}






