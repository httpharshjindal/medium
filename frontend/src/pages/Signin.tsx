
import Auth from "../components/Auth"
import Quote from "../components/Quote"



function Signin(){
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <Auth type="signin"/>
            <Quote/>
        </div>
    )
}

export default Signin