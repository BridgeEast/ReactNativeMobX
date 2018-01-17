import mobx, { observable } from 'mobx';

mobx.useStrict(true);
export default class UiState {
  @observable language = 'zh_CN';
}
