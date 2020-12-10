import { Angular4AuthentPage } from './app.po';

describe('angular4-authent App', function() {
  let page: Angular4AuthentPage;

  beforeEach(() => {
    page = new Angular4AuthentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
