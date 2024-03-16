import React from "react";
import "./style.scss";

const ScrollableSubHeader = () => {
  const tabs = [
    {
      id: 1,
      title: "News",
      linkTo: "/news",
    },
    {
      id: 2,
      title: "Health",
      linkTo: "/health",
    },
    {
      id: 3,
      title: "Tech",
      linkTo: "/tech",
    },
    {
      id: 4,
      title: "Gaming",
      linkTo: "/gaming",
    },
    {
      id: 5,
      title: "Reviews",
      linkTo: "/reviews",
    },
    {
      id: 6,
      title: "Upcoming",
      linkTo: "/upcoming",
    },
    {
      id: 7,
      title: "Gossip",
      linkTo: "/gossip",
    },
    {
      id: 8,
      title: "Quiz",
      linkTo: "/quiz",
    },
  ];

  return (
    <div className="subheader-tabs">
      {tabs?.length
        ? tabs.map((item) => (
            <div className="subheader-tabs_tab" key={item?.id}>
              {item?.title || "-"}
            </div>
          ))
        : ""}
    </div>
  );
};

export default ScrollableSubHeader;
