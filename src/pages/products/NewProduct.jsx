import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputForm from "../../components/Forms/InputForm";
import { createProduct } from "../../features/product"

export default function NewProduct() {

     const dispatch = useDispatch()
     const navigation = useNavigate()

     const registerProduct = (event) => {
          event.preventDefault()
          const {
               name: { value: name },
               price: { value: price },
               description: { value: description },
               imgURL: { value: imgURL },
               categories: { value: categories}
          } = event.target;

          dispatch(createProduct({ name, price, description, imgURL, categories }))
          navigation('/')
     };

     return (
          <main className="max-w-screen-lg mx-auto flex items-center ">
               <div className=" w-screen desktop:w-[900px] h-[550px] tablet:h-[500px] mx-5 tablet:mx-20 desktop:mx-auto my-12 bg-[#F6F6F6] px-2 py-2 shadow-lg tablet:flex items-center">
                    <form className=" w-full p-5 tablet:p-12" onSubmit={registerProduct}>
                         <h1 className=" text-[24px] desktop:text-[40px] font-semibold mb-5 tablet:mb-10">
                              New Product
                         </h1>
                         <section className=" tablet:grid  tablet:grid-cols-2 tablet:gap-12">
                              <InputForm name={"name"} placeholder={"Name"} type={"text"} />
                              <InputForm name={"price"} placeholder={"Price"} type={"text"} />
                              <InputForm
                                   name={"description"}
                                   placeholder={"Description"}
                                   type={"text"}
                              />
                              <InputForm name={"imgURL"} placeholder={"Image"} type={"text"} />
                              <InputForm name={"categories"} placeholder={"Category"} type={"text"} />

                    
                         </section>
                              <button className=" bg-secondary_green-500 w-full p-2 rounded-sm text-white font-semibold mt-8 hover:bg-secondary_green-400">
                                   CREATE
                              </button>
                    </form>
               </div>
          </main>
     );
}
