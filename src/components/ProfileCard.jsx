import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Image
        src="/profile.jpg"
        alt="Profile photo"
        className="w-40 h-40 rounded-full border-4 border-primary shadow-lg"
      />
      <h1 className="text-3xl font-bold">Your Name</h1>
      <p className="text-gray-600 dark:text-gray-300">Short bio or introduction goes here.</p>
    </div>
  );
}
