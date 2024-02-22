"use client"
import { MdClose } from "react-icons/md";

interface ModalProps {
	buttonValue: string;
	modalTitle: string;
	toggleModal: boolean;
	toggleModalHandler: () => void;
	resetProductList: () => void;
}

export const Modal = ({ buttonValue, modalTitle, toggleModal, toggleModalHandler, resetProductList }: ModalProps) => {
	return (
		<>
			{
				toggleModal && (
					<div className="
						w-full h-full
						border border-slate-500 bg-slate-600 bg-opacity-75
						absolute top-0 left-0 
						flex flex-col justify-center items-center
						overflow-hidden
					">
						<div className="bg-white flex flex-col w-[80%] h-[120px]">
							<MdClose size={20} onClick={toggleModalHandler} className="absolute right-[45px]" />

							<h3 className="text-center mt-4">{modalTitle}</h3>

							<div className="flex justify-around mt-8 w-[100%]">
								{
									buttonValue === "Borrar" && (
										<button
											className="bg-red-600 p-1 rounded-md text-white w-[40%]"
											onClick={resetProductList}>{buttonValue}</button>
									)
								}

								{
									buttonValue === "Guardar" && (
										<button
											className="bg-green-500 p-1 rounded-md text-white w-[40%]"
										>{buttonValue}</button>
									)
								}

								<button
									className="bg-blue-400 p-1 rounded-md text-white w-[40%]"
									onClick={toggleModalHandler}>
									Cerrar
								</button>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}
