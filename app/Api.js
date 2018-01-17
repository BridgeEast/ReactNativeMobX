import HTTP from './utils/HTTP';

export default class Api {
  static init() {
  }

  /**
   * =====================================
   * -----------Story System-----------
   * =====================================
   */
  static fetchStories(): Promise {
    return HTTP.get(
      'http://staging.ahaapp.cn/api/v1/stories'
    );
  }
}
