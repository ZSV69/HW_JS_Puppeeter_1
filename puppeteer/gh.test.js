
let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },15000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 20000);
});


describe("Github test page Packages", () => {


  test("The h1 header content'", async () => {
    page1 = await browser.newPage();
    await page1.goto("https://github.com/features/packages");
    const firstLink = await page1.$("header div div a");
    await firstLink.click();
    await page1.waitForSelector('h1');
    const title2 = await page1.title();
    expect(title2).toEqual('GitHub Packages: Your packages, at home with their code · GitHub');
  }, 20000)

  test("Explore GitHub Actions", async () => {
    const btnSelector = ".link-mktg.f3-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    })
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Explore GitHub Actions ")
  }, 25000);

  test("Get Started", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg";
    await page1.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 30000);
})
