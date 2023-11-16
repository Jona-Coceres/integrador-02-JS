// Contenedor de productos

const prodContainer = document.querySelector(".prod_container");

// Funcion para crear el html del producto

const tempProduct = (product) => {
  return `<div class="product">
            <img
            src="./img/Productos/alice-in-chains.jpg"
              alt="img-prod"
              class="img-card"
            />
            <div class="product-txt">
              <h3>Alice In Chains</h3>
              <p>AIC - Heart</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                  >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
              src="./img/Productos/genesis.jpg"
              alt="img-prod"
              class="img-card"
            />
            <div class="product-txt">
              <h3>Genesis</h3>
              <p>Watcher Of The Skies</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                  >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/kiss.jpg"
              alt="img-prod"
              class="img-card"
              />
            <div class="product-txt">
              <h3>Kiss</h3>
              <p>Tour 1976</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                  >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>

          <div class="product">
            <img
              src="./img/Productos/pink-floyd.jpg"
              alt="img-prod"
              class="img-card"
            />
            <div class="product-txt">
              <h3>Pink Floyd</h3>
              <p>Welcome To The Machine</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                  >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>

          <div class="product">
            <img
              src="./img/Productos/rush.jpg"
              alt="img-prod"
              class="img-card"
              />
            <div class="product-txt">
              <h3>Rush</h3>
              <p>Moving Pictures Tour 81</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/stone-temple-pilots.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>Stone Temple Pilots</h3>
              <p>Flying Disc</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
              src="./img/Productos/the-beastie-boys.jpg"
              alt="img-prod"
              class="img-card"
            />
            <div class="product-txt">
              <h3>The Beastie Boys</h3>
              <p>Check Your Head Japanese</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/the-cars.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>The Cars</h3>
              <p>Good Times Roll</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/eric-clapton.jpg"
            alt="img-prod"
              class="img-card"
              />
              <div class="product-txt">
                <h3>Eric Clapton</h3>
                <p>Tour '79</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/motley-crue.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>Motley Crue</h3>
              <p>US Tour 83</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/queen.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>Queen</h3>
              <p>Day At The Races</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>

          <div class="product">
            <img
              src="./img/Productos/rolling-stones.jpg"
              alt="img-prod"
              class="img-card"
            />
            <div class="product-txt">
              <h3>Rolling Stones</h3>
              <p>Ringer US Tour '78</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/steve-miller-band.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>Steve Miller Band</h3>
              <p>Greatest Hits Royal</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/the-police.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>The Police</h3>
              <p>Synchronicity</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="product">
            <img
            src="./img/Productos/van-halen.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>Van Halen</h3>
              <p>Classic Red Logo</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                  >Agregar al carrito</a
                  >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>

          <div class="product">
            <img
            src="./img/Productos/fleetwood-mac.jpg"
            alt="img-prod"
            class="img-card"
            />
            <div class="product-txt">
              <h3>Fleetwood Mac</h3>
              <p>Rumours Vintage</p>
              <p class="precio">$12000</p>
              <div class="btn-purchase">
                <a href="#" class="add-cart_btn-2" data-id="2"
                  >Agregar al carrito</a
                >
                <a href="#" class="add-cart_btn-3" data-id="3">Ver Detalles</a>
              </div>
            </div>
          </div>
          
          <div class="block-purchase-info__container">
            <div class="info-items">
              <div class="block-purchase-info">
                <p class="block-purchase-item-icon">
                  <i class="fas fa-truck"></i>
                </p>
                <p class="block-purchase-title">ENVIOS A TODO EL PAIS</p>
                <p class="block-purchase-subtitle">
                  COMPRA SIN MOVERTE DE TU CASA
                </p>
              </div>
      
              <div class="block-purchase-info">
                <p class="block-purchase-item-icon">
                  <i class="far fa-credit-card"></i>
                </p>
                <p class="block-purchase-title">HASTA 12 CUOTAS</p>
                <p class="block-purchase-subtitle">
                  TODAS LAS TARJETAS Y MEDIOS DE PAGO
                </p>
              </div>
      
              <div class="block-purchase-info">
                <p class="block-purchase-item-icon">
                  <i class="fas fa-lock"></i>
                </p>
                <p class="block-purchase-title">COMPRA SEGURA</p>
                <p class="block-purchase-subtitle">PROTEGEMOS TUS DATOS</p>
              </div>
            </div>
          </div>`;
};

// Funcion para renderizar productos
const renderProd = (prodStock) => {
  prodContainer.innerHTML = productStock.map(tempProduct).join("");
};

const init = () => {
  // console.log(prodInfo);
  renderProd(prodInfo);
};

init();

