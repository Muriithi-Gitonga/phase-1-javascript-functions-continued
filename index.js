// code your solution here

const mondayWork = function (paramenter='go to the office') {
    return `This Monday, I will ${paramenter}.`
}

const saturdayFun = function (paramenter='roller-skate') {
   return `This Saturday, I want to ${paramenter}!`
}

const wrapAdjective = function (string = "*") {
    return (function (paramenter='special') {
        return `You are ${string}${paramenter}${string}!`
    })
}