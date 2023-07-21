import { Space } from "antd";
import NoteCard from "../NoteCard";

const NotesList = () => {

  const notes = new Array(15).fill(0);
  return (
    <>
      <Space direction="horizontal" wrap align="center" size={30}>
        {notes.map((_, i) => <NoteCard key={i}/>)}
      </Space>
    </>
  );
};

export default NotesList;