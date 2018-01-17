import UiState from './UiState';
import User from './User';
import StoryStore from './StoryStore';

class RootStore {
  constructor() {
    this.uiState = new UiState(this);
    this.user = new User(this);
    this.storyStore = new StoryStore(this);
  }
}

export default new RootStore();

