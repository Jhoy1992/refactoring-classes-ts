import {
  FiCheckSquare,
  FiImage,
  FiEdit,
  FiDollarSign,
  FiFileText,
} from "react-icons/fi";

import { FoodAdd } from "../../types";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodAdd) => Promise<void>;
}

export function ModalAddFood({
  isOpen,
  setIsOpen,
  handleAddFood,
}: ModalAddFoodProps) {
  async function handleSubmit(data: FoodAdd) {
    handleAddFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>

        <Input
          name='image'
          placeholder='Cole o link da imagem aqui'
          icon={FiImage}
        />

        <Input name='name' placeholder='Ex: Moda Italiana' icon={FiEdit} />
        <Input name='price' placeholder='Ex: 19.90' icon={FiDollarSign} />
        <Input name='description' placeholder='Descrição' icon={FiFileText} />

        <button type='submit' data-testid='add-food-button'>
          <p className='text'>Adicionar Prato</p>
          <div className='icon'>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
