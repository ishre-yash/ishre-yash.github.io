import React from "react";
import { Icon } from "@iconify/react";

function Date({ date }) {
  return (
    <div className="mt-2 inline-flex w-full justify-center rounded-lg bg-primary-500 bg-opacity-[.15] px-2 py-1 text-sm text-primary-500 saturate-200 backdrop-blur-sm backdrop-filter sm:mt-0 sm:w-auto">
      <Icon className="my-auto mr-1.5" icon="feather:calendar" />
      {date}
    </div>
  );
}

export default Date;
