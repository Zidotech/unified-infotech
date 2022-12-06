/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//change state of the portfolio page

const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home State
const homeState = function (pages) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
     <div class="open-reel">
      <img src="./images/OpenReel-Home-V3@1.5x.png" alt="OpenReel-Home-V3" />

      <div class="open">
        <img src="./images/openreel-title.svg" alt="openreel-title" />
        <h3 class="tittle">A patented multi-million SaaS video platform</h3>
        <p class="decription">
          We created a patented video platform that helps capture and direct
          video remotely. This has helped companies reduce production cost,
          resource and time. Now shoot video without even stepping out of your
          comfort zone.
        </p>
        <a href="" class="btn1">View Portfolio</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  `;
};

// softy State
const softyState = function (pages) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="softy">
      <img src="./images/Largo-Home-V3@1.5x.png" alt="OpenReel-Home-V3" />

      <div class="soft">
        <img src="./images/sofy-title.svg" alt="openreel-title" />
        <h3 class="tittle">An award-winning video streaming app platform</h3>
        <p class="decription">
          We designed and developed this AI powered video streaming platform to
          give a tiff to streaming giants like Netflix and Hulu. We created an
          out of the box experience to help make the product award-winning.
        </p>
        <a href="" class="btn1">View Portfolio</a>
        <a href="">Contact Us</a>
      </div>
    </div>

`;
};

// houselab State
const houselabState = function (pages) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
 <div class="houselab">
      <img src="./images/HouseLab-Home-V3@1.5x.png" alt="OpenReel-Home-V3" />

      <div class="house">
        <img src="./images/houselabs-title.svg" alt="openreel-title" />
        <h3 class="tittle">A cloud based document management platform</h3>
        <p class="decription">
          We built this innovative system for developers, architects, builders,
          real estate agents and homeowners to help keep track of warranties,
          manuals, plans and permits to sustainably manage homes and
          communities.
        </p>
        <a href="" class="btn1">View Portfolio</a>
        <a href="">Contact Us</a>
      </div>
    </div>
`;
};

// Oota state
const ootaState = function (pages) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
  <div class="oota">
      <img src="./images/Oota-Home-V3@1.5x.png" alt="OpenReel-Home-V3" />

      <div class="oot">
        <img src="./images/oota-title.svg" alt="openreel-title" />
        <h3 class="tittle">Empowering home chefs with virtual restaurants</h3>
        <p class="decription">
          We built this app to get freshly cooked home food delivered at your
          doorstep where home chefs can be their bosses. The platform gives a
          new dimension to on demand food delivery where user can get the taste
          of home made food.
        </p>
        <a href="" class="btn1">View Portfolio</a>
        <a href="">Contact Us</a>
      </div>
    </div>

`;
};

//London-rag
const londonragState = function (pages) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
 <div class="london-rag">
      <img src="./images/LondonRag-Home-V3@1.5x.png" alt="OpenReel-Home-V3" />

      <div class="rag">
        <img src="./images/londonrag-title.svg" alt="openreel-title" />
        <h3 class="tittle">A millennial eCommerce shopping platform</h3>
        <p class="decription">
          We build a completely fresh eCommerce platform for millennials to
          encourage leisure shopping. The platform is personalized & easy to
          use. From choosing the right features to designing an intuitive UI -
          we did all of it.
        </p>
        <a href="" class="btn1">View Portfolio</a>
        <a href="">Contact Us</a>
      </div>
    </div>
`;
};

// Instantiate pageState
const pages = new PageState();

// Init the first state
pages.init();

// UI Vars
const home = document.getElementById("open"),
  soft = document.getElementById("soft"),
  house = document.getElementById("house"),
  ootas = document.getElementById("ootas"),
  london = document.getElementById("london");

// Home
home.addEventListener("click", (e) => {
  pages.change(new homeState());

  e.preventDefault();
});

// softy
soft.addEventListener("click", (e) => {
  pages.change(new softyState());

  e.preventDefault();
});

// house
house.addEventListener("click", (e) => {
  pages.change(new houselabState());

  e.preventDefault();
});

//ootas
ootas.addEventListener("click", (e) => {
  pages.change(new ootaState());

  e.preventDefault();
});

//london-rag
london.addEventListener("click", (e) => {
  pages.change(new londonragState());

  e.preventDefault();
});
