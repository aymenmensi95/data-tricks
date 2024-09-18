import * as React from "react";

import classNames from "classnames";

import { PiListBullets, PiDotsThree, PiX } from "react-icons/pi";

const Sheets = (props) => {
  const { tabs, activeIndex, setActiveIndex } = props;

  return (
    <div className="flex justify-between px-2 pt-2 bg-sky-950">
      <div className="flex align-end">
        <button className="relative border-r rounded-t p-4 bg-gray-50 text-black text-2xl overflow-hidden">
          <PiListBullets />
        </button>
        {tabs?.map(({ key, label, unread }, index) => {
          return (
            <button
              key={key}
              onClick={() => {
                setActiveIndex?.(index);
              }}
              className={classNames(
                "relative border-r rounded-t p-4 bg-gray-50 overflow-hidden",
                {
                  "text-gray-500": activeIndex !== index,
                }
              )}
            >
              {unread && (
                <span className="w-8 h-3 bg-green-700 absolute top-[-10px] right-[-10px] rotate-45"></span>
              )}
              {label}
            </button>
          );
        })}
      </div>
      <div className="inline-flex gap-2 items-start">
        <button className="p-3 rounded-full text-2xl text-gray-100 transition hover:bg-gray-100 hover:text-black">
          <PiDotsThree />
        </button>
        <button className="p-3 rounded-full text-2xl text-gray-100 transition hover:bg-gray-100 hover:text-black">
          <PiX />
        </button>
      </div>
    </div>
  );
};

export default Sheets;
