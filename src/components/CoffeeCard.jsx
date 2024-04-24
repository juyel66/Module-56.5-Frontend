import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://coffees-store-server-six.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter(cof=> cof._id !== _id);
              setCoffees(remaining);
              
            }
          });

        console.log('delete confirm')
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[200px] h-[200px] object-fill"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="flex  justify-between w-full pr-10">
          <div className="ml-10 mt-7">
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn btn-primary join-item">View</button>

              <Link to={`updateCoffee/${_id}`} 
              className="btn join-item bg-gray-500 text-white"> Edit </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-gray-600 text-white join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
