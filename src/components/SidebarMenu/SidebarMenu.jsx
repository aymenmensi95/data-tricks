import * as React from "react";

import classNames from "classnames";

import {
  PiCaretDoubleRight,
  PiSquaresFour,
  PiFolderOpen,
  PiIdentificationCard,
  PiBuildings,
  PiPackage,
  PiBriefcase,
  PiBookBookmark,
  PiHandshake,
  PiScrollLight,
  PiCoins,
  PiTreasureChest,
  PiCalculatorDuotone,
  PiTrayArrowDown,
} from "react-icons/pi";

const linkClassNamesStatic =
  "flex items-center gap-2 py-1 rounded-full overflow-hidden transition hover:bg-lime-100 hover:text-lime-700";

const activeLinkClassNames = "bg-lime-100 text-lime-700";

const SidebarMenu = (props) => {
  const { open, onToggle } = props;

  const [removeText, setRemoveText] = React.useState(false);

  const timeout = React.useRef(null);

  React.useEffect(() => {
    window.clearTimeout(timeout.current);
    if (open) {
      setRemoveText(false);
    } else {
      timeout.current = setTimeout(() => {
        setRemoveText(true);
      }, 2000);
    }
  }, [open]);

  const linkClassNames = classNames(
    linkClassNamesStatic,
    open ? "px-4" : "px-3"
  );

  const linkTestClassNames = classNames("font-medium transition", {
    "opacity-0 whitespace-nowrap": !open,
    "sr-only": removeText,
  });

  return (
    <aside
      className={classNames(
        "sticky top-0 h-[calc(100vh-48px)] overflow-auto transition-all",
        {
          "max-w-[64px]": !open,
        }
      )}
    >
      <div className="flex justify-end p-3">
        <button
          className={classNames(
            "p-3 rounded-full transition hover:bg-gray-100",
            { "rotate-180": open }
          )}
          onClick={() => {
            onToggle?.();
          }}
        >
          <PiCaretDoubleRight />
        </button>
      </div>
      <ul>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiSquaresFour className="text-2xl shrink-0 rotate-45" />
            <span className={linkTestClassNames}>Dashboard</span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiFolderOpen className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Docs. ouverts (5)</span>
          </a>
        </li>
        <li className="h-px my-2 bg-gray-300"></li>
        <li className="px-2 py-1">
          <a
            href="#id"
            className={classNames(linkClassNames, activeLinkClassNames)}
          >
            <PiIdentificationCard className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Tiers</span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiBuildings className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Societés de gestion</span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiPackage className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Assets </span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiBriefcase className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Contrats</span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiBookBookmark className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Agenda</span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiHandshake className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Prestations </span>
          </a>
        </li>
        <li className="h-px my-2 bg-gray-300"></li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiScrollLight className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Factures </span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiCoins className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Dépenses </span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiTreasureChest className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>trésorerie</span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiCalculatorDuotone className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>comptabilité</span>
          </a>
        </li>
        <li className="px-2 py-1">
          <a href="#id" className={classNames(linkClassNames)}>
            <PiTrayArrowDown className="text-2xl shrink-0 " />
            <span className={linkTestClassNames}>Recouvrement</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarMenu;
