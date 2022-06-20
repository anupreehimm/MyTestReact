import { useState } from "react"
import { executeListing } from "./Storage"
import { executeCreate } from "./Storage"

export const Create=()=>{
    const[myData,setMyData]=useState({
        "sno":0,
        "categories":" ",
        "ProductName":" ",
        "Productcost":0,
        "Rating":0

    })
    const ontrack=(any)=>{
        const{name,value}=any.target
        setMyData((remain)=>{
            return{
                ...remain,
                [name]:value
            }
        }
        )

    }
    const verify=()=>{
        executeCreate(myData)
    }
    
    return(
        <>        
        <h1 className="text-center d-4">Welcome to this page</h1>
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
                <input type="text" onChange={ontrack} name="sno" className="form-control" placeholder="S.No"></input>
                <input type="text" onChange={ontrack} name="categories" className="form-control" placeholder="Categories"></input>
                <input type="text" onChange={ontrack} name="ProductName" className="form-control" placeholder="ProductName"></input>
                <input type="text" onChange={ontrack} name="sProductcost" className="form-control" placeholder="Product Cost"></input>
                <input type="text" onChange={ontrack} name="Rating" className="form-control" placeholder="Rating"></input>
                <button className="btn btn-outline-warning" onClick={verify}>
                    <i class="bi bi-emoji-sunglasses-fill"></i>

                </button>

            </div>

        </div>
        </>

       

    
    )

}