
    // Bill amounts ko store karne ke liye ek array banate hain
    let billAmounts = [];

    // User se chaar bill amounts enter karwane ke liye loop chalayenge
    for (let i = 0; i < 4; i++) {
        // Prompt ke through user se bill amount lete hain
        let bill = parseFloat(prompt(`Enter bill amount ${i + 1}:`));
        
        // Check karte hain ki user ne valid number enter kiya hai ya nahi
        if (!isNaN(bill) && bill > 0) {
            // Valid number hai to array mein push kar dete hain
            billAmounts.push(bill);
        } else {
            // Agar invalid input hai to alert dikhate hain aur loop ko wapas se repeat karte hain
            alert('Please enter a valid number');
            i--; // Current iteration ko repeat karne ke liye i ko decrement karte hain
        }
    }

    // Har bill amount ke liye tip calculate karte hain aur result print karte hain
    for (let i = 0; i < billAmounts.length; i++) {
        let bill = billAmounts[i];
        let tip;

        // Tip calculate karne ke rules
        if (bill < 250) {
            tip = bill * 0.20; // Agar bill 250 se kam hai to 20% tip
        } else if (bill >= 250 && bill <= 500) {
            tip = bill * 0.15; // Agar bill 250 aur 500 ke beech hai to 15% tip
        } else {
            tip = bill * 0.10; // Agar bill 500 se zyada hai to 10% tip
        }

        // Final bill ko calculate karte hain
        let finalBill = bill + tip;
        
        // Console mein result print karte hain
        document.write(`Original Bill: $${bill.toFixed(2)}, Tip: $${tip.toFixed(2)}, Final Bill: $${finalBill.toFixed(2)}</br>`);
    }

