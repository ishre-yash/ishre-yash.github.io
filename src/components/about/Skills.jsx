import React from "react";
import { Icon } from "@iconify/react";

function Skills({ profile }) {
  return (
    <>
      {profile.skills?.programming && (
        <SkillTag skills={profile.skills.programming} />
      )}
      {profile.skills?.fullstack && (
        <SkillTag skills={profile.skills.fullstack} />
      )}
      {profile.skills?.database && (
        <SkillTag skills={profile.skills.database} />
      )}
      {profile.skills?.android && <SkillTag skills={profile.skills.android} />}
      {profile.skills?.design && <SkillTag skills={profile.skills.design} />}
      {profile.skills?.tools && <SkillTag skills={profile.skills.tools} />}
    </>
  );
}

export default Skills;

function SkillTag({ skills }) {
  return (
    <section className="my-4 flex h-fit w-full flex-col items-center justify-start">
      <div className="mb-2 grid w-full grid-cols-12">
        <div className="col-span-2 flex items-center justify-center sm:col-span-1">
          <Icon
            className="mr-2 h-10 w-10 text-primary-500 "
            icon={skills?.icon}
          />
        </div>
        <div className="col-span-10">
          <h3 className="text-base font-semibold text-gray-500 dark:text-gray-200">
            {skills?.title}
          </h3>
          <p className="text-sm font-medium text-gray-400 dark:text-gray-300">
            {skills?.description}
          </p>
        </div>
      </div>
      {skills.skills?.map((s, index) => {
        return (
          <section className="my-2 grid w-full grid-cols-12" key={index}>
            <div className="col-span-2 h-full w-full sm:col-span-1"></div>
            <div className="col-span-10 sm:col-span-11 ">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                  {s?.name}
                </div>
                <span className="text-sm font-medium text-gray-400 dark:text-gray-300">
                  {s?.score}%
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-primary-500 bg-opacity-25">
                <div
                  className="bgGradiant  h-1.5 rounded-full"
                  style={{ width: `${s?.score}%` }}
                ></div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
