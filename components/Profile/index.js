import { api } from "../../utils";
import { FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { getUpload } from '../../utils'

import {
  ProfileContainer,
  ProfileWrapper,
  ProfileHeader,
  ProfileSubHeader,
  ProfileImg,
  InputImageWrapper,
  InputImage,
  ProfileUserName,
  ProfileEmail,
  ProfilePassword,
  UpdateButton,
} from "./ProfileElements";

/*
Existing error
---------------
Cannot log out from profile page:
Some error about undefined user retrieval when logging out.

I believe when you log out you remove user state on logout, it conflicts with the user retrieval for the text boxes

Weirdly, logout works when using the sidebar but not navbar
*/

function ProfileSection() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    // If any fields are blank, don't allow update
    if (password === "" || username === "" || email === "") {
      setSuccess(false);
      return;
    }

    const updatedUser = {
      userId: user?._id,
      email,
      username,
      password,
    };

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const { data } = await api.post("/upload", formData);
        updatedUser.profilePic = data.filename;
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const response = await api.put("/users/" + user?._id, updatedUser);
      setSuccess(true);
      dispatch({
        type: "UPDATE_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileSubHeader>Profile Picture</ProfileSubHeader>
        <ProfileImg
          src={file ? URL.createObjectURL(file) : getUpload(user?.profilePic)}
        />

        <InputImageWrapper htmlFor="fileInput">
          <FaPlus color="grey" />
        </InputImageWrapper>

        <InputImage
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <ProfileSubHeader>Username</ProfileSubHeader>
        <ProfileUserName
          placeholder={user?.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <ProfileSubHeader>Email</ProfileSubHeader>
        <ProfileEmail
          placeholder={user?.email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <ProfileSubHeader>Password</ProfileSubHeader>
        <ProfilePassword onChange={(e) => setPassword(e.target.value)} />

        <UpdateButton
          variant="contained"
          disableElevation
          onClick={handleSubmit}
        >
          Edit Profile
        </UpdateButton>
        {success && (
          <span style={{ color: "green", textAlign: "center" }}>
            Profile updated successfully
          </span>
        )}
      </ProfileWrapper>
    </ProfileContainer>
  );
}

export default ProfileSection;
