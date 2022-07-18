import { useEffect } from "react"
import "../styles/signin.css"

function Signin() {
    useEffect(() => {
        document.title = 'Tieldmoon | Sign-in';
    })
    return (
        <div className="container mx-auto w-5/12">            
                <div className="mt-9 bg-white p-5">                    
                    <div className="mb-8">
                        <h4 className="text-md font-bold text-xl">Sign-In</h4>
                        <span className="text-sm">Sign-in to <span className="text-purple-700 font-bold">tieldmon</span> before starting...</span>
                    </div>                    

                    s
                </div>
            
        </div>
    )
}

export default Signin