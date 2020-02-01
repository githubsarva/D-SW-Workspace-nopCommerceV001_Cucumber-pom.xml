package stepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Logger;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import cucumber.api.java.en_au.ButattheendofthedayIreckon;

import org.apache.log4j.PropertyConfigurator;
import pageObjects.AddcustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;



public class Steps extends BaseClass {
	
    @Before
	public void setup() throws IOException, InterruptedException{
    	
    	configProp = new Properties();
    	FileInputStream configPropfile=new FileInputStream("config.properties");
    	configProp.load(configPropfile);
    	
    	logger=logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("Log4j.properties");
		String br=configProp.getProperty("browser");
		if(br.equals("chrome")){
			
		System.setProperty("webdriver.chrome.driver",configProp.getProperty("chromepath"));
		
		
		driver = new ChromeDriver();
		}else if(br.equals("firefox")){
			System.setProperty("webdriver.gecko.driver",configProp.getProperty("firefoxpath"));
			driver = new FirefoxDriver();
		}else if(br.equals("ie")){
Thread.sleep(3000);
			System.setProperty("webdriver.ie.driver",configProp.getProperty("iepath"));
			driver = new InternetExplorerDriver();
		}
		logger.info("******Opening Browsers******");
		driver.manage().window().maximize();
		
	}
	
	@Given("^User Launch Chrome browser$")
	public void user_Launch_Chrome_browser()  {
		lp=new LoginPage(driver);
	}


	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url)  {
		logger.info("******Opening URL******");
		driver.get(url);
	    
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String password)  {
		
		logger.info("******Providing Username and Password******");
		lp.enterUsername(email);
	    lp.enterPassword(password);
	    
	}

	

	@And("^Click on login$")
	public void click_on_login() throws InterruptedException {
		logger.info("******Click on Sign******");
	    lp.clikLogin();
	    Thread.sleep(3000);
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String title) throws InterruptedException  {
Thread.sleep(3000);
		if(driver.getPageSource().contains("Login was unsuccessful.")){
	
			driver.close();
			logger.info("******Login Failed******");
			Assert.assertTrue(false);
		}else{
			logger.info("******Login Passed******");
			Assert.assertEquals(title, driver.getTitle());
		}
		
	}

	@When("^User click on logout link$")
	public void user_click_on_logout_link()  {
		logger.info("******Click on Logout******");
lp.clicklogout();
	}

	@Then("^close browser$")
	public void close_browser()  {
		logger.info("******Close the browser******");
	    driver.close();
	}

//Customers page
	
	@Then("^User can view Dashboard$")
	public void user_can_view_Dashboard()  {
		addCust= new AddcustomerPage(driver);
		
		Assert.assertEquals("Dashboard / nopCommerce administration",addCust.getPageTitle() );
		System.out.println(addCust.getPageTitle());
	}

	@When("^User click om customers Menu$")
	public void user_click_om_customers_Menu()  {
	    addCust.clickOnCustomersMenu();
	}

	@When("^click on customers Menu Item$")
	public void click_on_customers_Menu_Item() throws InterruptedException  {
		Thread.sleep(3000);
	   addCust.clickOnCustomersMenuItem();
	}

	@When("^click on Add new button$")
	public void click_on_Add_new_button() throws InterruptedException  {
	   addCust.clickOnAddNew();
	   Thread.sleep(3000);
	   }

	@Then("^User can view Add new customer page$")
	public void user_can_view_Add_new_customer_page() {
	    Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());
	}

	@When("^User enter customer info$")
	public void user_enter_customer_info() throws InterruptedException  {
		
		String email=randomestring()+"@gmail.com";
		addCust.setEmail(email);
		addCust.setPassword("test123");
		Thread.sleep(3000);
		addCust.setCustomerRoles("Guests");
		Thread.sleep(3000);
		addCust.setManagerOfVendor("Vendor 2");
		addCust.setGender("Male");
		addCust.setFirstName("Pavan");
		addCust.setLastName("Kumar");
		addCust.setDob("05/13/1990");
		addCust.setCompanyName("Peopleone");
		addCust.setAdminContent("Testing purpose");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^Click on Save button$")
	public void click_on_Save_button() throws InterruptedException  {
	    addCust.clickOnSave();
	    Thread.sleep(3000);
	    logger.info("*****New Customer added successfully******");
	}

	@Then("^User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String arg1)  {
	    Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully"));
	}
	@When("^Enter customer Email$")
	public void enter_customer_Email()  {
		searchCust = new SearchCustomerPage(driver);
		searchCust.setEmail("victoria_victoria@nopCommerce.com");
	}

	@When("^Click on search button$")
	public void click_on_search_button() throws InterruptedException{
		
		searchCust.clickSearch();
		Thread.sleep(3000);
		logger.info("******Searching the customer by email******");
	}

	@Then("^User should found Email in the Search table$")
	public void user_should_found_Email_in_the_Search_table() {
		
		boolean status = searchCust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
		Assert.assertEquals(true, status);
		
		
		
		
		
		
	}
	//Search customer by name

@When("^Enter customer FirstName$")
public void enter_customer_FirstName() {
	
	searchCust = new SearchCustomerPage(driver);
	searchCust.setFirstName("Victoria");
}

@When("^Enter customer LastName$")
public void enter_customer_LastName() throws InterruptedException{
	Thread.sleep(3000);
	searchCust.setLastName("Terces");
}

@Then("^User should found Name in the Search table$")
public void user_should_found_Name_in_the_Search_table() {
	searchCust.searchCustomerByName("Victoria Terces");
	logger.info("******Search the customer by name******");
}

}
