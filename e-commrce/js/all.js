// const myproducts = {
//     Mobiles: [
//         {
//             model: "Samsung Galaxy S24 5G(Amber Yellow, 256 GB) (8 GB RAM)",
//             name: "Samsung",
//             image: "IMAGES/MOBILES/Galaxy S24.webp",
//             price: 55999,
//             description: "8 Gen 3 | Octa Core Processor | 3.39 GHz Clock Speed\n50MP + 12MP Rear Camera\n12MP Front Camera\n6.2 inch Dynamic AMOLED 2X Display\n4000 mAh Battery"
//         },
//         {
//             model: "Apple iPhone 16 Plus (Teal, 512 GB)",
//             name: "Apple",
//             image: "IMAGES/MOBILES/iPhone 16.webp",
//             price: 107900,
//             description: "A18 Chip, 6 Core Processor\n48MP + 12MP Rear Camera\n12MP Front Camera\n6.7 inch OLED Display\n3561 mAh Battery"
//         },
//         {
//             model: "OnePlus 13 (Arctic Dawn, 512 GB)",
//             name: "OnePlus",
//             image: "IMAGES/MOBILES/OnePlus 13.webp",
//             price: 72599,
//             description: "Snapdragon 8 Elite\n50MP Triple Camera\n6.82 inch ProXDR Display\n6000 mAh Battery"
//         },
//         {
//             model: "REDMI Note 15 Pro+ 5G",
//             name: "Xiaomi",
//             image: "IMAGES/MOBILES/Redmi Note 15.webp",
//             price: 42999,
//             description: "200MP Camera\n6.83 inch AMOLED Display\n6500 mAh Battery"
//         },
//         {
//             model: "Vivo X300 Ultra",
//             name: "Vivo",
//             image: "IMAGES/MOBILES/vivo x 300 ultra.webp",
//             price: 209999,
//             description: "Snapdragon 8 Elite\n200MP Camera\n16GB RAM\n6600 mAh Battery"
//         }
//     ],

//     Laptops: [
//         {
//             model: "DELL Inspiron Intel Core Ultra 7",
//             name: "Dell",
//             image: "IMAGES/LAPTOPS/Inspiron 15.webp",
//             price: 129999,
//             description: "16GB RAM | 1TB SSD | Windows 11"
//         },
//         {
//             model: "HP Omen AMD Ryzen 9",
//             name: "HP",
//             image: "IMAGES/LAPTOPS/victus ryzen 7.webp",
//             price: 174240,
//             description: "Ryzen 9 | RTX Graphics | 24GB RAM"
//         },
//         {
//             model: "Lenovo IdeaPad Slim 3",
//             name: "Lenovo",
//             image: "IMAGES/LAPTOPS/lenovo ideapad slim 3.webp",
//             price: 72690,
//             description: "Slim Business Laptop"
//         },
//         {
//             model: "Apple MacBook Air M5",
//             name: "Apple",
//             image: "IMAGES/LAPTOPS/macbook air m5.webp",
//             price: 157990,
//             description: "Apple M5 | 16GB RAM | 512GB SSD"
//         },
//         {
//             model: "ASUS ROG Zephyrus G16",
//             name: "Asus",
//             image: "IMAGES/LAPTOPS/rog zephyrus g16.webp",
//             price: 507156,
//             description: "Core Ultra 9 | RTX | 32GB RAM"
//         }
//     ],

//     Watches: [
//         {
//             model: "Apple Watch Ultra 3 GPS",
//             name: "Apple",
//             image: "IMAGES/WATHES/Watch Ultra.webp",
//             price: 104900,
//             description: "Premium Smart Watch"
//         },
//         {
//             model: "Samsung Galaxy Watch Ultra2",
//             name: "Samsung",
//             image: "IMAGES/WATHES/galaxy watch 7.webp",
//             price: 49999,
//             description: "Fitness Smart Watch"
//         },
//         {
//             model: "Watch 2",
//             name: "OnePlus",
//             image: "IMAGES/WATHES/watch 2.webp",
//             price: 19999,
//             description: "Smart Watch"
//         },
//         {
//             model: "GARMIN Forerunner 570",
//             name: "Garmin",
//             image: "IMAGES/WATHES/garmin.webp",
//             price: 64999,
//             description: "Sports Smart Watch"
//         },
//         {
//             model: "Google Pixel Watch 4",
//             name: "Google",
//             image: "IMAGES/WATHES/google pixel watch 4.webp",
//             price: 67999,
//             description: "Smart Watch"
//         }
//     ],

//     Shoes: [
//         {
//             model: "Nike Air Max 2017",
//             name: "Nike",
//             image: "IMAGES/SHOES/Air Max.webp",
//             price: 15999,
//             description: "Running Shoes"
//         },
//         {
//             model: "Adidas Ultraboost 5X",
//             name: "Adidas",
//             image: "IMAGES/SHOES/Ultraboost.webp",
//             price: 18999,
//             description: "Comfort Sports Shoes"
//         },
//         {
//             model: "Puma RS-X",
//             name: "Puma",
//             image: "IMAGES/SHOES/RS-X.webp",
//             price: 42399,
//             description: "Casual Sneakers"
//         },
//         {
//             model: "Salewa MS Condor EVO GTX",
//             name: "Salewa",
//             image: "IMAGES/SHOES/salewa.webp",
//             price: 132999,
//             description: "Everyday Shoes"
//         },
//         {
//             model: "Vittoria Ikon Cycling Shoes",
//             name: "Victoria",
//             image: "IMAGES/SHOES/vict.webp",
//             price: 117999,
//             description: "Walking Shoes"
//         }
//     ]
// };

// localStorage.setItem("products", JSON.stringify(myproducts));
// console.log(myproducts)

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