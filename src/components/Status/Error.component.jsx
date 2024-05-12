import React from "react";
import { Icon } from "@iconify/react";

function Error() {
  return (
    <div className="mx-auto flex w-full max-w-sm space-x-4 rounded-lg border-2 border-red-500 bg-red-900 px-4 py-4 backdrop-blur-sm backdrop-filter hover:shadow-lg motion-safe:animate-pulse">
      <div className="my-auto flex h-12 w-12 items-center justify-center text-red-500">
        <Icon className="h-8 w-8" icon="feather:alert-triangle" />
      </div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 w-3/4 rounded ring-2 ring-red-500" />
        <div className="h-4 rounded ring-2 ring-red-500" />
      </div>
    </div>
  );
}

export default Error;
