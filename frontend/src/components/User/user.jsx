import Signup from '../Signup/Signup.jsx';
import Logout from '../Logout/Logout.jsx';
import PrivateText from "../PrivateText/Privatetext.jsx"
import Login from '../Login/Login.jsx';
import { useState } from "react";

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true)
  if (currUser)
    return (
      <div>
        Hello {currUser.email}
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    )

  return (
    <div>
      {show ?
        <Login setCurrUser={setCurrUser} setShow={setShow} />
        :
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      }
    </div>
  )
};

export default User