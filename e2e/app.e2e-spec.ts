import { ImagekingPage } from './app.po';

describe('imageking App', () => {
  let page: ImagekingPage;

  beforeEach(() => {
    page = new ImagekingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
