"use client";

import Loading from "@/components/Loading";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [accounts, setAccounts] = useState({
    google: null,
    github: null
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedAccounts = window.localStorage.getItem("userAccounts");
    if (savedAccounts) {
      setAccounts(JSON.parse(savedAccounts))
    }
  }, [])

  useEffect(() => {
    if (mounted && session?.user) {
      const provider = session.user.image?.includes('google') ? 'google' : 'github';
      const updatedAccounts = {
        ...accounts,
        [provider]: {
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        }
      }
      setAccounts(updatedAccounts);
      window.localStorage.setItem('userAccounts', JSON.stringify(updatedAccounts));
    }
  }, [session, mounted])

  if (!mounted) {
    return null
  }

  if (status === "loading") {
    return <Loading />
  }

  const handleSignOut = () => {
    window.localStorage.removeItem("userAccounts");
    setAccounts({ google: null, github: null })
    signOut()
  }

  return (
    <div className="max-w-[80%] mx-auto py-6">
      <div className="flex items-center gap-4 py-4">
        <img src={session?.user?.image} className="rounded-full h-20 w-20" />
        <div>
          <p className="text-lg text-green-500 font-bold">
            {session?.user?.name}
          </p>
          <p className="text-2xl font-semibold">{session?.user?.email}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center py-4 rounded-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-yellow-700 p-4 rounded-xl">
            {accounts.github ? (
              <div className="flex items-center gap-3">
                <Image
                  src={`${accounts.github?.image}`}
                  className="rounded-full h-10 w-10"
                  alt="description of image"
                  width={500}
                  height={500}
                />
                <p>{accounts.github?.name}</p>
              </div>
            ) : (
              <button className="flex items-center gap-3" onClick={() => signIn("github")}>
                <FaGithub />
                Chưa đăng ký
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 bg-teal-700 p-4 rounded-xl">
            {accounts.google ? (
              <div className="flex items-center gap-3">
                <Image
                  src={`${accounts.google?.image}`}
                  className="rounded-full h-10 w-10"
                  alt="description of image"
                  width={500}
                  height={500}
                />
                <p>{accounts.google?.name}</p>
              </div>
            ) : (
              <button className="flex items-center gap-3" onClick={() => signIn("google")}>
                <FaGoogle />
                Chưa đăng ký
              </button>
            )}
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="border border-black rounded-lg bg-red-500 px-5 py-6 "
        >
          Sign Out
        </button>
      </div>

      <p className="font-bold text-xl text-center border-y-2 py-4">Bạn chưa xem bài viết nào</p>
      <p className="font-bold text-md text-center py-2">© 2023 Thành portfolio</p>
      <p className="font-bold text-md text-center py-2">Xin chào, mình là Thành, đây là trang cá nhân của mình.</p>
    </div>
  );
}
