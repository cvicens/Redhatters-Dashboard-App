import { EPODEPODERPPortalPage } from './app.po';

describe('epod-epod-erp-portal App', () => {
  let page: EPODEPODERPPortalPage;

  beforeEach(() => {
    page = new EPODEPODERPPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
