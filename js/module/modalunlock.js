

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
      <!-- Modal content -->
      <div class="modal-content">
        <div class="button" id="closeBtn">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L17 17" stroke="#6b6b6b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 1L0.999999 17" stroke="#6b6b6b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

        <slot name="info">
        <h4 class="fw-600">Protected Content.<h4>
        
        <p class="mt-8 fw-400 text-dark text-base ">To view please enter the
         passcode from
        <a class="button -underline4 px-4 fw-600 text-black" href="mailto:nqt99designs@gmail.com">WAG🖐️</a>
         <p>
        </slot>
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
    document.querySelector("body").style.overflowY = "hidden";
  }

  close(){
    const modal = this.shadowRoot.getElementById("myModal");
    
    modal.classList.remove('active');
    document.querySelector("body").style.overflowY = "unset";
  }

  closeown(){
    const modal = this.shadowRoot.getElementById("myModal");
     this.shadowRoot.querySelector("#closeBtn").addEventListener('click', () => {
      modal.classList.remove('active');
    document.querySelector("body").style.overflowY = "unset";

    });

    this.shadowRoot.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.classList.remove('active');
    document.querySelector("body").style.overflowY = "unset";


      }
    });
  }


}






