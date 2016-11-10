function populatePage (inventory) {
  // Loop over the inventory and populate the page
  console.log("Pop", inventory);
  let output = document.getElementById("container");
  console.log("output", output);
    inventory.forEach(function(object, index) {
          let cardDiv = document.createElement("div");

          let Car = `<div id="car${index}" class="col-sm-4">
                 <h4>${object.make}</h4>
                 <h4>${object.model}</h4>
                 <h4>${object.year}</h4>
                 <h4>${object.price}</h4> 
                 <p>${object.description}</p>
                 </div>`
          cardDiv.innerHTML = Car;
          output.appendChild(cardDiv);

  // Now that the DOM is loaded, establish all the event listeners needed
     })
          // CarLot.activateEvents();
};
// Load the inventory and send a callback function to be
// invoked after the process is complete
  console.log("CarLot", CarLot);
CarLot.loadInventory(populatePage);



