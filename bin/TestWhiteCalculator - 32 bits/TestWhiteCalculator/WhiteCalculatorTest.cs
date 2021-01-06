// <copyright file="WhiteCalculatorTest.cs" >
//   Copyright @ Md. jawed. All rights reserved.
// </copyright>
// <summary>
//  Demo project to Automate Calculator using White Framework.
// </summary>
// --------------------------------------------------------------------------------------------------------------------
using System;

//using Windows.Base;

using System.Threading;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Windows.Automation;
using TestStack.White.Factory;

using TestStack.White.InputDevices;

using TestStack.White.UIItems;

using TestStack.White.UIItems.WindowItems;





using TestStack.White;
using TestStack.White.UIItems.Finders;
using TestStack.White.UIItems.MenuItems;

//using TestStack.White.UIItems.WPFUIItems;


namespace TestWhiteCalculator
{
    /// <summary>
    /// Automate the Calculator basic funionality using White
    /// </summary>
    public class WhiteCalculatorTest
    {
        // source exe file path. here it is calculator exe path
        private const string ExeSourceFile = @"c:\Program Files\Cryptomathic\CKMS Demonstration\ckms.client.exe";
        //Global Variable to for Application launch
        private static TestStack.White.Application _application;
        //Global variable to get the Main window of calculator from application.
        private static TestStack.White.UIItems.WindowItems.Window _mainWindow;

        private static bool isInitialised = false;

        public static PopUpMenu GetCurrentPopUpMenu()
        {
            List<Window> windows = WindowFactory.Desktop.DesktopWindows();
            foreach (var w in windows)
            {
                // if (w.Name == "") return w.Popup;



                if (w.Popup != null) { Console.Out.WriteLine(w.Popup.Id); }

                Console.Out.WriteLine(w.Title);



            }

            return null;
        }


        public static bool Init()
        {

            if (!isInitialised)
            {
                try
                {


                    //strat process for the above exe file location
                    var psi = new ProcessStartInfo(ExeSourceFile);
                    // launch the process through white application
                    _application = TestStack.White.Application.AttachOrLaunch(psi);


                    _mainWindow = _application.GetWindow(SearchCriteria.ByText(@"CKMS Client (using simulated PIN pads)"), InitializeOption.NoCache);

                    CMKSLogOffAll();

                    for (int i = 0; i < 4; i++)
                    {
                        CMKSLogon();
                    }


                }

                catch (Exception)
                {
                    return
                        false;


                }
                isInitialised = true;


            }

            return true;

        }




