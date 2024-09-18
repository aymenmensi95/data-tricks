import classNames from "classnames";
import React from "react";

const Tabs = (props) => {
  const { tabs, activeIndex, setActiveIndex } = props;

  return (
    <div className="border-b border-gray-300">
      {tabs?.map(({ key, label, unread }, index) => {
        return (
          <button
            key={key}
            onClick={() => {
              setActiveIndex?.(index);
            }}
            className={classNames("p-4", {
              "text-lime-700 border-b-[3px] border-lime-700":
                activeIndex === index,
            })}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
