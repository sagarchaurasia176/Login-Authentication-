import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
//state management concepts


function Security() {
  return (
    <div className="">
        <GoogleOAuthProvider
         clientId="980080267928-32j90vqscqj15mhkr121t696d0hade4v.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
                toast.success("Account Created")
            }}
            onError={() => {
              toast.error("server error");
            }}
          />
          ;
        </GoogleOAuthProvider>
      {/* </button> */}
    </div>
  );
}

export default Security;
