import Account from "@/account";
import ScriptAction, {
  ScriptActionResults
} from "@/scripts/actions/ScriptAction";

export default class StoragePutAllItemsAction extends ScriptAction {
  public _name: string = "StoragePutAllItemsAction";

  public async process(account: Account): Promise<ScriptActionResults> {
    if (account.game.storage.putAllItems()) {
      return ScriptAction.processingResult();
    }
    return ScriptAction.doneResult();
  }
}
