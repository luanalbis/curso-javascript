// new Object -> Object.prototype

const objetoA = {objetoA: 'A'} // __proto__ :object.prototype

const objetoB = {objetoB: 'B'} // definimos o proto do objeto b como o objeto A
Object.setPrototypeOf(objetoB,objetoA)

const objetoC = {objetoC: 'C'}
Object.setPrototypeOf(objetoC,objetoB)// definimos o proto do objeto c como o objeto b

console.log(Object.getPrototypeOf(objetoC))

//const p3 = createObject (prototype, {chaves})