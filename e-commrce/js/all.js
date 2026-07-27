function getproducts(parameter = localStorage.getItem('myparameter')) {
    document.querySelector('input').value = parameter;
    var filterproduct = JSON.parse(localStorage.getItem("myproducts"));
    if(parameter == "price low to high") {
        for (const key in filterproduct) {
            filterproduct[key].sort((a,b)=>{
                return a.price-b.price;
            });
        }
    } else if(parameter == "price high to low"){
         for (const key in filterproduct) {
            filterproduct[key].sort((a,b)=>{
                return b.price-a.price;
            });
        }
    } else if(parameter.length == 0){

    }else{
        for (const key in filterproduct) {
           console.log(key);
           filterproduct[key] = filterproduct[key].filter((data)=> {
                return data.company.toLowerCase().includes(parameter.toLowerCase());
           });
        }
        console.log(filterproduct);
    }

    const products = filterproduct;

    for (const key in products) {
        
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.append(key);
        section.appendChild(h2);

        let div = document.createElement('div');
        for (const element of products[key]) {
            let main = document.createElement('main');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let h5 = document.createElement('h5');
            let img = document.createElement('img');
            let p = document.createElement('p');

            h3.append(element.company);
            h4.append(element.model)
        }
    }
}