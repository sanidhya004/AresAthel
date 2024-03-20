import React from "react";
import { useLocation } from "react-router-dom";
const AuthLayout = ({ children }) => {
  const location=useLocation()
  var url=""
if(location.pathname=="/signin"){
  url="https://s3-alpha-sig.figma.com/img/7075/2db7/c5aa48b537111dba24737ec11d50dd01?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AVC5LMW5kCacz8x99BOVhcrLiO~c9JSnmhnHko86mfV~JeKuvIO30qqi5DRouygkZckZghmM~h3ffFZ2TPiwG4T-Dbd2BdJG85naCpET6Sqw6XqiWmCBJKTpp85HHMi9JVJJMhvxFu9LLi6FHwIiVegmwfVXrqCZg~xEdmD~UmB~S~IzEsYWzvOLkX~7Bt7f52Ujq9vjU402l7hDWLg3pbGI3lewCGizxBarSCGhfoOdspoeKwYLR9hXoW6aE1NaGouL18SEye9ZQr9rVh8UPZao35KDTq23vqKOei-SGI1Jkl4MEjQLEM4Zr0~QB9vthl8VosmXb2SEqwsMn8J5iA__"
}
else{
  url="https://s3-alpha-sig.figma.com/img/3e77/d5ea/c056b24d20aa0cedea4f4d91f29dd1bf?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjZUGEbX4emVARJuc4-hyXSCXYpo-XfkXH6FDB3GWAwq8Kwv9Qtq3CA6eIyy86DMtVRnuJet3f9hXnifoNMwr2DXZ07atLmsjZm2v9D2yRDxTqf9uWecb3mROZ2TqO3i25G9BIa0p8XcBrZmInIeZ8mO8d0jJkgLP1BEZnD1IABy6Tf6lCRGDPpNlh1TIVn9iv47gzqOziiM0QneTGeikozDZ4F57zv8enBdN54f-TgC63f-~KK~0ErrK8QBEdINqj0dkRcH0jHekrzB1u70SBJ9QfifjN3e93Xff10STFQJd7DGchv4zaCSwmc8M~XNZUryGjb6BCMdcuy3yYWaTQ__"
}
 
  return (
    <div className="background-auth" id="background-auth" style={{background:`linear-gradient(180deg, rgba(6, 0, 66, 0) 45.95%, rgba(6, 0, 80, 0.4) 100%),url(${url})`,backgroundSize:"cover"}}>
      <div className="d-flex align-items-center justify-content-center vh-100 ">
        <main className="sign-in-container"  >{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
