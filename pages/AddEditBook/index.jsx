import Navbar from "../../src/components/Navbar";
import Form from "./Form";


export default function BookAddEditForm() {
  return (
   <>
    <Navbar/>
    <main className="py-6 2xl:px-6">
        <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <Form/>
            </div>
        </div>
    </main>
   </>
  )
}
