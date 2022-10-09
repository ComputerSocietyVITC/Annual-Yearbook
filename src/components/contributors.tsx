import * as React from "react";
import ContributorType from "../types/ContributorType";

let Contributor = (props: { contributor: ContributorType }) => {
  const { contributor } = props;
  console.log(contributor);
  return (
    <>
      <div>
        <a href={contributor.github}>
          <img
            alt={contributor.name}
            title={contributor.name}
            src={contributor.picUrl}
            className="block rounded-full"
          />
        </a>
      </div>
    </>
  );
};

let ContributorList = () => {
  const contributors: ContributorType[] = [
    {
      name: "Abhijith Ganesh",
      github: "https://github.com/AbhijithGanesh",
      picUrl: "https://avatars.githubusercontent.com/u/67182544?s=64&v=4",
    },
    {
      name: "Vaibhav Tekkalur",
      github: "https://github.com/vaibhavTekk",
      picUrl: "https://avatars.githubusercontent.com/u/59783171?s=64&v=4",
    },
    {
      name: "Srinitish S",
      github: "https://github.com/Deceptrax123",
      picUrl: "https://avatars.githubusercontent.com/u/87447180?s=64&v=4",
    },
    {
      name: "Ashutosh",
      github: "https://github.com/coldn00dles",
      picUrl: "https://avatars.githubusercontent.com/u/93096256?s=64&v=4",
    },
  ];

  return (
    <>
      <div>
        <div className="py-4 text-2xl font-bold flex flex-auto justify-center">
          Contributors
        </div>
        <div className="flex justify-center gap-5">
          {contributors.map((contrib) => (
            <Contributor contributor={contrib} key={contrib.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContributorList;
