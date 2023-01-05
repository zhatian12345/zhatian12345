const initState = {
    value:'默认值'
}
const reducer = (state=initState,action) => {
    switch(action.type){
        case 'banner':
            return Object.assign({},state,action);
        default: break;
    }
}
module.exports = {
    reducer
}