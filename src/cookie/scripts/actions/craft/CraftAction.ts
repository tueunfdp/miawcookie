import Account from "@/account";
import ScriptAction, {
  ScriptActionResults
} from "@/scripts/actions/ScriptAction";

export default class CraftAction extends ScriptAction {
  public _name: string = "CraftAction";
  public gid: number;
  public qty: number;

  constructor(gid: number, qty: number) {
    super();
    this.gid = gid;
    this.qty = qty;
  }

  public async process(account: Account): Promise<ScriptActionResults> {
    if (
      (await account.game.craft.setRecipe(this.gid)) &&
      (await account.game.craft.setQuantity(this.qty)) &&
      (await account.game.craft.ready())
    ) {
      return ScriptAction.processingResult();
    }
    return ScriptAction.doneResult();
  }
}
