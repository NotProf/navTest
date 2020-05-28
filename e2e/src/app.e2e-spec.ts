import { AppPage } from './app.po';
import {browser, by, element} from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should be blank', async () => {
    await element(by.css('input[placeholder=\'id\']')).sendKeys(1);
    await element(by.css('input[placeholder=\'name\']')).sendKeys('aaaaa');
    await element(by.css('.ion-color-success')).click();
    while (true) {
      const url = await browser.getCurrentUrl();
      console.log(url);
      if (url.includes('alert')) {
        break;
      }
      browser.sleep(200);
    }
    const text2 = await element(by.css('.hello')).getText();
    expect(text2).toBe('Hello');
  });
});
