import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser)
  const  handleDelete = id =>{
    // make sure you want to delete user 
    fetch(`https://coffees-store-server-six.vercel.app/user/${id}`,{
        method: "DELETE",
        // headers: {
        //     'content-type':'application/json'
        // },
        // body: JSON.stringify(id)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
            alert('User Delete Successfully') 
            // remove the user from the UI  
            const remainingUsers = users.filter(user => user._id !==id)
            setUsers(remainingUsers)
            console.log(remainingUsers);
        }
    })

  }
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-10">
        Users:{loadedUser.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Create At</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>

            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id} className="space-y-2">
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>{user.lastLoggedAt}</td>
                
                <td onClick={()=>{handleDelete(user._id)}} className="btn">Delete</td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
