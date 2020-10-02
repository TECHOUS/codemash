#include<iostream.h>
#include<algorithm>
using namespace std;
/*
problem link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

*/

long int getMaximum (vector <int> & candies) {
        long int max = 0;
        
        for(int i = 0 ; i < candies.size() ; i++) {
            if(candies[i] > max) {
                max = candies[i];
            }
        }
        
        return max;
    }
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<pair <int, int>> storeCandyValues;
        map<int,int> :: iterator it;
        vector<bool> flaggedCandies;
        flaggedCandies.reserve(candies.size());
        long int largestNumber = getMaximum(candies);
        for(int i = 0 ; i < candies.size() ; ++i) {
            storeCandyValues.push_back(make_pair(candies[i], candies[i] + extraCandies));
        }
        
        for(int i = 0; i < candies.size() ; i++) {
            
            if(storeCandyValues[i].second >= largestNumber ) {
                flaggedCandies.push_back(true);
            } else {
                flaggedCandies.push_back(false);
            }
        }
        return flaggedCandies ;
        
    }