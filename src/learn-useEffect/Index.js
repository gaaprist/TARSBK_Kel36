import '../App.css';
import "./Index.css";
import React from "react";
import { Layout } from "antd";
import Card from '../components/Card';
import Link from '../elements/Link';

const { Header, Content} = Layout;

export default function Index() {
    return (
        <div className="App">
          <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
              <div className="Components">
                <Card bgcolor="gray" />
              </div>
            </Content>
          </Layout>
        </div>
      );
    }