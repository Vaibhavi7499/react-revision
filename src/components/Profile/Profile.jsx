import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  let token = sessionStorage.getItem("token");
  let [profile, setProfile] = useState({});
  let [loading, setLoading] = useState(true);

  const getProfileData = async () => {
    try {
      let res = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);

      setProfile(res.data);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <div
            class="card m-auto"
            aria-hidden="true"
            style={{ width: "18rem" }}
          >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div class="card m-auto mt-5" style={{ width: "18rem" }}>
            <img src={profile?.avatar} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{profile?.email}</h5>
              <p class="card-text">{profile?.name}</p>
              <Link href="#" class="btn btn-primary" to="/routing">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
