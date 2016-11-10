let CarLot = (function () {
     let inventory = [];
         return {
          loadInventory: function (callback) {
               let inventoryLoader = new XMLHttpRequest();
               inventoryLoader.open("GET", "inventory.json");
               inventoryLoader.send();//WHat does .send() do?

               inventoryLoader.addEventListener("load", function () {
                    inventory = JSON.parse(this.responseText).cars;
                    callback(inventory);
               });
          },
          getInventory: function () {
               return inventory;
          }
     };
})();

     console.log("CarLot", CarLot);
