import { z } from 'zod'

export const OrderSchema = z.object({
    name: z.string()
        .min(1, 'Email is required'),
    total: z.number()
        .min(1, 'Total is required'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})