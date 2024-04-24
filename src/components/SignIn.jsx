import { useContext } from "react";
import { AuthContext } from "./AuthProviders";


const SignIn = () => { 
  const {signIn} = useContext(AuthContext);
    // const  {singInUser} = useContext(AuthContext)
    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // singInUser(email, password)
        // .them(result =>{
        //     console.log(result.user);
        // }) 
        // .catch(error =>{
        //     console.error(error);
        // })

        signIn(email, password)
        .then(result =>{
          console.log(result.user)
          const user ={
            email, 
            lastLoggedAt: result.user?.metadata?.lastSignInTime
          }
          // updated last loggedIn the database
         fetch('https://coffees-store-server-six.vercel.app/user',{
          method: 'PATCH',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data =>{
          console.log(data)
         })
        })
        .catch(error =>{
          console.error(error);
      })
        
       




    }
    return (
        <div>
                  <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Sign Up!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default SignIn;