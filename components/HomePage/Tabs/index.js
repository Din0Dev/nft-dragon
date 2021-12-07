import React from "react";
import { Tabs } from "antd";
import CardItem from "../../CardItem";
import Image from 'next/image'

const { TabPane } = Tabs;

const TabsLayout = (props) => {
  return (
    <Tabs className="tabs-layout" defaultActiveKey="1" >
      <TabPane tab="Marketplace" key="1">
        <div className="tabs-layout-grid">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className="tabs-layout-grid">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>

        <div className="flex justify-center mt-5">
          <button style={{border: 'none', border: '1px solid', margin: '0.5rem', paddingRight: '2rem', paddingLeft: '2rem', fontSize: '16px'}} className="flex items-center rounded-xl justify-center p-2 h-7 bg-primary hover:opacity-80 text-blue4 bg-transparent-important border-1 border-blue2 px-8 text-sm-md h-8">
            View more <Image src="icon/next.svg" alt=""/>
          </button>
          </div>
      </TabPane>
      <TabPane tab="Genesis" key="2">
          <p>check</p>
      </TabPane>
    </Tabs>
  );
};

export default TabsLayout;
