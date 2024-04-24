import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatesCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { _id,  name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const UpdatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(UpdatedCoffee);

    // send data to the server
    fetch(`https://coffees-store-server-six.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount> 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-200 p-24">
        <h1 className="text-3xl font-extrabold">Update coffee: {name}</h1>
        <form onSubmit={handleUpdateCoffee} className="mt-5">
          {/* name row */}
          <div className="flex gap-5 mb-4">
            <div className="w-1/2">
              <label className="input-group">
                <label className="label">
                  <span>Coffee Name</span>
                </label>
                <input
                  className="input w-full input-bordered join-item"
                  defaultValue={name}
                  name="name"
                  type="text"
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="input-group">
                <label className="label">
                  <span>Available Quantity</span>
                </label>
                <input
                  className="input w-full input-bordered join-item"
                  defaultValue={quantity}
                  name="quantity"
                  type="text"
                />
              </label>
            </div>
          </div>
          {/* supplier */}
          <div className="flex gap-5 mb-4">
            <div className="w-1/2">
              <label className="input-group">
                <label className="label">
                  <span>Supplier</span>
                </label>
                <input
                  className="input w-full input-bordered join-item"
                  defaultValue={supplier}
                  name="supplier"
                  type="text"
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="input-group">
                <label className="label">
                  <span>Taste</span>
                </label>
                <input
                  className="input w-full input-bordered join-item"
                  defaultValue={taste}
                  name="taste"
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-5 mb-4">
            <div className="w-1/2">
              <label className="input-group">
                <label className="label">
                  <span>Category</span>
                </label>
                <input
                  className="input w-full input-bordered join-item"
                  defaultValue={category}
                  name="category"
                  type="text"
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="input-group">
                <label className="label">
                  <span>Details</span>
                </label>
                <input
                  className="input w-full input-bordered join-item"
                  defaultValue={details}
                  name="details"
                  type="text"
                />
              </label>
            </div>
          </div>

          <div>
            <label className="input-group">
              <label className="label">
                <span>Photo</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                defaultValue={photo}
                name="photo"
                type="text"
              />
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-block bg-gray-600 text-white mt-5"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatesCoffee;
