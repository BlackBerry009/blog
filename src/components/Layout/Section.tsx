import classNames from "classnames";
import { FC, memo, PropsWithChildren } from "react";

import { SectionId } from "../../data/data";

interface SectionProps {
  sectionId: SectionId;
  sectionTitle?: string;
  noPadding?: boolean;
  className?: string;
}

const Section = memo(
  ({
    children,
    sectionId,
    noPadding = false,
    className,
  }: PropsWithChildren<SectionProps>) => {
    return (
      <section
        className={classNames(className, {
          "px-4 py-16 md:py-24 lg:px-8": !noPadding,
        })}
        id={sectionId}
      >
        <div className={classNames({ "mx-auto max-w-screen-lg": !noPadding })}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
