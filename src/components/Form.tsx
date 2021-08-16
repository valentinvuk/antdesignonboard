import {
    Form as Frm,
    Input,
    Button,
    DatePicker,
    Select,
    InputNumber,
} from "antd";
import { useCallback } from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

export function Form() {
    const onFinish = useCallback(() => alert("Finished"), []);
    const onFinishFailed = useCallback(() => alert("Failed!"), []);

    return (
        <Frm
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 8 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ gender: "male" }}
            style={{
                padding: "8px",
            }}
        >
            <Frm.Item
                label="Text"
                name="text"
                rules={[{ required: true, message: "Please input your text!" }]}
            >
                <Input />
            </Frm.Item>
            <Frm.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: "Please input your email!",
                    },
                ]}
            >
                <Input />
            </Frm.Item>
            <Frm.Item
                label="Number"
                name="number"
                rules={[{ required: true, message: "Please choose a number!" }]}
            >
                <InputNumber />
            </Frm.Item>
            <Frm.Item
                label="Year"
                name="year"
                rules={[
                    { required: true, message: "Please choose a year span!" },
                ]}
            >
                <RangePicker picker={"year"} />
            </Frm.Item>
            <Frm.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: "Please choose a gender!" }]}
            >
                <Select style={{ width: 120 }}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                </Select>
            </Frm.Item>
            <Frm.Item wrapperCol={{ offset: 2, span: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Frm.Item>
        </Frm>
    );
}
