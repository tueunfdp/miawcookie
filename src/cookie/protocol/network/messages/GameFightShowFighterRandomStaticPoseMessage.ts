import GameFightFighterInformations from "@/protocol/network/types/GameFightFighterInformations";
import GameFightShowFighterMessage from "@/protocol/network/messages/GameFightShowFighterMessage";

export default class GameFightShowFighterRandomStaticPoseMessage extends GameFightShowFighterMessage {
  constructor(informations: GameFightFighterInformations) {
    super(informations);

  }
}
