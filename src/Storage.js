let records=[
    {
        "sno":100,
        "categories":"Mobiles",
        "ProductName":"Apple iphone 13 pro",
        "Productcost":70000,
        "Rating":4.6

    },
    {
        "sno":101,
        "categories":"Watches",
        "ProductName":"Apple smart watch",
        "Productcost":12000,
        "Rating":4.6

    },
    {
        "sno":102,
        "categories":"Clothings",
        "ProductName":"Women Peplum Multicolor Dress",
        "Productcost":869,
        "Rating":4.1

    },
    {
        "sno":111,
        "categories":"TV & Appliances",
        "ProductName":"SAMSUNG Crystal 4K Pro",
        "Productcost":36000,
        "Rating":4.4

    }


]
 const effect=()=>{
    localStorage.setItem("warehouse",JSON.stringify(records))
}

const checking=()=>{
    const tmp=localStorage.getItem("warehouse")
    records=JSON.parse(tmp)
}
export const executeListing=()=>{
   
    checking()
    return records
}
export const executeCreate=(obj)=>{
    checking()
    records.push(obj)
    effect()

}
export const executeReading=(key)=>{
    checking()
    for(var ind=0;ind<records.length;ind++)
    {
        if(records[ind].id===key)
            return records[ind]
    }
    return {}
}
export const executeDeleting=(uni)=>{
    checking()
    records=records.filter((ele,ind)=>{
        return ele.sno!==uni
               
    })
    effect()
    alert(uni+"has been deleting")


}