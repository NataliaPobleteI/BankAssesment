package org.example;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


import org.junit.jupiter.api.BeforeAll;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.annotations.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import javax.swing.*;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {

    static WebDriver driver ;
    static WebElement element;

    static List<String> userName = new ArrayList<String>();

    static String password ;

    static Actions act ;

    @BeforeClass
    public static void antes() throws IOException {
        driver = new ChromeDriver();
        driver.get("https://www.saucedemo.com/");

       // driver.manage().window().maximize();
        act = new Actions(driver);

               //Read Excell
       File file = new File("C:\\Users\\irene.godoy\\Documents\\Test1.xlsx");
       FileInputStream fs = new FileInputStream(file);


       XSSFWorkbook wb = new XSSFWorkbook(fs);

       XSSFSheet s1 = wb.getSheet("Sheet1");
       //System.out.println(s1.getPhysicalNumberOfRows());

//       XSSFRow r1 = s1.getRow(0);
//       XSSFCell c1 = r1.getCell(0);

        int numRows = s1.getPhysicalNumberOfRows();

        for (int i = 0 ; i < numRows;i++)
        {
            XSSFRow row = s1.getRow(i);
            XSSFCell cell = row.getCell(0);
            userName.add(cell.getStringCellValue());

        }

        password = s1.getRow(0).getCell(1).getStringCellValue();

    }
    @AfterMethod
    public static void despues()
    {
//        element.submit();
//        driver.navigate().back();
    }
    @Test(priority = 0)
    public void CorrectRegister()
    {
//          Por findElement
//        element = driver.findElement(By.id("user-name"));
//        element.sendKeys(userName.get(0));
//
//        element = driver.findElement(By.id("password"));
//        element.sendKeys(password);
//
//
//        element = driver.findElement(By.id("login-button"));
//        element.click();


//                      Por Keys
        driver.findElement(By.id("user-name")).sendKeys(userName.get(0));



        act.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTROL).build().perform();
        act.sendKeys(Keys.TAB).perform();
        act.sendKeys(password).perform();

        act.sendKeys(Keys.ENTER).perform();

    }
    @Test (enabled = false , dependsOnMethods = "ChangeDropdown")
    public void LockOutRegister()
    {

        element = driver.findElement(By.id("user-name"));
        element.sendKeys(userName.get(1));

        element = driver.findElement(By.id("password"));
        element.sendKeys("secret_sauce");


        element = driver.findElement(By.id("login-button"));
        element.click();

        //Assert.fail();

        //select[data-test="product_sort_container"]
    }

    @Test(dependsOnMethods = "CorrectRegister")
    public void ChangeDropdown() throws InterruptedException {
        WebElement dropElement = driver.findElement(By.cssSelector("select[data-test='product_sort_container']"));
        Select  dropdown = new Select(dropElement);



        List<WebElement> dropdownList = dropdown.getOptions();
        for (WebElement e: dropdownList    )
        {
            System.out.println(e.getText());
        }
        dropdown.selectByIndex(1);

        act.sendKeys(Keys.PAGE_DOWN).perform();

        //Thread.sleep(3000);
        //driver.navigate().back();

    }
//   public static void main(String[] args) throws IOException {
//       //WebDriver driver = new ChromeDriver();
//       //driver.get("http://www.google.com");

//       //driver.manage().window().maximize();
//       //WebElement element = driver.findElement(By.id("W0wltc"));
//       //element.click();

//      ////Search bar
//      // element = driver.findElement(By.id("APjFqb"));
//      // element.sendKeys("udemy");
//      // element.submit();

//       ////Enter into apps
//       //element = driver.findElement(By.cssSelector("a[aria-label='Aplicaciones de Google']"));
//       //element.click();
///
//       ////Enter google play
//       //driver.switchTo().frame(driver.findElement(By.name("app")));
//       //element = driver.findElement(By.xpath("//a[@data-pid='78']"));
//       //element.click();
//       //driver.switchTo().defaultContent();

//       //Read Excell
//       File file = new File("C:\\Users\\irene.godoy\\Documents\\Test1.xlsx");
//       FileInputStream fs = new FileInputStream(file);




//       XSSFWorkbook wb = new XSSFWorkbook(fs);

//       XSSFSheet s1 = wb.getSheet("Sheet1");
//       //System.out.println(s1.getPhysicalNumberOfRows());

//       XSSFRow r1 = s1.getRow(0);
//       XSSFCell c1 = r1.getCell(0);

//       c1.setCellValue("pimpumpam");

//       fs.close();

//       //Crating output stream and writing the updated workbook
//       FileOutputStream os = new FileOutputStream(file);
//       wb.write(os);

//      // //Close the workbook and output stream
//      // wb.close();
//       os.close();

//       //System.out.println(c1.getStringCellValue());

//       WebDriver driver = new ChromeDriver();
//       driver.get("http://www.google.com");
//       driver.manage().window().maximize();
//       WebElement element = driver.findElement(By.id("W0wltc"));
//       element.click();

//       element = driver.findElement(By.id("APjFqb"));
//       element.sendKeys(c1.getStringCellValue());
//       element.submit();
//       int numRows = s1.getPhysicalNumberOfRows();

//       //for (int i = 0 ; i < numRows;i++)
//       //{
//       //    XSSFRow row = s1.getRow(i);
//       //    int numColm = row.getPhysicalNumberOfCells();
///
//       //    for (int j = 0; j < numColm; j++)
//       //    {
//       //        XSSFCell cell = row.getCell(j);
//       //        System.out.print(cell.getStringCellValue()+"\t");
//       //    }
//       //    System.out.println();
//       //}
//   }
}