let isValidPassword=function (psd) {

    if(psd.length<=8 || psd.includes('password')){
        console.log('The password is unvalid!')
    }
    else{
        console.log('Set password successfully!')
    }
}
isValidPassword('sdfljioawemdjf')
isValidPassword('sadss')
isValidPassword('sdfpassworddjf')

