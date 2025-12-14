"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const lessons = [
    "พื้นฐานและการติดตั้งเครือข่าย",
    "การบริหารจัดการ IP Address",
    "หลักการและกลไกการค้นหาเส้นทาง",
    "เครือข่ายไร้สายและเทคโนโลยีที่เกี่ยวข้อง",
    "ความปลอดภัยของเครือข่าย (Network Security I)",
    "VPN และการเชื่อมต่อระยะไกล",
    "การจัดการเครือข่ายระดับองค์กร",
  ];

  return (
    <nav className="w-full site-nav shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-lg md:text-xl font-semibold brand">BSCCT604 การบริหารเครือข่ายคอมพิวเตอร์</h1>

        {/* <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="nav-button text-sm font-medium"
              aria-expanded={open}
            >
              บทเรียนเครือข่าย ▾
            </button>

            {open && (
              <ul className="absolute right-0 mt-2 w-72 dropdown p-2 text-sm z-50">
                {lessons.map((l, i) => (
                  <li key={i} className="p-2 hover:bg-blue-50 cursor-pointer rounded">{`${i + 1}. ${l}`}</li>
                ))}
              </ul>
            )}
          </div>

         
        </div> */}

        
      </div>

      {/* Mobile menu panel }
      {mobileOpen && (
        <div className="md:hidden bg-white/5 backdrop-blur-sm p-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-2">
              {lessons.map((l, i) => (
                <a key={i} href={`/lesson/${i + 1}`} className="block p-3 rounded-lg hover:bg-blue-50 text-sm">{`${i + 1}. ${l}`}</a>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </nav>
  );
}
