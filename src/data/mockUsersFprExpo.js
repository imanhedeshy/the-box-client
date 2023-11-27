const mockUsers = [
  {
    name: "Iman Hedeshy",
    username: "imanhedeshy",
    userType: "student",
    email: "iman.hedeshy@gmail.com",
    discipline: "Software Engineering",
    cohort: "Online",
    startDate: "JUN 23",
    cohortName: "Nameless '23",
    headline: "The strongest of all devs",
    bio: "Husband, Software Engineer, MBA, Elecetrical Engineer, Operations Manager, Project Manager, Sport Enthusiast, Guitar Player, Foody, Sushi Lover",
    resume: "This is Resume!",
    projects: [
      {
        name: "The BOX!",
        type: "Capstone",
        url: "http://hedeshy.ca",
        description: "Lorem ipsum dolor sit amet...",
      },
      {
        name: "Solar System",
        type: "Personal Project",
        url: "https://imanhedeshy.github.io/solar-system",
        description: "Lorem ipsum dolor sit amet...",
      },
      {
        name: "Moo Coo Caw",
        type: "Hackathon",
        url: "http://hedeshy.ca",
        description: "Lorem ipsum dolor sit amet...",
      },
      {
        name: "Privacy Vault",
        type: "Hackathon",
        url: "http://hedeshy.ca",
        description: "Lorem ipsum dolor sit amet...",
      },
    ],
  },
  {
    name: "Alice Smith",
    username: "alice_smith",
    userType: "student",
    email: "alice.smith@example.com",
    discipline: "UX Design",
    cohort: "Toronto",
    startDate: "JAN 23",
    cohortName: "Toronto Cohort",
    headline: "Passionate UX Designer",
    bio: "Enthusiastic about creating user-centered designs...",
    resume: "View my portfolio!",
    projects: [
      {
        name: "E-commerce Redesign",
        type: "Capstone",
        url: "http://alicesmithdesigns.com",
        description: "Revamped the user experience of an e-commerce site...",
      },
      {
        name: "Travel App UI",
        type: "Personal Project",
        url: "https://alicesmith.github.io/travel-app",
        description: "Designed a user-friendly travel app interface...",
      },
      {
        name: "Healthcare App",
        type: "Student Project",
        url: "http://alicesmithdesigns.com",
        description: "Collaborated on a healthcare app design...",
      },
      {
        name: "Portfolio Website",
        type: "Personal Project",
        url: "https://alicesmith.design",
        description: "Created a sleek portfolio website to showcase my work...",
      },
    ],
  },
  {
    name: "Microsoft",
    username: "microsoft",
    userType: "partner",
    email: "recruiter@microsoft.com",
    discipline: "Software Development",
    cohort: "Vancouver",
    startDate: "JUN 23",
    cohortName: "VanCoding Camp",
    headline: "The greatest company of all",
    bio: "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn’t just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. When we show up, we achieve more together. Microsoft operates in 190 countries and is made up of more than 220,000 passionate employees worldwide.",
    resume: "Check out my projects!",
    projects: [
      {
        name: "JS Dev",
        type: "fulltime",
        url: "http://johndoeecommerce.com",
        description: "A junior developer who looks forward to go higher and higher",
      },
      {
        name: "JS Backend Dev",
        type: "Intenrship",
        url: "https://johndoe.dev",
        description:
          "Familiar with react and node.js",
      },
      {
        name: "JS Frontend Dev",
        type: "fulltime",
        url: "https://johndoe.github.io/weather-app",
        description: "Requires React and Figma",
      },
      
    ],
  },
  {
    name: "Emma Johnson",
    username: "emma_johnson",
    userType: "educator",
    email: "emma.johnson@example.com",
    discipline: "Data Science",
    cohort: "New York",
    startDate: "SEP 22",
    cohortName: "NY Data Analytics",
    headline: "Data Enthusiast and Educator",
    bio: "Dedicated to teaching and exploring the world of data...",
    resume: "View my courses and projects!",
    projects: [
      {
        name: "Predictive Analytics",
        type: "Capstone",
        url: "http://emmapredicts.com",
        description: "Built a predictive analytics model...",
      },
      {
        name: "Data Visualization",
        type: "Personal Project",
        url: "https://emmajohnson.github.io/data-viz",
        description: "Created interactive data visualizations...",
      },
      {
        name: "Machine Learning App",
        type: "Personal Project",
        url: "https://emmapredicts.com/ml-app",
        description: "Developed a machine learning-powered app...",
      },
      {
        name: "Educational Blog",
        type: "Student Project",
        url: "http://emmaeducates.com",
        description: "Shared insights about data science through a blog...",
      },
    ],
  },
];

export default mockUsers;


