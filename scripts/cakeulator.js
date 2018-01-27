  // ----------- HIDE DIV BASED ON RADIO BUTTON SELECTION -----------
  $(document).ready(function() {
      $("input[name$='ordertype']").click(function() {
          var selection = $(this).val();
          console.log(selection);
          $("div.desc").hide();
          $("#" + selection).show();
      });
      // ----------- TOGGLES VIEW OF CAKE SHAPE (ROUND, SQUARE) -----------
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
  // TODO: I eventually want this to update whenever a selection is changed rather than having a button to calculate the cost.

  function cakeulateCost() {
      var roundCakeCost = $('input[name=roundsize]:checked').val();
      var roundCakeCosty = parseFloat(roundCakeCost) + 10;

      var squareCakeCost = $('input[name=squaresize]:checked').val();
      var squareCakeCosty = parseFloat(squareCakeCost) + 10;

      var tieredCakeCost = $('input[name=tieredsize]:checked').val();
      var tieredCakeCosty = parseFloat(tieredCakeCost) + 10;
      console.log($('input[name=cakeshape]:checked').val());

      if ($('input[name=cakeshape]:checked').val() == "roundcake") {
          $('#thisCakeCosts').html("Cost: $" + parseFloat(roundCakeCosty).toFixed(2));
      } else if ($('input[name=cakeshape]:checked').val() == "squarecake") {
          $('#thisCakeCosts').html("Cost: $" + parseFloat(squareCakeCosty).toFixed(2));
      } else {
          $('#thisCakeCosts').html("Cost: $" + parseFloat(tieredCakeCosty).toFixed(2));
      }
  }