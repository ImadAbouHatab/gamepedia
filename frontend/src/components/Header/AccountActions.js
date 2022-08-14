import { Link } from "react-router-dom";

function AccountActions() {
  return (
    <div className="account-actions">
        <Link to="/login" className="login">Log In</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
    </div>
  )
}

export default AccountActions