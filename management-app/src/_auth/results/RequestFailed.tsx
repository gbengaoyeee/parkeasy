import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RequestFailed = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Request Submitted</h2>

      <img src="" alt="x-mark" />
      <p>We could not successfully handle your request. Please reach out to our team for support</p>
      <Button onClick={() => navigate("/login")}>Return to Sign In</Button>
    </div>
  );
};

export default RequestFailed;
