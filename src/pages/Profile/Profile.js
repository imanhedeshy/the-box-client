import { useState } from "react";
import UpdateProfile from "../../components/UpdateProfile/updateProfile";
import StudentProfile from "../../components/StudentProfile/StudentProfile";
import PartnerProfile from "../../components/PartnerProfile/PartnerProfile";

export default function Profile() {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [userType, setUserType] = useState("partner");

  if (updateProfile) return <UpdateProfile />;
  if (userType === "student") return <StudentProfile />;
  if (userType === "educator") return <StudentProfile />;
  if (userType === "partner") return <PartnerProfile />;
}
