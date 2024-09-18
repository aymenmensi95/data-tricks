import {
  PiGearFine,
  PiBell,
  PiClipboardText,
  PiChats,
  PiCaretDown,
  PiGear,
} from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-4">
      <div className="flex-1 text-center text-gray-500 text-sm">
        For Group Michelin
      </div>
      <div className="flex-1 font-medium text-center">
        Tiers &gt; liste des tiers
      </div>
      <div className="flex-1 inline-flex items-center justify-end gap-2">
        <button className="p-2 rounded-full transition hover:bg-gray-100">
          <PiGearFine className="text-xl" />
        </button>
        <button className="p-2 rounded-full transition hover:bg-gray-100 relative">
          <span className="rounded-full px-1 py-0.5 bg-red-700 text-white text-xxs absolute right-1 top-1 leading-none">
            3
          </span>
          <PiBell className="text-xl" />
        </button>
        <button className="p-2 rounded-full transition hover:bg-gray-100">
          <PiClipboardText className="text-xl" />
        </button>
        <button className="p-2 rounded-full transition hover:bg-gray-100">
          <PiChats className="text-xl" />
        </button>
        <button className="p-2 rounded-full transition hover:bg-gray-100">
          <PiGear className="text-xl" />
        </button>
        <button className="text-left inline-flex items-center gap-2 p-2 transition hover:bg-gray-100">
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
          <PiCaretDown />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
