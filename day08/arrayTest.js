let products = [
    {name: "Product1", price: 40},
    {name: "Product2", price: 60},
    {name: "Product3", price: 30},
    {name: "Product4", price: 100},
    {name: "Product5", price: 90}
    ]
    
    const newProd = products.map( (prod) =>  {
      return {
      name: prod.name,
      price:(prod.price*100)
      }
    });

    console.log(products);
    console.log(newProd);
   //newProd.forEach((num)=>console.log(num));


    //const m = new Map()