        public static void manageKeys(String keyName)
        {

            //assuming all correct, enter Keys menu

            TestStack.White.UIItems.Button keysButton = _mainWindow.Get<TestStack.White.UIItems.Button>("keysButton");

            keysButton.Click();

            //   keysButton = _mainWindow.Get<TestStack.White.UIItems.Button>("filterButton");

            //           keysButton.Click();


            //Access Keys window

            _mainWindow = _application.GetWindow(SearchCriteria.ByText(@"CKMS Client (using simulated PIN pads)"), InitializeOption.NoCache);
            TestStack.White.UIItems.WindowItems.Window _keyWindow = _application.GetWindow(SearchCriteria.ByText(@"Key Manager - Key Status 'All keys awaiting action'"), InitializeOption.NoCache);

            TestStack.White.UIItems.WindowItems.Window olm = _application.GetWindow(SearchCriteria.ByAutomationId(@"ObjectListManager"), InitializeOption.NoCache);

            var output = olm.Get<Panel>(SearchCriteria.ByAutomationId("selectorPanel"));

            ListView list = output.Get<ListView>(SearchCriteria.ByAutomationId("selectorUser1"));

            list.Rows.ForEach(p =>
            {
                //  if (p.Cells[0].Name == "Name")
                //  {
                p.Cells.ForEach(c =>
                {
                    if (c.Text.ToString() == keyName)
                    {
                        c.RightClick();


                        // update key
                        for (int j = 0; j < 3; j++)
                        {
                            Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);
                            Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);

                        }

                        //renew key

                        Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);
                        Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);


                        // approve key

                        c.RightClick();

                        for (int j = 0; j < 2; j++)
                        {
                            Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);
                            Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);
                        }

                        Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);
                        Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);
                    
                        // export key

                        c.RightClick();

                        for (int j = 0; j < 10; j++)
                        {
                            Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);
                            Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);


                        }

                        Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);
                        Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);

                    }

                });
                //  }

            });

            TestStack.White.UIItems.WindowItems.Window _exportWindow1 = _keyWindow.ModalWindow("Export to File"); //modal window with title "child"

            TestStack.White.UIItems.Button okBtnExport = _exportWindow1.Get<TestStack.White.UIItems.Button>("button1");
            okBtnExport.Click();


            TestStack.White.UIItems.Button browsBtnExport = _keyWindow.Get<TestStack.White.UIItems.Button>("buttonBrowse");
            browsBtnExport.Click();
            TestStack.White.UIItems.ListBoxItems.ListBox listBox = _keyWindow.Get<TestStack.White.UIItems.ListBoxItems.ListBox>("ListBox");


              listBox.SetValue(System.IO.File.Create("Test.key"));




            TestStack.White.UIItems.WindowItems.Window _exportWindow2 = _keyWindow.ModalWindow("Export encrypted key(s)"); //modal window with title "child"


            _exportWindow2.Items.ForEach(t =>
            {
                Console.WriteLine("BOO: " + t.ToString());
                if (t.ToString() == "OK")
                {
                    t.Click();
                }
            });

            /*
                if (list.Items.Contains(keyName))
                       
                {


                      //    int Keyindex = list.Items.FindIndex(0, x => x == keyName);

                      //     list.Rows.ElementAt(Keyindex).RightClick();


                         //  Console.Out.WriteLine(Keyindex);

                    ///
                    /// THIS IS TO OVERCOME STUPID BUG IN AUTOMATION LIBRARY
          //                 Keyindex -= Keyindex;
                           ListViewRow lvr = list.Row("Name", keyName);
                           lvr.Cells[0].RightClick();



                    //       var autoelement = list.GetElement(SearchCriteria.ByText(keyName));




                    
                   //     list.Rows[Keyindex].Cells[0].RightClick();


                           //use down arrow 3 times to select the correct menu item

                           for (int j = 0; j < 3; j++)
                           {
                               Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);
                               Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.DOWN);


                           }



                           //renew key

                           Keyboard.Instance.HoldKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);
                           Keyboard.Instance.LeaveKey(TestStack.White.WindowsAPI.KeyboardInput.SpecialKeys.RETURN);





                           // (re) export key




















                           //                    var cp = lvr.ClickablePoint;



                           //ClickablePoint cp = lvr.ClickablePoint;


                           //       list.SelectedRows.Get(Keyindex).RightClick();

                           //Thread.Sleep(2000);







                           //olm.Get<Window>(SearchCriteria.ByClassName("Popup"));


                           //olm.ModalWindow(SearchCriteria.ByClassName("#32768"));


                           //                           var pop= olm.Get<PopUpMenu>(SearchCriteria.ByText(@"Context"));


                        //   var pop = olm.Get<PopUpMenu>(SearchCriteria.ByClassName(@"#32768"));


                           //var pop = olm.Get<Menu>(SearchCriteria.ByControlType(ControlType.Menu));


                           //foreach (var thing in pop.ChildMenus)
                           //{


                           //    Console.Out.WriteLine(thing.ToString());

//                           //}
//                        PopUpMenu pop = GetCurrentPopUpMenu();

                           
                          


//                           //var popups = WindowFactory.Desktop.FindWindow(_application.Process, x => x == @"Context", InitializeOption.NoCache, null);

//                           //ControlType.Menu       

////                      var poppy =      WindowFactory.Desktop.Get<Menu>(SearchCriteria.ByText("Conext"));

                           
//                           //  olm.HasPopup()

//                        foreach (var thing in pop.Items)

//                        //foreach (var thing in popups.Popup.Items)
//                        {



//                            Console.Out.WriteLine(thing.Id);


//                            //  thing.Click();

//                        }

                           //                          pop.Item("Add Child").Click();

                           //                    PopUpMenu popupMenu =
                           //      Menu level2Menu = pop.Item("Root", "TMK_TEST_001", "Level2");
                           //    level2Menu = pop.ItemBy(SearchCriteria.ByText("Root"), SearchCriteria.ByText("Level1"),// SearchCriteria.ByText("TMK_TEST_001")); //can use any other search criteria as well.

                           ////MENU BAR
                           //MenuBar menuBar = olm.MenuBar;
                           //Menu level2Menu = menuBar.MenuItem("Root", "Level1", "TMK_TEST_001");
                           //level2Menu = menuBar.MenuItemBy(SearchCriteria.ByText("Root"), SearchCriteria.ByText("Level1"), SearchCriteria.ByText("TMK_TEST_001")); //can use any other search criteria as well.

                           //                    level2Menu.Click();






                           //   if (output.HasPopup())
                           {


                               //                   olm.PopupMenu("Root").Click();


                               //if (pop != null)
                               //{
                               //    pop.Items[0].Click();

                               //}



                           }




                       }*/


        }




        /// <summary>
        /// Main method to automate calculator
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {

            Init();

            //   manageKeys(@"ATM1_POSTILION_TMK_001");

            Console.ReadKey();
            //  manageKeys(@"2");

            manageKeys(@"1");

        }


        private static void Die()
        {


            // //Dispose the main window
            _mainWindow.Dispose();
            //Dispose the application
            _application.Dispose();


        }


        private static void CMKSLogOffAll()
        {


            //Click on Help at Menu item
            var file = _mainWindow.Get<TestStack.White.UIItems.MenuItems.Menu>(SearchCriteria.ByText("File"));
            file.Click();
            //Click on View Help guide to open new window from menu bar
            var simpinpads = _mainWindow.Get<TestStack.White.UIItems.MenuItems.Menu>(SearchCriteria.ByText(@"Simulated PIN pads"));

            simpinpads.Click();

            var logoff = _mainWindow.Get<TestStack.White.UIItems.MenuItems.Menu>(SearchCriteria.ByText("Logoff All"));

            logoff.Click();

        }







        private static void CMKSLogon()
        {

            //Click on Help at Menu item
            var file = _mainWindow.Get<TestStack.White.UIItems.MenuItems.Menu>(SearchCriteria.ByText("File"));
            file.Click();
            //Click on View Help guide to open new window from menu bar
            var simpinpads = _mainWindow.Get<TestStack.White.UIItems.MenuItems.Menu>(SearchCriteria.ByText(@"Simulated PIN pads"));

            simpinpads.Click();

            var logon = _mainWindow.Get<TestStack.White.UIItems.MenuItems.Menu>(SearchCriteria.ByText("Logon..."));

            logon.Click();


            //            Window mainWindow = application.GetWindow("main");
            List<TestStack.White.UIItems.WindowItems.Window> modalWindows = _mainWindow.ModalWindows(); //list of all the modal windows belong to the window.
            TestStack.White.UIItems.WindowItems.Window _logonWindow = _mainWindow.ModalWindow("Simulated Logon"); //modal window with title "child"

            TestStack.White.UIItems.Button btn1 = _logonWindow.Get<TestStack.White.UIItems.Button>("btnOK");

            btn1.Click();


        }







    }
}
