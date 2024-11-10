import { useGetBooksQuery } from "../../src/redux/features/api/api";
import BookGrid from "./BookGrid";
import Header from "./Header";



export default function Home() {
  const {data,isError,isLoading} = useGetBooksQuery()
  console.log("data",data);
  return (
    <main className="py-12 px-6 2xl:px-6 container">
    <div className="order-2 xl:-order-1">
      <Header/>
     <BookGrid/>
    </div>
  </main>
  )
}
