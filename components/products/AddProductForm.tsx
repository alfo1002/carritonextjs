"use client"
import React from "react";
import ProductForm from "./ProductForm";

export default function AddProductForm({ children }: { children: React.ReactNode }) {

    const handleSubmit = async (formData: FormData) => {
        console.log("add product")
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form
                action={handleSubmit}
                className="space-y-5"
            >
                {children}

                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 rounded-md uppercase font-bold cursor-pointer"
                    value="Registrar Producto"
                />
            </form>
        </div>
    )
}
