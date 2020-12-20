const getJSON = async url => {
    const response = await fetch(url);
    return response.json(); // get JSON from the response 
}
var characters = {};
// Get the characters from the json file
getJSON("https://raw.githubusercontent.com/AzzaDeveloper/loly-impact/master/characters.json")
.then(data => {
    characters = data;
    for(var banner in characters) {
        for(var rarities in characters[banner].chars) {
            for (var chars in characters[banner].chars[rarities]) {
                const char = characters[banner].chars[rarities][chars]
                var currentDiv = document.getElementById("inner-container");
                var div = document.createElement("div");
                    div.classList.add("char");
                    currentDiv.appendChild(div)
                var img = document.createElement("img");
                    if (rarities != "exclusive") {
                        img.src = "https://github.com/AzzaDeveloper/loly-impact/blob/master/gacha/" + characters[banner].base + "/" + rarities + "/" + chars + ".jpg?raw=true";
                    } else {
                        img.src = "https://github.com/AzzaDeveloper/loly-impact/blob/master/gacha/" + banner + "/" + rarities + ".jpg?raw=true";
                    }
                    img.classList.add("char-img");
                    div.appendChild(img)
                var char_name = document.createElement("p");
                    char_name.innerHTML = char;
                    char_name.title = char;
                    char_name.classList.add("char-name");
                    div.appendChild(char_name)
                var char_internal = document.createElement("p");
                    char_internal.innerHTML = chars;
                    char_internal.classList.add("char-internal");
                    div.appendChild(char_internal)
                var char_rarity = document.createElement("p");
                    switch (rarities) {
                        case "exclusive":
                            char_rarity.innerHTML = "🌟🌟🌟🌟🌟"
                            break;
                        case "five_star":
                            char_rarity.innerHTML = "⭐⭐⭐⭐⭐"
                            break;
                        case "four_star":
                            char_rarity.innerHTML = "⭐⭐⭐⭐"
                            break;
                        case "three_star":
                            char_rarity.innerHTML = "⭐⭐⭐"
                            break;
                        case "two_star":
                            char_rarity.innerHTML = "⭐⭐"
                            break;
                    }
                    char_rarity.classList.add("char-rarity");
                    div.appendChild(char_rarity)
            }
        }
    }
});
//
