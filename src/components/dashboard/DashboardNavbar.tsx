import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const DashboardNavbar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: any;
}) => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#000000",
        backgroundColor: "#ffffff",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        paddingInline: "3px",
        // position:"absolute",
        // top:0,
        // width:"100%",
        // zIndex:100,
      }}
    >
      <section style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />

        {/* <Logo></Logo> */}
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1em",
          fontSize: "1.5rem",
          padding: "10px 10px",
          // background: "blue",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            // background:"white"
            border: "2px solid red",

            borderRadius: "8px",
            padding: "2px 18px",
            fontSize: "1rem",
          }}
        >
         
          <SearchOutlined
            style={{
              padding: "1rem",
              background: "red",
              borderRadius: "50%",
              color: "white",
            }}
          />
          <input
            placeholder="Search"
            style={{
              outline: "none",
              height: "40px",
              padding:"0 24px"
    
            }}
          />
        </div>
        <BellOutlined
          style={{
            padding: "1rem",
            background: "red",
            borderRadius: "50%",
            color: "white",
          }}
        />
        <SettingOutlined
          style={{
            padding: "1rem",
            background: "red",
            borderRadius: "50%",
            color: "white",
          }}
        />
      </section>
    </Header>
  );
};

export default DashboardNavbar;
