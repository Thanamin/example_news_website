import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const menuItems = [
  { key: "1", title: "เรื่องฮอต", link: "/" },
  { key: "2", title: "ข่าว", link: "/news" },
  { key: "3", title: "ข่าวบันเทิง", link: "/entertainment" },
  { key: "4", title: "กีฬา", link: "/sports" },
  { key: "5", title: "รถยนต์", link: "/cars" },
  { key: "6", title: "ไอที", link: "/it" },
  { key: "7", title: "เศรษฐกิจ", link: "/economy" },
  { key: "8", title: "เที่ยว-กิน", link: "/travel-food" },
  { key: "9", title: "เพลง", link: "/music" },
  { key: "10", title: "หนัง-ละคร", link: "/movies-series" },
  { key: "11", title: "คลิป", link: "/clips" },
];

const Navbar = (props: { selectkey?: number }) => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={props.selectkey ? [`${props.selectkey}`] : ["1"]}>
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link href={item.link}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Navbar;
