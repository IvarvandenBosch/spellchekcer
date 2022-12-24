# What is Spellchekcer?
Spellchekcer is a React app that works together with spellchecker API, 
it fetches the user input and collects words that might be the correct spelling of that word.

![afbeelding](https://user-images.githubusercontent.com/78146502/209431029-52eada79-e4cf-45b1-bdd2-7ba8644c83b5.png)

## Tutorial on how to set up with your own API key: 

**Step 1:**
Create an account [here](https://apilayer.com/marketplace/spell-api "here") and sign up to a free plan.

**Step 2:**
Once you have signed up there should be an API key waiting for you.  Copy your API code.

**Step 3:**
Head to SpellChekcer.js and locate this line of code (line 11)
```javascript
function Spellchekcer() {
	...
	myHeaders.append("apikey", "YOUR API KEY");
	...
}
```
**Step 4:** 
Replace `"YOUR API KEY"` with the API key you copied.

**Step 5:** 
run the command: `cd spellchekcer` and `npm start`.  Now head over to your browser and see how the code runs!
