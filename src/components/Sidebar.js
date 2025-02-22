import React from 'react'
import {
  MdHome,
  MdOutlineSubscriptions,
  MdHistory,
  MdPerson,
  MdOutlineShoppingBag,
  MdMusicNote,
  MdMovie,
  MdLiveTv,
  MdSportsEsports,
  MdOutlineArticle,
  MdOutlineSlowMotionVideo
} from 'react-icons/md'

export default function Sidebar() {
  const mainLinks = [
    { icon: <MdHome className="text-xl" />, title: "Home", active: true },
    { icon: <MdOutlineSlowMotionVideo className="text-xl" />, title: "Shorts" },
    { icon: <MdOutlineSubscriptions className="text-xl" />, title: "Subscriptions" },
  ];

  const userLinks = [
    { icon: <MdPerson className="text-xl" />, title: "You" },
    { icon: <MdHistory className="text-xl" />, title: "History" },
  ];

  const exploreLinks = [
    { icon: <MdOutlineSlowMotionVideo className="text-xl" />, title: "Trending" },
    { icon: <MdOutlineShoppingBag className="text-xl" />, title: "Shopping" },
    { icon: <MdMusicNote className="text-xl" />, title: "Music" },
    { icon: <MdMovie className="text-xl" />, title: "Movies" },
    { icon: <MdLiveTv className="text-xl" />, title: "Live" },
    { icon: <MdSportsEsports className="text-xl" />, title: "Gaming" },
    { icon: <MdOutlineArticle className="text-xl" />, title: "News" },
  ];

  return (
    <div className="w-2/12 bg-[#0f0f0f] text-white p-2 pr-5 overflow-auto pb-8 h-screen">
      {/* Main Menu */}
      <ul className="flex flex-col border-b border-gray-700">
        {mainLinks.map((link, index) => (
          <li key={index} className={`p-4 flex items-center gap-5 hover:bg-zinc-700 rounded-xl ${link.active ? "bg-zinc-700" : ""}`}>
            {link.icon}
            <span className="text-sm font-medium">{link.title}</span>
          </li>
        ))}
      </ul>

      {/* User Section */}
      <ul className="flex flex-col border-b border-gray-700 mt-2">
        {userLinks.map((link, index) => (
          <li key={index} className="p-4 flex items-center gap-5 hover:bg-zinc-700 rounded-xl">
            {link.icon}
            <span className="text-sm font-medium">{link.title}</span>
          </li>
        ))}
      </ul>

      {/* Sign-in Section */}
      <div className="p-4 py-5 text-sm text-gray-400">
        Sign in to like videos, comment, and subscribe.
        <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Sign in</button>
      </div>

      {/* Explore Section */}
      <ul className="flex flex-col mt-2">
        <span className="text-sm px-4 py-2 text-gray-400">Explore</span>
        {exploreLinks.map((link, index) => (
          <li key={index} className="p-4 flex items-center gap-5 hover:bg-zinc-700 rounded-xl">
            {link.icon}
            <span className="text-sm font-medium">{link.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
