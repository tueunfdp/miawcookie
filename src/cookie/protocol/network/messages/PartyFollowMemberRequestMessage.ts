import AbstractPartyMessage from "@/protocol/network/messages/AbstractPartyMessage";

export default class PartyFollowMemberRequestMessage extends AbstractPartyMessage {
  public playerId: number;

  constructor(partyId = 0, playerId = 0) {
    super(partyId);
    this.playerId = playerId;

  }
}
