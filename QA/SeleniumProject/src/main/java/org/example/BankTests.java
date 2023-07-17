package org.example;

import com.beust.ah.A;
import javafx.scene.Group;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class BankTests {


    static WebDriver driver;

    static String userName= "solera@solera.com";
    static String password= "bootcamp5";
    static Actions act ;


    @BeforeClass(alwaysRun = true)
    public static void Initialize()
    {
        driver = new ChromeDriver();

        driver.get("http://localhost:5174/");
        driver.manage().window().maximize();

        act= new Actions(driver);
    }
    @AfterMethod(groups = {"FailLogIn","TrueLogin"})
    private static void TryToLogIn()
    {
        driver.findElement(By.cssSelector("button[class=\"sign-in-button\"]")).click();
    }
    static WebElement usernameElement ;
    static WebElement passwordElement;

    @BeforeMethod(groups = {"FailLogIn","TrueLogin"} )
    private static void EmptySpaces()
    {
        usernameElement = driver.findElement(By.id("username")) ;
        usernameElement.clear();
        passwordElement = driver.findElement(By.id("password"));
        passwordElement.clear();
    }


    @Test(groups = {"FailLogIn"}, priority = 0)
    public static  void LogIn_WrongPasswordAndUserName_FailLogIn()
    {


        usernameElement.sendKeys("fakeuser");

        act.sendKeys(Keys.TAB).perform();



        passwordElement.sendKeys("fakepassword");

       // TryToLogIn();

    }

    @Test(groups = {"FailLogIn"}, priority = 1)
    public static  void LogIn_WrongPassword_FailLogIn()
    {
        driver.findElement(By.id("username")).sendKeys(userName);
        act.sendKeys(Keys.TAB).perform();
        driver.findElement(By.id("password")).sendKeys("fakepassword");

      //  TryToLogIn();

    }
    @Test(groups = {"FailLogIn"}, priority = 2)
    public static  void LogIn_WrongUserName_FailLogIn()
    {
        driver.findElement(By.id("username")).sendKeys("fakeuser");

        act.sendKeys(Keys.TAB).perform();

        driver.findElement(By.id("password")).sendKeys(password);

      //  TryToLogIn();
    }

    @Test (groups = {"TrueLogIn"}, priority = 3)
    public static  void LogIn_TrueUserNameAdnPassword_SuccesfulLogIn()
    {
        driver.findElement(By.id("username")).sendKeys(userName);

        act.sendKeys(Keys.TAB).perform();

        driver.findElement(By.id("password")).sendKeys(password);

        //TryToLogIn();
    }




}
