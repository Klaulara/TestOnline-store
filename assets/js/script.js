window.addEventListener('load', async()=> {
  const res = await fetch("http://localhost:3000/producto");
  const data = await res.json();
  const listaProductos = document.getElementById('productos');
  listaProductos.innerHTML = ""
  data.forEach(e => {
      listaProductos.innerHTML += `
      <div class="card m-2" style="width: 15rem;">
          <img src="${e.url_image}" class="card-height" alt="..." />
          <div class="card-body align-items-end">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text price">$ ${e.price}</p>
              <a href="#" class="btn">
                  <i class="fa-solid fa-cart-plus"></i>
              </a>
          </div>
      </div>
      `
  });
});

document.getElementById("boton").addEventListener('click', async(a)=> {
    a.preventDefault();
    const categoria = document.getElementById("categoria").value;
    const orden = document.getElementById("orden").value;
    const res = await fetch(`http://localhost:3000/categoria?categoria=${categoria}&orden=${orden}`);
    const data = await res.json();
    const listaProductos = document.getElementById('productos');
    listaProductos.innerHTML = ""
    data.forEach(e => {
      listaProductos.innerHTML += ` 
      <div class="card m-2" style="width: 15rem;">
          <img src="${e.url_image}" class="card-height" alt="..." />
          <div class="card-body align-items-end">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text price">$ ${e.price}</p>
              <a href="#" class="btn">
                  <i class="fa-solid fa-cart-plus"></i>
              </a>
          </div>
      </div>
      `
    });
});