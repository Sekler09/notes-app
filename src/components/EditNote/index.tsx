import { useSelector } from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import { RootState } from "../../store";
import { Button, Form, Input, Space, Layout, Tag } from "antd";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "../../store/slices/notesSlice";
// import * as $ from "jquery";
// $(".content-area").highlightWithinTextarea({
//   highlight: /#[a-z0-9_]+/gi
// });

const { TextArea } = Input;
const { Content } = Layout;
const EditNote = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const note = useSelector((state: RootState) => state.notes.notes.find(note => note.id === Number(id)));
  if(!note){
    navigate("/");
  }
  const dispatch = useDispatch();
  const [content, setContent] = useState(note!.content);
  const [tags, setTags] = useState<string[]>(note!.tags);
  useEffect(() => {
    setTags([...new Set(content.toLowerCase().match(/#[a-z0-9_]+/gi))]);
  }, [content]);

  const onFormFinish = ({ title, content }: { title: string; content: string }) => {
    dispatch(editNote({ title: title.trim(), content: content.trim(), tags, id: Number(id) }));
    navigate("/");
  };

  const handleCancelClick = () => {
    navigate("/");
  };

  const handleNoteContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeHeight(e);
    setContent(e.target.value);
  };

  const changeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <Layout style={{ marginBottom: 100 }}>
      <Content style={{ backgroundColor: "white" }}>
        <Form
          onFinish={onFormFinish}
          name="new-note"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Title is required" }, { whitespace: true, message: "Title must be not empty" }]}
          >
            <Input placeholder="Input title" defaultValue={note?.title} />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Content is required" }, { whitespace: true, message: "Content must be not empty" }]}
          >
            <TextArea
              className="content-area"
              value={content}
              defaultValue={note?.content}
              onChange={handleNoteContentChange}
              onFocus={changeHeight}
              placeholder="Input content of note"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <p>
              <Space size={[0, 8]} wrap>
                {tags.map(tag => <Tag color="processing" key={tag}>{tag}</Tag>)}
              </Space>
            </p>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button type="default" onClick={handleCancelClick}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EditNote;