import { Layout, Menu, MenuProps, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addTagToFilter, removeTagFromFilter } from "../../store/slices/notesSlice";

const { Sider } = Layout;


const Sidebar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.notes.filter);
  const tags = [...new Set(useSelector((state: RootState) => state.notes.notes.map(note => note.tags)).flat())];
  const handleCheckbox = (tag: string) => (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      dispatch(addTagToFilter({ tag }));
    } else {
      dispatch(removeTagFromFilter({ tag }));
    }
  };



  const items: MenuProps["items"] = [
    {
      label: "Tags",
      key: "main",
      children: tags.map(box => ({
        label: <Checkbox onChange={handleCheckbox(box)} checked={filter.includes(box)}>{box}</Checkbox>,
        key: box
      }))
    }
  ];

  return (
    <Sider
      style={{
        width: "200px"
      }}
    >
      <Menu
        defaultOpenKeys={["main"]}
        items={items}
        mode="inline"
        style={{
          height: "100%",
          minHeight: "300px"
        }}
      />
    </Sider>
  );
};

export default Sidebar;