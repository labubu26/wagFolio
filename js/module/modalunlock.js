

export default class modalUnlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    // const dataPass = this.getAttribute(data-pass) || "oka";

    
   
  }
  render(){
    const style = `<link rel="stylesheet" href="js/module/modalunlock.css" > `
    const template = 
    ` 
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span id="closeBtn">&times;</span>

        <slot name="info">Passcode to access</slot>
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
    modal.style.display = "block";
  }

  close(){
    const modal = this.shadowRoot.getElementById("myModal");
    modal.style.display = "none";
  }

  closeown(){
    const modal = this.shadowRoot.getElementById("myModal");

     // Close Modal
     this.shadowRoot.querySelector("#closeBtn").addEventListener('click', () => {
      modal.style.display = "none";
    });

    this.shadowRoot.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }


}






