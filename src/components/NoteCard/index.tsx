 import { Card } from "antd";
import { INote } from "../../store/slices/notesSlice";

const NoteCard: React.FC<INote> = ({tags, title, id, content, created_at}) => {
  return (
    <Card title={title} extra={<a href="#">More</a>} style={{ width: "35vw" }}>
      <p>{created_at.toDateString()}</p>
      <p>{content}</p>
      <p>{id}</p>
      <p>{tags}</p>
    </Card>
  );
};

export default NoteCard;