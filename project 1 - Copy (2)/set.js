const map1 = new Map();

map1.set("jan",1);
map1.set("feb",2);
map1.set("mar",3);

map1.set("jan",100);
console.log(map1.get('jan'));