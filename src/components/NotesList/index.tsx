import { Space } from "antd";
import NoteCard from "../NoteCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const NotesList = () => {

  const notes = useSelector((state: RootState) => state.notes.notes);
  const filter = useSelector((state: RootState) => state.notes.filter);
  return (
    <>
      <Space direction="horizontal" wrap align="center" size={30}>
        {notes.filter(note => filter.length ? note.tags.filter(tag => filter.includes(tag)).length : true).map((note) => <NoteCard key={note.id} {...note}/>)}
        {filter}
      </Space>
    </>
  );
};

export default NotesList;