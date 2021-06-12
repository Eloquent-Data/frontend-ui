import { EloquentDataDashboard } from './app.po';

describe('material-dashboard-angular App', () => {
  let page: EloquentDataDashboard;

  beforeEach(() => {
    page = new EloquentDataDashboard();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
