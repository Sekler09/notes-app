import { Card } from "antd";

const NoteCard = () => {
  return (
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "35vw" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default NoteCard;