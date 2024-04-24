import { useContext } from "react";
import { AuthContext } from "./AuthProviders";


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const  email = form.email.value;
        const  password = form.password.value;
        console.log(email, password)
        // user create email and password 

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            // user has been created 

            const createAt = result.user?.metadata?.creationTime
            const  user = {email , createAt: createAt};
            fetch('https://coffees-store-server-six.vercel.app/user',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('user added successfully')
                }
            })
        })
        .catch(error => {
            console.error(error);
            alert('Email Already exist');
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
            <form onSubmit={handleSignUp} className="card-body">
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

export default SignUp;
