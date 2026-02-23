const jobs = [
  { id:1, company:"Mobile First Corp", role:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", status:"not_applied", description:"Build cross-platform mobile apps using React Native." },
  { id:2, company:"WebFlow Agency", role:"Web Designer & Developer", location:"Los Angeles", type:"Part-time", salary:"$80,000 - $120,000", status:"not_applied", description:"Create modern web experiences for clients." },
  { id:3, company:"DataViz Solutions", role:"Data Visualization Specialist", location:"Boston", type:"Full-time", salary:"$125,000 - $165,000", status:"not_applied", description:"Transform complex data into dashboards." },
  { id:4, company:"CloudSphere", role:"DevOps Engineer", location:"Dhaka", type:"Full-time", salary:"$1300", description:"Maintain CI/CD pipelines and cloud infrastructure.", status:"not_applied" },
  { id:5, company:"NextWave", role:"Mobile App Developer", location:"Remote", type:"Part-time", salary:"$800", description:"Create cross-platform mobile applications.", status:"not_applied" },
  { id:6, company:"SecureNet", role:"Cyber Security Analyst", location:"Dhaka", type:"Full-time", salary:"$1200", description:"Monitor systems and ensure security compliance.", status:"not_applied" },
  { id:7, company:"Insight Labs", role:"Data Analyst", location:"Khulna", type:"Full-time", salary:"$850", description:"Analyze business data to generate insights.", status:"not_applied" },
  { id:8, company:"BrightSoft", role:"QA Engineer", location:"Remote", type:"Contract", salary:"$750", description:"Test applications and ensure product quality.", status:"not_applied" }
];

let filteredJobs = [...jobs];

function getStatusColor(status) {
  if (status === "interview") return "bg-green-100 text-green-700";
  if (status === "rejected") return "bg-red-100 text-red-700";
  return "bg-blue-100 text-blue-700";
}

