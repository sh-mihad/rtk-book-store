import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Error from "../../src/components/Error"
import Loading from "../../src/components/Loading"
import { useGeSingletBookQuery } from "../../src/redux/features/api/api"


export default function Form() {
    const initialFormData = {
        featured: false,
        rating: "",
        price: "",
        thumbnail: "",
        author: "",
        name: "",

    }
    const { id } = useParams()
    const [formData, setFormData] = useState(initialFormData)
    const { data, isLoading, error: getBookError } = useGeSingletBookQuery(id,{ skip: Boolean(!id) })
    const { featured, rating, price, thumbnail, author, name } = data || {}
    useEffect(() => {
        if (data?.id) {
            setFormData({
                name,
                featured, rating, price, thumbnail, author
            })
        }
    }, [name, featured, rating, price, thumbnail, author, data?.id])
    if (id && isLoading) return <Loading />
    if (id && !isLoading && getBookError) return <Error>Something went wrong for get single book</Error>


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.name !== "featured" ? e.target.value : e.target.checked
        })
    }


    return (
        <form className="book-form">
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input value={formData?.name} onChange={handleChange} required className="text-input" type="text" id="lws-bookName" name="name" />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input value={formData?.author} onChange={handleChange} required className="text-input" type="text" id="lws-author" name="author" />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input value={formData?.thumbnail} onChange={handleChange} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input value={formData?.price} onChange={handleChange} required className="text-input" type="number" id="lws-price" name="price" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input value={formData?.rating} onChange={handleChange} required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                        max="5" />
                </div>
            </div>

            <div className="flex items-center">
                <input checked={formData?.featured} onChange={handleChange} id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Add Book</button>
        </form>
    )
}
