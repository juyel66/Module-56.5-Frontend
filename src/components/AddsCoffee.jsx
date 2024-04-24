import Swal from 'sweetalert2'


const AddsCoffee = () => {

    const handleAddCoffee = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details,photo};
        console.log(newCoffee)


        // send data to the server 
        fetch('https://coffees-store-server-six.vercel.app/coffee',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        

        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }
  return (
    <div className="bg-gray-200 p-24">
      <h1 className="text-3xl font-extrabold">Add coffee</h1>
      <form onSubmit={handleAddCoffee} className="mt-5">
        {/* name row */}
        <div className="flex gap-5 mb-4">
          <div className="w-1/2">
            <label className="input-group">
              <label className="label">
                <span>Coffee Name</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Coffee Name"
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
                placeholder="Coffee Quantity"
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
                placeholder=" Enter Coffee Supplier"
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
                placeholder=" Enter Coffee taste"
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
                placeholder="Enter Coffee Category"
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
                placeholder="Enter Coffee Details"
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
                placeholder="Enter photo URL"
                name="photo"
                type="text"
              />
            </label>
          </div>
          <input type="submit" className="btn btn-block bg-gray-600 text-white mt-5" value="Add Coffee" />
          
      </form>
      
    </div>
  );
};

export default AddsCoffee;
