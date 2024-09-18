import * as React from "react";

import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";
import Sheets from "../components/Sheets";
import Tabs from "../components/Tabs";

import "./App.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);
  const [activeSheetIndex, setActiveSheetIndex] = React.useState(2);
  const [activeTabIndex, setActiveTabIndex] = React.useState(2);

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
        <main className="flex-1 border-l border-gray-300">
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

              // { key: "345685", label: "Tiers n°345686", unread: true },
              // { key: "345687", label: "Tiers n°345688", unread: true },
              // { key: "345689", label: "Tiers n°345690", unread: true },
              // { key: "345691", label: "Tiers n°345692", unread: true },
              // { key: "345693", label: "Tiers n°345694", unread: true },
              // { key: "345695", label: "Tiers n°345696", unread: true },
            ]}
          />
          <Tabs
            activeIndex={activeTabIndex}
            setActiveIndex={setActiveTabIndex}
            tabs={[
              { key: "identity", label: "Identité" },
              { key: "address", label: "Adresse" },
              { key: "bank_account", label: "Comptes Bancaires" },
              { key: "contact", label: "Contact" },
              { key: "roles", label: "Rôles" },
              { key: "contracts", label: "Contrats (2)" },
              {
                key: "activity_log",
                label: (
                  <span className="relative">
                    Activity log
                    <span className="rounded-full px-1 py-0.5 bg-red-700 text-white text-xxs absolute right-[-15px] leading-none">
                      2
                    </span>
                  </span>
                ),
              },
            ]}
          />
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </main>
      </div>
    </div>
  );
};

export default App;
