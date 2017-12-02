export default class AffiliateController {
  constructor(authentication, userdata) {
		this.authentication = authentication;
		this.userdata = userdata;
		this.api = 'http://127.0.0.1:5000/';
		this.userCode = this.getUserCode();
	}
	
	getUserCode() {
		return this.authentication.getTokenData('sub');
	}

	getAffiliateData() {
		const affiliateData = this.userdata.getAffiliateData();
		this.paypal = affiliateData.paypal;
		this.usersReferred = affiliateData.users_referred;
		this.profit = affiliateData.profit;
		this.checkout = affiliateData.checkout;
	}
}

AffiliateController.$inject = ['authentication', 'userdata'];



// Maybe needs this if not remove
		// this.textRank = "";
		// this.reward = "";
		// this.userStage = 500;
		// this.level = "level1";

		// var USER_FIRST_PRICE = 500
		// var USER_SECOND_PRICE = 1500
		// var USER_THIRD_PRICE = 3000
		// var USER_FOURTH_PRICE = 6000
		// var USER_FIFTH_PRICE = 10000

		// var Userprofit = this.$rootScope.profit;

		// // Calculate User stage - i know about switch case, next version i will add it. (i know you reading it ;) )
		// if (Userprofit < USER_FIFTH_PRICE)
		// {
		// 	if (Userprofit < USER_FOURTH_PRICE)
		// 	{
		// 		if (Userprofit < USER_THIRD_PRICE)
		// 		{
		// 			if(Userprofit < USER_SECOND_PRICE)
		// 			{
		// 				if(Userprofit < USER_FIRST_PRICE)
		// 				{
		// 					this.userStage = USER_FIRST_PRICE
		// 					this.textRank = "Level 1 - warrior you can rank better! Profit 10%"
		// 					this.level = "Level1"
		// 				}
		// 				else
		// 				{
		// 					this.userStage = USER_SECOND_PRICE
		// 					this.textRank = "Level 2 - amazing! you are on the right way! Profit 15%"
		// 					this.level = "Level2"
		// 				}
		// 			}
		// 			else
		// 			{
		// 				this.userStage = USER_THIRD_PRICE
		// 				this.textRank = "Level 3 - Achivement Unlocked! Professonial! Profit 20%"
		// 				this.level = "Level3"
		// 			}
		// 		}
		// 		else
		// 		{
		// 			this.userStage = USER_FOURTH_PRICE
		// 			this.textRank = "Level 4 - Unbeliveable! Wow ... You are PRO! Profit 25%"
		// 			this.level = "Level4"
		// 		}
		// 	}
		// 	else
		// 	{
		// 		this.userStage = USER_FIFTH_PRICE
		// 		this.textRank = "Level 5 - You are the master! tell me how you did that. Profit 30%"
		// 		this.level = "Level5"
		// 	}
		// }
		// this.reward = "When passing this limit "+ this.userStage + " Get " + this.userStage*0.05 + "$USD as Reword!"
