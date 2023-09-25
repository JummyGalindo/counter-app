import React, { useState } from "react";
import { Button, Space, Tooltip } from "antd";
import {
  DownloadOutlined,
  SearchOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
  FacebookFilled,
} from "@ant-design/icons";

export const Buttons = () => {
  return (
    <>
      <Space wrap>
        <div>
          <Button type="primary">Primary button</Button>
        </div>
        <div>
          <Button> Default</Button>
        </div>
        <div>
          <Button type="dashed">Dashed button</Button>
        </div>
        <div>
          <Button
            type="text"
            style={{ color: "white", borderColor: "1px solid white" }}>
            Text button
          </Button>
        </div>
        <div>
          <Button type="link">Link button</Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} />
        </div>
        <div>
          <Button
            type="primary"
            shape="circle"
            icon={<DownloadOutlined />}
            size="large"
          />
        </div>
        <div>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
          />
        </div>
        <div>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large">
            Download
          </Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} size="large">
            Download
          </Button>
        </div>
      </Space>
      <Space direction="vertical">
        <Space wrap>
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Space>
        <Space wrap>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </Space>
        <Space wrap>
          <Tooltip title="git">
            <Button type="dashed" shape="circle" icon={<GithubOutlined />} />
          </Tooltip>
          <Tooltip title="git">
            <Button type="dashed" shape="circle" icon={<LinkedinOutlined />} />
          </Tooltip>
          <Tooltip title="git">
            <Button
              type="dashed"
              shape="circle"
              icon={<GooglePlusOutlined />}
            />
          </Tooltip>
          <Tooltip title="git">
            <Button type="dashed" shape="circle" icon={<FacebookOutlined />} />
          </Tooltip>
          <Tooltip title="git">
            <Button type="dashed" shape="circle" icon={<FacebookFilled />} />
          </Tooltip>
        </Space>
      </Space>
      <Space direction="vertical"></Space>
    </>
  );
};
