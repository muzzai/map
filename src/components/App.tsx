import React from 'react';
import OfficeMap from './OfficeMap';
import SearchUser from './SearchUser';
import { Layout } from 'antd';

const { Header, Footer, Content, Sider } = Layout
class App extends React.Component <any, any> {

  render() {
    return (
      <div>
        <Layout>
          <Sider
            style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}
            >
              <div className="logo"  style={{paddingTop: '10pxs'}} />
              <div>
              <SearchUser />
              </div>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
              <Header title={'YOYOYOYOYO'} className="site-layout-background" style={{ padding: 0 }}></Header>
              <Content style={{ margin: 'auto', overflow: 'initial', position: 'relative'}}  >
                <OfficeMap />
              </Content>
            </Layout>
        </Layout>
      </div>
    )
  }
}

export default App;