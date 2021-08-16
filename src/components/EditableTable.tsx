import {
    Modal as Mdl,
    Button,
    Table as Tbl,
    Form,
    Input,
    InputNumber,
    Space,
    message,
} from "antd";
import { useState } from "react";
import { Player } from "../types/types";

export function EditableTable() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataSource, setDataSource] = useState<Player[]>([]);
    const [form] = Form.useForm();

    const columns = [
        {
            title: "Name",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "Team",
            dataIndex: "team",
            key: "team",
        },
        {
            title: "Cost",
            dataIndex: "cost",
            key: "cost",
            render: (text: string) => <p>{text}$</p>,
        },
        {
            title: "Buy",
            key: "Buy",
            render: (text: string, record: Player) => (
                <Button
                    onClick={() =>
                        message.success(
                            "Bought " +
                                record.key +
                                " for " +
                                record.cost +
                                "$.",
                        )
                    }
                >
                    Buy {record.key}
                </Button>
            ),
        },
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                form.resetFields();
                setDataSource((prev) => [...prev, values]);
                setIsModalVisible(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Space direction={"vertical"} style={{ width: "100%" }}>
                <Button type="primary" onClick={showModal}>
                    Add a player
                </Button>

                <Mdl
                    title="Shoe order"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form
                        form={form}
                        initialValues={{
                            cost: "6.0",
                        }}
                        name="Player info"
                        labelCol={{ span: 6 }}
                    >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: "Please type a name!",
                                },
                            ]}
                            label={"Name"}
                            name={"key"}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: "Please type a team!",
                                },
                            ]}
                            label={"Team"}
                            name={"team"}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label={"Cost"} name={"cost"}>
                            <InputNumber<string>
                                min={"4"}
                                max={"13"}
                                step={"0.1"}
                            />
                        </Form.Item>
                    </Form>
                </Mdl>

                <Tbl
                    pagination={false}
                    columns={columns}
                    dataSource={dataSource}
                />
            </Space>
        </>
    );
}
