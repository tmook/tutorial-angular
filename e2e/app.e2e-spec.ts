import { TutorialAngularPage } from './app.po';

describe('tutorial-angular App', () => {
  let page: TutorialAngularPage;

  beforeEach(() => {
    page = new TutorialAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
