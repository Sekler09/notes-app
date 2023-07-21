import { Button, Form, Input, Space, Layout } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/slices/notesSlice";

const { TextArea } = Input;
const { Content } = Layout;

const AddNewNoteForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags([...new Set(content.match(/#[a-z0-9_]+/gi))]);
  }, [content]);

  const onFormFinish = ({title, content}: {title: string; content: string}) => {
    dispatch(addNote({title, content, tags}));
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
            <Input placeholder="Input title" />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Content is required" }, { whitespace: true, message: "Content must be not empty" }]}
          >
            <TextArea
              value={content}
              onChange={handleNoteContentChange}
              onFocus={changeHeight}
              placeholder="Input content of note"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
        <h1>
          Tags:
          {tags.map(tag => <h3 key={tag}>{tag}</h3>)}
        </h1>
      </Content>
    </Layout>
  );
};

export default AddNewNoteForm;