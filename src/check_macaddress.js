module.exports = function isValidMacAddress(macaddr){
    return /^[0-9a-f]{1,2}([\.:-])(?:[0-9a-f]{1,2}\1){4}[0-9a-f]{1,2}$/i.test(macaddr)
}