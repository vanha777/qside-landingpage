"use client"
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const ChatBox = () => {

  return (
    <FacebookProvider appId="869650387908902" chatSupport>
      <CustomChat pageId="379126341958516" minimized={true}/>
    </FacebookProvider>    
  );
}

export default ChatBox