import { Card, Dropdown, Button, MenuProps, Space, Tag } from "antd";
import { INote, removeNote } from "../../store/slices/notesSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const NoteCard: React.FC<INote> = ({ tags, title, id, content, created_at }) => {
  const dispatch = useDispatch();

  const items: MenuProps["items"] = [
    {
      label: "Delete",
      key: "delete",
      onClick: () => { dispatch(removeNote({ id })); }
    },
    {
      label: <Link to={`/notes/${id}/edit`}>Edit</Link>,
      key: "edit"
    }
  ];

  return (
    <Card
      title={title}
      extra={
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button>More</Button>
        </Dropdown>
      }
      style={{ width: "35vw" }}
    >
      <p>{created_at}</p>
      <p>{content}</p>
      <p>
        <Space size={[0, 8]} wrap>
          {tags.map(tag => <Tag color="processing" key={tag}>{tag}</Tag>)}
        </Space>
      </p>
    </Card>
  );
};

export default NoteCard;