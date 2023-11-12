import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import IsLoading from "../../components/IsLoading/IsLoading";
import UpdateProfile from "../../components/UpdateProfile/updateProfile";
import StudentProfile from "../../components/StudentProfile/StudentProfile";
import PartnerProfile from "../../components/PartnerProfile/PartnerProfile";

// Assuming specific types for Student, Educator, and Partner
type Student = Record<string, never>; // Adjust as necessary
type Educator = Record<string, never>; // Adjust as necessary
type Partner = Record<string, never>; // Adjust as necessary

type UserType = {
  type: string;
  name: string;
  username: string;
  id: string;
};

type ProfileProps = {
  selectedUserType: string;
  user: UserType;
};

export default function Profile({ selectedUserType, user }: ProfileProps) {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  const storageUserType = localStorage.getItem("storageUserType") || '';
  if (storageUserType) setIsLoading(false);

  const [student, setStudent] = useState<Student>({}); // Adjusted
  const [partner, setPartner] = useState<Partner>({}); // Adjusted
  const educator: Educator = {}; // Adjusted

  const userMap: { [key: string]: Student | Educator | Partner | undefined } = {
    student,
    educator,
    partner,
  };

  if (!Object.keys(userMap).includes(storageUserType)) {
    return null;
  }

  if (isLoading) return <IsLoading />;

  // Update the components to expect the correct type for 'user'
  // Ensure that these components' prop types are defined to accept the 'user' prop
  if (location.pathname.endsWith("edit")) {
    return <UpdateProfile user={userMap[storageUserType]} />;
  }
  if (selectedUserType === "partner" || storageUserType === "partner") {
    return <PartnerProfile partner={partner} user={user} />;
  }
  if (selectedUserType === "student" || storageUserType === "student") {
    return <StudentProfile student={student} user={user} />;
  }
  if (selectedUserType === "educator" || storageUserType === "educator") {
    return <StudentProfile educator={educator} user={user} />;
  }
}


// import { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";


// import IsLoading from "../../components/IsLoading/IsLoading";

// import MicrosoftBkg from "../../assets/images/images/MicrosoftBkg.jpg";
// import Microsoft from "../../assets/images/images/Microsoft.jpg";
// import Bkg from "../../assets/images/images/Bkg.webp";

// import UpdateProfile from "../../components/UpdateProfile/updateProfile";
// import StudentProfile from "../../components/StudentProfile/StudentProfile";
// import PartnerProfile from "../../components/PartnerProfile/PartnerProfile";

// export default function Profile({ selectedUserType, user }) {
//   const location = useLocation();
//   const params = useParams();

//   const [isLoading, setIsLoading] = useState(true);

//   const storageUserType = localStorage.getItem("storageUserType");
//   if (storageUserType) setIsLoading(false);

//   const [student, setStudent] = useState({});
//   const [partner, setPartner] = useState({});
//   const educator = {};

//   const userMap = {
//     student: student,
//     educator: educator,
//     partner: partner,
//   };

//   console.log(selectedUserType || storageUserType);
//   if (isLoading) return <IsLoading />;

//   if (location.pathname.endsWith("edit"))
//     return (
//       <UpdateProfile user={userMap[storageUserType]} />
//     );
//   if ((selectedUserType || storageUserType) === "partner")
//     return <PartnerProfile partner={partner} user={user} />;
//   if ((selectedUserType || storageUserType) === "student")
//     return <StudentProfile student={student} user={user} />;
//   if ((selectedUserType || storageUserType) === "educator")
//     return <StudentProfile educator={educator} user={user} />;
// }
