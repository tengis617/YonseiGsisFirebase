import { YonseiGsisFirebasePage } from './app.po';

describe('yonsei-gsis-firebase App', function() {
  let page: YonseiGsisFirebasePage;

  beforeEach(() => {
    page = new YonseiGsisFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
