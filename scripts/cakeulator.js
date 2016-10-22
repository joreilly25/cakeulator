  // ----------- HIDE DIV BASED ON RADIO BUTTON SELECTION -----------
  $(document).ready(function() {
      $("input[name$='ordertype']").click(function() {
          var selection = $(this).val();
          console.log(selection);
          $("div.desc").hide();
          $("#" + selection).show();
      });

      $("input[name$='cakeshape']").click(function() {
          var cakeSelection = $(this).val();
          console.log(cakeSelection);
          $("div.descs").hide();
          $("#" + cakeSelection).show();
      });
  });
  // ----------- CALCULATE COST OF CAKE -----------
  function updatesumcakes() {
      var cakeQty = document.getElementById('qty').value;
      var unitCost = 7.5; // document.getElementById('unitPrice').value
      var result = document.getElementById('lineCost');
      var totalCost = cakeQty * unitCost;
      result.value = "$" + parseFloat(totalCost).toFixed(2);
  }
  // ----------- CALCULATE COST OF CUPCAKES -----------
  function updatesumcupcakes() {
      var cakeQty = document.getElementById('qtycc').value;
      var unitCost = document.getElementById('unitPricecc').value;
      var result = document.getElementById('lineCostcc');
      var totalCost = cakeQty * unitCost;
      result.value = "$" + parseFloat(totalCost).toFixed(2);
  }

  // ----------- CALCULATE COST OF Cake v2.0 -----------

  function cakeulateCost() {
      var cakeCost = $('input[name=roundsize]:checked').val();
      var result = document.getElementById('thisCakeCosts');
      var cakeCosty = parseInt(cakeCost) + 10;
      $('#thisCakeCosts').html("Cost: $" + parseFloat(cakeCosty).toFixed(2));

  }