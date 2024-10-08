// @import styles
import {
  BotContainer,
  BotContent,
  BotImageItem,
  BotItems,
  BotMessageItem,
} from "./bot.styled";
// @import resources
import BotMessageSVG from "../../assets/svgs/BotMessageSVG";
import avatar from "../../assets/images/avatar.png";

const Bot = () => {
  return (
    <BotContainer>
      <BotContent>
        <BotItems>
          <BotMessageItem
            href={"https://discord.gg/DKBJZtG9"}
            target={"_blank"}
          >
            <span>{"Join our Discord now!"}</span>
            <BotMessageSVG />
          </BotMessageItem>
          <BotImageItem
            href={"https://discord.gg/DKBJZtG9"}
            target={"_blank"}
          >
            <img src={avatar} alt={"Claim your Mekabots"} />
          </BotImageItem>
        </BotItems>
      </BotContent>
    </BotContainer>
  );
};

export default Bot;
