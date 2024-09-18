import * as React from "react";

import Tabs from "../Tabs";

import {
  PiCopy,
  PiBookOpenText,
  PiDotsThreeVertical,
  PiInfo,
  PiCurrencyCircleDollar,
  PiPencilSimple,
} from "react-icons/pi";

const SheetPage = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <div>
      <div className="flex items-center justify-between py-3 border-b border-gray-300">
        <div className="text-xl font-bold px-4">Réf: ACT_318233514 / WATEA</div>
        <div className="inline-flex items-center justify-end px-2">
          <button className="group flex items-center gap-2 border-r border-gray-100 px-3 leading-none">
            <PiCopy className="text-2xl" />
            <span className="underline-offset-4	group-hover:underline">
              Copier la référence
            </span>
          </button>
          <button className="group flex items-center gap-2 border-r border-gray-100 px-3 leading-none">
            <PiBookOpenText className="" />
            <span className="underline-offset-4	group-hover:underline">
              Voir la Fiche Syntèse
            </span>
          </button>
          <button className="text-xl ml-1 p-2 rounded-full transition hover:bg-gray-100">
            <PiDotsThreeVertical />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-3 bg-blue-50">
        <div className="inline-flex items-center text-blue-500 text-xl font-bold px-4">
          Automatisation <PiInfo className="text-black text-md mx-1" />
        </div>
        <div className="inline-flex items-center justify-end px-2">
          <div className="flex items-center gap-2 border-r border-gray-300 px-4 leading-none">
            <span className="font-bold">Process</span>
            <button className="text-2xl px-3 py-1 rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white">
              <PiCurrencyCircleDollar />
            </button>
            <button className="text-2xl px-3 py-1 rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white">
              <PiCurrencyCircleDollar />
            </button>
          </div>
          <div className="flex items-center gap-2 border-r border-gray-300 px-4 leading-none">
            <span className="font-bold">Events</span>
            <button className="text-2xl px-3 py-1 rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white">
              <PiCurrencyCircleDollar />
            </button>
            <button className="text-2xl px-3 py-1 rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white">
              <PiCurrencyCircleDollar />
            </button>
          </div>
          <div className="flex items-center gap-2 px-4 leading-none">
            <span className="font-bold">Actions</span>
            <button className="text-2xl px-3 py-1 rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white">
              <PiCurrencyCircleDollar />
            </button>
            <button className="text-2xl px-3 py-1 rounded-full bg-blue-100 transition hover:bg-blue-500 hover:text-white">
              <PiCurrencyCircleDollar />
            </button>
          </div>
        </div>
      </div>
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

      {activeTabIndex === 0 ? (
        <div className="p-4">
          <div className="flex items-stretch gap-4 mb-4">
            <div className="bg-gray-100 rounded flex-1 p-5">
              Just placeholder
            </div>
            <div className="bg-gray-100 rounded flex-1 p-5">
              Just placeholder
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 bg-blue-100 text-blue-600 font-semibold p-3 rounded transition hover:bg-blue-800 hover:text-white">
            <PiPencilSimple className="text-2xl" /> Modifier
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SheetPage;
