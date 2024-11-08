"use client"
import { SearchSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"

export default function ProductSearchForm() {
    const router = useRouter()

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }
        //redirect(`/admin/products/search?search=${result.data.search}`)
        router.push(`/admin/products/search?search=${result.data.search}`)
    }

    return (
        <form action={handleSearchForm} className="flex items-center">
            <input
                type="text"
                placeholder="Buscar producto"
                className="p-2 placeholder-gray-400 w-full"
                name="search"
            />
            <input
                type="submit"
                value="Buscar"
                className="bg-amber-400 text-white px-4 py-2 cursor-pointer"
            />
        </form>
    )
}