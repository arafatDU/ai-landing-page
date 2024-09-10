import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between w-full bg-gradient-to-t from-blue-800 to-blue-500 ">
      <div className="bg-blue-300">Login</div>
      <div className="bg-red-300">Sign Up</div>
    </div>
  );
}
