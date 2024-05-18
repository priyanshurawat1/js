const myObject = {
    js: 'javasript',
    cpp: 'C++',
    c: 'C',
    rb: 'ruby',
    java: 'java'
}

for (const key in myObject) {
    console.log(`.${key} is extension of ${myObject[key]}`);
}