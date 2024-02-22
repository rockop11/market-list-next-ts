"use client"
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { useModal } from "@/app/hooks/useModal";
import { v4 as uuidv4 } from 'uuid';
import { ProductList, Modal } from "@/app/components";
import { ProductProps } from "@/app/types";
import { MdAttachMoney, MdOutlineShoppingCart } from "react-icons/md";
import { LuPlus } from "react-icons/lu";


export const AddProductForm = () => {

	const { toggleModal, modalTitle, buttonValue, toggleModalHandler } = useModal()

	const titleRef = useRef<HTMLInputElement>(null)
	const priceRef = useRef<HTMLInputElement>(null)

	const [formData, setFormData] = useState<ProductProps>({ title: "", price: 0, id: "" });
	const [productList, setProductList] = useState<ProductProps[]>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const formValueHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {

		const { name, value } = target;

		setFormData({
			...formData,
			[name]: name === "price" ? parseFloat(value) : value,
			id: uuidv4()
		});
	};

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		setProductList([...productList, formData]);
		setTotalPrice(totalPrice + formData.price);
		if (titleRef.current) titleRef.current.value = "";
		if (priceRef.current) priceRef.current.value = "";
	};

	const resetProductList = () => {
		setProductList([])
		setTotalPrice(0)
		toggleModalHandler()
	}

	return (
		<div className="w-[90%] flex flex-col pt-4">
			<form
				className="flex justify-center items-center gap-4"
				onSubmit={submitHandler}
			>

				<div className="w-[40%] relative">
					<MdOutlineShoppingCart size={20} className="absolute text-gray-500 left-[-5px]" />
					<input
						type="text"
						name="title"
						placeholder="Producto"
						className="border-b border-slate-600 outline-none pl-4 w-[100%]"
						ref={titleRef}
						onChange={formValueHandler}
					/>
				</div>


				<div className="w-[40%] relative">
					<MdAttachMoney size={20} className="absolute text-gray-500 left-[-5px]" />
					<input
						type="number"
						name="price"
						className="border-b border-slate-600 outline-none pl-3 w-[100%]"
						placeholder="Precio"
						ref={priceRef}
						onChange={formValueHandler}
						step="any"
					/>
				</div>

				<button className="bg-green-500 text-white p-1 rounded-lg">
					<LuPlus size={22} />
				</button>
			</form>

			{
				productList.length > 0 && (
					<div className="flex items-center justify-between my-2">
						<div className="flex flex-col gap-2">
							<button className="bg-red-600 p-1 rounded-md text-white" onClick={toggleModalHandler}>
								Borrar lista
							</button>
							<button className="bg-blue-400 p-1 rounded-md text-white" onClick={toggleModalHandler}>
								Guardar lista
							</button>
						</div>

						<div className="text-xl">Total: <span className="font-bold">${totalPrice.toFixed(2)}</span></div>
					</div>
				)
			}


			<ProductList productList={productList} />

			<Modal
				toggleModal={toggleModal}
				toggleModalHandler={toggleModalHandler}
				modalTitle={modalTitle}
				buttonValue={buttonValue}
				resetProductList={resetProductList}
			/>
		</div>
	);
};

