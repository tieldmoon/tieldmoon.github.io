import { useEffect } from "react"
import "../styles/signin.css"

function Signin() {
    useEffect(() => {
        document.title = 'Tieldmoon | Sign-in';
    })
    return (
        <div className="container mx-auto xl:w-5/12 lg:w-1/2 ">
                <div className="bg-white p-6 lg:shadow lg:mt-14 lg:border lg:border-grey-900">                                        
                        <div className="lg:mb-9 mb-16">
                            <h4 className="text-md font-bold text-2xl">Sign-In</h4>
                            <span className="text-sm">Sign-in to <span className="text-purple-700 font-bold">tieldmon</span> before starting...</span>
                        </div>                    
                        <div className="lg:mx-3">                        
                            {/* <form> */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="mb-1">email</label>
                                    <input type="email" id="email" className="border rounded w-full p-4" name="email"  placeholder="Email"/>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-1">password</label>
                                    <input type="password" className="border rounded w-full p-4" name="" placeholder="Password" />
                                </div>
                                <div className="mb-3 flex  items-center">
                                    <input type="checkbox" name="" id="" className="flex-none mr-2 border"/>
                                    <span className="text-md flex-grow">Remember me ?</span>
                                </div>
                                <div className="mb-4">
                                    <button className="bg-purple-700 p-4 w-full rounded-lg  text-white font-bold" >Sign-in</button>
                                </div>
                            {/* </form> */}
                            <div className="py-3 text-md">
                                <small>Copyright &copy; 2022 <span className="italic">Tieldmoon</span></small>
                            </div>                        
                    </div>
                </div>
            
        </div>
    )
}

export default Signin