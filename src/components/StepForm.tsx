import {
    Button,
    Form as Frm,
    Space,
    Select,
    Steps,
    Image,
    Input,
    message,
    Spin,
} from "antd";

import { useEffect, useState } from "react";
import { Pokemon, FormData } from "../types/types";

const { Step } = Steps;
const { Option } = Select;

export function StepForm() {
    const [data, setData] = useState<Pokemon>();
    const [current, setCurrent] = useState<number>(0);
    const [formData, setFormData] = useState<FormData>();

    useEffect(() => {
        const fetchPikachu = async () => {
            try {
                const res: Response = await fetch(
                    "https://pokeapi.co/api/v2/pokemon/pikachu",
                );
                const pokemon: any = await res.json();
                setData(pokemon);
            } catch (e) {
                console.log(e);
            }
        };
        fetchPikachu();
    }, []);

    const steps = [
        {
            title: "First",
            content: (
                <Frm.Item
                    rules={[
                        {
                            required: true,
                            message: "Please choose a nickname!",
                        },
                    ]}
                    label={"Nickname for your Pikachu"}
                    name={"nickname"}
                >
                    <Input />
                </Frm.Item>
            ),
        },
        {
            title: "Second",
            content: (
                <Frm.Item label={"Ability"} name={"ability"}>
                    <Select style={{ width: "120px" }}>
                        {data?.abilities.map((a) => (
                            <Option key={a.ability.name} value={a.ability.name}>
                                {a.ability.name}
                            </Option>
                        ))}
                    </Select>
                </Frm.Item>
            ),
        },
        {
            title: "Preview",
            content: (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Image
                        preview={false}
                        width={150}
                        src={data?.sprites?.front_default}
                    />
                    <h2>
                        {formData?.nickname} with {formData?.ability} ability
                    </h2>
                </div>
            ),
        },
    ];

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onFormChange = (changed: any, values: any) => {
        setFormData(values);
    };

    const onFormFinish = () => {
        message.success("Your custom pikachu created.");
    };

    const onFinishFailed = () => {
        message.error("Unable to create Pokemon");
        setCurrent(0);
    };
    return (
        <>
            {data ? (
                <Frm
                    onValuesChange={onFormChange}
                    onFinish={onFormFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{ ability: data?.abilities[0].ability.name }}
                >
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            style={{
                                display: index === current ? "flex" : "none",
                            }}
                            className="steps-content"
                        >
                            {step.content}
                        </div>
                    ))}
                    <Space direction={"vertical"} style={{ width: "100%" }}>
                        <Steps progressDot current={current}>
                            <Step title="Nickname" />
                            <Step title="Ability" />
                            <Step title="Preview" />
                        </Steps>

                        <div className="steps-action">
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                            )}

                            {current > 0 && (
                                <Button
                                    style={{ margin: "0 8px" }}
                                    onClick={() => prev()}
                                >
                                    Previous
                                </Button>
                            )}
                            <Button
                                style={{
                                    margin: "0 8px",
                                    justifySelf: "flex-end",
                                }}
                                type="primary"
                                danger
                                htmlType={"submit"}
                            >
                                Done
                            </Button>
                        </div>
                    </Space>
                </Frm>
            ) : (
                <Spin />
            )}
        </>
    );
}
