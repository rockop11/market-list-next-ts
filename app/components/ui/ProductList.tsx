import { ProductListItem } from './ProductListItem';
import { ProductListProps } from '@/app/types';

export const ProductList = ({ productList }: ProductListProps) => {
    return (
        <div>
            {productList.map((item) => (
                <ProductListItem title={item.title} price={item.price} key={item.id} id={item.id} />
            ))}
        </div>
    )
}
