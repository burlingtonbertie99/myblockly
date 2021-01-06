
using System;

using TestWhiteCalculator;

namespace Tweet.WebService
{
    using System.Collections.Generic; 
    using TweetBL;

    // NOTE: In order to launch WCF Test Client for testing this service, please select KeyService.svc or KeyService.svc.cs at the Solution Explorer and start debugging.
    public class KeyService : IKeyService
    {
        private TweetBL.KeyService _businessLayerKeyService;

        public KeyService()
        {
            _businessLayerKeyService = new TweetBL.KeyService();

            //wct = new WhiteCalculatorTest();

            //wct.Init();

        }


        private static WhiteCalculatorTest wct;

        public bool isInitialised()
        {
            //check has logged on


            // wct = new WhiteCalculatorTest();

            //As long as no exceptions - we're good

            return WhiteCalculatorTest.Init();

        }


        public bool updateKeyValue(String keyName)
        {
                
            //check if key name exists

            WhiteCalculatorTest.manageKeys(keyName);

            return false;

        }

    //    public IList<Tweet> GetTweets()
    //    {
    //        return _businessLayerKeyService.GetTweets();
    //    }

    //    public Tweet GetTweetByID(int tweetId)
    //    {
    //        return _businessLayerKeyService.GetTweetById(tweetId);
    //    }

    //    public void CreateTweet(Tweet newTweet)
    //    {
    //        _businessLayerKeyService.CreateTweet(newTweet);
    //    }

    //    public void UpdateTweet(Tweet updateTweet)
    //    {
    //        _businessLayerKeyService.UpdateTweet(updateTweet);
    //    }

    //    public void DeleteTweet(int deleteTweetId)
    //    {
    //        _businessLayerKeyService.DeleteTweet(deleteTweetId);
    //    }
    }
}
