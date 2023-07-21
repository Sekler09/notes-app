import {Layout} from "antd";
import Sidebar from "../../components/Sidebar";
import NotesList from "../../components/NotesList";
const {Content} = Layout;
const Notes = () => {
  return (
    <Layout style={{marginBottom: "100px"}}>
      <Sidebar/>
      <Content style={{
        backgroundColor: "white",
        padding: "4px 30px",
      }}>
        <NotesList />
      </Content>
    </Layout>
  );
};

export default Notes;