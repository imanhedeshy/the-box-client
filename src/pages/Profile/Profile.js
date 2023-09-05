import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getStudentByUsername } from "../../utils/apiCalls";

import profileBkg from "../../assets/images/images/microsoft-bgimage.jpg";
import profilePic from "../../assets/images/images/microsoft-logo.jpg";
import studentBkg from "../../assets/images/images/blue-polygon-dark-background-social-template_53876-116080.webp";
import studentPic from "../../assets/images/images/profile_pic (2).png";

import UpdateProfile from "../../components/UpdateProfile/updateProfile";
import StudentProfile from "../../components/StudentProfile/StudentProfile";
import PartnerProfile from "../../components/PartnerProfile/PartnerProfile";

export default function Profile({ selectedUserType, user }) {
  console.log(selectedUserType, user);
  const location = useLocation();
  const username = useParams().username;

  const [student, setStudent] = useState({
    id: "student_id",
    username: "student_username",
    name: "Iman Hedeshy" || "student_name",
    email: "iman.hedeshy@gmail.com" || "student_email",
    headline: "The strongest developer of Asgard!" || "student_headline",
    discipline: "Software Engineering" || "student_discipline",
    cohort: "Online" || "student_cohort",
    cohortDate: "Jun 23" || "student_cohortdate",
    cohortName: "The Nameless '23" || "student_cohortname",
    backgroundImage: studentBkg || "student_background_image",
    profilePic: studentPic || "student_profile_pic",
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
          type: "capstone" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "BrainStationFlix",
          type: "hackathon" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "TritonPrivacyVault",
          type: "hackathon" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "MooCooCaw",
          type: "hackathon" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "BandSite",
          type: "student_project" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "BrainFlix",
          type: "student_project" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "InStock",
          type: "student_project" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "Solar System",
          type: "personal_project" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "File Structure Viewer",
          type: "personal_project" || "project_type",
          description: "project_description",
          imageSrc: "project_image_source",
          link: "project_link",
          createdAt: "project_created_at",
        },
        {
          id: "project_id",
          title: "Journal",
          type: "personal_project" || "project_type",
          description: "project_description",
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

  useEffect(() => {
    const getUserByUsername = async (username) => {
      if (selectedUserType === "student") {
        const result = await getStudentByUsername(username);
        console.log(result.data);
        setStudent(result.data);
      }
    };

    getUserByUsername(username);
  }, []);

  const educator = {};

  const userMap = {
    student: student,
    educator: educator,
    partner: partner,
  };

  if (location.pathname.endsWith("edit"))
    return <UpdateProfile user={userMap[selectedUserType]} />;
  if (selectedUserType === "student")
    return <StudentProfile student={student} user={user} />;
  if (selectedUserType === "educator")
    return <StudentProfile educator={educator} user={user} />;
  if (selectedUserType === "partner")
    return <PartnerProfile partner={partner} user={user} />;
}
