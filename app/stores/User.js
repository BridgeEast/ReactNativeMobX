import mobx, { observable, action } from 'mobx';

mobx.useStrict(true);

export default class User {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable userName = 'Jade';

  @action setUserName(data) {
    this.userName = data;
  }
}
