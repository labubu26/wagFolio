export default function modalComp() {

  const template = document.createElement('template');
  template.innerHTML = `
      <style>
      /* The Modal (background) */
      @import url('./css/main.css');
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 5; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  
  /* The closeBtn Button */
  #closeBtn {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  #closeBtn:hover,
  #closeBtn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
      </style>   
  
  
  
      
      <!-- Trigger/Open The Modal -->
      <!-- <button class="button -md -white mt-32 text-black" id="modalBtn">Open Modal test</button> -->
  
  <!-- The Modal -->
  <div id="myModal" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span id="closeBtn">&times;</span>
  <label for="passModal">Password:</label><br>
  <input type="text" id="passModal" ><br><br>
  <button class="button -md -black text-white mt-32" id="submitModal">submit</button>
      
    </div>
  
  </div>
  `;

  class modalPass extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      var modal = this.shadowRoot.getElementById("myModal");

 
        modal.style.display = "block";
        // checkpass();

 
      this.shadowRoot.querySelector("#submitModal").addEventListener('click', () => {
        var pass = this.shadowRoot.querySelector("#passModal").value;
        // checkpass(pass)
      });

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

  window.customElements.define('modal-pass', modalPass);


};


