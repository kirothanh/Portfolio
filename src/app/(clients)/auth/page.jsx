"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function AuthPage() {
  return (
    <>
      <div className="w-full text-center">
        <p className="text-xl capitalize font-bold py-4">© 2024 Thành portfolio</p>
        <p className="text-xl font-semibold py-4">Xin chào, mình là Thành, đây là trang cá nhân của mình.</p>
        <div className="flex items-center flex-col justify-center border-4 max-w-[50%] mx-auto gap-5 p-6 rounded-3xl">
          <h3 className="text-3xl capitalize font-bold ">đăng nhập</h3>
          <button
            onClick={() => signIn("google")}
            className="border border-black rounded-lg bg-red-500 px-5 py-1 outline-none flex items-center justify-center gap-3"
          >
            <FaGoogle />
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="border border-black rounded-lg bg-green-500 px-5 py-1 outline-none flex items-center justify-center gap-3"
          >
            <FaGithub />
            Sign in with Github
          </button>
          <p>&quot;Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị khác.&quot;</p>
        </div>
      </div>
    </>
  );
}
