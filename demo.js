function payerMonKebab() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve('Galette Falafels, Salade Tomate Oignons !')
            } else {
                reject('Nope, mange ta main !')
            }
        }, 2000)
    })
}


let food;
function manger(nourriture) {
    console.log('Miam ', nourriture);
    // Commander un dessert
    // ran
}

payerMonKebab()
    .then(kebab => {
        // On ne peut avoir accés au Kebab que lorsqu'il est payé, donc ICI
        food = kebab;
        manger(kebab);
    })
    .catch(err => console.warn(err))

console.log(food); //








async function commander() {
    try {
        const kebab = await payerMonKebab();
        console.log(kebab)
    } catch (e) {
        console.warn(e)
    }
}
//commander();