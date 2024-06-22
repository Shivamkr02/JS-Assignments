let company = {
    name : "Apple",
    foundationYear : 1976,

    productList : [
        {
            name : "iPhone",
            year : 2007
        },
        {
            name : "iPad",
            year : 2010
        }
    ],

    foundedBy : ["Steve Jobs" , "Steve Wozniak"],
    ceo : "Steve jobs",

    createNewProduct : function(product){
        company.productList.push(product);
    },

    resign : function(){
        str=company.ceo;
        company.ceo=null;
        return str;
    },

    hireCeo : function(name){
        company.ceo = name;
    },

    toString : function(){
        let productDetails = "";
        for(let p of company.productList){
            productDetails += p.name + "-" + p.year + ",";
        }
        return `<strong>Name:</strong>${company.name}<br>
                <strong>Foundation Year:</strong>${company.foundationYear}<br>
                <strong>Founders:</strong>${company.foundedBy.join(",")}<br>
                <strong>CEO:</strong>${company.ceo}<br>
                <strong>Product:</strong>${productDetails}<br>`;
    }
}
document.write("<h3>Company Details</h3>");
document.write(company);
document.write(`<br>CEO:${company.resign()} Resigned`);
document.write("<h3>After CEO Resignation</h3>");
document.write(company);
company.hireCeo("Tim Cook");
document.write("<br><h3>After hiring new CEO</h3>");
document.write(company);
document.write("<br>");
company.createNewProduct({name : "iHome",
    year : 2020,
});
document.write("<br><h3>After adding new Product</h3>");
document.write(company);

