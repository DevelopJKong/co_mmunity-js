const number = {
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9,
    ten : 10
};

for(let key in number){
    console.log(key);
}

for(let value in number){
    value = number[value];
    console.log(value);
}