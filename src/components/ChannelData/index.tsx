import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Dino"
            date="19/02/2020"
            content="Ah, ok."
          />
        ))}

        <ChannelMessage
          author="Yunna"
          date="19/02/2020"
          content={
            <>
              <Mention>@Dino</Mention> você é incrível!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #general" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
