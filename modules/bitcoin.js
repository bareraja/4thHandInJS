import Data from "./data.js";

class Bitcoin {
  constructor() {
    this.listBitcoinData();
  }

  // Arrow function ( => )
  listBitcoinData = async () => {
   let bitCoinData = await Data.getBitcoinData();

	 // Sender date & time til DOM
	 // Template LITERAL - 1
    const dateTime = bitCoinData.time.split(" ");
    document.getElementById("date").innerText = `Date: ${dateTime[0]}`;
    document.getElementById("time").innerText = `Time: ${dateTime[1]}`;

	  
	// Looper gennem alle "rates"
    for (let currency of Object.keys(bitCoinData.rates)) {
	
	// Henter rates data
      let data = bitCoinData.rates[currency];
		
		
	// Sender alle "curency" til DOM
	// Creating main html node
	// Template LITERAL - 2
      let node = document.createElement("div");
      document.querySelector("#main")
		
        .appendChild(node).innerHTML = 
		`<div class="col s6"><div class="card" tyle="display: table; 	
		height: 180px; overflow: hidden;">
      	<div class="card-content" style="display: table-cell; vertical-align: middle;">

        <span class="card-title">Currency: ${currency}</span>
        <span class="card-title">Rate: ${data.rate}</span>
        <span class="card-title" style="font-size: 20px;">Name: ${data.name}</span>

      	</div>
    </div>
</div>`
	  ;
    }
	  
  };
		
	
}

export default Bitcoin;
