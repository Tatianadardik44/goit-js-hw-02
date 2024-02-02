function getElementWidth(content, padding, border) {
    let contents = Number.parseFloat(content);
    let paddings = Number.parseFloat(padding);
    let borders = Number.parseFloat(border);

    const value = contents + paddings * 2 + borders * 2;
    
    return value;
}   
 
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
