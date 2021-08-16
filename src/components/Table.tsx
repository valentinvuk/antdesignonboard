import { Table as Tbl } from "antd";
import { PlayerTable } from "../types/types";

const dataSource: PlayerTable[] = [
    {
        key: 1,
        name: "Mohammed Salah",
        team: "Liverpool",
        cost: 12.5,
    },
    {
        key: 2,
        name: "Bruno Fernandes",
        team: "Manchester United",
        cost: 12.5,
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
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
];

export function Table() {
    return (
        <Tbl<PlayerTable>
            pagination={false}
            dataSource={dataSource}
            columns={columns}
        />
    );
}
