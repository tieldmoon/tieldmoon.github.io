import { useEffect } from "react"
import "../styles/signin.css"

function Signin() {
    useEffect(() => {
        document.title = 'Tieldmoon | Sign-in';
    })
    return (
        <div className="container mx-auto w-5/12">            
                <div className="mt-12 bg-white p-5 shadow-md">                    
                    <div className="mb-8">
                        <h4 className="text-md font-bold text-2xl">Sign-In</h4>
                        <span className="text-sm">Sign-in to <span className="text-purple-700 font-bold">tieldmon</span> before starting...</span>
                    </div>                    
                    <div className="mx-5">                        
                        <form action="" method="GET">
                            <div className="py-2">
                                <label>email</label>
                                <input type="email" className="border rounded w-full p-4" name="email"  placeholder="Email"/>
                            </div>
                            <div className="py-2">
                                <label>password</label>
                                <input type="password" className="border rounded w-full p-4" name="" placeholder="Password" />
                            </div>
                            <div className="py-2">
                                <button className="bg-purple-700 p-4 w-full rounded-lg  text-white font-bold" >Sign-in</button>
                            </div>
                        </form>
                        <div className="py-3">
                            <small>Copyright &copy; 2022 Tieldmoon</small>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Signin