import React from "react";
import SaveShow from "../../components/SaveShow/SaveShow";

export default function Account() {
  return (
    <div className="w-full text-white">
      <img
        className="w-full h-[450px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/e2a8204b-4c6a-436e-80b8-4e81e3fcc065/VN-vi-20230327-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Show</h1>
      </div>
      <SaveShow />
    </div>
  );
}
