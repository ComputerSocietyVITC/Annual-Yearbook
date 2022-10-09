import React, { useState, useEffect } from "react";
import ContributorType from "../../types/ContributorType";
import axios from "axios";

let Contributor = (props: { contributor: ContributorType; }) => {
    const { contributor } = props;
    
    return (
        <>
            <div>
                <a href={contributor.github}>
                    <img alt={contributor.name} title={contributor.name} src={contributor.avatar} className="block rounded-full h-12"/>
                </a>
            </div>
        </>
    )
}

let ContributorList = () => {

    const [contributors, setContributors] = useState<ContributorType[]>([])

    type Response = { login: string, html_url:string; avatar_url:string}; 

    useEffect(() => {
        async function getContributors() {
            const data:Response[] = await fetch("https://api.github.com/repos/ComputerSocietyVITC/Annual-Yearbook/contributors")
                                                .then(response => response.json())

            
            setContributors(data.filter(i=>i.login!=="github-actions[bot]").map(i => ({name:i.login, avatar:i.avatar_url, github:i.html_url})))

        };
    
        getContributors();
        
      }, []);

    return (
        <>
            <div>
                <div className="py-4 text-2xl font-bold flex flex-auto justify-center">Contributors</div>
                <div className="flex justify-center gap-5 flex-wrap">
                {
                    contributors.map((contrib) => (
                        <Contributor contributor={contrib} key={contrib.name} />
                    ))
                }
                </div>
            </div>
        </>
    );
}

export default ContributorList;

