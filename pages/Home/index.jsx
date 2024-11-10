import Error from "../../src/components/Error";
import Loading from "../../src/components/Loading";
import Navbar from "../../src/components/Navbar";
import { useGetBooksQuery } from "../../src/redux/features/api/api";
import BookCard from "./BookCard";
import Header from "./Header";



export default function Home() {
  const {data:booksData,isError,isLoading,error} = useGetBooksQuery()

  let displayContent = null ;
  if(isLoading){
    displayContent = <Loading/>
  }
  if(!isLoading && isError && error && !booksData){
    displayContent = <Error>
      <h1>{error?.status}</h1>
    </Error>
  }
  if(!isLoading && !isError&& booksData?.length === 0){
    displayContent = <div>No Books found</div>
  }
  if(!isLoading && !isError&& booksData?.length > 0){
    displayContent = booksData?.map((book)=> <BookCard key={book.id} book={book} />)
  }
  return (
    <>
    
    <Navbar/>
    <main className="py-12 px-6 2xl:px-6 container">
    <div className="order-2 xl:-order-1">
      <Header/>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
           {displayContent}
        </div>
    </div>
  </main>
    </>
  )
}
