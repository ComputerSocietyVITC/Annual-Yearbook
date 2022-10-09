import React, { useState, useEffect } from "react";
import ContributorType from "../types/ContributorType";

let Contributor = (props: { contributor: ContributorType; }) => {
    const { contributor } = props;
    
    return (
        <>
            <div>
                <a href={contributor.html_url}>
                    <img alt={contributor.login} title={contributor.login} src={contributor.avatar_url} className="block rounded-full h-12"/>
                </a>
            </div>
        </>
    )
}

let ContributorList = () => {

    const [contributors, setContributors] = useState<ContributorType[]>([])

    useEffect(() => {
        async function getContributors() {
            const data:Promise<ContributorType[]> = fetch("https://api.github.com/repos/ComputerSocietyVITC/Annual-Yearbook/contributors")
                                                .then(response => response.json())

            setContributors(await data)

        };
    
        getContributors();
        
      }, []);

    return (
        <>
            <div>
                <div className="py-4 text-2xl font-bold flex flex-auto justify-center">Contributors</div>
                <div className="flex justify-center gap-5">
                {
                    contributors.map((contrib) => (
                        <Contributor contributor={contrib} key={contrib.login} />
                    ))
                }
                </div>
            </div>
        </>
    );
}

export default ContributorList;

