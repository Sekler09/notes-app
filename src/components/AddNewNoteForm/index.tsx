import { Button, Form, Input, Space, Layout, Tag } from "antd";
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
    setTags([...new Set(content.toLowerCase().match(/#[a-z0-9_]+/gi))]);
  }, [content]);

  const onFormFinish = ({ title, content }: { title: string; content: string }) => {
    dispatch(addNote({ title: title.trim(), content: content.trim(), tags }));
    navigate("/");
  };

  const onFormReset = () => {
    setContent("");
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
          onReset={onFormReset}
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
            <p>
              <Space size={[0, 8]} wrap>
                {tags.map(tag => <Tag color="processing" key={tag}>{tag}</Tag>)}
              </Space>
            </p>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default AddNewNoteForm;