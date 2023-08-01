function Animal ({animal}){
    return (
        <div>
            <p>{animal.name}</p>
            <p>{animal.age}</p>
            <p>{animal.gender}</p>
        </div>
    );
}


function AnimalsList(){
    const animals = [
        {
            id: 1,
            name : "Dog",
            age : 5,
            gender : "M"    
        },
        {
            id: 2,
            name : "Dog1",
            age : 9,
            gender : "W"    
        }


    ]
    return(
        <div>
            <Animal animal={animals[0]} />
        </div>
    )
}
export default AnimalsList;