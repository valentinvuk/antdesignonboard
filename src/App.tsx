import React from "react";
import { Sidemenu } from "./components/Sidemenu";
import { Redirect, Route, Switch } from "react-router-dom";
import { Divider, Layout } from "antd";
import { Form } from "./components/Form";
import { Modal } from "./components/Modal";
import { Table } from "./components/Table";
import { EditableTable } from "./components/EditableTable";
import { StepForm } from "./components/StepForm";

const { Content, Sider } = Layout;

function App() {
    return (
        <>
            <Switch>
                <Route path={"/:name"}>
                    <Layout style={{ minHeight: "100vh" }}>
                        <Sider>
                            <Sidemenu />
                        </Sider>
                        <Content style={{ padding: "24px" }}>
                            <Form />
                            <Divider />
                            <Modal />
                            <Divider />
                            <Table />
                            <Divider />
                            <EditableTable />
                            <Divider />
                            <StepForm />
                        </Content>
                    </Layout>
                </Route>
                <Route path={"/"}>
                    <Redirect to={"/home"} />
                </Route>
            </Switch>
        </>
    );
}

export default App;
