import { useEffect, useState } from "react"
import { effect, executeDeleting, executeListing } from "./Storage"
import { Create } from "./Create"

export const List=()=>{
    const[myTab,setMyTab]=useState([])
    const[cView,setCView]=useState(false)
    const[rView,setRview]=useState(false)
    const[uView,setUview]=useState(false)

    const[specific,setSpecific]=useState(0)
    
    useEffect(()=>
    {
        // effect()
        setMyTab(executeListing())
    },[])
    return(

        <>
            <div className="container mt-3">
                {(cView)?
                <>
                    <Create/>
                    <button className="btn btn-outline-success" onClick={()=>{
                        setCView(false)
                    }}>
                        <i class="bi bi-emoji-neutral-fill"></i>

                    </button>                      

               
            </>
            :
            (uView)?
            <>
                <Create/>
                <button className="btn btn-outline-success" onClick={()=>{
                    setUview(false)
                }}>
                    <i class="bi bi-emoji-neutral-fill"></i>

                </button>                      

           
            </>
            
            :
            (rView)?
                <>
                    <Create/>
                    <button className="btn btn-outline-success" onClick={()=>{
                        setRview(false)
                    }}>
                        <i class="bi bi-emoji-neutral-fill"></i>

                    </button>                      

            
                </>
            :
            <>
                <button className="btn btn-outline-dark" onClick={()=>{
                    setCView(true)
                }}>
                    <i class="bi bi-binoculars-fill"></i>

                </button>
                    <div className="row justify-content-center">
                        <table className="table table-center text-centertable-hover table-bordered col-lg-8 col-md-10 col-sm-12 shadow">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Catagore</th>
                                    <th>Product Name</th>
                                    <th>Product cost</th>
                                    <th>Rating</th>
                                    
                                </tr>
                                
                            </thead>
                            <tbody>
                            {myTab.map((ele,ind)=>(
                                    <tr>
                                        <td>{ele.sno}</td>
                                        <td>{ele.categories}</td>
                                        <td>{ele.ProductName}</td>
                                        <td>{ele.Productcost}</td>
                                        <td>{ele.Rating}</td>
                                        <td><button className="btn btn-outline-warning col-2" onClick={()=>{
                                                setRview(true)
                                                setSpecific(ele.sno)
                                            }}>
                                                <i class="bi bi-bookmark-heart-fill"></i>
                                            </button>
                                            <button className="btn btn-outline-danger col-2" onClick={()=>{
                                                setUview(true)
                                                setSpecific(ele.sno)
                                            }}>
                                               <i class="bi bi-arrow-bar-up"></i>
                                            </button>
                                            <button className="btn btn-outline-dark col-2" onClick={()=>{
                                                    executeDeleting(ele.sno)
                                                    window.location.assign("/")
                                                    
                                                }}>
                                                <i class="bi bi-trash-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                            
                            ))}

                            </tbody>

                        </table>
                    </div>
            
                </>
            }           
                            
            </div>     
        
        </>

        
    )
}