
// maps are very close to objects
// no duplicate value is allowed

const countries = new Map()
countries.set("IN", "India")
countries.set("JP", "Japan")
countries.set("FN", "Finland")


// just a syntax for iterating maps
for (const [key, value] of countries) {
    console.log(key);
}

// Remember objects cannot be iterated using forof 