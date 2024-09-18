import * as React from "react";

import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";
import Sheets from "../components/Sheets";
import SheetPage from "../components/SheetPage/SheetPage";

import "./App.scss";
import classNames from "classnames";

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);
  const [activeSheetIndex, setActiveSheetIndex] = React.useState(2);

  return (
    <div className="">
      <Navbar />
      <div className="relative flex overflow-auto h-[calc(100vh-48px)] border-t border-gray-300">
        <SidebarMenu
          open={menuOpen}
          onToggle={() => {
            setMenuOpen((prev) => !prev);
          }}
        />
        <main
          className={classNames(
            "flex-1 border-l border-gray-300",
            menuOpen ? "max-w-[calc(100%-221px)]" : "max-w-[calc(100%-64px)]"
          )}
        >
          <Sheets
            activeIndex={activeSheetIndex}
            setActiveIndex={setActiveSheetIndex}
            onClose={() => {}}
            tabs={[
              { key: "345678", label: "Tiers n°345678", unread: true },
              { key: "345679", label: "Tiers n°345679", unread: true },
              { key: "345680", label: "Tiers n°345680", unread: true },
              { key: "345681", label: "Tiers n°345681", unread: true },
              { key: "345682", label: "Tiers n°345682", unread: true },
              { key: "345683", label: "Tiers n°345683", unread: true },
            ]}
          />

          <SheetPage />
        </main>
      </div>
    </div>
  );
};

export default App;
