import { Bootstrap3Page } from './app.po';

describe('bootstrap3 App', () => {
  let page: Bootstrap3Page;

  beforeEach(() => {
    page = new Bootstrap3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
