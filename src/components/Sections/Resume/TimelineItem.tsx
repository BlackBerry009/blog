import { FC, memo } from "react";

import { TimelineItem } from "../../../data/dataDef";

const TimelineItemCmp: FC<{ item: TimelineItem }> = memo(({ item }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left text-neutral-800">
      <div className="flex flex-col pb-4">
        <div className="text-xl font-bold">{title}</div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">
            {location}
          </span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItemCmp.displayName = "TimelineItem";
export default TimelineItemCmp;
