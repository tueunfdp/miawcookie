import PrismFightersInformation from "@/protocol/network/types/PrismFightersInformation";
import Message from "@/protocol/network/messages/Message";

export default class PrismsInfoValidMessage extends Message {
  public fights: PrismFightersInformation[];

  constructor(fights: PrismFightersInformation[]) {
    super();
    this.fights = fights;

  }
}
