import React, { useState, useEffect } from "react";
import ContributorType from "../types/ContributorType";
import axios from "axios";

let Contributor = (props: { contributor: ContributorType }) => {
  const { contributor } = props;

  return (
    <>
      <div>
        <a href={contributor.github}>
          <img
            alt={contributor.name}
            title={contributor.name}
            src={contributor.avatar}
            className="block rounded-full h-12"
          />
        </a>
      </div>
    </>
  );
};

let ContributorList = () => {
  const [contributors, setContributors] = useState<ContributorType[]>([]);

  useEffect(() => {
    async function getContributors() {
      const { data, status } = await axios.get<ContributorType[]>(
        "https://get-contrib-job.herokuapp.com/contributors/ComputerSocietyVITC/Annual-Yearbook?json",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!status) {
        return;
      }

      setContributors(data);
    }
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    getContributors();
  }, []);

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
