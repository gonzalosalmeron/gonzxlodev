"use client";

import React, { useState } from "react";

function ProjectBox({ project }) {
  const bgColors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
  ];

  const randomBgColor = () =>
    bgColors[Math.floor(Math.random() * bgColors.length)];

  const [bgColor, setBgColor] = useState(randomBgColor());

  const { data, content } = JSON.parse(project)

  return (
    <div className="border-2 border-black p-12 relative">
      <div
        className={`absolute inset-0 ${bgColor}`}
        onClick={() => setBgColor(randomBgColor())}
      ></div>
      <div className="max-w-fit overflow-hidden mb-6 relative z-10">
        <img
          className="h-80"
          src="https://fastly.picsum.photos/id/192/800/600.jpg?hmac=XjJMLP0ac0_G91n_SFs5GOlCG50bMeFHcBOdyw7l8a8"
          alt=""
        />
      </div>

      <a
        className="text-black text-2xl font-medium [text-shadow:_1px_1px_#fff,2px_2px_#fff,3px_3px_#0a0a0a] uppercase relative z-10"
        href=""
      >
        {data.title}
      </a>
      <p className="mt-1 text-black relative z-10">{data.excerpt}</p>

      <p className="py-3 text-black relative z-10">Next.js, Vuejs, Laravel, Typescript</p>

      <a className="text-lg font-medium text-black relative z-10" href="">
        Github
      </a>
    </div>
  );
}

export default ProjectBox;
