import { AliExpressWebSitePage } from './app.po';

describe('ali-express-web-site App', function() {
  let page: AliExpressWebSitePage;

  beforeEach(() => {
    page = new AliExpressWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
