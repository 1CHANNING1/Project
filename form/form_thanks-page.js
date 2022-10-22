const d = document;

let body = d.querySelector('body');

let main = d.createElement('main'),
    footer = d.createElement('footer');


let API_URL = 'https://dummyjson.com';


fetch(`${API_URL}/products/category/skincare`)
.then(res => res.json())
.then(productos => localStorage.setItem('productos', JSON.stringify(productos.products)))

let productos = JSON.parse( localStorage.getItem('productos'));



function mostrar(rootElement, data){
    let div = d.createElement('div');
        div.classList = 'producto';
        
              
    let imagen = d.createElement('img');
        imagen.src = data.thumbnail;
    
    let h2 = d.createElement('h3');
    let titulo = d.createTextNode(data.title)
    h2.appendChild(titulo);
   
    let h3 = d.createElement('h3');
    let marca = d.createTextNode(data.brand);
    h3.appendChild(marca);

    let a = d.createElement('a');
        a.setAttribute('id', data.id);
        // a.href = ("https://agenciadeaprendizaje.bue.edu.ar/")
        


    let button = d.createElement('button');
        button.classList= "buyButton"
    let comprar = d.createTextNode('Comprar');
    button.appendChild(comprar);
    
    
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(imagen);
    div.appendChild(a);
    a.appendChild(button);
    
    rootElement.appendChild(div);          
}


let apiDiv = d.querySelector(".api-json");
productos.forEach( e => mostrar(apiDiv,e));

let sixteen = d.getElementById('16')
    sixteen.href = "https://www.amazon.eg/-/en/LOreal-Paris-Hyaluron-Expert-Hyaluronic/dp/B08XKX1WJ8?th=1"

let seventeen = d.getElementById('17')
    seventeen.href = "https://www.hemanitrading.us/tea-tree-oil-30ml/"


let eighteen = d.getElementById('18')
    eighteen.href = "https://www.daraz.pk/products/dermive-oil-free-moisturizer-100ml-i3127508.html"


let nineteen = d.getElementById('19')
    nineteen.href = "https://es.aliexpress.com/item/32809419740.html?gatewayAdapt=glo2esp"


let twenty = d.getElementById('20')
    twenty.href = "https://www.daraz.pk/products/fair-clear-freckle-treatment-cream-15gm-i214842576.html"





