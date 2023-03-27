console.log('%c HI', 'color: firebrick')

//Challenge 1
function appendDogImagesToDom() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data)
        
        const div = document.getElementById("dog-image-container")
        for (image of data.message) {
        //Another option: data.message.forEach(function (image) {
            const img = document.createElement("img")
            img.src = image;
            div.appendChild(img)
        };
    });
};
appendDogImagesToDom();

//Challenge 2 and 3
function appendBreedsToDom() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data)

        const ul = document.getElementById("dog-breeds")
        for (breed in data.message) {
            const li = document.createElement("li")
                li.addEventListener("click", function() {
                    console.log("dog breed has been clicked")
                    li.style.color = "green";
                });
            li.textContent = breed;
            ul.appendChild(li)
        };
    });
};
appendBreedsToDom();

//Challenge 4
let dropdown = document.getElementById("breed-dropdown")

function selectLetter() {
        if (dropdown.selectedIndex === 0) {
            console.log("a");
            //slice(0, 12); 
          } else if (dropdown.selectedIndex === 1) {
            console.log("b");
          } else if (dropdown.selectedIndex === 2) {
            console.log("c");
          } else if (dropdown.selectedIndex === 3) {
            console.log("d");
        }
};
dropdown.addEventListener("change", selectLetter);
    










