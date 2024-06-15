
    let billAmounts = [];

    
    for (let i = 0; i < 4; i++) {
  
        let bill = parseFloat(prompt(`Enter bill amount ${i + 1}:`));
        
        
        if (!isNaN(bill) && bill > 0) {
          
            billAmounts.push(bill);
        } else {
            
            alert('Please enter a valid number');
            i--; 
    }

    for (let i = 0; i < billAmounts.length; i++) {
        let bill = billAmounts[i];
        let tip;

        if (bill < 250) {
            tip = bill * 0.20;
        } else if (bill >= 250 && bill <= 500) {
            tip = bill * 0.15; 
        } else {
            tip = bill * 0.10; 
        }

       
        let finalBill = bill + tip;
        
        // Console mein result print karte hain
        document.write(`Original Bill: $${bill.toFixed(2)}, Tip: $${tip.toFixed(2)}, Final Bill: $${finalBill.toFixed(2)}</br>`);
    }

