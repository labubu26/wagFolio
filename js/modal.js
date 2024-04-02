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
  <button class="button -md -white mt-32 text-black" id="modalBtn">Open Modal test</button>
  
  <!-- The Modal -->
  <div id="myModal" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span id="closeBtn">&times;</span>
      <form>
  <label for="fname">Password:</label><br>
  <input type="text" id="fname" value="John"><br><br>
  <input type="submit" value="Submit">
</form> 
      
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

      this.shadowRoot.querySelector('#modalBtn').addEventListener('click', () => {
        modal.style.display = "block";
        checkpass();
      });

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

  // download with pass
  function downloadFile(url, fileName) {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        // aElement.setAttribute('href', href);
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };
  function checkpass(a, b) {
    // let person = prompt("Hi there 🖐️ Please mail to nqt99designs@gmail.com for the CODE to download this file", '');
    var person = document.getElementById("fname").value;
    console.log("nó", person);
  
    if (person == 'mnbvcx') {
      downloadFile(a, b);
      return false;
    }
    else return false;
  }

  window.customElements.define('modal-pass', modalPass);


};
