Description: An investment calculator that displays the below fields on basis of certain inputs, taken from the calculator popped up on the screen.
1. Year
2. Investment Value
3. Interest(Year)
4. Total Interest
5. Invested Capital

Investment Calculator logic
/**
 * total interest earned across all the years - 
 * annualData = [{},{},{},{}...]
 * initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment
 * totalInterest = (data.valueEndOfYear - data.annualInvestment * data.year) - initialInvestment
 * totalAmountInvested = data.valueEndOfYear - totalInterest
 * 
 */

 Investment Calculator

 1. when duration is zero - its display message to enter a value greater than zero
 ![alt text](image.png)

 2. when all the values are valid
 ![alt text](image-1.png)
 ![alt text](image-2.png)

 Demo - Codesandbox
 url:

Development
To get a local copy of the code, clone it using git:
```git clone https://github.com/CaptUltron/Investment-Calculator.git```
```cd Investment-Calculator```

Install dependencies:
```npm install```

Now, you can start a local web server by running:
```npm run dev```

and then you can open http://localhost:5173 to view it in the browser.

 