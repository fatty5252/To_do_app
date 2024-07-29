import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";


export const Home =()=>{
    return(
        <Fragment>
            <Navbar/>
            <main>
                <Sidebar/>
            </main>
        </Fragment>
    )
}

export default Home;