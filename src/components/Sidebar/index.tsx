import { Layout, Menu, MenuProps, Checkbox } from "antd";
import { useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const { Sider } = Layout;

const checkboxes = [
  "apple",
  "banana"
];



const Sidebar = () => {
  const [boxes, setBoxes] = useState<string[]>([]);

  const handleCheckbox = (name: string) => (e: CheckboxChangeEvent) => {
    if(e.target.checked){
      setBoxes((prevBoxes) => [...prevBoxes, name]);
    }else{
      setBoxes((prevBoxes) => prevBoxes.filter(box => box !== name));
    }
  };

  const items2: MenuProps["items"] = [
    {
      label: "Tags",
      key: "main",
      children: checkboxes.map(box => ({
        label: <Checkbox onChange={handleCheckbox(box)}>{box}</Checkbox>,
        key: box
      }))
    }
  ];

  return (
    <Sider>
      <Menu 
        items={items2}
        mode="inline"
        style={{
          height: "100%",
          minHeight: "300px"
        }}
      />
      {boxes}
    </Sider>
  );
};

export default Sidebar;