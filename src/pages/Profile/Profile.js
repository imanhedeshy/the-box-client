import { useState } from "react";
import UpdateProfile from "../../components/UpdateProfile/updateProfile";
import StudentProfile from "../../components/StudentProfile/StudentProfile";

export default function Profile() {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [userType, setUserType] = useState("student");

  if (updateProfile) return <UpdateProfile />;
  if (userType === "student") return <StudentProfile />;
  if (userType === "educator") return <StudentProfile />;
  if (userType === "partner") return <StudentProfile />;
}
