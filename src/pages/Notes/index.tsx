import {Layout} from "antd";
import Sidebar from "../../components/Sidebar";
const {Content} = Layout;
const Notes = () => {
  return (
    <Layout>
      <Sidebar/>
      <Content style={{
        backgroundColor: "white"
      }}>
        Notes
      </Content>
    </Layout>
  );
};

export default Notes;