import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

type EditProductPageProps = {
    params: {
        id: string
    }
}

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if (!product) {
        notFound()
    }
    return product
}

export default async function EditProductPage({ params }: EditProductPageProps) {
    const product = await getProductById(+params.id)
    return (
        <>
            <Heading>Editar Producto</Heading>

            <GoBackButton />

            <EditProductForm>
                <ProductForm product={product} />
            </EditProductForm>

        </>
    )
}
