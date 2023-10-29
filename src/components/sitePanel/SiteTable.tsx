"use client";
import { Table } from "evergreen-ui";
import { Button, Pane, Heading, Text, majorScale } from "evergreen-ui";

export default function SiteTable() {
  return (
    <Pane
      display="flex"
      margin={16}
      elevation={4}
      padding={16}
      background="green100"
      borderRadius={5}
      flexDirection="column"
    >
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>案件名</Table.TextHeaderCell>
          <Table.TextHeaderCell>リーダー</Table.TextHeaderCell>
          <Table.TextHeaderCell>メンバー</Table.TextHeaderCell>
          <Table.TextHeaderCell>工事内容</Table.TextHeaderCell>
        </Table.Head>
        <Table.VirtualBody height={240}>
          {profiles.map((profile) => (
            <Table.Row key={profile.id}>
              <Table.TextCell>{profile.name}</Table.TextCell>
              <Table.TextCell>{profile.leader}</Table.TextCell>
              <Table.TextCell>{profile.members}</Table.TextCell>
              <Table.TextCell>{profile.subject}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.VirtualBody>
      </Table>
    </Pane>
  );
}

const profiles = [
  {
    id: "1",
    name: "A様邸",
    leader: "田中太郎",
    members: "佐藤次郎・鈴木三郎・高橋四郎",
    subject: "電気工事",
  },
  {
    id: "2",
    name: "B様邸",
    leader: "佐藤次郎",
    members: "鈴木三郎・高橋四郎・田中五郎",
    subject: "水道工事",
  },
  {
    id: "3",
    name: "C様邸",
    leader: "鈴木三郎",
    members: "高橋四郎・田中五郎・山田六郎",
    subject: "ガス工事",
  },
  {
    id: "4",
    name: "D様邸",
    leader: "高橋四郎",
    members: "田中五郎・山田六郎・渡辺七郎",
    subject: "橋梁工事",
  },
  {
    id: "5",
    name: "E様邸",
    leader: "田中五郎",
    members: "山田六郎・渡辺七郎・中村八郎",
    subject: "道路工事",
  },
];
