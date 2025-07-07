import "./Child1.css"

const Child1 = () => {
    let name="John";
    let designation="Software Developer";
    let skills=["JS","PHP","Gen AI"];
    return (
        <div>
            <h1>Introduction</h1>
            <div class="intro">

            <div>
                <span>Name: </span>{name}
            </div>
            <div>
                <span>Designation: </span>{designation}
            </div>
            <div>
                <span>Skills: </span> {skills[0]} | {skills[1]} | {skills[2]}
            </div>
            </div>
        </div>
    );
};

export default Child1;