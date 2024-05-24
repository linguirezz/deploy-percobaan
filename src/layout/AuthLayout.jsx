import Navbar from "../components/elements/navbar.jsx"

function layout (props){
    const {children} = props
    return(
        <>
        <Navbar></Navbar>
        {children}
        </>
        
        
    )
}

export default layout