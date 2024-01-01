import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const RequestSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Request Submitted</h2>

      <img src="" alt="checkmark" />
      <p>Your request is being reviewed. Our team will get back to you</p>
      <Button onClick={() => navigate('/login')}>Return to Sign In</Button>
    </div>
  );
};

export default RequestSuccess;
