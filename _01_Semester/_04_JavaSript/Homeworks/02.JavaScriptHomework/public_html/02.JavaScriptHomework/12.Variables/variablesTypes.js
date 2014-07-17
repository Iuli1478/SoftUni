function variablesTypes(value) {
    return "My name: " + value[0] + " //type is " + typeof(value[0]) + 
           "\nMy age: " + value[1] + " //type is " + typeof(value[1]) +
           "\nI am male: " + value[2] + " //type is " + typeof(value[2]) +
           "\nMy favorite foods are: " + value[3][0] + "," + value[3][1] + "," + value[3][2] + 
           "\n//type is " + typeof(value[3]);
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));




