import React from 'react'
import PersonalInfo from './PersonalInfo';
import ProffInfo from './ProffInfo';

const Props = () => {

    let userName = "Kushagra";
    let userAge = 21;
    let userEmail = "Kushagra@me.in";
    let userMobile = "8534855208";



    let company = {
        company_name: "Microsoft Corp.",
        department: "Frontend",
        designation: "Software Developer",
        github: "www.github.com/TheKushagraPerspective",
        skills : ["React", "Angular", "Bootstrap", "Micro frontend"]
    };


  return (
    <>
        <div className="container mx-auto px-4 mt-6">
            <div className="flex flex-col md:flex-row gap-4">
                <PersonalInfo 
                name = {userName}
                email = {userEmail}
                age = {userAge}
                mob = {userMobile}
                />

                <ProffInfo compData = {company} />
            </div>
        </div>
    </>
  )
}

export default Props
