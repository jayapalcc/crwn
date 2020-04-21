const CartDropdownFilter = (state, newItem)=> {

    if(state.items.length<1){
        //console.log("1");
        return {...state,visible: false, items:[{...newItem, quantity: 1}]}

    }

    let isExisting = state.items.find(item=> item.id===newItem.id);
    //console.log("status",isExisting);
    
    if(isExisting){
        state.items.forEach(item=>{
            if(item.id===newItem.id){
                item.quantity = item.quantity + 1;
            }
        });
        return {...state, items:[...state.items]}
    }

    return {...state, items:[...state.items,{...newItem, quantity: 1}]}    
};


const CartDecrement =(state, newItem)=>{

    const isExisting = state.items.find(item=> (item.id===newItem.id));
    console.log(isExisting);

    if (isExisting.quantity === 1){
        const newcartItems = state.items.filter(item=> (item.id!==newItem.id));
        console.log(newcartItems);
        return {...state, items: newcartItems}
    }
    const newList = state.items.map(item=> {
        if(item.id===newItem.id){
            return {...item, quantity: item.quantity-1}
        }else{
            return {...item}
        }
    });
    return {...state, items: newList}
};

const CartIncrement = (state, newItem)=>{
    
    const newList = state.items.map(item=> {
        if(item.id===newItem.id){
            return {...item, quantity: item.quantity+1}
        }else{
            return {...item}
        }
    });
    return {...state, items: newList}

}

export {CartDropdownFilter, CartIncrement, CartDecrement};