const [student, setStudent] = useState({
  id: "student_id",
  username: "student_username",
  name: "Iman" || "student_name",
  email: "iman.hedeshy@gmail.com" || "student_email",
  headline: "The strongest developer of Asgard!" || "student_headline",
  discipline: "Software Engineering" || "student_discipline",
  cohort: "Online" || "student_cohort",
  cohortDate: "Jun 23" || "student_cohortdate",
  cohortName: "The Nameless '23" || "student_cohortname",
  backgroundImage: Bkg || "student_background_image",
  profilePic: "student_profile_pic",
  userType: "student" || "student_user_type",
  bio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Maecenas non felis facilisis, tristique quam vel, accumsan libero. Curabitur at tristique metus, nec lacinia est. Integer nec odio praesent libero lacinia ante." ||
    "student_bio",
  phoneNumber: "+14169394969" || "student_phone",
  slack:
    `slack://user?team=${"T3N0S87QD"}&id=${"D05DD8CM00J"}` || "student_slack",
  website: "http://hedeshy.ca" || "student_website",
  linkedin: "https://www.linkedin.com/in/imanhedeshy/" || "student_linkedin",
  github: "https://github.com/imanhedeshy" || "student_github",
  twitter: "https://twitter.com/Microsoft" || "student_twitter",
  video1:
    "https://share.synthesia.io/embeds/videos/a5b86147-cae2-4ef0-8b3a-e2d246a7c3be" ||
    "student_video_source_1",
  video2:
    "https://share.synthesia.io/embeds/videos/77f00559-9513-47a0-9318-0906650c6959" ||
    "student_video_source_2",
  projects:
    [
      {
        id: "project_id",
        title: "The BOX!",
        type: "capstone",
        description:
          "The BOX (Bridge Of eXperience) is a dynamic React/Node-based platform connecting different users like students, and industry professionals through skill showcase, social networking, and real-time chat.",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "BrainStationFlix",
        type: "hackathon",
        description: "BrainStationFlix was created during a hackathon event ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "TritonPrivacyVault",
        type: "hackathon",
        description:
          "TritonPrivacyVault was developed during a hackathon competition ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "MooCooCaw",
        type: "hackathon",
        description:
          "MooCooCaw is a project created during a hackathon challenge ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "BandSite",
        type: "student_project",
        description:
          "BandSite is a student project showcasing web development skills ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "BrainFlix",
        type: "student_project",
        description: "BrainFlix is a student-built video streaming platform ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "InStock",
        type: "student_project",
        description:
          "InStock is a student project related to inventory management ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "Solar System",
        type: "personal_project",
        description:
          "Solar System is a personal project exploring celestial bodies and space ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "File Structure Viewer",
        type: "personal_project",
        description:
          "File Structure Viewer is a personal project for exploring and visualizing file systems ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
      {
        id: "project_id",
        title: "Journal",
        type: "personal_project",
        description:
          "Journal is a personal project for keeping notes and records ",
        imageSrc: "project_image_source",
        link: "project_link",
        createdAt: "project_created_at",
      },
    ] || "student_projects",
  techStacks:
    [
      { tech_stack: "javascript" },
      { tech_stack: "typescript" },
      { tech_stack: "react" },
      { tech_stack: "nodejs" },
      { tech_stack: "github" },
      { tech_stack: "mysql" },
      { tech_stack: "html" },
      { tech_stack: "css" },
      { tech_stack: "sass" },
      { tech_stack: "c" },
    ] || "student_tech_stack",
});

const [partner, setPartner] = useState({
  id: "partner_id",
  username: "partner_username",
  name: "Microsoft" || "partner_name",
  email: "recruiter@microsoft.com" || "partner_email",
  headline: "The greatest company of all!" || "partner_headline",
  location: "Redmond, Washington" || "partner_location",
  industry: "Software Development" || "partner_industry",
  backgroundImage: MicrosoftBkg || "partner_email",
  profilePic: Microsoft || "partner_profile_pic",
  userType: "partner_user_type",
  bio:
    "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn’t just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. When we show up, we achieve more together. Microsoft operates in 190 countries and is made up of more than 220,000 passionate employees worldwide." ||
    "partner_bio",
  phoneNumber: "+14256387777" || "partner_phone",
  website: "http://microsoft.com" || "partner_website",
  linkedin:
    "https://www.linkedin.com/company/microsoft" || "partner_linkedin",
  github: "https://github.com/microsoft" || "partner_github",
  twitter: "https://twitter.com/Microsoft" || "partner_twitter",
  video1:
    "https://www.youtube.com/embed/RhwVMt_XCUE?si=GId3n6u-IiSZovYf" ||
    "partner_video_source_1",
  video2:
    "https://www.youtube.com/embed/igpq47gTqlQ?si=AtJNYycmwzV9M5Wv" ||
    "partner_video_source_2",
  jobs:
    [
      {
        id: "job_id",
        title: "Web Developer",
        type: "full-time",
        description:
          "Join our dynamic team of web developers and work on cutting-edge projects.",
        imageSrc: "https://example.com/web_dev_image.png",
        link: "https://example.com/job/web-developer",
        createdAt: "job_created_at",
      },
      {
        id: "job_id",
        title: "Marketing Coordinator",
        type: "full-time",
        description:
          "We're seeking a creative marketing coordinator to help us reach new heights.",
        imageSrc: "https://example.com/marketing_image.png",
        link: "https://example.com/job/marketing-coordinator",
        createdAt: "job_created_at",
      },
      {
        id: "job_id",
        title: "Data Scientist",
        type: "full-time",
        description:
          "Unlock the potential of data with our team of data scientists.",
        imageSrc: "https://example.com/data_sci_image.png",
        link: "https://example.com/job/data-scientist",
        createdAt: "job_created_at",
      },
      {
        id: "job_id",
        title: "Graphic Designer",
        type: "internship",
        description:
          "Create stunning visuals and graphics as a freelance graphic designer.",
        imageSrc: "https://example.com/graphic_design_image.png",
        link: "https://example.com/job/graphic-designer",
        createdAt: "job_created_at",
      },
      {
        id: "job_id",
        title: "Customer Support Specialist",
        type: "internship",
        description:
          "Provide exceptional customer support from the comfort of your home.",
        imageSrc: "https://example.com/customer_support_image.png",
        link: "https://example.com/job/customer-support-specialist",
        createdAt: "job_created_at",
      },
    ] || "partner_jobs",
  techStacks:
    [
      { tech_stack: "javascript" },
      { tech_stack: "typescript" },
      { tech_stack: "react" },
      { tech_stack: "nodejs" },
      { tech_stack: "github" },
      { tech_stack: "mysql" },
      { tech_stack: "html" },
      { tech_stack: "css" },
      { tech_stack: "sass" },
    ] || "partner_tech_stack",
});