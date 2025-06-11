import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  SeekerLogin,
  SeekerSignup,
  Seekerlogout,
  OwnerLogin,
  OwnerSignup,
  Ownerlogout,
  MyAccount,
  Details,
  Profile,
  AddNew,
  MyProperty,
  Services,
  Messages,
  PaymentConf,
  EditProfile,
  EditPassword,
  ForgotPass

} from "../pages";

import SeekerProtectedRoute from "../routes/SeekerProtectedRoute";
import OwnerProtectedRoute from "../routes/OwnerProtectedRoute";
import CommonProtectedRoute from "./CommonProtectedRoutes";


// import PaymentConf from "../pages/Common/PaymentConf";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:pid" element={<Contact />} />
      
      {/* <Route path="details/:propertyId" element={<Details />} /> */}

      <Route path="/services" element={<Services />} />

      <Route path="details/:id" element={<Details />} />
      <Route path="seeker/login" element={<SeekerLogin />} />
      <Route path="seeker/signup" element={<SeekerSignup />} />
      <Route path="seeker/forgot-password" element={<ForgotPass />} />
      <Route path="owner/login" element={<OwnerLogin />} />
      <Route path="owner/signup" element={<OwnerSignup />} />

      {/* Seeker Protected */}
      <Route element={<SeekerProtectedRoute />}>
        <Route path="seeker/profile" element={<Profile />} />
        <Route path="seeker/logout" element={<Seekerlogout />} />
        <Route path="seeker/edit-profile" element={<EditProfile />} />
        <Route path="seeker/update-password" element={<EditPassword />} />
      </Route>

      {/* Owner Protected */}
      <Route element={<OwnerProtectedRoute />}>
        {/* <Route path="owner/profile" element={<Profile />} /> */}
        <Route path="owner/messages" element={<Messages />} />
        <Route path="owner/my-property" element={<MyProperty />} />
        <Route path="owner/logout" element={<Ownerlogout />} />
        <Route path="owner/my-account" element={<MyAccount />} />
        <Route path="owner/add-property" element={<AddNew />} />
      </Route>

      <Route element={<CommonProtectedRoute />}>
        <Route path="paymentconf" element={<PaymentConf />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
