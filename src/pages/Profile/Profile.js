"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var IsLoading_1 = require("../../components/IsLoading/IsLoading");
var updateProfile_1 = require("../../components/UpdateProfile/updateProfile");
var StudentProfile_1 = require("../../components/StudentProfile/StudentProfile");
var PartnerProfile_1 = require("../../components/PartnerProfile/PartnerProfile");
function Profile(_a) {
    var selectedUserType = _a.selectedUserType, user = _a.user;
    var location = (0, react_router_dom_1.useLocation)();
    var _b = (0, react_1.useState)(true), isLoading = _b[0], setIsLoading = _b[1];
    var storageUserType = localStorage.getItem("storageUserType") || '';
    if (storageUserType)
        setIsLoading(false);
    var _c = (0, react_1.useState)({}), student = _c[0], setStudent = _c[1]; // Adjusted
    var _d = (0, react_1.useState)({}), partner = _d[0], setPartner = _d[1]; // Adjusted
    var educator = {}; // Adjusted
    var userMap = {
        student: student,
        educator: educator,
        partner: partner,
    };
    if (!Object.keys(userMap).includes(storageUserType)) {
        return null;
    }
    if (isLoading)
        return react_1.default.createElement(IsLoading_1.default, null);
    // Update the components to expect the correct type for 'user'
    // Ensure that these components' prop types are defined to accept the 'user' prop
    if (location.pathname.endsWith("edit")) {
        return react_1.default.createElement(updateProfile_1.default, { user: userMap[storageUserType] });
    }
    if (selectedUserType === "partner" || storageUserType === "partner") {
        return react_1.default.createElement(PartnerProfile_1.default, { partner: partner, user: user });
    }
    if (selectedUserType === "student" || storageUserType === "student") {
        return react_1.default.createElement(StudentProfile_1.default, { student: student, user: user });
    }
    if (selectedUserType === "educator" || storageUserType === "educator") {
        return react_1.default.createElement(StudentProfile_1.default, { educator: educator, user: user });
    }
}
exports.default = Profile;
