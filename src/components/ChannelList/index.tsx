import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="general" />
      <ChannelButton channelName="chat" />
      <ChannelButton channelName="billing" />
      <ChannelButton channelName="bot-spam" />
      <ChannelButton channelName="archive" />
      <ChannelButton channelName="docs" />
      <ChannelButton channelName="listinha" />
    </Container>
  );
};

export default ChannelList;
