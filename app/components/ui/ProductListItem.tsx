"use client"
import { ProductProps } from '@/app/types';

export const ProductListItem = ({ title, price, id }: ProductProps) => {
    return (
        <li className='list-none p-2 mb-1 border-t'>
            {title} - ${price}
        </li>
    )
}
