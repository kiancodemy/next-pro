import React from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/profile")}
        className="hover:text-black text-sm py-1 duration-300 text-nowrap"
      >
        اطلاعات شخصی
      </button>
    </div>
  );
}
