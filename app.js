// to be passed into randomizer

const names = ["Mike", "Pual", "Katie", "Roger", "Steve", "Karl"];
const rate = ["$10", "$60", "$30", "$180", "$25", "$45"];
const job = [
  "programmer",
  "designer",
  "artist",
  "bodyguard",
  "animator",
  "photographer",
];
const starts = ["Name", "Rate", "Job"];
const section = document.querySelector(".section");
const table = document.createElement("table");
// const td = document.createElement("td");
const tr = document.createElement("tr");
section.append(table);
// table set up with basic info
function tableBasic() {
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i]; /**assighed to a i to a variable */
    const th = document.createElement("th"); //create the th tag for each
    th.textContent = start; //incert content into the th tag
    table.appendChild(tr); //push tr webpage
    tr.appendChild(th); //push th to webpage
  }
}
tableBasic();
function randomTable(numRows) {
  // Loop to create multiple rows
  for (let i = 0; i < numRows; i++) {
    // Get random values for name, rate, and job
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomRate = rate[Math.floor(Math.random() * rate.length)];
    let randomJob = job[Math.floor(Math.random() * job.length)];

    // Create a table row
    const tr = document.createElement("tr");

    // Create and append  for the random name
    const tdName = document.createElement("td");
    tdName.textContent = randomName;
    tr.appendChild(tdName);

    // Create and append  for the random rate
    const tdRate = document.createElement("td");
    tdRate.textContent = randomRate;
    tr.appendChild(tdRate);

    // Create and append  for the random job
    const tdJob = document.createElement("td");
    tdJob.textContent = randomJob;
    tr.appendChild(tdJob);

    // Append the row to the table
    table.appendChild(tr);
  }
}

// Call the function with the number of rows you want
randomTable();
setInterval(() => {
  randomTable(1); // Number of rows to generate
}, 5000); // Interval time in milliseconds (5 seconds)
