import Account from "@/account";
import ScriptAction, {
  ScriptActionResults
} from "@/scripts/actions/ScriptAction";

export default class StorageGetAllItemsAction extends ScriptAction {
  public _name: string = "StorageGetAllItemsAction";

  public async process(account: Account): Promise<ScriptActionResults> {
    if (account.game.storage.getAllItems()) {
      return ScriptAction.processingResult();
    }
    return ScriptAction.doneResult();
  }
}
