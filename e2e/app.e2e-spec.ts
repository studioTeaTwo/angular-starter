import { AngularStarterPage } from './app.po';

describe('angular-starter App', () => {
  let page: AngularStarterPage;

  beforeEach(() => {
    page = new AngularStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
