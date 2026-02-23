
  const jobs = [
    { id:1, company:"Mobile First Corp", role:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", status:"not_applied", description:"Build cross-platform mobile apps using React Native." },
    { id:2, company:"WebFlow Agency", role:"Web Designer & Developer", location:"Los Angeles", type:"Part-time", salary:"$80,000 - $120,000", status:"not_applied", description:"Create modern web experiences for clients." },
    { id:3, company:"DataViz Solutions", role:"Data Visualization Specialist", location:"Boston", type:"Full-time", salary:"$125,000 - $165,000", status:"not_applied", description:"Transform complex data into dashboards." },
    { id:4, company:"CloudSphere", role:"DevOps Engineer", location:"Dhaka", type:"Full-time", salary:"$130,000 - $150,000", description:"Maintain CI/CD pipelines and cloud infrastructure.", status:"not_applied" },
    { id:5, company:"NextWave", role:"Mobile App Developer", location:"Remote", type:"Part-time", salary:"$160,000 - $200,000", description:"Create cross-platform mobile applications.", status:"not_applied" },
    { id:6, company:"SecureNet", role:"Cyber Security Analyst", location:"Dhaka", type:"Full-time", salary:"$120,000 - $140,000", description:"Monitor systems and ensure security compliance.", status:"not_applied" },
    { id:7, company:"Insight Labs", role:"Data Analyst", location:"Khulna", type:"Full-time", salary:"$185,000 - $210,000", description:"Analyze business data to generate insights.", status:"not_applied" },
    { id:8, company:"BrightSoft", role:"QA Engineer", location:"Remote", type:"Contract", salary:"$75,000", description:"Test applications and ensure product quality.", status:"not_applied" }
  ];
  
  let filteredJobs = [...jobs];
  
  
  
  function getStatusColor(status) {
    if (status === "interview") return "bg-green-100 text-green-700";
    if (status === "rejected") return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-700";
  }
  
  
  function JobCard(job) {
    return `
    <div class="bg-white p-5 rounded-lg shadow mb-4 relative">
  
      <!-- DELETE BUTTON -->
      <button onclick="deleteJob(${job.id})"
        class="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-lg font-bold">
        ✕
      </button>
  
      <h2 class="font-semibold text-lg">${job.company}</h2>
      <p class="text-gray-500 text-sm">${job.role}</p>
  
      <p class="text-sm mt-2">
        ${job.location} • ${job.type} • ${job.salary}
      </p>
  
      <span class="inline-block mt-3 px-3 py-1 text-xs rounded ${getStatusColor(job.status)}">
        ${job.status.replace("_"," ").toUpperCase()}
      </span>
  
      <p class="mt-3 text-gray-600 text-sm">
        ${job.description}
      </p>
  
      <div class="mt-4 flex gap-2">
        <button onclick="updateStatus(${job.id}, 'interview')"
          class="border border-green-500 text-green-600 px-3 py-1 rounded">
          INTERVIEW
        </button>
  
        <button onclick="updateStatus(${job.id}, 'rejected')"
          class="border border-red-500 text-red-600 px-3 py-1 rounded">
          REJECTED
        </button>
      </div>
  
    </div>
    `;
  }
  
  
  function deleteJob(id) {
    const index = jobs.findIndex(job => job.id === id);
    if (index !== -1) {
      jobs.splice(index, 1);
    }
    filterJobs(currentFilter);
  }

  function renderJobs(data) {
    const container = document.getElementById("job-list");
    const emptyState = document.getElementById("empty-state");
  
    if (data.length === 0) {
      container.innerHTML = "";
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
      container.innerHTML = data.map(job => JobCard(job)).join("");
    }
  
    updateCounters();
  }
  
  
  function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = status;
    filterJobs(currentFilter);
  }
  
  
  
  let currentFilter = "all";
  
  function filterJobs(type) {
    currentFilter = type;
  
    if (type === "all") {
      filteredJobs = jobs;
    } else {
      filteredJobs = jobs.filter(job => job.status === type);
    }
  
    renderJobs(filteredJobs);
  }
  
  
  
  function updateCounters() {
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText =
      jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").innerText =
      jobs.filter(j => j.status === "rejected").length;
  }
  
  
  /* INITIAL LOAD */
  renderJobs(jobs);
  