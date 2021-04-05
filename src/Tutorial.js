const sum = (n1,n2)=>{
    return n1+n2;
}
class someObject{
    constructor(){
        console.log('some object class');
    }
}

module.exports = {'sum':sum, 'someObject':someObject};
