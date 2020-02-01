package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver ldriver;
	public LoginPage(WebDriver rdriver){
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(id="Email")
	WebElement enterEmail;
	@FindBy(id="Password")
	WebElement enterPassword;
	@FindBy(xpath="//input[@value='Log in']")
	WebElement clikcLogin;
	
	@FindBy(xpath="/html/body/div[3]/div[1]/div/div/ul/li[3]/a")
	WebElement logout;

	
	public void enterUsername(String uname){
		enterEmail.sendKeys(uname);
	}
	
	public void enterPassword(String pwd){
		enterPassword.sendKeys(pwd);
	}
	
	public void clikLogin(){
		clikcLogin.click();
	}
	
	public void clicklogout()
	{
		logout.click();
	}

}
