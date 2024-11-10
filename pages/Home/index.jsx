import Header from "../Header";
import BookGrid from "./BookGrid";


export default function Home() {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
    <div className="order-2 xl:-order-1">
      <Header/>
     <BookGrid/>
    </div>
  </main>
  )
}
