package org.example;

import org.testng.Assert;
import org.testng.annotations.*;

public class TestB {

    @AfterMethod
    public void despues()
    {
        System.out.println("Despues");
//        Assert.assertTrue(false);
    }
    @Test
    public void principal()
    {
        System.out.println("Principal");
    }
}
