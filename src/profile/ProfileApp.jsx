import { useState } from "react";
import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import { ProfileContext } from "./ProfileContext.jsx";
import ProfileForm from "./ProfileForm.jsx";

export default function ProfileApp() {
  const [name, setName] = useState("Irfan");

  return (
    <div>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <ProfileForm name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
}
