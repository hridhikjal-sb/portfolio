// Edit this file to update the whole portfolio.
export const profile = {
  name: "Hridhikjal S B",
  title: "Data Analyst · Data Analytics / AI",
  positioning:
    "I turn raw data into analysis, dashboards and working AI applications, from cleaning and modelling to deployment.",
  email: "hridhikjal123@gmail.com",
  phone: "+91 7034 200387",
  resume: "/Hridhikjal_SB_Resume.pdf", // file lives in /public
  phoneRaw: "+917034200387",
  linkedin: "https://www.linkedin.com/in/hridhikjalsb-0b1589242",
  location: "Bengaluru, Karnataka, India",
  heroRows: [
    ["Python, R", "cleaning, EDA, ML models"],
    ["SQL, MySQL", "querying and structuring data"],
    ["Power BI, Tableau", "interactive dashboards"],
    ["Streamlit", "deployed data apps"],
    ["LangChain, Gemini", "RAG and LLM workflows"],
  ],
};

export const projects = [
  {
    name: "Document & Web-Based RAG Chatbot",
    problem: "Employees needed a faster way to find company policies, training materials and internal documentation.",
    built: [
      "Built a retrieval-augmented chatbot over internal knowledge sources.",
      "Developed the full retrieval and response pipeline with LangChain, Google Gemini and ChromaDB.",
      "Implemented document ingestion, text chunking, embedding generation and semantic search.",
      "Created a Streamlit app for real-time, context-aware answers from company documents.",
    ],
    stack: ["LangChain", "Google Gemini", "ChromaDB", "Streamlit", "Python"],
  },
  {
    name: "AI-Powered Training & Assessment Scorecard",
    problem: "Manual assessment evaluation was time-consuming and inconsistent across subjects.",
    built: [
      "Automated evaluation and assessment management across multiple subjects.",
      "Integrated LLM-based evaluation of student submissions against predefined criteria, with results stored.",
      "Built a workflow that processes question papers, answer keys and student submissions.",
      "Added assessment scheduling, weekly report generation and trainee data management.",
    ],
    stack: ["LLM evaluation", "Assessment workflow", "Automated reporting"],
  },
  {
    name: "Loan Eligibility Prediction System",
    problem: "Predicting whether an applicant is eligible for a loan from historical data.",
    built: [
      "Developed a machine learning classification model to predict loan eligibility.",
      "Handled data preprocessing, feature selection and model evaluation.",
      "Deployed the model as a Streamlit application.",
    ],
    stack: ["Python", "Machine Learning", "Classification", "Streamlit"],
  },
];

export const experience = [
  {
    role: "Intern",
    company: "Mu Sigma",
    period: "Mar 2026 – Sep 2026",
    location: "Whitefield, Bengaluru",
    points: [
      "Contributed to analytics and AI-driven workflow solutions.",
      "Worked on React-based applications, automation processes and business problem-solving.",
      "Collaborated with teams to understand requirements, optimize workflows and integrate tools.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Luminar Technolab",
    period: "Sep 2023 – Mar 2024",
    location: "Kozhikode, Kerala",
    points: [
      "Performed data cleaning, preprocessing and exploratory data analysis (EDA).",
      "Built machine learning models using Linear Regression, Logistic Regression and Random Forest.",
      "Evaluated models using accuracy, precision, recall and confusion matrix.",
      "Used Python libraries: Pandas, NumPy, Matplotlib and Seaborn.",
    ],
  },
];

export const skills = [
  { group: "Programming Languages", items: ["Python", "R", "SQL", "JavaScript"] },
  { group: "Data Science", items: ["Statistics", "EDA", "Machine Learning", "Classification"] },
  { group: "Tools & Platforms", items: ["Streamlit", "ChromaDB", "MySQL", "OpenCV", "Power BI", "Excel", "Tableau"] },
];

export const education = [
  { degree: "M.Sc. Data Science and Analytics", school: "Jain (Deemed-to-be) University, Bengaluru", period: "2024 – 2026" },
  { degree: "B.Sc. Mathematics", school: "SN College, Kannur University", period: "2020 – 2023" },
];

export const certifications = [
  { name: "Data Warehousing Essentials and DMBoK" },
  { name: "Introduction to Big Data" },
  { name: "Data Visualization with R" },
  { name: "Business Analysis & Process Management" },
  { name: "Data Analytics with SAS" },
  { name: "Data Science", issuer: "NACTET" },
  { name: "Computer Vision and Image Analytics", issuer: "Infosys, Dec 2023" },
];

export const about = {
  text: "Data Analyst with hands-on experience in Python, SQL, Excel, Tableau and Power BI, specializing in data cleaning, exploratory data analysis, dashboard development and machine learning. I work through the full analytical workflow, from problem definition and preprocessing to modelling and business-focused interpretation, and I build AI-powered applications with RAG, LangChain and Google Gemini.",
  details: [
    ["Profile", "Data Analytics & AI"],
    ["Education", "M.Sc. Data Science and Analytics"],
    ["BI tools", "Power BI & Tableau"],
    ["Other tools", "Excel, MySQL, Streamlit, ChromaDB, OpenCV"],
    ["Interests", "Data Analytics, AI, Generative AI"],
    ["Location", "Bengaluru, India"],
  ],
};
