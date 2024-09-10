"use client"
import React, { Component} from 'react';
import { FacebookProvider, CustomChat, MessageUs } from 'react-facebook';

const ChatBox = () => {

  return (
    <>
    <FacebookProvider appId="869650387908902" chatSupport>
      <CustomChat pageId="379126341958516" minimized={true}/>
      <MessageUs messengerAppId="379126341958516" pageId="379126341958516" />
    </FacebookProvider>
    </>
     
  );
}

export default ChatBox