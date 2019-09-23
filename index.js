// Code your solution here

const findMatching = (drivers, string) => {
    return drivers.filter( d => {
        return d.toUpperCase() === string.toUpperCase()
    })
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter( d => {
        console.log(string)
        let myReg = new RegExp('^' + string)
        return myReg.test(d)
    })
}

const matchName = (drivers, string) => {
    return drivers.filter( d => {
        return d['name'] === string
    })
}