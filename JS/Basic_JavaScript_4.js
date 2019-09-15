function my_Dictionary() {
    var Animal = {
        Species: "Horse",
        Color: "Brown",
        Breed: "Zangersheide",
        Age: 11,
        Sound: "Neigh",
    };
    delete Animal.Breed;
document.getElementById("dictionary").innerHTML = Animal.Breed;
} 