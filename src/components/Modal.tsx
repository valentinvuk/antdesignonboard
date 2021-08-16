import { Modal as Mdl, Button } from "antd";
import { useState } from "react";
import { ModalForm } from "./ModalForm";

export function Modal() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        console.log(res.json());
        setIsModalVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Order a shoe
            </Button>
            <Mdl
                title="Shoe order"
                visible={isModalVisible}
                onOk={handleCancel}
                onCancel={handleCancel}
            >
                <ModalForm finishForm={handleCancel} />
            </Mdl>
        </>
    );
}
