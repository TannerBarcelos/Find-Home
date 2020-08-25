const express = require("express");
const router = express.Router();

const puppeteer = require("puppeteer");

/**
 * @param     cityname => will accept a cityname param and send that request to the scraper and then return, as json, the results
 * @returns   apartment listings by city wildcard
 */
router.get("/:city_name", async (req, res) => {
  // Pull out the city that was requested -> in react we will need to use match ?
  const { city_name } = req.params;

  // perform the scrape
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.zillow.com/homes/${city_name},-CA_rb/`);

  const X_PATH = "/html/body/div[1]/div[5]/div/div[1]/div/div[1]/ul";
  const [el] = await page.$x(X_PATH);

  res.json({ response: el });
});

module.exports = router;
