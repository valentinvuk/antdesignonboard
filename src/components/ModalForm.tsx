import {
    Form,
    Input,
    InputNumber,
    Radio,
    Checkbox,
    Button,
    message,
    Popconfirm,
} from "antd";
import { useState } from "react";
import { FormProps, ModalFormProps } from "../types/types";

export function ModalForm({ finishForm }: ModalFormProps) {
    const [value, setValue] = useState<String>("red");
    const [visible, setVisible] = useState<boolean | undefined>(false);
    const [formValues, setFormValues] = useState<FormProps>();

    const onChange = (e: any) => {
        setValue(e.target.value);
    };
    const confirm = () => {
        setVisible(false);
        console.log("bought new shoes");
        message.success("Bought new shoes");
        finishForm();
    };
    const cancel = () => {
        setVisible(false);
        console.log("order is canceled");
    };
    const updateValues = (all: FormProps) => {
        setFormValues(all);
    };

    const showPop = () => {
        !formValues?.footsize ? setVisible(true) : confirm();
    };
    const options = ["Nike", "Adidas", "Puma"];

    return (
        <Form
            initialValues={{ color: "blue" }}
            name="basic"
            labelCol={{ span: 6 }}
            onValuesChange={updateValues}
        >
            <Form.Item label={"Name"} name={"name"}>
                <Input />
            </Form.Item>
            <Form.Item label={"Foot size"} name={"footsize"}>
                <InputNumber />
            </Form.Item>
            <Form.Item label={"Color"} name={"color"}>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"blue"}>Blue</Radio>
                    <Radio value={"red"}>Red</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label={"Manufacturer"} name={"manufacturer"}>
                <Checkbox.Group options={options} />
            </Form.Item>
            <Form.Item>
                <Popconfirm
                    title={"Continue without foot size?"}
                    visible={visible}
                    onCancel={cancel}
                    onConfirm={confirm}
                >
                    <Button type={"primary"} onClick={showPop}>
                        Submit order
                    </Button>
                </Popconfirm>
            </Form.Item>
        </Form>
    );
}
