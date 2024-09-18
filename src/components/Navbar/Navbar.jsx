import * as React from "react";

import { IoIosCog } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import {
  PiClipboardTextLight,
  PiChatsLight,
  PiCaretDownLight,
} from "react-icons/pi";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 text-center text-gray-500 text-sm">
        For Group Michelin
      </div>
      <div className="flex-1 text-center">Tiers &gt; liste des tiers</div>
      <div className="flex-1 inline-flex items-center justify-end gap-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <IoIosCog className="stroke-2 text-xl" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <span className="rounded-full px-1 py-0.5 bg-red-700 text-white text-xxs absolute right-1 top-1 leading-none">
            3
          </span>
          <CiBellOn className="text-xl" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <PiClipboardTextLight className="text-xl" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <PiChatsLight className="text-xl" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiSettings className="stroke-1 text-xl" />
        </button>
        <button className="text-left inline-flex items-center gap-2 p-2 hover:bg-gray-100">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?q=80&w=300"
            alt="avatar"
            width="20px"
          />
          <span className="inline-flex flex-col gap-1 min-w-28">
            <span className="text-sm leading-none font-medium text-black">
              Chokri
            </span>
            <span className="text-xs leading-none text-gray-500">
              Comptabilité
            </span>
          </span>
          <PiCaretDownLight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
