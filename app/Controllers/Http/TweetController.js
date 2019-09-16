'use strict'

const Tweet = use('App/Models/Tweet');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tweets
 */
class TweetController {
  /**
   * Show a list of all tweets.
   * GET tweets
   */
  async index () {
    const tweet  = await Tweet.query().with('user').fetch();

    return tweet;
  }

 
  /**
   * Create/save a new tweet.
   * POST tweets     
   */
  async store ({ request,  auth }) {
        
    const data = request.only(['content']);           
    const tweet = await Tweet.create({user_id: auth.user.id,  ...data });    

    return tweet;
  }

  /**
   * Display a single tweet.
   * GET tweets/:id
   */

  async show ({ params }) {        
    const tweet = await Tweet.findOrFail(params.id);
        
    return tweet;
  }


  /**
   * Delete a tweet with id.
   * DELETE tweets/:id
   */
  async destroy ({ params, auth, response}) {
    const tweet = await Tweet.findOrFail(params.id);

    if(tweet.user_id !== auth.user.id){
      return response.status(401);
    }
          
    await tweet.delete();
    
  }
}

module.exports = TweetController
