function replaceAllSpecialChars(textValue, charSeparator) {
    let arrayReturnValues = textValue.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace('\\', '\\\\')
        .match(/[a-z 0-9]/g);
  
    if(arrayReturnValues === null)
        return '';
    
    return arrayReturnValues.join('')
        .replace(/[ ]+/g, ' ').trim()
        .replace(/[ ]/g, charSeparator);
}
