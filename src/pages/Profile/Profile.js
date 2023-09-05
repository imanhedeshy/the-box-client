import { useState } from "react";
import { useLocation } from "react-router-dom";

import profileBkg from "../../assets/images/images/microsoft-bgimage.jpg";
import profilePic from "../../assets/images/images/microsoft-logo.jpg";

import UpdateProfile from "../../components/UpdateProfile/updateProfile";
import StudentProfile from "../../components/StudentProfile/StudentProfile";
import PartnerProfile from "../../components/PartnerProfile/PartnerProfile";

export default function Profile({ userType }) {
  const location = useLocation();
  // const [updateProfile, setUpdateProfile] = useState(false);

    //get the useby username from database
  const partner = {
    id: "partner_id",
    username: "partner_username",
    name: "Microsoft" || "partner_name",
    email: "recruiter@microsoft.com" || "partner_email",
    headline: "The greatest company of all!" || "partner_headline",
    location: "Redmond, Washington" || "partner_location",
    industry: "Software Development" || "partner_industry",
    backgroundImage: profileBkg || "partner_email",
    profilePic: profilePic || "partner_profile_pic",
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
          title: "job_title",
          type: "internship" || "job_type",
          description: "job_description",
          imageSrc: "job_image_source",
          link: "job_link",
          createdAt: "job_created_at",
        },
        {
          id: "job_id",
          title: "job_title",
          type: "internship" || "job_type",
          description: "job_description",
          imageSrc: "job_image_source",
          link: "job_link",
          createdAt: "job_created_at",
        },
        {
          id: "job_id",
          title: "job_title",
          type: "full-time" || "job_type",
          description: "job_description",
          imageSrc: "job_image_source",
          link: "job_link",
          createdAt: "job_created_at",
        },
        {
          id: "job_id",
          title: "job_title",
          type: "full-time" || "job_type",
          description: "job_description",
          imageSrc: "job_image_source",
          link: "job_link",
          createdAt: "job_created_at",
        },
        {
          id: "job_id",
          title: "job_title",
          type: "part-time" || "job_type",
          description: "job_description",
          imageSrc: "job_image_source",
          link: "job_link",
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
  };

  const student ={};
  const educator ={};

  const userMap = {
    student: student,
    educator: educator,
    partner: partner
  }


  console.log(userType);
  if (location.pathname.endsWith("edit")) return <UpdateProfile user={userMap[userType]} />;
  if (userType === "student") return <StudentProfile educator={educator} />;
  if (userType === "educator") return <StudentProfile student={student} />;
  if (userType === "partner") return <PartnerProfile partner={partner}  />;
}
