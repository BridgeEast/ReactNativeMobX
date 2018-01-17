import mobx, { observable, action } from 'mobx';
import Api from './../Api';

mobx.useStrict(true);

export default class StoryStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable stories = [];
  @observable loading = false;
  @observable meta = {
    total: 0,
    page: 1,
    per_page: 10,
  };

  @action
  async fetchStories() {
    this.fetchStart();
    try {
      await Api.fetchStories().then(this.fetchSuccess);
    } catch (error) {
      this.fetchError(error);
    }
  }

  @action.bound fetchStart() {
    this.loading = true;
  }

  @action.bound fetchSuccess(response) {
    this.stories = response.stories;
    this.meta = response.meta;
    this.loading = false;
  }

  @action.bound fetchError(error) {
    this.loading = false;
    console.log(error);
  }
}
