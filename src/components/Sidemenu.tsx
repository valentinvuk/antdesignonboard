import { Menu } from "antd";
import { Link, useParams } from "react-router-dom";

export function Sidemenu() {
    let { name } = useParams<{ name: string }>();

    return (
        <Menu mode="inline" defaultSelectedKeys={[name]}>
            <Menu.Item key="home">
                <Link to={"/home"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="blog">
                <Link to={"/blog"}>Blog</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to={"/about"}>About</Link>
            </Menu.Item>
        </Menu>
    );
}
