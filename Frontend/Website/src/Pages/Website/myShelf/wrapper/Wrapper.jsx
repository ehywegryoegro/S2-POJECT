import { Outlet } from "react-router-dom"
import MyShelfNavbar from "../../../../Components/myshelfNavbar/myshelfNavbar"


const Wrapper = () => {

    return (

        <>
           <MyShelfNavbar />
           <Outlet /> 
        </>
    )
}

export default Wrapper