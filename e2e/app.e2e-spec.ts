import { AppLangPage } from './app.po';

describe('app-lang App', () => {
  let page: AppLangPage;

  beforeEach(() => {
    page = new AppLangPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
