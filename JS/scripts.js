//change state of the process page

const PageStaten = function () {
  let currentState = new discoveryState(this);

  this.init = function () {
    this.change(new discoveryState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// discovery State
const discoveryState = function (page) {
  document.querySelector("#heading2").textContent = null;
  document.querySelector("#content2").innerHTML = `
    <div class="pro-img">
          <img src="./images/Clutch-Discovery-Workshop-Image@1.5x.jpg" alt="" />

          <div class="text">
            <h3 class="title">Discovery workshop</h3>
            <p>
              We give the utmost importance to understand and document client’s
              inputs, design, and branding preferences. And clarify all the
              open-ended points to establish a precise and clear idea about both
              clients’ and project’s goals. We work in a collaborative approach
              involving key stakeholders to bring alignment in the business
              process.
            </p>
            <a class="btn1" href="#">Get In Touch</a>
          </div>
        </div>
  `;
};

// planning State
const planningState = function (page) {
  document.querySelector("#heading2").textContent = null;
  document.querySelector("#content2").innerHTML = `
   <div class="pro-img">
          <img src="./images/Clutch-Planning-Image@1.5x.jpg" alt="" />

          <div class="text">
            <h3 class="title">Planning</h3>
            <p>
              Our services emphasize on well-defined project planning and leave
              nothing for assumption to avoid miscommunication. We jot down how
              we are going to proceed further, define detailed technical
              specifications, devise the design & branding guidelines of the
              project, and get confirmation and approval from the clients’ end
              on the documents and materials.
            </p>
            <a class="btn" href="#">Get In Touch</a>
          </div>
        </div>

`;
};

// design State
const designState = function (page) {
  document.querySelector("#heading2").textContent = null;
  document.querySelector("#content2").innerHTML = `
 <div class="pro-img">
          <img src="./images/Clutch-Design-Image@1.5x.jpg" alt="" />

          <div class="text">
            <h3 class="title">Design</h3>
            <p>
              We provide clients with Web, Tablet, and Mobile-specific UI
              designs of the projects based on the approved wireframes and
              design guidelines. As a trusted entity, we deliver clickable
              prototypes on Invision platform and the source files in either
              Photoshop or Sketch format. Getting system UI designs approved and
              confirmed by the client is one of our objectives at this stage.
            </p>
            <a class="btn" href="#">Get In Touch</a>
          </div>
        </div>
`;
};

// development state
const developmentState = function (page) {
  document.querySelector("#heading2").textContent = null;
  document.querySelector("#content2").innerHTML = `
  <div class="pro-img">
          <img src="./images/Clutch-Development-Image@1.5x.jpg" alt="" />

          <div class="text">
            <h3 class="title">Development</h3>
            <p>
              At this stage, we cater requirements for frontend, backend, web
              services, and API development integration. Along with preparing a
              strategy for Agile Scrum methodology, we factor the aspects of
              scalability, multi-tenancy, 3rd party integration, and craft an
              optimized clean code structure using cutting-edge technologies. We
              make sure to involve and implement clients’ reviews in each
              sprint/milestone.
            </p>
            <a class="btn" href="#">Get In Touch</a>
          </div>
        </div>
`;
};

//testing
const testingState = function (page) {
  document.querySelector("#heading2").textContent = null;
  document.querySelector("#content2").innerHTML = `
  <div class="pro-img">
          <img src="./images/Clutch-Testing-Image@1.5x.jpg" alt="" />

          <div class="text">
            <h3 class="title">Testing</h3>
            <p>
              We test each sprint manually, report bugs and add those to product
              backlog. Once the bug fixing is done, we provide the quality
              release and then the final demo of the sprint is sent for clients’
              approval. We make sure to do regression testing to ensure proper
              functioning of the previously approved milestones/sprints.
            </p>

            <a class="btn" href="#">Get In Touch</a>
          </div>
        </div>
`;
};

//Maintenance state
const maintenanceState = function (page) {
  document.querySelector("#heading2").textContent = null;
  document.querySelector("#content2").innerHTML = `
 <div class="pro-img">
          <img src="./images/Clutch-Maintenance-Image@1.5x.jpg" alt="" />

          <div class="text">
            <h3 class="title">Maintenance</h3>
            <p>
              Our work doesn’t end with development, we go the extra mile for
              our clients. Through an Agile approach, we ensure product
              enhancement. We do regular Security Audits, Bi-weekly code
              backups, and constant system upgradation. Along with testing the
              entire system each month to find any incompatibility or error, we
              monitor the traffic and server load and accordingly optimize it.
            </p>
            <a class="btn" href="#">Get In Touch</a>
          </div>
        </div>
`;
};

// Instantiate pageState
const page = new PageStaten();

// Init the first state
page.init();

// UI Vars
const discovery = document.getElementById("discovery"),
  planning = document.getElementById("planning"),
  design = document.getElementById("design"),
  development = document.getElementById("development"),
  testing = document.getElementById("testing"),
  maintenance = document.getElementById("maintenance");

// discovery
discovery.addEventListener("click", (e) => {
  page.change(new discoveryState());

  e.preventDefault();
});

// planning
planning.addEventListener("click", (e) => {
  page.change(new planningState());

  e.preventDefault();
});

// design
design.addEventListener("click", (e) => {
  page.change(new designState());

  e.preventDefault();
});

//development
development.addEventListener("click", (e) => {
  page.change(new developmentState());

  e.preventDefault();
});

//testing
testing.addEventListener("click", (e) => {
  page.change(new testingState());

  e.preventDefault();
});

//maintenance
maintenance.addEventListener("click", (e) => {
  page.change(new maintenanceState());

  e.preventDefault();
});
