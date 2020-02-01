package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddcustomerPage {
	
	
	public WebDriver ldriver;
	
	public AddcustomerPage(WebDriver rdriver){
		ldriver= rdriver;
		PageFactory.initElements(ldriver, this);
	}
		By linkCustomers=By.xpath("/html/body/div[3]/div[2]/div/ul/li[4]/a/span");
		By linkCustomers_Menu=By.xpath("/html/body/div[3]/div[2]/div/ul/li[4]/ul/li[1]/a/span");
		By AddnewCustomer= By.xpath("//a[@class='btn bg-blue']");
		By Email=By.id("Email");
		By Password = By.id("Password");
		By FirstName= By.id("FirstName");
		By LastName= By.id("LastName");
		By Gender= By.id("Gender_Male");
		By DOB= By.id("DateOfBirth");
		By Company = By.id("Company");
		By Tax= By.id("IsTaxExempt");
		By Newsletter = By.name("SelectedNewsletterSubscriptionStoreIds");
		By SelectCustomersRole= By.xpath("//div[@class='k-multiselect-wrap k-floatwrap']");
		By VendaorID=By.id("VendorId");
		By Vendaor1= By.xpath("//option[text()='Vendor 1']");
		By AdminComment= By.id("AdminComment");
		By lstitemAdministrators=By.xpath("//li[contains(text(),'Administrators')]");
		By lstitemRegistered=By.xpath("//li[contains(text(),'Registered')]");
		By lstitemGuests=By.xpath("//li[contains(text(),'Guests')]");
		By lstitemVendors=By.xpath("//li[contains(text(),'Vendors')]");
		By btnSave=By.xpath("//button[@name='save']");

		By drpmgrOfVendor=By.xpath("//*[@id='VendorId']");
		By rdMaleGender=By.id("Gender_Male");
		By rdFeMaleGender=By.id("Gender_Female");
		
		public String getPageTitle(){
			return ldriver.getTitle();
		}
		
				public void clickOnCustomersMenu(){
			ldriver.findElement(linkCustomers).click();
		}


				public void clickOnCustomersMenuItem(){
			ldriver.findElement(linkCustomers_Menu).click();
		}
				public void clickOnAddNew(){
					ldriver.findElement(AddnewCustomer).click();
				}
				public void setEmail(String email){
					ldriver.findElement(Email).sendKeys(email);;
				}

				public void setPassword(String password){
					ldriver.findElement(Password).sendKeys(password);
				}
public void setCustomerRoles(String role) throws InterruptedException{
	if(!role.equals("Vendors")){
		ldriver.findElement(By.xpath("//span[@class='k-icon k-delete']")).click();
	}
	
	ldriver.findElement(SelectCustomersRole).click();
	
	WebElement listitem;
	
	Thread.sleep(3000);
				
	if(role.equals("Administrators"))
	{
		listitem=ldriver.findElement(lstitemAdministrators); 
	}
	else if(role.equals("Guests"))
	{
		listitem=ldriver.findElement(lstitemGuests);
	}
	else if(role.equals("Registered"))
	{
		listitem=ldriver.findElement(lstitemRegistered);
	}
	else if(role.equals("Vendors"))
	{
		listitem=ldriver.findElement(lstitemVendors);
	}
	else
	{
		listitem=ldriver.findElement(lstitemGuests);
	}
				
	listitem.click();
	Thread.sleep(3000);
	/*
	JavascriptExecutor js = (JavascriptExecutor)ldriver;
	js.executeScript("arguments[0].click();", listitem);*/
	

}
public void setManagerOfVendor(String value)
{
	Select drp=new Select(ldriver.findElement(drpmgrOfVendor));
	drp.selectByVisibleText(value);
}

public void setGender(String gender)
{
	if(gender.equals("Male"))
	{
		ldriver.findElement(rdMaleGender).click();
	}
	else if(gender.equals("Female"))
	{
		ldriver.findElement(rdFeMaleGender).click();
	}
	else
	{
		ldriver.findElement(rdMaleGender).click();//Default
	}
	
}

public void setFirstName(String fname)
{
	ldriver.findElement(FirstName).sendKeys(fname);
}

public void setLastName(String lname)
{
	ldriver.findElement(LastName).sendKeys(lname);
}

public void setDob(String dob)
{ldriver.findElement(DOB).click();
	ldriver.findElement(DOB).sendKeys(dob);
}

public void setCompanyName(String comname)
{
	ldriver.findElement(Company).sendKeys(comname);
}

public void setAdminContent(String content)
{
	ldriver.findElement(AdminComment).sendKeys(content);
}

public void clickOnSave()
{
	ldriver.findElement(btnSave).click();
}
	}
	
	
