import { ClientpanelPage } from './app.po';

describe('client_panel App', () => {
    let Page : ClientpanelPage;
    
    beforeEach(() => {
        page = new ClientpanelPage();
    });
    
    it('should display welcome message', () = {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome');
    });
});